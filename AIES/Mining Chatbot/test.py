import mysql.connector
import spacy
from nltk.corpus import stopwords

# Load the spaCy model for natural language processing
nlp = spacy.load("en_core_web_sm")

"""
    function name: connect_to_database
    function description: Establishes a connection to the MySQL database.
    Parameters:
    - host (str): Database host address.
    - user (str): Username for database authentication.
    - password (str): Password for database authentication.
    - database (str): Name of the database to connect to.
    Return Value:
    - conn (MySQLConnection): MySQL database connection object.
    - cursor (MySQLCursor): Cursor object to execute SQL queries.
"""

def connect_to_database(host, user, password, database):

    conn = mysql.connector.connect(
        host=host,
        user=user,
        password=password,
        database=database,
        charset='utf8mb4',
        collation='utf8mb4_general_ci'
    )
    cursor = conn.cursor()
    return conn, cursor

"""
    function name: extract_keywords
    function description: Extracts keywords from the user query after lemmatization and removing stopwords.
    Parameters:
    - query (str): User input query.
    Return Value:
    - keywords (list): List of lemmatized, non-stopword keywords extracted from the query.
"""

def extract_keywords(query):

    doc = nlp(query)  # Use spaCy for lemmatization
    stop_words = set(stopwords.words('english'))
    keywords = [token.lemma_.lower() for token in doc if token.is_alpha and token.lemma_.lower() not in stop_words]
    return keywords

"""
    function name: search_data
    function description: Searches for relevant information in the MySQL database based on extracted entities from the user query.
    Parameters:
    - user_query (str): User input query.
    - cursor (MySQLCursor): The cursor object to execute SQL queries.
    - max_results (int, optional): Maximum number of results to return. Defaults to 5.
    - target_category (str, optional): Target category to filter results. Defaults to None (no category filtering).
    Return Value:
    - matched_results (list): List of tuples containing matched results (category, title, content).
"""

def search_data(user_query, cursor, max_results=5, target_category=None):

    keywords = extract_keywords(user_query)
    # print("Extracted Keywords:", keywords)
    matched_results = []

    # Build a dynamic SQL query with multiple OR conditions for each keyword
    query_str = f"SELECT category, title, content FROM mining_data WHERE {' OR '.join(['content COLLATE utf8mb4_general_ci LIKE %s'] * len(keywords))}"
    params = ['%' + keyword + '%' for keyword in keywords]

    if target_category:
        query_str += " AND category = %s"
        params.append(target_category)

    # print("SQL Query:", query_str)
    # print("Parameters:", params)

    cursor.execute(query_str, params)
    results = cursor.fetchall()

    for category, title, content in results:
        matched_results.append((category, title, content))

    # Limit the number of results to be displayed
    return matched_results[:max_results]

"""
    function name: display_results
    function description: Displays the matched results in a formatted manner.
    Parameters:
    - results (list): List of tuples containing matched results (category, title, content).
"""

def display_results(results):

    print("-" * 60)
    for result in results:
        category, title, content = result
        print(f"Category: {category.capitalize()}")
        print(f"Title: {title}")
        print(f"Content: {content}")
        print("-" * 60)

def main():
    # Database configuration
    db_host = "localhost"
    db_user = "root"
    db_password = "pandasql"
    db_database = "SIH_Mining_Chatbot"

    # Establish a connection to the MySQL database
    conn, cursor = connect_to_database(db_host, db_user, db_password, db_database)

    print("Welcome to the Mining Industry Chatbot. You can ask questions about mining Acts, Rules, Regulations, Guidelines, Methodology, or Corrigenda. Type 'exit' to quit.")

    while True:
        user_query = input("You: ").strip().lower()

        if user_query.lower() == 'exit':
            print("Chatbot: Goodbye! Have a great day!")
            break

        # Handle greetings and farewells
        if user_query in ['hi', 'hello', 'hey']:
            print("Chatbot: Hello! How can I assist you today?")
            continue
        elif user_query in ['bye', 'goodbye', 'exit']:
            print("Chatbot: Goodbye! If you have more questions in the future, feel free to return.")
            break

        # Determine the target category based on user input
        target_category = None
        if 'acts' in user_query:
            target_category = 'Acts'
        elif 'rules' in user_query:
            target_category = 'Rules'
        elif 'regulations' in user_query:
            target_category = 'Regulations'
        elif 'guidelines' in user_query:
            target_category = 'Guidelines'
        elif 'methodology' in user_query:
            target_category = 'Methodology'
        elif 'corrigenda' in user_query:
            target_category = 'Corrigenda'

        # Search for user query in the specified category
        matched_results = search_data(user_query, cursor, target_category=target_category)

        if matched_results:
            display_results(matched_results)
        else:
            print("Chatbot: I couldn't find any relevant information. Please try asking in a different way or specify a different topic.")

if __name__ == "__main__":
    main()

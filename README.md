# Third Year B.Tech CSE (Core) Mini Projects Repository

## Overview
This repository contains the mini projects undertaken by the third-year Computer Science and Engineering (CSE) students as part of their core curriculum. The projects cover subjects such as Data Structures and Algorithms (DEC), Artificial Intelligence and Expert Systems (AIES), and Full Stack Development (FSD). Each project is accompanied by a detailed report documenting the design, implementation, and evaluation of the respective mini project.

## Group Members
- Harsh Chinchakar
- Ayan Bhaskar
- Sudhish Neelakandan
- Amaan Shaikh

## Project Details

## 1. Data Engineering Concepts (DEC)
### DEC Project: Decision Tree for Heart Disease Prediction

## Objective
Develop a machine learning model to predict heart disease, focusing on minimizing false negatives for healthcare applications.

## Project Overview
- **Dataset:** Utilizing the Heart Disease Dataset from the UCI Machine Learning Repository.
  
- **Exploratory Data Analysis (EDA):**
  - Analyzing the dataset to gain insights into distribution, correlations, and patterns.
  - Leveraging visualizations and statistical measures for a comprehensive understanding.

- **Model Training:**
  - Experimenting with various classification models, emphasizing reduced false negatives.
  - Metrics: Classification matrix, recall, precision, and accuracy.

- **Threshold Optimization:**
  - Investigating and optimizing threshold levels for a balanced sensitivity-specificity trade-off.

- **Model Selection:**
  - Choosing the most suitable model based on experimental results.
  - Decision Tree and Random Forest demonstrating notable accuracy, with Random Forest selected for further validation.

## Technologies Used
- **Programming Language:** Python
- **Libraries and Frameworks:** Scikit-learn, Pandas, Matplotlib, Flask

Report: [Link to the DEC Project Report]

## 2. Artificial Intelligence and Expert Systems (AIES)
### AIES Project: AI Chatbot with NLP
## Objective
The Chatbot with NLP is designed to assist users by extracting meaningful information from a MySQL database based on natural language queries. The primary objectives include providing relevant responses, handling greetings and farewells, and ensuring a user-friendly conversational experience.

## Technologies Used
- **Programming Language:** Python
- **Libraries:** `mysql.connector`, `spacy`, `nltk`
- **Database:** MySQL
- **Natural Language Processing (NLP):** spaCy
- **User Interface:** Command-line interface for direct user interaction

## Functionality

### Database Connection
- Connects to a MySQL database containing information.

### Natural Language Processing
- Utilizes spaCy for natural language processing to extract meaningful keywords from user queries.
- Removes stopwords using the nltk library to enhance the relevance of extracted keywords.

### Search and Display
- Executes SQL queries dynamically based on the extracted keywords.
- Displays matched results, including category, title, and content, in a formatted manner.

### User Interaction
- Handles user input, providing a conversational interface for querying information.
- Recognizes greetings and farewells, enhancing user experience.

## Usage
Users can input queries, and the chatbot responds with relevant information extracted from the database.

## Note
The project showcases the implementation of natural language processing to create a user-friendly chatbot capable of understanding and responding to user queries.

Report: [Link to the AIES Project Report]

## 3. Full Stack Development (FSD)
### FSD Project: Charity Management System
## Project Overview
In the fast-paced modern world, where individuals face numerous pressures, our DBMS mini-project aims to develop a Charity Management System. This system streamlines operations for charitable organizations, providing a centralized platform for efficient interaction and collaboration among donors, administrators, and parents.

## Objectives
- **Donor Interaction:**
  - Donors can easily register and contribute to various charitable initiatives.
  - Browse through different causes, view detailed project information, and make donations.
  - System ensures transparency by maintaining donation records and generating receipts.

- **Administrator Functions:**
  - Administrators register profiles and submit assistance requests.
  - Charitable organizations review and evaluate requests, ensuring resources are allocated efficiently.

- **Financial Contributions:**
  - Donors contribute funds based on approved causes.
  - Donated funds are transferred to the NGO for disbursement.

- **Security and Privacy:**
  - Prioritize information security and user privacy.

- **Reporting and Analytics:**
  - Comprehensive reporting and analytics capabilities for organizations to generate insights.

## Technologies Used
- **Database Management System (DBMS):** Used for efficient data organization and retrieval.
- **Web Technologies:** Building a centralized platform for user interaction.
- **Security Measures:** Implementing measures to prioritize information security and user privacy.

## Keywords
Charity Management System, donors, admin, transparency, assistance, centralized platform, donations, resources, profiles, requests, security, reporting, analytics, impact, technology, compassion.

Report: [Link to the FSD Project Report]

## How to Use This Repository
Clone the repository to your local machine.
```
git clone https://github.com/Panda-Lover-peepee-poopoo/Miniprojects-Y3S1.git
```
Navigate to the specific project directory you are interested in.
```
cd Miniprojects-Y3S1/DEC
```
Explore the project files, source code, and the accompanying report.

If you encounter any issues or have questions, feel free to reach out to the respective group member.

## Contribution Guidelines
If you are a group member or external contributor interested in contributing to this repository, please follow these guidelines:

## Fork the repository.
### Create a new branch for your contribution.
```
git checkout -b feature/new-feature
```
### Make your changes and commit them.
```
git commit -m "Add new feature"
```
### Push your changes to your fork.
```
git push origin feature/new-feature
```
Open a pull request, describing the changes you have made.

## Acknowledgments
We would like to express our gratitude to our instructors and mentors who guided us throughout the completion of these mini projects.

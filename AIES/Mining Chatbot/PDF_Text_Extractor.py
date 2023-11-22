import os
from PIL import Image
import pytesseract
from pdf2image import convert_from_path

# Path to the Tesseract executable (update with your installation path)
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Function to extract text from an image
def extract_text_from_image(image_path):
    try:
        # Open the image using PIL (Pillow)
        img = Image.open(image_path)

        # Use Tesseract to extract text from the image
        extracted_text = pytesseract.image_to_string(img)

        return extracted_text

    except Exception as e:
        print(f"Error: {str(e)}")
        return None

# Directory where the PDFs are located
pdf_directory = 'PDFs'

# Create the output directory if it doesn't exist
output_directory = 'Extracted_Data'
os.makedirs(output_directory, exist_ok=True)

# Path to the output text file
output_text_file = os.path.join(output_directory, 'Acts.txt')

# Iterate through PDF files in the directory
for filename in os.listdir(pdf_directory):
    if filename.endswith('.pdf'):
        pdf_path = os.path.join(pdf_directory, filename)

        # Convert PDF pages to images
        images = convert_from_path(pdf_path)

        for i, image in enumerate(images):
            # Temporary image file path
            image_path = f"temp_{i}.png"
            image.save(image_path, 'PNG')

            # Extract text from the image using Tesseract
            extracted_text = extract_text_from_image(image_path)

            if extracted_text:
                # Append the extracted text to the output file
                with open(output_text_file, 'a', encoding='utf-8') as text_file:
                    text_file.write(f"Text extracted from '{pdf_path}' (Page {i + 1}):\n")
                    text_file.write(extracted_text)
                    text_file.write('\n\n')

            # Remove the temporary image file
            os.remove(image_path)

print(f"Text extracted from PDFs in '{pdf_directory}' and saved to '{output_text_file}'.")

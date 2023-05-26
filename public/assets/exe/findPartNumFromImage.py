from google.cloud import vision
import re
import os

# Set your Google Cloud project ID and path to the image file
project_id = 'pdfdataminer'

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "pdfdataminer-1106db23d6eb.json"

# Define the regular expression patterns
part_pattern = re.compile(r"^[A-Za-z0-9!@#$%^&*()-_+{}\[\]:;\"'<>,.?/|\\-]+$")
bin_pattern = re.compile(r"^[A-Za-z0-9!@#$%^&*()-_+{}\[\]:;\"'<>,.?/|\\-]+$")

# Instantiate a client
client = vision.ImageAnnotatorClient()

def processImg(image):
    # Load the image
    with open(image_path, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    # Perform text detection

    response = client.text_detection(image=image)
    text_annotations = response.text_annotations
    result = []

    for annotation in text_annotations:
        if 'description' in annotation:
            # Search for a pattern that matches the format of a part number
            part_match = re.search(part_pattern, annotation.description)
            if part_match:
                if part_match.group(0) not in result :
                    result.append(part_match.group(0))

            bin_match = re.search(bin_pattern, annotation.description)
            if bin_match:
                if bin_match.group(0) not in result :
                    result.append(bin_match.group(0))
    
    return result

image_path = 'Product2.png'
print(processImg(image_path))

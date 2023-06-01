from google.cloud import vision
import re
import os
import sys

image_path = sys.argv[1]
python_path = sys.argv[2]

# Set your Google Cloud project ID and path to the image file
project_id = 'pdfdataminer'

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = python_path + "pdfdataminer-1106db23d6eb.json"

# Define the regular expression patterns
part_pattern = re.compile(r"^[A-Za-z0-9!@#$%^&*()-_+{}\[\]:;\"'<>,.?/|\\-]+$")

# Instantiate a client
client = vision.ImageAnnotatorClient()

def processImg(image):
    # Load the image
    with open(image_path, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    # Perform text detection

    response = client.text_detection(image=image)
    texts = response.text_annotations
    entire_text = texts[0].description

    lines = entire_text.split("\n")
    part_number = None

    for line in lines:
        if "Part: " in line:
            part_number = line.split("Part: ")[1]
            break
            
    if part_number is not None:
        return part_number
    else:
        result = []
        for annotation in texts:
            if 'description' in annotation:
                # Search for a pattern that matches the format of a part number
                part_match = re.search(part_pattern, annotation.description)
                if part_match:
                    if part_match.group(0) not in result :
                        result.append(part_match.group(0))

        return result

print(processImg(image_path))

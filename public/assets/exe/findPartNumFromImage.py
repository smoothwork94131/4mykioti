from google.cloud import vision
import sys;
import re
import os

image_path = sys.argv[1]
python_path = sys.argv[2]

# Set your Google Cloud project ID and path to the image file
project_id = 'pdfdataminer'
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = python_path + "pdfdataminer-1106db23d6eb.json"

# Define the regular expression patterns
part_pattern = re.compile(r"Part: (\w+)")
part_alt_pattern = re.compile(r"Pa\w{2}: (\w+)")

# Instantiate a client
client = vision.ImageAnnotatorClient()

def processImg(image_path):
    # Load the image
    with open(image_path, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    # Perform text detection
    response = client.text_detection(image=image)
    texts = response.text_annotations

    # Get the entire text from the first element of texts
    entire_text = texts[0].description

    lines = entire_text.split("\n")
    part_number = None

    for line in lines:
        if "Part: " in line:
            # Get the part number from the same line
            part_number = line.split("Part: ")[1]
            break

    if part_number is not None:
        return part_number
    else:
        return "something went wrong"
print(processImg(image_path))

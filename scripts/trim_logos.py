from PIL import Image, ImageChops
import os

public_dir = r"d:\Lavanya Portfolio\public"

# Load halves
light_img = Image.open(os.path.join(public_dir, "levexa-logo-light-bg.png")).convert("RGB")
dark_img = Image.open(os.path.join(public_dir, "levexa-logo-dark-bg.png")).convert("RGB")

# Function to auto-crop based on background color
def trim_to_content(img, bg_color, tolerance=25):
    # Create diff image
    bg = Image.new(img.mode, img.size, bg_color)
    diff = ImageChops.difference(img, bg)
    diff = ImageChops.add(diff, diff, 2.0, -tolerance)
    bbox = diff.getbbox()
    if bbox:
        # Add a comfortable 20px padding around bounding box
        left = max(0, bbox[0] - 20)
        top = max(0, bbox[1] - 20)
        right = min(img.width, bbox[2] + 20)
        bottom = min(img.height, bbox[3] + 20)
        return img.crop((left, top, right, bottom))
    return img

# For light image, bg is ~white (255, 255, 255)
trimmed_light = trim_to_content(light_img, (255, 255, 255), tolerance=20)
trimmed_light.save(os.path.join(public_dir, "levexa-logo-light-trimmed.png"), "PNG")
print("Trimmed light size:", trimmed_light.size)

# For dark image, sample top-left pixel for background color
bg_dark_pixel = dark_img.getpixel((10, 10))
print("Sampled dark bg pixel:", bg_dark_pixel)
trimmed_dark = trim_to_content(dark_img, bg_dark_pixel, tolerance=20)
trimmed_dark.save(os.path.join(public_dir, "levexa-logo-dark-trimmed.png"), "PNG")
print("Trimmed dark size:", trimmed_dark.size)

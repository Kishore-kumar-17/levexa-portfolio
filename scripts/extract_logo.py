from PIL import Image
import os

img_path = r"d:\Lavanya Portfolio\levexa final logo.jpeg"
img = Image.open(img_path)
print("Image size:", img.size)

# The image has two halves:
# Top half: light background
# Bottom half: dark background
width, height = img.size
mid_y = height // 2

top_half = img.crop((0, 0, width, mid_y))
bottom_half = img.crop((0, mid_y, width, height))

public_dir = r"d:\Lavanya Portfolio\public"
os.makedirs(public_dir, exist_ok=True)

top_half.save(os.path.join(public_dir, "levexa-logo-light-bg.png"), "PNG")
bottom_half.save(os.path.join(public_dir, "levexa-logo-dark-bg.png"), "PNG")

print("Saved logo halves successfully!")

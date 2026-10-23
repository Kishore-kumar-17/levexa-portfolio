from PIL import Image, ImageChops
import os

img = Image.open(r"d:\Lavanya Portfolio\levexa final logo.jpeg").convert("RGB")
w, h = img.size

# Light half: 0 to 425
light_img = img.crop((0, 0, w, 425))
# Dark half: 428 to h
dark_img = img.crop((0, 428, w, h))

def get_trimmed(im, bg_color, pad=15):
    bg = Image.new(im.mode, im.size, bg_color)
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -25)
    bbox = diff.getbbox()
    if bbox:
        left = max(0, bbox[0] - pad)
        top = max(0, bbox[1] - pad)
        right = min(im.width, bbox[2] + pad)
        bottom = min(im.height, bbox[3] + pad)
        return im.crop((left, top, right, bottom)), bbox
    return im, None

trimmed_light, bbox_light = get_trimmed(light_img, (254, 254, 254))
trimmed_dark, bbox_dark = get_trimmed(dark_img, (4, 22, 42))

public_dir = r"d:\Lavanya Portfolio\public"
os.makedirs(public_dir, exist_ok=True)

trimmed_light.save(os.path.join(public_dir, "levexa-logo-light.png"), "PNG")
trimmed_dark.save(os.path.join(public_dir, "levexa-logo-dark.png"), "PNG")

print(f"Trimmed Light saved: {trimmed_light.size}, bbox: {bbox_light}")
print(f"Trimmed Dark saved: {trimmed_dark.size}, bbox: {bbox_dark}")

# Also extract symbol only (the double chevrons on the left)
# In bbox_light, the chevrons are on the left before the vertical line
# Let's inspect where the vertical divider line is located
line_x = 0
for x in range(bbox_light[0], bbox_light[0] + 400):
    # check if there's a gold vertical line
    pix = light_img.getpixel((x, 200))
    if pix[0] > 200 and pix[1] > 140 and pix[2] < 50: # golden line
        line_x = x
        break

print("Divider line x is around:", line_x)
if line_x > 0:
    # crop symbol
    symbol_light = light_img.crop((bbox_light[0] - 10, bbox_light[1] - 10, line_x - 10, bbox_light[3] + 10))
    symbol_dark = dark_img.crop((bbox_dark[0] - 10, bbox_dark[1] - 10, line_x - 10, bbox_dark[3] + 10))
    symbol_light.save(os.path.join(public_dir, "levexa-symbol-light.png"), "PNG")
    symbol_dark.save(os.path.join(public_dir, "levexa-symbol-dark.png"), "PNG")
    print("Saved symbols successfully!")

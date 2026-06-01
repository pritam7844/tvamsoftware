from PIL import Image
import os

def process_logo_advanced(input_path, dark_dest, light_dest):
    if not os.path.exists(input_path):
        print(f"Error: Input file {input_path} does not exist.")
        return False
        
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Create standard transparent logo (logo.png)
    img_dark = Image.new("RGBA", (width, height))
    # Create white-text transparent logo (logo-light.png)
    img_light = Image.new("RGBA", (width, height))
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = img.getpixel((x, y))
            
            if x < 245:
                # Gold Monogram region (contains only gold and white)
                # The gold color has low B (around 18) compared to white (255)
                # Calculate coverage based on B value
                coverage = (255.0 - b) / 237.0
                coverage = max(0.0, min(1.0, coverage))
                
                # Smooth the threshold
                if coverage < 0.05:
                    pixel_dark = (255, 255, 255, 0)
                    pixel_light = (255, 255, 255, 0)
                else:
                    # Keep original gold color but set exact alpha
                    pixel_dark = (r, g, b, int(coverage * 255))
                    pixel_light = (r, g, b, int(coverage * 255))
            else:
                # Text region (contains only green and white)
                # Green color has low R (around 0) compared to white (255)
                # Calculate coverage based on R value
                coverage = (255.0 - r) / 255.0
                coverage = max(0.0, min(1.0, coverage))
                
                if coverage < 0.05:
                    pixel_dark = (255, 255, 255, 0)
                    pixel_light = (255, 255, 255, 0)
                else:
                    # Dark logo: Keep original green color with clean alpha
                    pixel_dark = (r, g, b, int(coverage * 255))
                    # Light logo: Turn to white color with clean alpha
                    pixel_light = (255, 255, 255, int(coverage * 255))
                    
            img_dark.putpixel((x, y), pixel_dark)
            img_light.putpixel((x, y), pixel_light)
            
    # Auto-crop standard transparent logo and add a 4px padding safe zone
    bbox_dark = img_dark.getbbox()
    if bbox_dark:
        img_dark = img_dark.crop(bbox_dark)
        padded_dark = Image.new("RGBA", (img_dark.width + 8, img_dark.height + 8), (255, 255, 255, 0))
        padded_dark.paste(img_dark, (4, 4))
        img_dark = padded_dark
    img_dark.save(dark_dest, "PNG")
    print(f"Saved padded standard transparent logo to {dark_dest}")
    
    # Auto-crop light transparent logo and add a 4px padding safe zone
    bbox_light = img_light.getbbox()
    if bbox_light:
        img_light = img_light.crop(bbox_light)
        padded_light = Image.new("RGBA", (img_light.width + 8, img_light.height + 8), (255, 255, 255, 0))
        padded_light.paste(img_light, (4, 4))
        img_light = padded_light
    img_light.save(light_dest, "PNG")
    print(f"Saved padded light transparent logo to {light_dest}")
    
    return True

if __name__ == "__main__":
    src = "/Users/rajesh/.gemini/antigravity-ide/brain/f5b5c0b0-ca56-40d0-821e-dc33d0ff5439/media__1780336516839.png"
    dark_dest = "/Users/rajesh/Documents/tvamwebsite/techhugo/public/logo.png"
    light_dest = "/Users/rajesh/Documents/tvamwebsite/techhugo/public/logo-light.png"
    process_logo_advanced(src, dark_dest, light_dest)

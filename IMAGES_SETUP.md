# Product Images Setup Guide

This guide will help you download dummy product images for the promotional banner.

## Quick Setup - Using Placeholder Service

If you want quick results, the app is configured to use placeholder images from `https://placehold.co` which will automatically display if images are missing.

## Manual Image Download

You can download product images from free services and place them in `public/images/`:

### Recommended Free Image Services:
1. **Unsplash** (https://unsplash.com)
2. **Pexels** (https://pexels.com)
3. **Pixabay** (https://pixabay.com)
4. **Product Hunt** (https://producthunt.com)

### Products to Download:

File names should match those in `components/promo-data.ts`:

1. **headphones.jpg** - Search for "wireless headphones" or "earbuds"
2. **backpack.jpg** - Search for "travel backpack" or "minimal backpack"
3. **speaker.jpg** - Search for "bluetooth speaker" or "portable speaker"
4. **pizza.jpg** - Search for "pizza" or "food"
5. **smartwatch.jpg** - Search for "smartwatch" or "apple watch"
6. **gaming-chair.jpg** - Search for "gaming chair" or "office chair"

### Steps to Add Images:

1. Download images from your preferred source (300x300px minimum recommended)
2. Rename them to match the filenames above
3. Place them in: `public/images/` folder
4. Reload your browser - the banner will display the images

## Automatic Download Script (Optional)

If you have `wget` or `curl` installed, you can run:

```bash
# From project root
cd public/images

# Download sample images from unsplash (via placeholder service)
wget https://placehold.co/400x400?text=Headphones -O headphones.jpg
wget https://placehold.co/400x400?text=Backpack -O backpack.jpg
wget https://placehold.co/400x400?text=Speaker -O speaker.jpg
wget https://placehold.co/400x400?text=Pizza -O pizza.jpg
wget https://placehold.co/400x400?text=SmartWatch -O smartwatch.jpg
wget https://placehold.co/400x400?text=GamingChair -O gaming-chair.jpg
```

## Current Status

✅ Promotional banner component created (`components/PromoBanner.tsx`)
✅ Promotional products data configured (`components/promo-data.ts`)
✅ Banner integrated into homepage (`app/page.tsx`)
⏳ Product images - Add manually to `public/images/` folder

The app is currently set to use placeholder images from `https://placehold.co` while you add real images.

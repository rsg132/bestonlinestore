@echo off
REM Download dummy product images for the promotional banner

cd public\images

REM Create placeholder images using PowerShell
powershell -Command "
$urls = @{
    'headphones.jpg' = 'https://placehold.co/400x400/1f2937/ffffff?text=Headphones';
    'backpack.jpg' = 'https://placehold.co/400x400/1f2937/ffffff?text=Backpack';
    'speaker.jpg' = 'https://placehold.co/400x400/1f2937/ffffff?text=Speaker';
    'pizza.jpg' = 'https://placehold.co/400x400/1f2937/ffffff?text=Pizza';
    'smartwatch.jpg' = 'https://placehold.co/400x400/1f2937/ffffff?text=SmartWatch';
    'gaming-chair.jpg' = 'https://placehold.co/400x400/1f2937/ffffff?text=GamingChair';
}

foreach (\$file in \$urls.Keys) {
    Write-Host \"Downloading \$file...\"
    try {
        (New-Object System.Net.WebClient).DownloadFile(\$urls[\$file], \$file)
        Write-Host \"Downloaded \$file successfully\"
    } catch {
        Write-Host \"Failed to download \$file\"
    }
}
Write-Host \"Done! All images downloaded.\"
"

cd ..\..
pause

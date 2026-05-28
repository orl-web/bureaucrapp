Add-Type -AssemblyName System.Drawing
$sizes = @(48, 72, 96, 128, 192, 256, 384, 512)
$emoji = [char]0xD83D + [char]0xDCCB
foreach ($size in $sizes) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.Clear([System.Drawing.Color]::FromArgb(255, 108, 92, 231))
    $brush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
    $fontSize = [Math]::Max(16, [int]($size * 0.35))
    $font = New-Object System.Drawing.Font("Segoe UI", $fontSize, [System.Drawing.FontStyle]::Bold)
    $sf = [System.Drawing.StringFormat]::new()
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString($emoji, $font, $brush, [System.Drawing.RectangleF]::new(0, 0, $size, $size), $sf)
    $path = "public\icon-$size.png"
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $g.Dispose()
    Write-Host "Generated $path"
}

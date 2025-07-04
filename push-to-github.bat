@echo off
chcp 65001 >nul
echo 🚀 Push TFT Meta Advisor lên GitHub
echo.

echo ✅ Code đã sẵn sàng!
echo.
echo 📋 Làm theo các bước sau:
echo.
echo 1. Vào: https://github.com/new
echo 2. Repository name: Rentftmeta
echo 3. Chọn Public → Create repository
echo 4. Sau khi tạo xong, chạy lệnh:
echo.
echo    git push -u origin main
echo.
echo 5. Vào https://vercel.com
echo 6. Sign up with GitHub (chichkhi@yahoo.com)
echo 7. New Project → Chọn Rentftmeta → Deploy
echo.
echo 🎉 Link sẽ là: https://rentftmeta.vercel.app
echo.

echo Nhấn Enter sau khi đã tạo repository trên GitHub...
pause

echo Đang push code...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ✅ Thành công! Code đã được push lên GitHub
    echo 🌐 Bây giờ vào Vercel để deploy
) else (
    echo.
    echo ❌ Lỗi! Hãy kiểm tra lại repository đã được tạo chưa
)

pause
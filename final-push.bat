@echo off
chcp 65001 >nul
echo 🚀 TFT Meta Advisor - Final Push
echo.

echo ⚠️  QUAN TRỌNG: Hãy tạo repository trước!
echo.
echo 1. Vào: https://github.com/new
echo 2. Repository name: Rentftmeta
echo 3. Chọn Public (KHÔNG tick Add README)
echo 4. Create repository
echo.

echo Nhấn Enter sau khi đã tạo repository...
pause

echo.
echo 🚀 Đang push code...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ✅ THÀNH CÔNG! Code đã được push lên GitHub
    echo.
    echo 🌐 Bây giờ deploy Vercel:
    echo 1. Vào: https://vercel.com
    echo 2. Sign up with GitHub (chichkhi@yahoo.com)
    echo 3. New Project → Chọn Rentftmeta
    echo 4. Deploy
    echo.
    echo 🎉 Link sẽ là: https://rentftmeta.vercel.app
) else (
    echo.
    echo ❌ LỖI! Repository chưa được tạo
    echo Hãy tạo repository trên GitHub trước
)

pause
@echo off
chcp 65001 >nul
echo 🚀 TFT Meta Advisor - Auto Deploy
echo.

echo 📦 Bước 1: Cấu hình Git
git config --global user.name "PhucVu"
git config --global user.email "chichkhi@yahoo.com"

echo.
echo 📋 Bước 2: Commit code
git add .
git commit -m "🎉 TFT Meta Advisor - Ready for deploy"

echo.
echo 🌐 Bước 3: Hướng dẫn tiếp theo
echo.
echo ✅ Code đã sẵn sàng!
echo.
echo 📋 Làm theo các bước sau:
echo.
echo 1. Mở https://github.com/new
echo 2. Repository name: tft-meta-advisor
echo 3. Chọn Public → Create repository
echo 4. Copy link repository
echo 5. Chạy lệnh:
echo.
echo    git remote add origin [LINK_REPOSITORY]
echo    git branch -M main
echo    git push -u origin main
echo.
echo 6. Vào https://vercel.com → Sign up with GitHub
echo 7. New Project → Chọn tft-meta-advisor → Deploy
echo.
echo 🎉 Hoàn thành! Bạn sẽ có link online!
echo.

pause
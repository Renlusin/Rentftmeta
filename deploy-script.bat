@echo off
chcp 65001 >nul
echo 🚀 TFT Meta Advisor - Deploy Script
echo.

echo 📍 Chuyển đến thư mục dự án...
cd /d "C:\Users\PhucVu\tft-meta-advisor-complete"

echo 📦 Kiểm tra Git repository...
if not exist ".git" (
    echo ⚠️  Chưa có Git repository, đang khởi tạo...
    git init
    git config user.name "PhucVu"
    git config user.email "chichkhi@yahoo.com"
)

echo 📋 Commit code mới nhất...
git add .
git commit -m "🎉 TFT Meta Advisor - Ready for deploy %date% %time%"

echo.
echo ✅ Code đã sẵn sàng!
echo.
echo 📋 Bây giờ làm theo các bước sau:
echo.
echo 1. Mở https://github.com/new
echo 2. Repository name: tft-meta-advisor
echo 3. Chọn Public → Create repository
echo 4. Copy link repository (ví dụ: https://github.com/username/tft-meta-advisor.git)
echo.
echo 5. Chạy lệnh sau (thay YOUR_USERNAME bằng username GitHub của bạn):
echo    git remote add origin https://github.com/YOUR_USERNAME/tft-meta-advisor.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 6. Vào https://vercel.com
echo 7. Sign up with GitHub
echo 8. New Project → Chọn tft-meta-advisor → Deploy
echo.
echo 🎉 Sau khi deploy xong, bạn sẽ có link online!
echo.

pause

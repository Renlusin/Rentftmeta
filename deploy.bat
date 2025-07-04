@echo off
chcp 65001 >nul
echo 🚀 TFT Meta Advisor - Deploy lên Vercel
echo.

echo 📋 Bước 1: Cấu hình Git (nếu chưa làm)
echo Nhập tên của bạn:
set /p username="Tên: "
echo Nhập email của bạn:
set /p email="Email: "

git config --global user.name "%username%"
git config --global user.email "%email%"

echo.
echo 📦 Bước 2: Commit code
git add .
git commit -m "🎉 Deploy TFT Meta Advisor"

echo.
echo 🌐 Bước 3: Hướng dẫn tiếp theo
echo.
echo ✅ Code đã sẵn sàng để push lên GitHub!
echo.
echo 📋 Làm theo các bước sau:
echo.
echo 1. Vào https://github.com và tạo repository mới tên "tft-meta-advisor"
echo 2. Copy link repository (dạng: https://github.com/USERNAME/tft-meta-advisor.git)
echo 3. Chạy lệnh:
echo    git remote add origin [LINK_REPOSITORY]
echo    git branch -M main  
echo    git push -u origin main
echo.
echo 4. Vào https://vercel.com
echo 5. Đăng nhập bằng GitHub
echo 6. Nhấn "New Project" và chọn repository "tft-meta-advisor"
echo 7. Nhấn "Deploy" và chờ 2-3 phút
echo.
echo 🎉 Xong! Bạn sẽ có link ứng dụng online!
echo.

pause
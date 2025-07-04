@echo off
chcp 65001 >nul
echo 🔮 TFT Meta Advisor - Chạy Local
echo.

echo 🚀 Khởi động ứng dụng...
echo 📱 Mở trình duyệt tại: http://localhost:5173
echo 💡 Nhấn Ctrl+C để dừng
echo.

start http://localhost:5173
npm run dev
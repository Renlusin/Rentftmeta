@echo off
echo 🔮 TFT Meta Advisor - Khởi động ứng dụng...
echo.

echo 📦 Cài đặt dependencies...
call npm install

echo.
echo 🚀 Khởi động development server...
echo 📱 Ứng dụng sẽ mở tại: http://localhost:5173
echo 💡 Nhấn Ctrl+C để dừng server
echo.

call npm run dev

pause
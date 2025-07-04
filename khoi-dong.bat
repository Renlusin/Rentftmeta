@echo off
chcp 65001 >nul
echo 🔮 TFT Meta Advisor - Khởi động ứng dụng...
echo.

echo 📦 Cài đặt dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ❌ Lỗi khi cài đặt dependencies!
    pause
    exit /b 1
)

echo.
echo 🚀 Khởi động development server...
echo 📱 Ứng dụng sẽ mở tại: http://localhost:5173
echo 💡 Nhấn Ctrl+C để dừng server
echo.

call npm run dev

pause
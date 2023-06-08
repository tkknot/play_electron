// app: life cicle of event
// BrowserWindow: application window

const path = require("path");
const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
    },
  });

  win.loadFile("index.html");
};

// イベントライフサイクルの管理
app.whenReady().then(() => createWindow());

// 全てのウィンドウを終了すると消す
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000" // 開発環境の場合
      : `file://${path.join(__dirname, "../build/index.html")}`, // 本番環境の場合
  );
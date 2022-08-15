const { app, BrowserWindow } = require("electron");

const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width : 1080,
        height : 920,
        webPreferences : {
            preload : path.join(__dirname, '../backend/pocketbase.js')
        }
    })

    win.loadURL("http://localhost:3000")
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
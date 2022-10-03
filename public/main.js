const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev")

const path = require('path')

require("@electron/remote/main").initialize()

const createWindow = () => {
    const win = new BrowserWindow({
        width : 1080,
        height : 920,
        webPreferences : {
            enableRemoteModule : true
        }
    })

    win.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`)
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
const { app, BrowserWindow } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width : 1080,
        height : 920,
        webPreferences : {}
    })

    win.loadURL("http://localhost:3000")
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
    pockebaseProcess.kill()
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
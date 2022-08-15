const spawn = require("child_process").spawn

const pockebaseProcess = spawn("backend/pocketbase.exe", ["serve"])

pockebaseProcess.on("data", (data) => {
    console.log(data)
}) 
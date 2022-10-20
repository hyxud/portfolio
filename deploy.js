const { exec } = require("child_process");
const { spawn } = require("child_process");



function deploy(branch) {
    let acmd = []
    let cmd = "firebase"
    if (branch=="main"){
        acmd = ["deploy", "--only", "hosting:hyxud-server"] 
    }
    else if (branch=="dev") {
        acmd = ["deploy", "--only", "hosting:hyxud-devserver"] 
    }
    else {
        console.log(`Unknown Branch: ${branch}\nCanceled Deploy.`);
        return
    }
    let deploycmd = spawn("firebase", acmd);
    acmd.forEach(param => {
        cmd = `${cmd} ${param}`
    });
    console.log(cmd);
    deploycmd.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
    });

    deploycmd.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
    });

    deploycmd.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });

    deploycmd.on("close", code => {
        console.log(`child process exited with code ${code}`);
    });
}



exec("git rev-parse --abbrev-ref HEAD", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    stdout = stdout.slice(0, -1);
    console.log(`Current Branch: ${stdout}`);
    deploy(stdout)
});
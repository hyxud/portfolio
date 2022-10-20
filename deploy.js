const { exec } = require("child_process");
const { spawn } = require("child_process");
const FIREBASE = `\"${process.env.npm_config_global_prefix}\\firebase\"`



function deploy(branch) {
    let acmd = []
    let cmd = FIREBASE
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
    acmd.forEach(param => {
        cmd = `${cmd} ${param}`
    });
    console.log(cmd);
    console.log(acmd);
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(stdout);
    })
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
    if (process.argv[2] == "t") {
        let spawncmd = spawn(FIREBASE, ["login"]);
        spawncmd.stdout.on("data", data => {
            console.log(`stdout: ${data}`);
        });

        spawncmd.stderr.on("data", data => {
            console.log(`stderr: ${data}`);
        });

        spawncmd.on('error', (error) => {
            console.log(`error: ${error.message}`);
        });

        spawncmd.on("close", code => {
            console.log(`child process exited with code ${code}`);
        });
        return
    }
    
    deploy(stdout)
});
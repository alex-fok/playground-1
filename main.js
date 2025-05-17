const { exec } = require('node:child_process');
const app = require('express')();

app.get('/', async(req, res) => {
    res.json({message: 'Hello World'});
    try {
        exec(`node ${process.cwd()}/playground-2/build/index.js`, (err, stdout, stderr) => {
            console.error(`Error status:`, err);
            console.log(stdout);
            if (stderr) {
                console.error(`stderror:${stderr}`);
            }
        });
        console.log(process.cwd());
        await new Promise(res => setTimeout(res, 5000));
        const response = await fetch('http://localhost:3000');
        console.log(response);
    } catch (err) {
        console.error(err);
    }
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

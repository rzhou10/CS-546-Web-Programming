const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const fs = bluebird.promisifyAll(require("fs"));

const textMetrics = require("./textMetrics");
const fileData = require("./fileData");

async function main() {
    for (let i = 1; i < 4; i++){
        let currentFile = "Chapter" + i;

        console.log("Working on " + currentFile);

        if (fs.exists(currentFile + ".result.json")) {
            let JSONobj = require("./result/" + currentFile +".result.json");
            var obj = JSON.parse(JSONobj);
            console.log(obj);
        }
        else{
            console.log(currentFile + " doesn't exist, building it now.");
            let stringFromFile = await fileData.getFileAsString("./textFiles/"+ currentFile + ".txt");
            await fileData.saveStringToFile("./Save/" + currentFile + ".debug.txt", stringFromFile);
            let Obj = textMetrics.createMetrics(stringFromFile);
            await fileData.saveJSONToFile("./result/" + currentFile +".result.json", Obj);
            console.log(Obj);
        }
    }
}

main().catch(err => {
    console.log(err);
});  
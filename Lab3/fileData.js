const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString (path) {
    if (!path){
        throw "Path must be provided";
    }

    console.log("Reading file.");
    const fileContent = await fs.readFileAsync(path, "utf-8");

    return fileContent;
}

async function getFileAsJSON (path) {
    if (!path){
        throw "Path must be provided";
    }
    
    console.log("Converting to JSON.");

    const fileContent = await getFileAsString(path);
    const fileContentJSON = JSON.parse(fileContent);

    return fileContentJSON;
}

async function saveStringToFile (path, text) {
    if (!path){
        throw "Path must be provided";
    }
    if (!text){
        throw "Text must be provided";
    }
    if (typeof text !== "string"){
        throw "Text must be a string."
    }
    
    console.log("Saving to " + path + ".");

    await fs.writeFileAsync(path, text);

    return true;
}

async function saveJSONToFile(path, obj) {
    if (!path){
        throw "Path must be provided";
    }
    if (!obj){
        throw "obj must be provided";
    }
    if (typeof obj !== "object"){
        throw "obj must be a object."
    }
    
    console.log("Saving to " + path + ".");

    const JSONString = JSON.stringify(obj);

    await fs.writeFileAsync(path, JSONString);
    return true;
}

module.exports = {
    description: "IO Methods",
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
}
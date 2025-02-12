const movies = require("./data.cjs");

function toCleanString(string) {
    let cleanString = string.normalize("NFC").replace(/[^\w\s]/g, "").toLowerCase();
    return cleanString;
}


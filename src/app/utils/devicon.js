import json from "../../assets/devicon.json";

const jsonArray = Array.from(json);

export function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export function getBackgroundColor(icon) {
    let color = "#FFFFFF";
    if (icon !== null) {
        color = icon.color;
    }
    return color;
}

export function getFileName(icon, type) {
    if (icon == null) {
        icon = getIconByName(null);
    }

    if (type == null) {
        type = "svg";
    }

    let fileName;
    let name = icon.name;
    let versions = icon.versions[type];

    let prefix = type === "svg" ? '' : "devicon-";

    let plainVersion = versions.find(predicate => predicate.includes("plain"));
    let originalVersion = versions.find(predicate => predicate.includes("original"));
    let svgWordMarkVersion = versions.find(predicate => predicate.includes("wordmark"));

    if (plainVersion) {
        fileName = prefix + name + "-" + plainVersion;
    } else if (originalVersion) {
        fileName = prefix + name + "-" + originalVersion;
    } else if (svgWordMarkVersion) {
        fileName = prefix + name + "-" + svgWordMarkVersion;
    } else {
        fileName = prefix + name + "-" + versions[0];
    }

    return fileName;
}

export function getIconByName(name) {
    let icon = jsonArray.find(predicate => predicate.name === name);

    if (icon == null) {
        let randomNumber = getRandom(0, jsonArray.length);
        icon = jsonArray[randomNumber];
    }

    return icon;
}
function findMatching(allNames, specificName) {
    return allNames.filter(name => name.toLowerCase() === specificName.toLowerCase());
}

function fuzzyMatch(allNames, specificName) {
    return allNames.filter(name => name.charAt(0) === specificName.charAt());
}

function matchName(allNames, specificName) {
    return allNames.filter(name => name.name === specificName);
}
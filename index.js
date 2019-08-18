export const compareProp = (propName, searchTerm) => item => {
    if (item[propName] === undefined) {
        throw Error(`The prop "${propName}" does not exist.`);
    }
    return item[propName] === searchTerm
}
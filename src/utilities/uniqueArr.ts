const uniqueArray = (arr:any) => {
    const unique = Array.from(new Set(arr));
    return unique;
}

const uniqueArrLength = (arr:any) => {
    const unique = Array.from(new Set(arr));
    return unique.length;
}

export { uniqueArray, uniqueArrLength };
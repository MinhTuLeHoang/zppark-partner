const isTokenExpired = () => {
    const str = localStorage.getItem('mySession')
    if (str == null) return true;

    const mySession = JSON.parse(str);
    const today = new Date();
    if (today > mySession.expiredDate) return true;
    else return false;
}

const getToken = () => {
    const str = localStorage.getItem('mySession')
    if (str == null) return null;

    const mySession = JSON.parse(str);
    return mySession.accessToken;
}

const getEmail = () => {
    const str = localStorage.getItem('mySession')
    if (str == null) return null;

    const mySession = JSON.parse(str);
    return mySession.email;
}

export { isTokenExpired, getToken, getEmail }
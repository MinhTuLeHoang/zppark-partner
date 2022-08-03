var localStorageMock = (function (status) {
    // var store = {};
    // if(status == "has session") {
    //     const str = JSON.stringify({
    //         accessToken: 'accessToken',
    //         expiredDate: new Date(Date.now() - 1000),
    //         email: 'sampleEmail@gmail.com'
    //     });
    //     store = {"mySession": str};
    // }
    // else store = {};

    var store = {};
    const str = JSON.stringify({
        accessToken: 'accessToken',
        expiredDate: new Date(Date.now() - 1000),
        email: 'sampleEmail@gmail.com'
    });
    store = {"mySession": str};
    
    return {
        getItem: function (key) {
            return store[key];
        },
        setItem: function (key, value) {
            store[key] = value.toString();
        },
        clear: function () {
            store = {};
        },
        removeItem: function (key) {
            delete store[key];
        }
    };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
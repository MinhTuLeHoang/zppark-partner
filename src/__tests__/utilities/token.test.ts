import { isTokenExpired, getToken } from "utilities/token";

const fakeLocalStorage = (function () {
    let store: any = {};

    return {
        getItem: function (key: string) {
            return store[key] || null;
        },
        setItem: function (key: string, value: string) {
            store[key] = value.toString();
        },
        removeItem: function (key: string) {
            delete store[key];
        },
        clear: function () {
            store = {};
        }
    };
})();


describe('Utilities Token testing', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'localStorage', {
            value: fakeLocalStorage,
        });
    });


    it('check token expired correctly', () => {

        // const localStorageReturn = JSON.stringify({
        //     accessToken: 'accessToken',
        //     expiredDate: new Date(Date.now() - 1000),
        //     email: 'sampleEmail@gmail.com'
        // });

        // jest.spyOn(window.localStorage, 'getItem').mockReturnValue(localStorageReturn);

        const a = isTokenExpired();
        console.log(a);
        expect(isTokenExpired()).toBe(false);
    });

    it('getToken in utilities', () => {
        const b = getToken();
        console.log(b);
    })
})

export { }
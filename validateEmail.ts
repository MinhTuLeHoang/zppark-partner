const validateEmail = (email: any) => {
    const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return regex.test(email.value);
};

export { validateEmail }
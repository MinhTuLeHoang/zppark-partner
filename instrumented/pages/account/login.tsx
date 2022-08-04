import { Button, Input, Link, useInput, Modal } from "@nextui-org/react";
import { useRouter } from "next/router";
import LayoutMain from "layouts/layoutMain";
import Image from "next/image";
import axios from "axios";
// import Link from "next/link";
import LoginStyle from "styles/login.module.css";
// import { URLSearchParams } from "url";
import React from "react";
import { isTokenExpired } from "utilities/token";
import { validateEmail } from "../../../validateEmail";


const Login = () => {
    const router = useRouter();
    const [isSubmitClick, setIsSubmitClick] = React.useState(false);

    const email = useInput("");
    const password = useInput("");

    const [isError, setIsError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");

    const loginSubmit = async () => {
        const params = new URLSearchParams();
        params.append('email', email.value);
        params.append('password', password.value)
        await axios.post(`http://34.92.88.6:8080/partners/login`, params)
            .then(function (response) {
                // handle success
                const mySession = {
                    email: email.value,
                    accessToken: response.data.data.accessToken,
                    refreshToken: response.data.data.refreshToken,
                    expiredDate: new Date(),
                };
                localStorage.removeItem("mySession");
                localStorage.setItem("mySession", JSON.stringify(mySession));
                console.log(localStorage.getItem("mySession"));
                router.push('/account');
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setIsError(true);
                setErrorMessage(error.response.data.message);
            })
            .then(function () {
                // always executed
            });
    }

    React.useEffect(() => {
        if (!isTokenExpired()) {
            router.push('/account');
        }
    }, [])


    React.useEffect(() => {
        if (isSubmitClick) {
            setIsSubmitClick(false);
            loginSubmit();
        }
    }, [isSubmitClick]);



    const helper: { text: string, color: undefined | "success" | "error" } = React.useMemo(() => {
        if (!email.value) return {
            text: "",
            color: undefined,
        };

        const isValid = validateEmail(email);
        return {
            text: isValid ? "Correct email" : "Your email is invalid",
            color: isValid ? "success" : "error",
        };
    }, [email]);



    const submitHandler = (event: any) => {
        const isValid = validateEmail(email);
        if (isValid) {
            setIsSubmitClick(true);
        }
        else {
            setIsError(true);
            setErrorMessage("Your email is invalid");
        }
    }

    const modalOnClose = () => {
        setIsError(false);
    }

    return (
        <LayoutMain>
            <div className={LoginStyle.container}>
                <Image src="/images/logo.png" width={150} height={150} />

                <h1 className={LoginStyle.title}>ZPPark Partner Login</h1>

                <form>

                    <div className={LoginStyle.whiteBG}>
                        <Input color={helper.color} onChange={(e) => email.setValue(e.target.value)} clearable bordered placeholder="Input your Email Address" label="Email" type="email" helperText={helper.text} helperColor={helper.color} status={helper.color} />
                    </div>

                    <div className={LoginStyle.whiteBG}>
                        <Input.Password onChange={(e) => password.setValue(e.target.value)} bordered placeholder="Input your Password" label="Password" type="password" />
                    </div>

                    <div className={LoginStyle.loginBtn}>
                        <Button onPress={submitHandler} >LOG IN</Button>
                        <div className={LoginStyle.forgot}>
                            <Link href="/account/forgot" >Forgot password !</Link>
                        </div>

                    </div>
                </form>

                <hr style={{ color: "white" }} />

                <p>
                    Or if you don&lsquo;t have an account yet,
                </p>
                <p style={{ margin: 0 }}>
                    You can&nbsp;
                    <span className={LoginStyle.register}>
                        <Link href="/account/register" underline>create one</Link>
                    </span>
                    &nbsp;here
                </p>
            </div>

            <Modal open={isError} closeButton onClose={modalOnClose} style={{ paddingTop: "0px" }} >
                <Modal.Header css={{ backgroundColor: "$error", paddingTop: "20px" }}>
                    <h1 style={{ color: "white" }} >ERROR</h1>
                </Modal.Header>

                <Modal.Body style={{ paddingBottom: "15px", paddingTop: "15px", height: "150px" }} css={{ backgroundColor: "$errorLightHover" }} >
                    <p style={{ margin: "auto auto", textAlign: "center", color: "red" }} >{errorMessage}</p>
                </Modal.Body>
            </Modal>
        </LayoutMain>
    );
}

export default Login;
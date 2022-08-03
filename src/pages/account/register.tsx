import React from "react";
import { useRouter } from "next/router";
import { Button, Input, Link, Modal, useInput } from "@nextui-org/react";
import LayoutMain from "layouts/layoutMain";
import axios from "axios";
import Image from "next/image";
// import Link from "next/link";
import LoginStyle from "styles/login.module.css";
import { validateEmail } from "../../../validateEmail";

const Register = () => {
    const router = useRouter();
    const email = useInput("");
    const password = useInput("");

    // const [notiVisible, setNotiVisible] = React.useState(false);
    const [notiStatus, setNotiStatus] = React.useState<"NORMAL" | "SUCCESS" | "ERROR">("NORMAL");
    const [notiMessage, setNotiMessage] = React.useState("");
    const [isSubmitClick, setIsSubmitClick] = React.useState(false);

    const modalOnClose = () => {
        // setNotiVisible(false);
        if(notiStatus === "SUCCESS"){
            setNotiStatus("NORMAL");
            router.push("/account/login");
        }
        else setNotiStatus("NORMAL");
    }

    const registerAPI = async () => {
        await axios.post(`https://zppark.live/api/partners/registration`, {
            "email": email.value,
            "password": password.value,
            "zlp_app_id": 2254
            // "zlp_app_id": 123,
            // "zlp_create_order_key": "abc",
            // "zlp_callback_key": "xyz"
        }).then(function (response) {
            // handle success
            console.log(response);
            // setNotiVisible(true);
            setNotiStatus("SUCCESS");
            setNotiMessage(response.data.message);
            
        }).catch(function (error) {
            // handle error
            console.log("holalal")
            // setNotiVisible(true);
            setNotiMessage(error.response.data.message);
            setNotiStatus("ERROR");
        })

        // await axios({
        //     url: "https://zppark.live/api/partners/registration",
        //     method: "POST",
        //     data: {
        //         "email": "khankhan123@gmail.com",
        //         "password": "headingto",
        //         "zlp_app_id": 123,
        //         "zlp_create_order_key": "abc",
        //         "zlp_callback_key": "xyz"
        //     }
        // }).then(function (response) {
        //     // handle success
        //     console.log(response);
        // }).catch(function (error) {
        //     // handle error
        //     console.log(error);
        // })
    }

    React.useEffect(() => {
        if (isSubmitClick) {
            console.log("check validate")
            // const isValid = validateEmail(email);
            // if (isValid) {
            console.log("api called");
            registerAPI();
            setIsSubmitClick(false);
            // }
        }
    }, [isSubmitClick])

    React.useEffect(() => {
        if(notiStatus == "NORMAL"){
            const element = (document.getElementById("notiModal") as HTMLInputElement);
            if(element != null) element.style.display = "none";
        }
    },[notiStatus])


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

    const btnHandler = () => {
        console.log("btn press")
        setIsSubmitClick(true);
    }

    return (
        <LayoutMain>
            <div className={LoginStyle.container}>
                <Image src="/images/logo.png" width={150} height={150} />

                <h1 className={LoginStyle.title}>ZPPark Partner Register</h1>

                <form>
                    <div className={LoginStyle.whiteBG}>
                        <Input color={helper.color} onChange={(e) => {email.setValue(e.target.value)}} clearable bordered placeholder="Input your Email Address" label="Email" type="email" helperText={helper.text} helperColor={helper.color} status={helper.color} />
                    </div>

                    <div className={LoginStyle.whiteBG}>
                        <Input.Password bordered onChange={(e) => {password.setValue(e.target.value)}} placeholder="Input your Password" label="Password" type="password" />
                    </div>

                    <div className={LoginStyle.loginBtn} >
                        <Button onClick={btnHandler}>REGISTER</Button>
                    </div>

                </form>

                <hr style={{ color: "white" }} />

                <p style={{ marginBottom: 5 }}>
                    You have already had an account,
                </p>
                <p style={{ margin: 0 }}>
                    Click&nbsp;
                    <span className={LoginStyle.register}>
                        <Link href="/account/login" underline>here</Link>
                    </span>
                    &nbsp;to login
                </p>
            </div>

            <Modal open={notiStatus != "NORMAL"} closeButton onClose={modalOnClose} style={{paddingTop: "0px"}} id="notiModal" >
                <Modal.Header css={{backgroundColor: notiStatus=="SUCCESS" ? "$success" : "$error", paddingTop: "20px"}}>
                    {notiStatus == "SUCCESS" ? <h1 style={{color: "white"}} >SUCCESS</h1> : <h1 style={{color: "white"}} >ERROR</h1>}
                </Modal.Header>

                <Modal.Body style={{paddingBottom: "15px", paddingTop: "15px", height: "150px"}} css={{backgroundColor: notiStatus=="SUCCESS" ? "$successLight" : "$errorLightHover"}} >
                    <p style={{margin: "auto auto", textAlign: "center", color: notiStatus=="SUCCESS" ? "green" :"red"}} >{notiMessage}</p>
                </Modal.Body>

                {
                    notiStatus == "SUCCESS" && <Modal.Footer style={{paddingBottom: "20px"}} css={{backgroundColor: "$successLight"}} >
                        You will be redirect to sign in again
                        <Button auto onClick={modalOnClose} color="success" style={{marginLeft: "10px"}} >
                        Sign in
                        </Button>
                    </Modal.Footer> 
                }
            </Modal>
        </LayoutMain>
    );
}

export default Register;
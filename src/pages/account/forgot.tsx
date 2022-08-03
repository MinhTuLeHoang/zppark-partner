import React from "react";
import { Button, Input, Link, useInput } from "@nextui-org/react";
import LayoutMain from "layouts/layoutMain";
import { validateEmail } from "../../../validateEmail";
import Image from "next/image";
import LoginStyle from "styles/login.module.css";

const Forgot = () => {
    const email = useInput("");


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

    return (
        <LayoutMain>
            <div className={LoginStyle.container}>
                <Image src="/images/logo.png" width={150} height={150} />

                <h1 className={LoginStyle.title}>ZPPark Partner Forgot Pass</h1>

                <form>

                    <div className={LoginStyle.whiteBG} style={{}}>
                        <Input color={helper.color} onChange={(e) => email.setValue(e.target.value)} clearable bordered placeholder="Input your Email Address" label="Email" type="email" helperText={helper.text} helperColor={helper.color} status={helper.color} />
                    </div>

                    <div className={LoginStyle.loginBtn} >
                        <Button>SUBMIT</Button>
                    </div>

                    <div className={LoginStyle.whiteBG} hidden>
                        <Input clearable bordered placeholder="Input your OTP" label="Phone Number" type="number" helperText="Ex: OTP format - 0000" />
                    </div>

                    <div className={LoginStyle.loginBtn} style={{ marginTop: 20 }} hidden>
                        <Button>CONFIRM OTP</Button>
                    </div>

                    <div className={LoginStyle.whiteBG} hidden>
                        <Input.Password bordered placeholder="Input your Password" label="Password" type="password" />
                    </div>

                    <div className={LoginStyle.loginBtn} hidden>
                        <Button>SET PASSWORD</Button>
                    </div>

                </form>
            </div>
        </LayoutMain>
    );
}

export default Forgot;
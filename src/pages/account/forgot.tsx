import { Button, Input, Link } from "@nextui-org/react";
import LayoutMain from "layouts/layoutMain";
import Image from "next/image";
import LoginStyle from "styles/login.module.css";

const Forgot = () => {
    return (
        <LayoutMain>
            <div className={LoginStyle.container}>
                <Image src="/images/logo.png" width={150} height={150} />

                <h1 className={LoginStyle.title}>ZPPark Partner Forgot Pass</h1>

                <form>



                    <div className={LoginStyle.whiteBG}>
                        <Input clearable bordered placeholder="Input your Phone Number" label="Phone Number" type="tel" />
                    </div>

                    <div className={LoginStyle.loginBtn} >
                        <Button>REGISTER</Button>
                    </div>

                    <div className={LoginStyle.whiteBG}>
                        <Input clearable bordered placeholder="Input your OTP" label="Phone Number" type="number" helperText="Ex: OTP format - 0000" />
                    </div>

                    <div className={LoginStyle.loginBtn} style={{ marginTop: 20 }}>
                        <Button>CONFIRM OTP</Button>
                    </div>

                    <div className={LoginStyle.whiteBG}>
                        <Input.Password bordered placeholder="Input your Password" label="Password" type="password" />
                    </div>

                    <div className={LoginStyle.loginBtn}>
                        <Button>SET PASSWORD</Button>
                    </div>

                </form>
            </div>
        </LayoutMain>
    );
}

export default Forgot;
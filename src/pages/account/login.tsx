import { Button, Input, Link } from "@nextui-org/react";
import LayoutMain from "layouts/layoutMain";
import Image from "next/image";
// import Link from "next/link";
import LoginStyle from "styles/login.module.css";

const Login = () => {
    return (
        <LayoutMain>
            <div className={LoginStyle.container}>
                <Image src="/images/logo.png" width={150} height={150} />

                <h1 className={LoginStyle.title}>ZPPark Partner Login</h1>

                <form>

                    <div className={LoginStyle.whiteBG}>
                        <Input clearable bordered placeholder="Input your Phone Number" label="Phone Number" type="tel" />
                    </div>

                    <div className={LoginStyle.whiteBG}>
                        <Input.Password bordered placeholder="Input your Password" label="Password" type="password" />
                    </div>

                    <div className={LoginStyle.loginBtn}>
                        <Button>LOG IN</Button>
                        <div className={LoginStyle.forgot}>
                            <Link href="/account/forgot" >Forgot password !</Link>
                        </div>

                    </div>
                </form>

                <hr style={{ color: "white" }} />

                <p>
                    Or if you don't have an account yet,
                </p>
                <p style={{ margin: 0 }}>
                    Click&nbsp;
                    <span className={LoginStyle.register}>
                        <Link href="/account/register" underline>here</Link>
                    </span>
                    &nbsp;to create one
                </p>
            </div>
        </LayoutMain>
    );
}

export default Login;
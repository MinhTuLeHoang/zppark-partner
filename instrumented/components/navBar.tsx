import NavBarStyle from 'styles/navbar.module.css';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { isTokenExpired } from 'utilities/token';
import { useRouter } from 'next/router';

interface NavBarProps {
    pageName: string,
}

const NavBar = ({ pageName }: NavBarProps) => {
    const router = useRouter();
    const [isLogin, setIsLogin] = React.useState(false);

    React.useEffect(() => {
        if (isTokenExpired()) {
            localStorage.removeItem("mySession");
            setIsLogin(false);
        }
        else {
            setIsLogin(true);
        }
    }, []);

    const logoutFunc = () => {
        console.log("logout");
        localStorage.removeItem("mySession");
        setIsLogin(false);
        router.push('/');
    }

    if (isLogin) return (
        <div className={NavBarStyle.container} >
            <h1>
                <Link href="/">
                    ZPPark
                </Link>
            </h1>

            <div className={NavBarStyle.loginButton}>
                <p onClick={logoutFunc} style={{marginTop: 0, marginBottom: 0, fontSize: "1.2em"}} id="logoutBtn" >Log Out</p>
            </div>
        </div>
    );
    else if (pageName === "login") return (
            <div className={NavBarStyle.container} >
                <h1>
                    <Link href="/">
                        ZPPark
                    </Link>
                </h1>

                <div className={NavBarStyle.loginButton}>
                    <Link href="/account/register" >Register</Link>
                </div>
            </div>
        );
    else if (pageName === "register" || pageName === "home" || pageName === "forgot") return (
        <div className={NavBarStyle.container} >
            <h1>
                <Link href="/">
                    ZPPark
                </Link>
            </h1>

            <div className={NavBarStyle.loginButton}>
                <Link href="/account/login" >Log In</Link>
            </div>
        </div>
    );
    else
        return (
            <div className={NavBarStyle.container} >
                <h1>
                    <Link href="/">
                        ZPPark
                    </Link>
                </h1>
            </div>
        );
}

export default NavBar;
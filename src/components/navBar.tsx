import NavBarStyle from 'styles/navbar.module.css';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

interface NavBarProps {
    pageName: string,
}

const NavBar = ({ pageName }: NavBarProps) => {
    if (pageName === "login")
        return (
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
    else if (pageName === "register" || pageName === "home" || pageName === "forgot")
        return (
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
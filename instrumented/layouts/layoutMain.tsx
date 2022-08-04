import Footer from "components/footer";
import NavBar from "components/navBar";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { isTokenExpired } from "utilities/token";

const guessPages = ["/", "/account/login", "/account/register", "/account/forgot"];


interface LayoutMainProps {
    children: React.ReactNode;
}

const LayoutMain = ({children}:LayoutMainProps) => {
    const router = useRouter();

    const [isLogin, setIsLogin] = React.useState(false);
    React.useEffect(()=>{
        const mySession = localStorage.getItem("mySession");

        if (mySession == null) {
            let flag = true;
            for (let i=0; i<guessPages.length; i++) {
                if (router.pathname === guessPages[i]) {
                    flag = false;
                }
            }
            if (flag === true) {
                router.push("/account/login");
            }
        }
        if (isTokenExpired()) {
            localStorage.removeItem("mySession");
            setIsLogin(false);
        }
        else {
            setIsLogin(true);
        }
    },[])

    let pageName;
    if (router.pathname === "/") pageName = "home";
    else if(router.pathname === "/account/login") pageName = "login";
    else if(router.pathname === "/account/register") pageName = "register";
    else if(router.pathname === "/account/forgot") pageName = "forgot";
    else pageName = "unknowed";

    return (
        <div style={{height: "fit-content", position: "relative", minHeight: "100%"}}>
            <Head>
                <title>ZPPark Partner Page</title>
                <meta name="description" content="ZPPark partner managing app" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon/site.webmanifest"/>
            </Head>

            <NavBar pageName={pageName}/>

            <main>
                {children}
            </main>

            <Footer/>
        </div>
    );
}

export default LayoutMain;
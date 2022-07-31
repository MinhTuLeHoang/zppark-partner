import Footer from "components/footer";
import NavBar from "components/navBar";
import Head from "next/head";
import { useRouter } from "next/router";


interface LayoutMainProps {
    children: React.ReactNode;
}

const LayoutMain = ({children}:LayoutMainProps) => {
    const router = useRouter();

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
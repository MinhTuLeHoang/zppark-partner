import LayoutMain from "layouts/layoutMain";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    return (
        <LayoutMain>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "57vh"}}>
                <div style={{ margin:"0 auto", display: "flex", flexDirection: "row"}}>
                    <h1 style={{height: "fit-content", margin: "auto 0", paddingRight: "15px"}}>404</h1>
                    <div style={{paddingLeft: "15px", borderLeft: "solid 2px", textAlign: "center"}}>
                        <p style={{marginBottom: "5px"}}>This page could not be found</p>
                        <p style={{marginTop: "5px"}}>
                            You could move&nbsp;
                            <span style={{color: "blue"}} onClick={() => {
                                router.back();
                            }}>
                                Backward
                            </span>
                            &nbsp;or go to&nbsp;
                            <span style={{color: "blue"}}>
                                <Link href="/">HomePage</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}

export default NotFound;
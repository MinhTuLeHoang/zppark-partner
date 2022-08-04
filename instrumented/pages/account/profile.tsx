import React from "react";
import axios from "axios";

import { useRouter } from "next/router";
import LayoutMain from "layouts/layoutMain";
import { Avatar, Button, Card, Checkbox, Container, Image, Input, useInput } from "@nextui-org/react";

import profileStyle from "styles/profile.module.css";
import { getEmail, isTokenExpired } from "utilities/token";

const Profile = () => {
    const router = useRouter();
    const [visibility, setVisibility] = React.useState(false);
    const [isCallAPI, setIsCallAPI] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);

    const passInput = useInput("");

    const changePassFocus = () => {
        setVisibility(true);
        setIsFocused(true);
    }

    const changePassBlur = () => {
        setIsFocused(false);
    }


    // const [token, setToken] = React.useState<String | null>("");
    const [email, setEmail] = React.useState<any>("");
    const [fireEvent, setFireEvent] = React.useState(false);

    React.useEffect(() => {
        // const token = localStorage.getItem("token");
        const email = getEmail();
        // setToken(token);
        setEmail(email);

        if (isTokenExpired()){
            localStorage.removeItem("mySession");
            router.push("/account/login");
        }
    },[])


    const resetPass = async () => {
        await axios.post(`http://34.92.88.6:8080/partners/registration/reset-password`, {
            "email": email,
            "password": passInput.value,
        }
        )
            .then(function (response) {
                // handle success
                console.log("reseted");
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const changePassHandler = () => {
        setFireEvent(true);
    }

    React.useEffect(()=>{
        const cond1 = passInput.value == null || passInput.value == undefined || passInput.value == "";
        const cond2 = isFocused == false;
        if(cond1 && cond2){
            setVisibility(false);
        }
    },[passInput, isFocused])

    React.useEffect(() => {
        if (fireEvent) {
            resetPass();
            setFireEvent(false);
        }
    }, [fireEvent])

    return (
        <LayoutMain>
            <Card style={{ backgroundColor: "white", width: "50%", margin: "0 auto", marginTop: "90px", marginBottom: "60px", overflow: "visible" }}>

                <Card.Body style={{ padding: "30px", paddingTop: "0px", overflow: "visible" }}>
                    <div className={profileStyle.avatar} style={{ position: "relative", top: "-70px", height: "150px" }}>
                        <Avatar
                            style={{ width: "180px", height: "180px", borderWidth: "13px", margin: "0 auto" }}
                            // size="xl"
                            // src="https://i.pravatar.cc/150?u=a042581f4e25056704b"
                            src="/images/0.jpg"
                            color="gradient"
                            bordered
                        />
                    </div>

                    <h1 style={{ margin: "0 auto", marginBottom: "20px" }}>My Profile</h1>

                    <div className={profileStyle.bigTag}>
                        <h2>General Infomation:</h2>
                    </div>

                    <div style={{ width: "75%", margin: "0 auto" }}>
                        <div className={profileStyle.tag}>
                            <h3 style={{ height: "fit-content" }} >Email Address:</h3>
                            <Input aria-label="email" readOnly placeholder={email} initialValue="demopark@sample.com" style={{ paddingLeft: "8px", opacity: "0.8", width: "210px" }} />
                        </div>

                        <div className={profileStyle.tag}>
                            <h3>Full Name:</h3>
                            <Input aria-label="name" readOnly placeholder="Lê Hoàng Minh Tú" initialValue="Lê Hoàng Minh Tú" style={{ paddingLeft: "8px", opacity: "0.8", width: "210px" }} />
                        </div>

                        <div className={profileStyle.tag}>
                            <h3>Change Your Password:</h3>
                            <Input.Password aria-label="password" placeholder="Click to change your password" style={{ paddingLeft: "8px", opacity: "0.8", width: "170px" }} onFocus={changePassFocus} onBlur={changePassBlur} initialValue=""
                            onChange={(event) => {
                                passInput.setValue(event.target.value)
                            }} type="password" />
                        </div>

                        <div className={profileStyle.tag}>
                            <h3 style={{ visibility: "hidden" }}>Change Your Password:</h3>
                            <Button aria-label="changepassbtn" id="myBtn" style={{ paddingLeft: "8px", opacity: "0.8", width: "230px", fontWeight: "bold", display: visibility ? "block" : "none" }} onPress={changePassHandler} >CHANGE</Button>
                        </div>

                    </div>

                    <div className={profileStyle.bigTag}>
                        <h2>Payment Method</h2>
                    </div>

                    <div style={{ width: "75%", margin: "0 auto" }}>
                        <div className={profileStyle.tag}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ marginRight: "20px" }}>
                                    <Image src="/images/zpPay.png" width="fit-content" height="60px" style={{ margin: 0 }} />
                                </div>
                                <h3 style={{ height: "fit-content", margin: "auto 0px" }}>ZaloPay</h3>
                            </div>
                            <Checkbox aria-label="zalopay" defaultSelected isReadOnly />
                        </div>

                        <div className={profileStyle.tag}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ marginRight: "20px" }}>
                                    <Image src="/images/MoMo_Logo.png" width="fit-content" height="60px" style={{ margin: 0 }} />
                                </div>
                                <h3 style={{ height: "fit-content", margin: "auto 0px" }}>MoMo</h3>
                            </div>
                            <Checkbox aria-label="MoMo" isReadOnly color="error"/>
                        </div>

                        <div className={profileStyle.tag}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ marginRight: "20px" }}>
                                    <Image src="/images/vnPay.png" width="fit-content" height="60px" style={{ margin: 0 }} />
                                </div>
                                <h3 style={{ height: "fit-content", margin: "auto 0px" }}>VNPay</h3>
                            </div>
                            <Checkbox aria-label="vnpay" isReadOnly />
                        </div>

                    </div>

                </Card.Body>
            </Card>
        </LayoutMain>
    );
}

export default Profile;
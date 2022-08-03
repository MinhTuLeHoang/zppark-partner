import axios from "axios";

import { Button, Input, Popover, Table, Image, Text, Card, Loading, Modal } from "@nextui-org/react";
import LayoutMain from "layouts/layoutMain";

// import Image from "next/image";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import accountStyle from "styles/account.module.css";
import { getEmail, getToken } from "utilities/token";
import {SearchIcon} from "components/MyIcon";


// export const getStaticProps = async () => {
//     const token:any = getToken();
//     const email:any = getEmail();

//     return {
//         props: {
//             token:token, 
//             email:email,
//         },
//     }
// }

const Account = () => {
    const router = useRouter();

    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");

    const [isDisable, setIsDisable] = useState(true);
    const [searchBarWidth, setSearchBarWidth] = useState("250px");
    const [_document, set_document] = React.useState<any>(null)

    const [parkingList, setParkingList] = React.useState<any>([]);
    const [parkingListShow, setParkingListShow] = React.useState<any>([]);
    const [parkingID, setParkingID] = React.useState<any>("");

    const [caution, setCaution] = React.useState(false);
    const closeCautionHandler = () => {
        setCaution(false);
    }


    const getParkingData = async () => {
        // await axios.get(`https://zppark.live/api/dashboard/parking?partner=${userID}`)
        await axios.get(`https://zppark.live/api/dashboard/parking`
            , { headers: { 'Authorization': 'Bearer ' + token } }
        )
            .then(function (response) {
                // handle success
                if (response.data.data.length == 0) setCaution(true);
                setParkingList(response.data.data);
                setParkingListShow(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    React.useEffect(() => {
        set_document(document)
    }, [])

    React.useEffect(() => {
        if (_document != null) {
            setToken(getToken());
            setEmail(getEmail());
        }
    }, [_document])

    React.useEffect(() => {
        if(token != "" && token != null) {
            getParkingData();
        }
    },[token])


    const searchBarFocus = () => {
        setSearchBarWidth("500px");
    }

    const searchBarBlur = () => {
        setSearchBarWidth("250px");
    }

    const [searchValue, setSearchValue] = useState("");
    const searchHandler = (event: any) => {
        const target = event.target;
        setSearchValue(target.value);
        console.log(target.value);
    }
    const enterPressHandler = (event: any) => {
        console.log(event.key);
        if (event.key === "Enter") {
            event.preventDefault();
            (document.getElementById("lessionSearchBar") as HTMLInputElement).value = "";
            setSearchValue("");
            if (parkingListShow.length > 0) router.push('/compare?parkingID=' + parkingListShow[0].parking_id + '&userID=1');
        }
    }
    React.useEffect(() => {
        let arr = [];
        for (let i = 0; i < parkingList.length; i++) {
            const cond1 = parkingList[i].name.toLowerCase().includes(searchValue.toLowerCase());
            const cond2 = parkingList[i].address.toLowerCase().includes(searchValue.toLowerCase());
            if (cond1 || cond2) {
                arr.push(parkingList[i]);
            }
        }
        setParkingListShow(arr);
    }, [searchValue])


    const selectionHandler: any = (keys: "all" | Set<React.Key>) => {
        if (keys === "all") {
            console.log("full");
            if (isDisable) {
                // setIsDisable(false);
                setIsDisable(true);
            }
        }
        else if (keys.size === parkingList.length) {
            if (isDisable) {
                // setIsDisable(false);
                setIsDisable(true);
            }
        }
        else if (keys.size === 1) {
            if (isDisable) {
                setIsDisable(false);
            }

            const tempParkingID = keys.values().next().value;
            setParkingID(tempParkingID);
        }
        else {
            setIsDisable(true);
        }
    }

    const launchHandler = () => {
        router.push(`/compare?parkingID=${parkingID}`);
    }

    return (
        <LayoutMain>
            <div className={accountStyle.container}>
                <h1 className={accountStyle.sayHi} >Welcome {email} !</h1>

                <div className={accountStyle.row} >
                    <div className={accountStyle.searchBar} >
                        <Input clearable labelPlaceholder="Search for your parking lot" bordered width={searchBarWidth} contentRight={<SearchIcon/>} onFocus={searchBarFocus} onBlur={searchBarBlur} onChange={searchHandler} id="lessionSearchBar" onKeyDown={enterPressHandler} />
                    </div>

                    <div className={accountStyle.btnArea}>
                        <div className={accountStyle.warning} style={{ visibility: !isDisable ? "hidden" : "visible" }}>
                            <Card style={{ marginBottom: 15, width: "max-content" }} >
                                <Card.Body >
                                    <div style={{ display: "flex", flexDirection: "row", paddingLeft: 4, paddingRight: 4 }}>
                                        <Image src="/svg/warning.svg" width={16} height={16} />
                                        <p style={{ marginLeft: 8, verticalAlign: "center" }} >This feature is currently supported for 1 or all parkinglot selected</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <Button disabled={isDisable} onPress={launchHandler} >Launch</Button>
                    </div>
                </div>

                <Table
                    onSelectionChange={selectionHandler}
                    bordered
                    aria-label="Example static compact collection table"
                    selectionMode="multiple"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                >
                    <Table.Header>
                        <Table.Column>NAME</Table.Column>
                        <Table.Column>ADDRESS</Table.Column>
                        <Table.Column>STATUS</Table.Column>
                    </Table.Header>

                    <Table.Body>
                        {
                            parkingListShow.map((item: any) => {
                                return (
                                    <Table.Row key={item.parking_id}>
                                        <Table.Cell>{item.name}</Table.Cell>
                                        <Table.Cell>{item.address}</Table.Cell>
                                        <Table.Cell>Active</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>

                <Modal closeButton open={caution} onClose={closeCautionHandler}>
                    <Modal.Header style={{ paddingTop: "0px", paddingBottom: "15px", color: "red" }}>
                        <h2 >Caution !</h2>
                    </Modal.Header>
                    <Modal.Body style={{ textAlign: "center", color: "gray", paddingBottom: "20px", paddingTop: "20px", height: "150px", borderTop: "solid 2px lightGray" }}>
                        <p style={{margin: "auto auto", textAlign:"center", lineHeight: "1.5em"}}>You haven&lsquo;t register any parkinglot yet, please contact&nbsp;
                        <a href="mailto:zpprakCS@vng.com.vn" target="_blank" rel="noreferrer" className={accountStyle.aLink} >zzpark CS</a>
                        &nbsp;team for support</p>
                    </Modal.Body>
                </Modal>
            </div>
        </LayoutMain>
    );
}

export default Account;
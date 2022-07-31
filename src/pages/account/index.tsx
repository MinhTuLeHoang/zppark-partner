import axios from "axios";

import { Button, Input, Popover, Table, Image, Text, Card, Loading, Modal } from "@nextui-org/react";
import LayoutMain from "layouts/layoutMain";

// import Image from "next/image";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import accountStyle from "styles/account.module.css";


const Account = () => {
    const router = useRouter();
    const { userID } = router.query;

    const [isDisable, setIsDisable] = useState(true);
    const [searchBarWidth, setSearchBarWidth] = useState("250px");
    const [_document, set_document] = React.useState<any>(null)

    const [parkingList, setParkingList] = React.useState<any>([]);
    const [parkingID, setParkingID] = React.useState<any>("");

    const [caution, setCaution] = React.useState(false);
    const closeCautionHandler = () => {
        setCaution(false);
    }

    // const getParkingData = async () => {
    //     const req = await fetch(`https://zppark.live/api/dashboard/parking?partner=${userID}`);
    //     const newData = await req;
    //     const temp = newData.json();

    //     const result = await Promise.all(temp.map(async (item: any) => { }))

    //     return newData.json();

    //     // console.log(newData);
    //     // console.log(newData.json());
    //     // console.log(newData.json().then(data => {
    //     //     let a = data.json();
    //     //     console.log(a);
    //     // }));


    //     // if(newData.status == 200) return setParkingList(newData.json());
    //     // else return setParkingList([]);
    // }

    const getParkingData = async () => {
        await axios.get(`https://zppark.live/api/dashboard/parking?partner=${userID}`)
            .then(function (response) {
                // handle success
                if(response.data.data.length == 0) setCaution(true);
                setParkingList(response.data.data);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    // async function getChapters(parkingList) {
    //     const chapters = await Promise.all(
    //         books.map(async (item) => {
    //             const url = item[1].url
    //             const res = await fetch(url)
    //             const json = await res.json()
    //             return json
    //         })
    //     )

    //     return chapters
    // }

    console.log(parkingList);

    React.useEffect(() => {
        set_document(document)
    }, [])

    React.useEffect(() => {
        if (_document != null && userID != undefined) {
            getParkingData();
            // anotherFetch();
        }
    }, [_document, userID])


    const searchBarFocus = () => {
        setSearchBarWidth("500px");
    }

    const searchBarBlur = () => {
        setSearchBarWidth("250px");
    }

    const selectionHandler: any = (keys: "all" | Set<React.Key>) => {
        if (keys === "all") {
            console.log("full");
            if (isDisable) {
                // setIsDisable(false);
                setIsDisable(true);
            }
        }
        else if (keys.size === parkingList.length) {
            console.log("full");
            console.log(keys);
            if (isDisable) {
                // setIsDisable(false);
                setIsDisable(true);
            }
        }
        else if (keys.size === 1) {
            console.log("only one parking log");
            console.log(keys);
            if (isDisable) {
                setIsDisable(false);
            }

            const tempParkingID = keys.values().next().value;
            setParkingID(tempParkingID);
            // router.push(`/compare?userID=${userID}&parkingID=${parkingID}`);
        }
        else {
            console.log("not supported")
            console.log(keys.size);
            setIsDisable(true);
        }
    }

    const launchHandler = () => {
        router.push(`/compare?userID=${userID}&parkingID=${parkingID}`);
    }

    const temp = 1;

    return (
        <LayoutMain>
            <div className={accountStyle.container}>
                <h1 className={accountStyle.sayHi} >Welcome ID: {userID} !</h1>

                <div className={accountStyle.row} >
                    <div className={accountStyle.searchBar} >
                        <Input clearable labelPlaceholder="Search for your parking lot" bordered width={searchBarWidth} contentRight={<Image src="/svg/searchIcon.svg" width={40} height={40} />} onFocus={searchBarFocus} onBlur={searchBarBlur} />
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
                        <Button disabled={isDisable} onClick={launchHandler} >Launch</Button>
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
                    id="listOfParkingLots"
                >
                    <Table.Header>
                        <Table.Column>NAME</Table.Column>
                        <Table.Column>ADDRESS</Table.Column>
                        <Table.Column>STATUS</Table.Column>
                    </Table.Header>

                    <Table.Body>
                        {
                            parkingList.map((item: any) => {
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
                    <Modal.Header style={{paddingTop: "8px", paddingBottom: "8px", color: "red"}}>
                        <h2 >Caution !</h2>
                    </Modal.Header>
                    <Modal.Body style={{textAlign: "center", color: "gray", paddingBottom: "20px", paddingTop: "20px"}} >You haven't register any parkinglot yet, please contact zzpark CF team for supportion</Modal.Body>
                </Modal>
            </div>
        </LayoutMain>
    );
}

export default Account;
import Image from "next/image";

const SearchIcon = () => {
    return (
        <Image src="/svg/searchIcon.svg" width={40} height={40} />
    )
}

const BackIcon = () => {
    return (
        <Image src="/svg/backIcon.svg" width={25} height={25} />
    );
}

export {SearchIcon, BackIcon};
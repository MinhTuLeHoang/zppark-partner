import Image from "next/image";

const SearchIcon = () => {
    return (
        <Image src="/svg/searchIcon.svg" alt="search icon" width={40} height={40} />
    )
}

const BackIcon = () => {
    return (
        <Image src="/svg/backIcon.svg" alt="forback icon" width={25} height={25} />
    );
}

export {SearchIcon, BackIcon};
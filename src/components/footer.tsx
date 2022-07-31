import Link from "next/link";
import footerStyle from "styles/footer.module.css"
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={footerStyle.container}>

            <div className={footerStyle.subdetail}>
                <div className={footerStyle.block}>
                    <h3 className={footerStyle.title}>Some Pages</h3>

                    <div className={footerStyle.link}>
                        <Link href="/">Account</Link>
                    </div>
                    
                    <div className={footerStyle.link}>
                        <Link href="/courses?course=Intermediate2.4">Setting</Link>
                    </div>

                    <div className={footerStyle.link}>
                        <Link href="/courses?course=Mediate3.1">VIP</Link>
                    </div>
                </div>

                <div className={footerStyle.block}>
                    <h3 className={footerStyle.title}>Help Center</h3>
                    <div className={footerStyle.link}>
                        <Link href="/forum">Forum</Link>
                    </div>
                    
                    <div className={footerStyle.link}>
                        <a href="mailto:tulhm@vng.com.vn" target="_blank" rel="noreferrer">Via Outlook</a>
                    </div>
                </div>

                <div className={footerStyle.block}>
                    <h3 className={footerStyle.title}>Social Media</h3>
                    <div className={footerStyle.link + " " + footerStyle.social}>
                        <a href="https://www.facebook.com/MinhTuLeHoang1302/" target="_blank" className={footerStyle.largeIcon} rel="noreferrer">
                            <Image src="/images/mxh_fb.svg" width="40px" height="40px" alt="fb logo"></Image>
                            <p className={footerStyle.responsive}>Facebook</p>
                        </a>

                        <a href="https://www.instagram.com/minhtu130201/" target="_blank" className={footerStyle.smallIcon} rel="noreferrer">
                            <Image src="/images/mxh_insta.svg" width="50px" height="50px" alt="instagram logo"></Image>
                            <p className={footerStyle.responsive}>Instagram</p>
                        </a>

                        <a href="https://twitter.com/MinhTu1302" target="_blank" className={footerStyle.largeIcon} rel="noreferrer">
                            <Image src="/images/mxh_twitter.svg" width="40px" height="40px" alt="twitter logo"></Image>
                            <p className={footerStyle.responsive}>Twister</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className={footerStyle.bottomdetail}>
                <div className={footerStyle.text}>@ZPPark Partner</div>
                <div>
                    <a className={footerStyle.text}>Policies </a>
                    <span className={footerStyle.text}>and</span>
                    <a className={footerStyle.text}> Privacies</a>
                </div>
            </div>

        </footer>
    );
}

export default Footer;

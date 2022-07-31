import Image from 'next/image';
import welcomeStyle from 'styles/welcome.module.css'

const Welcome = () => {
    return(
        <div className={welcomeStyle.container}>
            <div className={welcomeStyle.center}>
                <div className={welcomeStyle.logo}>
                    <Image src="/images/logo.png" width={260} height={260} />
                </div>
                <div className={welcomeStyle.textField}>
                    <h1>Welcome to ZPPark</h1>
                    <p>Here is place where you can track your data for bussiness dev</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
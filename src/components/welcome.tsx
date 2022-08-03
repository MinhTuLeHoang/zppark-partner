import { Button } from '@nextui-org/react';
import Image from 'next/image';
import welcomeStyle from 'styles/welcome.module.css'
import { useRouter } from 'next/router';

const Welcome = () => {
    const router = useRouter();
    const dashboardBtnOnClick = () => {
        router.push('/account');
    }
    return(
        <div className={welcomeStyle.container}>
            <div className={welcomeStyle.center}>
                <div className={welcomeStyle.logo}>
                    <Image src="/images/logo.png" width={260} height={260} />
                </div>
                <div className={welcomeStyle.textField}>
                    <h1>Welcome to ZPPark</h1>
                    <p>Here is place where you can track your data for bussiness dev</p>
                    <Button onClick={dashboardBtnOnClick} style={{fontSize: "1em", fontWeight: "bold", marginTop: "15px", height:"48px"}}>Go to Dashboard</Button>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
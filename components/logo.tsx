import { ParallaxBanner } from 'react-scroll-parallax';
import styles from './logo.module.css';


export default function Logo() {
    return (
        <ParallaxBanner
            className="your-class"
            layers={[
                {
                    children: (
                        <div className={styles.parallaxChildren}>
                            <h1>WELCOME</h1>
                        </div>
                    ),
                    image: '/images/CA1_5491.jpg',
                    amount: 0.25

                }
            ]}
            style={{
                height: '100vh'
            }}
        >
        </ParallaxBanner>
)}
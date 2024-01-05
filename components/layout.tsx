import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './header';
import SideNav from './sidenav';
import Footer from './footer';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '0'
    }
}));

export default function Layout({ children, headerPicture }) {
    const [sidenavOpen, setSidenavOpen] = useState(false);
    const classes = useStyles();

    return (
        <>
            <Head>
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:locale" content="de_DE" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Padthai Dietikon" />
                <meta property="og:image:type" content="image/jpeg" />
                <link rel="icon" type="image/webp" href="/favicon.webp" />
            </Head>
            <div className={classes.container}>
                {headerPicture}
                <Header setSidenavOpen={setSidenavOpen} sidenavOpen={sidenavOpen} />
                <Container className={classes.container} maxWidth="md">
                    {children}
                </Container>
                <SideNav setSidenavOpen={setSidenavOpen} sidenavOpen={sidenavOpen} />
                <Footer setSidenavOpen={setSidenavOpen} />
            </div>
        </>
    )
}

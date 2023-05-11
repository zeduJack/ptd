import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';

import { linkColorOnWhiteActive } from './navitems';


const useStyles = makeStyles((theme) => ({
    footer: {
        display: 'block',
        fontSize: '1rem',
        backgroundColor: 'rgb(40, 40, 40)',
        color: 'rgba(255, 255, 255, 0.5)'
    },
    copyright: {
        fontSize: '0.8rem',
        textAlign: 'center',
        padding: '2rem 0px',
        backgroundColor: 'rgb(45, 45, 45)'
    },
    info: {
        padding: '2rem 0px'
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        }
    },
    inofPart: {
        fontSize: '0.8rem',
        color: 'white',
        maxWidth: '500px',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            padding: '0 1rem'
        },
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '1.5rem'
        }
    },
    inofPartHeader: {
        paddingBottom: '0.5rem',
        fontSize: '1.2rem'
    },
    icon: {
        display: 'block'
    },
    iconLink: {
        color: 'white',
        textDecoration: 'none'
    }
}));

type Props = {
    setSidenavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer = ({ setSidenavOpen }: Props) => {
    const classes = useStyles();
    return (
        <footer className={classes.footer} onClick={() => setSidenavOpen(false)} >
            <div className={classes.info}>
                <Container className={classes.infoContainer} maxWidth="lg">
                    <div className={classes.inofPart}>
                        <h2 className={classes.inofPartHeader}>ADRESSE</h2>
                        <Typography variant="body1">
                            Badenerstrasse 3<br />
                            8953 Dietikon<br />
                            <a style={{ color: linkColorOnWhiteActive }} target="_blank" href="https://www.google.com/maps/place/Pad+Thai/@47.4052319,8.3974109,17z/data=!3m1!5s0x47900db18c72bff3:0x7e67fb0bc2c900a4!4m8!1m2!2m1!1sBadenerstrasse+3,+8953+Dietikon!3m4!1s0x0:0x660fa599fa6bbbc7!8m2!3d47.4052348!4d8.3995903">Maps</a>
                        </Typography>
                    </div>

                    <div className={classes.inofPart}>
            
                        <h2 className={classes.inofPartHeader}>Kontakt</h2>
                        <Typography variant="body1">

                            <a className={classes.iconLink} href="tel:+41 44 741 88 81">
                                <span className={classes.icon}>
                                    <CallOutlinedIcon fontSize="small"></CallOutlinedIcon>&nbsp;Anrufen
                                </span>
                                <span>+41 44 741 88 81</span>
                            </a>

                            <br />
                            <br />

                            <a className={classes.iconLink} href="mailto:padthaidietikon@gmail.com">
                                <span className={classes.icon}>
                                    <MailOutlineIcon fontSize="small"></MailOutlineIcon>&nbsp;E-Mail schreiben
                                </span>
                                <span>padthaidietikon@gmail.com</span>
                            </a>


                        </Typography>
                    </div>

                    <div className={classes.inofPart}>
                        <h3 className={classes.inofPartHeader}>ÖFFNUNGSZEITEN</h3>
                        <Typography variant="body1">
                            Di - Fr 11:00 - 14:00 / 17:00 - 22:00<br />
                            Sa - So 12:00 - 22:00<br />
                            Montag geschlossen
                        </Typography>
                    </div>
                </Container>
            </div>

            <Typography className={classes.copyright} variant="h3" component="div">Copyright 2021 by padthai-dietikon.ch</Typography>
        </footer>
    )
}

export default Footer;
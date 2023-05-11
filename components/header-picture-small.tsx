import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    imageBackground: {
        height: '40vh',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    },
    headerText: {
        fontFamily: '"Finger Paint", cursive',
        fontSize: '2rem',
        fontWeight: 400,
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '5rem',
        }
    },
    layer: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));


export function HeaderPictureSmall({ h1, imagePaht }) {
    const styles = useStyles();
    return (
        <div className={styles.imageBackground} style={{ backgroundImage: 'url("' + imagePaht + '")' }}>
            <div className={styles.layer}>
                <h1 className={styles.headerText}>{h1}</h1>
            </div>
        </div>
    )
}
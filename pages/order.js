import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import { HeaderPictureSmall } from '../components/header-picture-small';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  iconLink: {
    fontSize: '1.5rem',
    marginTop: '1rem'
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  margin: {
    margin: '1rem',
    marginBottom: '3rem'
  },
  text: {
    textAlign: 'center'
  },
  lieferpartnerLogo: {
    width: '150px',
    maxWidth: '45vw'
  },
  lieferpartner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spacer: {
    height: '1rem'
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  },
  icon: {
    width: '50px'
  }
}));


export default function Home() {
  const siteTitle = 'Bestellen | Take-Away und Home-Delivery';
  const siteDescription = 'Wir sind Wi & Aek und fürhren den kleinen aber fienen Familienbetrieb in Dietikon. Kommen Sie vorbei und lernen Sie uns kennen.';
  const headerImageRelativePath = '/CA1_5930.jpg';
  const classes = useStyles();
  return (
    <Layout headerPicture={
      <HeaderPictureSmall imagePaht={'/images' + headerImageRelativePath} h1={<span className={classes.flex}><span>TAKE-AWAY &</span><span>DELIVERY</span></span>} />
    }>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />

        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content="https://padthai-dietikon.ch/order" />
        <meta property="og:image" content={'https://padthai-dietikon.ch/images/small' + headerImageRelativePath} />
        <meta property="og:image:width" content="2000" />
        <meta property="og:image:height" content="1335" />
      </Head>

      <main className={[styles.main, classes.main].join(' ')}>
        <div className={[classes.flex, classes.margin].join(' ')}>
          <FontAwesomeIcon size="4x" icon={faShoppingBag} />
          <h2>TAKE-AWAY</h2>

          <span className={classes.text}>Sie können das Essen unter der folgenden Nummer auch vorbestellen:</span>

          <a className={classes.iconLink} href="tel:+41 44 741 88 81">
            <span>+41 44 741 88 81</span>
          </a>
        </div>

        <div className={[classes.flex, classes.margin].join(' ')}>
          <FontAwesomeIcon size="4x" icon={faMotorcycle} />
          <h2>DELIVERY</h2>

          <span className={classes.text}>Bestellen Sie online bei unserem Lieferpartner:</span>

          <div className={classes.lieferpartner}>
            <a className={classes.lieferpartnerLogo} href="https://www.smood.ch/de/lieferung-wegnehmen/restaurants/zurich/pad-thai-restaurant" target="_blank">
              <img className={classes.lieferpartnerLogo} src="/images/smood-logo.svg" alt="Smood" />
            </a>

            <a href="https://www.just-eat.ch/speisekarte/pad-thai-restaurant" target="_blank">
              <img className={classes.lieferpartnerLogo} src="/images/eat-logo.png" alt="Smood" />
            </a>
          </div>

        </div>
      </main>

    </Layout>
  )
}

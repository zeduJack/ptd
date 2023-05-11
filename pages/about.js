import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import { HeaderPictureSmall } from '../components/header-picture-small';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  description: {
    fontSize: '1.2rem',
    textAlign: 'center'
  },
  title: {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginTop: '2rem'
  }
}));


export default function Home() {
  const siteTitle = 'Über uns | Padthai Dietikon - Thai Restaurant in Dietikon';
  const siteDescription = 'Wir sind Wi & Aek und fürhren den kleinen aber fienen Familienbetrieb in Dietikon. Kommen Sie vorbei und lernen Sie uns kennen.';
  const headerImageRelativePath = '/AdobeStock_265582332.jpg';
  const classes = useStyles();
  return (
    <Layout headerPicture={
      <HeaderPictureSmall imagePaht={'/images' + headerImageRelativePath} h1="ÜBER UNS" />
    }>
        <Head>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />

          <meta property="og:title" content={siteTitle}/>
          <meta property="og:description" content={siteDescription}/>
          <meta property="og:url" content="https://padthai-dietikon.ch/about" />
          <meta property="og:image" content={'https://padthai-dietikon.ch/images/small' + headerImageRelativePath } />
          <meta property="og:image:width" content="2000"/>
          <meta property="og:image:height" content="1335" />
        </Head>

        <main className={styles.main}>

          <p className={styles.description}>
            Das 'Padthai' in Dietikon wurde im Jahr 2018 gegründet. <br />
            {/* Wir sind ein Familienunternehmen ... */}
          </p>

          <h2 className={classes.title}>
            Ihre freundlichen Gastgeber <br />
            Wi & Aek <br />
            freuen sich auf Ihren Besuch 😀
          </h2>

          <Container maxWidth="lg" classes={{ root: classes.root }}>
            <img className={styles.responsiveImage} alt="Ihre Gastgeber" src="/images/CA1_5468.jpg" />
          </Container>
        </main>

    </Layout>
  )
}

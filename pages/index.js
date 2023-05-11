import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Logo from '../components/logo';
import Link from 'next/link';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { menu } from '../menu-data';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  marginTop3Rem: {
    marginTop: '3rem'
  },
  description: {
    fontSize: '1.5rem',
    textAlign: 'center',
    fontWeight: '500'
  },
  title: {
    fontSize: '1.2rem',
    textAlign: 'center'
  },
  imageLink: {
    height: '30vh',
    padding: '0 1rem',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    margin: '3px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '2.5rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
      width: '50vw'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem',
    }
  },
  main: {
    padding: '0px',
    margin: '0 2rem',
    [theme.breakpoints.up('lg')]: {
      margin: '0 0',
    },
  },
  links: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  }
}));

const useStylesCard = makeStyles((theme) => ({
  root: {
    marginBottom: '2rem',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 345,
      margin: '2rem',
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  imagesDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      padding: '2rem',
      paddingTop: '0'
    }
  }
}));

const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

export default function Home() {
  const siteTitle = 'Padthai Dietikon - Thai Restaurant und Take-Away in Dietikon';
  const siteDescription = 'Authentische Thai Gerichte in Dietikon. Fühlen Sie sich wie in Thalinad. Lieferung und Take-Away möglich.';
  const headerImageRelativePath = '/CA1_5491.jpg';
  const classes = useStyles();
  const classesCard = useStylesCard();

  const menuFlat = menu.abschnitte.map(item => item.menus).flat();
  const menuObjects = convertArrayToObject(menuFlat, 'id');

  return (
    <Layout headerPicture={
      <>
        <Logo />
        <div className={classes.links}>
          <Link href="/about">
            <a className={classes.imageLink} style={{ backgroundImage: 'url(/images/AdobeStock_265582332.jpg)' }}>
              <ThemeProvider theme={theme}>
                <Typography variant="h2">ÜBER UNS</Typography>
              </ThemeProvider>
            </a>
          </Link>

          <Link href="/order">
            <a className={classes.imageLink} style={{ backgroundImage: 'url(/images/CA1_5930.jpg)' }}>
              <ThemeProvider theme={theme}>
                <Typography variant="h2">JETZT BESTELLEN</Typography>
              </ThemeProvider>
            </a>
          </Link>
        </div>
      </>
    } >
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />

        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content="https://padthai-dietikon.ch" />
        <meta property="og:image" content={'https://padthai-dietikon.ch/images/small' + headerImageRelativePath } />
        <meta property="og:image:width" content="2000" />
        <meta property="og:image:height" content="1334" />
      </Head>

      <main className={[styles.main, classes.main].join(' ')}>
        <h2 className={classes.description}>Lernen Sie alle Facetten der gesunden und schmackhaften Thai-Küche kennen!</h2>

        <p className={styles.description}>
          Authentische Thai-Küche aus traditionell thailändischen Gerichten wie Som Tam,
          dem berühmten Papayasalat, bishin zur Tom Ka Gai Suppe oder den
          gebratenen Pad Thai Reisbandnudeln.
            </p>

        <p className={styles.description}>
          Das freundliche Personal berät Sie gerne bei der Auswahl Ihres Gerichtes.
          Nehmen Sie im Restaurant Platz oder geniessen Sie im Sommer die Sonne auf
          unserer gemütlichen Terrasse und fühlen Sie sich wie in den Ferien.
          </p>

        <p className={styles.description}>
          Das Pad Thai Dietikon Team freut sich auf Ihren Besuch!
        </p>

        <h2 className={[classes.description, classes.marginTop3Rem].join(' ')}>Einige Bilder unserer Menüs</h2>

        <div className={classesCard.imagesDiv}>
          <Card className={classesCard.root}>
            <CardHeader
              title={menuObjects['36'].titel}
              subheader={menuObjects['36'].titelThai}
            />
            <CardMedia
              className={classesCard.media}
              image={menuObjects['36'].bild}
              title={menuObjects['36'].titel}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {menuObjects['36'].beschreibung}
              </Typography>
            </CardContent>
          </Card>

          <Card className={classesCard.root}>
            <CardHeader
              title="Tom Yam Kung"
              subheader="ต้มยำกุ้ง"
            />
            <CardMedia
              className={classesCard.media}
              image="/images/CA1_5327.jpg"
              title="Tom Yam Kung"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Suppe mit Crevetten, Chilipaste, Pilzen, Zitronengrass, Limettenblättern, Galangal, Tomaten, Zwiebeln und Koriander.
              </Typography>
            </CardContent>
          </Card>

          <Card className={classesCard.root}>
            <CardHeader
              title={menuObjects['07'].titel}
              subheader={menuObjects['07'].titelThai}
            />
            <CardMedia
              className={classesCard.media}
              image={menuObjects['07'].bild}
              title={menuObjects['07'].titel}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {menuObjects['07'].beschreibung}
              </Typography>
            </CardContent>
          </Card>

          <Card className={classesCard.root}>
            <CardHeader
              title={menuObjects['11'].titel}
              subheader={menuObjects['11'].titelThai}
            />
            <CardMedia
              className={classesCard.media}
              image={menuObjects['11'].bild}
              title={menuObjects['11'].titel}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {menuObjects['11'].beschreibung}
              </Typography>
            </CardContent>
          </Card>

          <Card className={classesCard.root}>
            <CardHeader
              title={menuObjects['44'].titel}
              subheader={menuObjects['44'].titelThai}
            />
            <CardMedia
              className={classesCard.media}
              image={menuObjects['44'].bild}
              title={menuObjects['44'].titel}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {menuObjects['44'].beschreibung}
              </Typography>
            </CardContent>
          </Card>

          <Card className={classesCard.root}>
            <CardHeader
              title={menuObjects['32'].titel}
              subheader={menuObjects['32'].titelThai}
            />
            <CardMedia
              className={classesCard.media}
              image={menuObjects['32'].bild}
              title={menuObjects['32'].titel}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {menuObjects['32'].beschreibung}
              </Typography>
            </CardContent>
          </Card>

          <Card className={classesCard.root}>
            <CardHeader
              title={menuObjects['33'].titel}
              subheader={menuObjects['33'].titelThai}
            />
            <CardMedia
              className={classesCard.media}
              image={menuObjects['33'].bild}
              title={menuObjects['33'].titel}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {menuObjects['33'].beschreibung}
              </Typography>
            </CardContent>
          </Card>

          <Card className={classesCard.root}>
            <CardHeader
              title={menuObjects['50'].titel}
              subheader={menuObjects['50'].titelThai}
            />
            <CardMedia
              className={classesCard.media}
              image={menuObjects['50'].bild}
              title={menuObjects['50'].titel}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {menuObjects['50'].beschreibung}
              </Typography>
            </CardContent>
          </Card>

          <Card className={classesCard.root}>
            <CardHeader
              title={menuObjects['42'].titel}
              subheader={menuObjects['42'].titelThai}
            />
            <CardMedia
              className={classesCard.media}
              image={menuObjects['42'].bild}
              title={menuObjects['42'].titel}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {menuObjects['42'].beschreibung}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </main>
    </Layout>
  )
}

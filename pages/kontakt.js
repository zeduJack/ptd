import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import { HeaderPictureSmall } from '../components/header-picture-small';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// https://github.com/sarneeh/reaptcha/tree/master/lib
import Reaptcha from 'reaptcha';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    '& > *': {
      margin: '0.3rem 0',
      width: '100%'
    }
  },
  button: {
    [theme.breakpoints.up('sm')]: {
      width: '20rem'
    }
  },
  recaptcha: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export default function Home() {

  const siteTitle = 'Kontakt | Padthai Dietikon - Thai Restaurant in Dietikon';
  const siteDescription = 'Wir freuen uns auf Ihren Kontakt per Formular, Telefo oder E-Mail.';
  const headerImageRelativePath = '/CA1_5486.jpg';
  const emptyForm = { name: '', email: '', message: '' };

  const classes = useStyles();
  const [post, setPost] = useState(emptyForm);
  const [successSnackbarOpen, setSuccessSnackbarOpen] = React.useState(false);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = React.useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = React.useState(false);
  const [recaptchaResponse, setRecaptchaResponse] = React.useState(undefined);
  const [errorMessage, setErrorMessage] = React.useState(undefined);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorSnackbarOpen(false);
    setSuccessSnackbarOpen(false);
  };

  const submit = async (e) => {
    setErrorMessage(undefined);
    e.preventDefault()
    console.log(post);

    const res = await fetch('/api/5482cc8f6f7f424c9536b564ccbf4b57', {
      body: JSON.stringify({
        name: post.name,
        email: post.email,
        message: post.message,
        captcha: recaptchaResponse
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json();

    if (result.status === 'SENT') {
      setPost(emptyForm);
      setSuccessSnackbarOpen(true);
    } else {
      if (result.status === 'RECAPTCHAVALIDATIONERROR') {
        setErrorMessage('Bitte bestätigen Sie, dass die Eingabe nicht maschinell erfolgt.');
      }
      setErrorSnackbarOpen(true);
    }
  }

  const onVerify = recaptchaResponse => {
    setRecaptchaVerified(true);
    setRecaptchaResponse(recaptchaResponse);
  };

  return (
    <Layout headerPicture={
      <HeaderPictureSmall imagePaht={'/images' + headerImageRelativePath} h1="KONTAKT" />
    }>


      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />

        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content="https://padthai-dietikon.ch/kontakt" />
        <meta property="og:image" content={'https://padthai-dietikon.ch/images/small' + headerImageRelativePath} />
        <meta property="og:image:width" content="2000" />
        <meta property="og:image:height" content="1333" />
      </Head>

      <main className={styles.main}>

        <Container maxWidth="lg" classes={{ root: classes.root }}>
          <h2>Mitteilung senden</h2>
          <form onSubmit={submit} autoComplete="on" className={classes.form}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="name"
              required
              value={post.name}
              onChange={e => setPost({ ...post, name: e.target.value })} />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-Mail"
              autoComplete="email"
              required
              value={post.email}
              onChange={e => setPost({ ...post, email: e.target.value })} />
            <textarea
              id="message"
              name="message"
              placeholder="Mitteilung"
              rows="10"
              required
              value={post.message}
              onChange={e => setPost({ ...post, message: e.target.value })} />
            <br />
            <Reaptcha className={classes.recaptcha} sitekey="6Ldrn3QbAAAAAPwDd__aeDd-zmfbVt9GR4-aSLgH" onVerify={onVerify} />
            <button className={classes.button} type="submit">Senden</button>
          </form>
          <Snackbar open={successSnackbarOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Mitteilung gesendet.
            </Alert>
          </Snackbar>

          <Snackbar open={errorSnackbarOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              {errorMessage || 'Fehler beim Senden der Mitteilung. Bitte versuchen Sie es später nochmals oder kontaktieren Sie uns per Telefon.'}
            </Alert>
          </Snackbar>
        </Container>
      </main>
    </Layout>
  )
}

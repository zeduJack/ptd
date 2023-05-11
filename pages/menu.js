import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import { menu } from '../menu-data';
import React from 'react';
import { HeaderPictureSmall } from '../components/header-picture-small';

export default function Home() {
  const siteTitle = 'Menü | Padthai Dietikon - Thai Restaurant in Dietikon';
  const siteDescription = 'Grosse Auswahl an authentisch thailändischen Gerichten in Dietikon.';
  const headerImageRelativePath = '/CA1_5493.jpg';
  return (
    <Layout headerPicture={
      <HeaderPictureSmall imagePaht={'/images' + headerImageRelativePath} h1="MENU" />
    }>

      <div className={styles.container}>

        <Head>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />

          <meta property="og:title" content={siteTitle}/>
          <meta property="og:description" content={siteDescription}/>
          <meta property="og:url" content="https://padthai-dietikon.ch/menu/" />
          <meta property="og:image" content={'https://padthai-dietikon.ch/images/small' + headerImageRelativePath } />
          <meta property="og:image:width" content="2000"/>
          <meta property="og:image:height" content="1334" />
        </Head>

        <main className={styles.main}>

          {menu.abschnitte.map((abschnitt, abschnittIndex) => {
            return (
              <React.Fragment key={abschnittIndex}>
                <h2 className={styles.title}>
                  {abschnitt.titel}
                </h2>
                <div className={styles.grid}>
                  {abschnitt.menus.map((menu, menuIndex) => (
                    <div key={menuIndex} className={styles.card}>
                      <h3>
                        {menu.id}.&nbsp;{menu.titel}
                        <br />
                        {menu.titelThai}
                      </h3>
                      <p>
                        {menu.beschreibung}
                        <br />
                        {(menu.preis.aufzaehlung && menu.preis.aufzaehlung.length > 0) &&
                          menu.preis.aufzaehlung.map((a, aIndex) => (
                            <span key={aIndex} className={styles.priesAufzaehlung}>{a}</span>
                          ))
                        }
                        <span className={styles.pries}>{menu.preis.einheitspreis}{menu.preis.klein}{menu.preis.gross && <span>&nbsp; / &nbsp;</span>}{menu.preis.gross}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            )
          }
          )}
        </main>
      </div>
    </Layout>
  )
}

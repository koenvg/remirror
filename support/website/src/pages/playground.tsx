import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import AnnouncementBar from '@theme/AnnouncementBar';
import Footer from '@theme/Footer';
import Navbar from '@theme/Navbar';
import ThemeProvider from '@theme/ThemeProvider';
import UserPreferencesProvider from '@theme/UserPreferencesProvider';
import clsx from 'clsx';
import React from 'react';

import { Playground } from '@remirror/playground';

import styles from './playground.module.css';

const PlaygroundPage = (props: any) => {
  const { siteConfig } = useDocusaurusContext();
  const { favicon, url: siteUrl } = siteConfig!;
  const defaultImage = siteConfig?.themeConfig?.image;
  const { noFooter, description, image, keywords, permalink, version } = props;
  const metaImage = image || defaultImage;
  const metaImageUrl = useBaseUrl(metaImage, { absolute: true });
  const faviconUrl = useBaseUrl(favicon);

  return (
    <div className={clsx('playground', styles.playground)}>
      <ThemeProvider>
        <UserPreferencesProvider>
          <Head>
            {/* TODO: Do not assume that it is in english language site */}
            <html lang='en' />
            <script src='https://unpkg.com/@babel/standalone/babel.min.js'></script>
            <script src='https://unpkg.com/prettier@2.1.2/standalone.js'></script>
            <script src='https://unpkg.com/prettier@2.1.2/parser-typescript.js'></script>
            <title>Remirror Playground</title>
            <meta property='og:title' content='Remirror Playground' />
            {favicon ?? <link rel='shortcut icon' href={faviconUrl} />}
            {description ?? <meta name='description' content={description} />}
            {description ?? <meta property='og:description' content={description} />}
            {version ?? <meta name='docsearch:version' content={version} />}
            {keywords?.length ?? <meta name='keywords' content={keywords?.join(',')} />}
            {metaImage ?? <meta property='og:image' content={metaImageUrl} />}
            {metaImage ?? <meta property='twitter:image' content={metaImageUrl} />}
            {metaImage ?? <meta name='twitter:image:alt' content='Image for Remirror Playground' />}
            {permalink ?? <meta property='og:url' content={siteUrl + permalink} />}
            {permalink ?? <link rel='canonical' href={siteUrl + permalink} />}
            <meta name='twitter:card' content='summary_large_image' />
          </Head>
          <AnnouncementBar />
          <Navbar />
          <Head></Head>
          <div
            className='custom-main-wrapper'
            style={{
              /* TODO: move this to CSS, make sensible */
              position: 'relative',
              height: 'calc(100vh - 17rem + 3px)',
              minHeight: '400px',
            }}
          >
            <Playground />
          </div>
          {!noFooter && <Footer />}
        </UserPreferencesProvider>
      </ThemeProvider>
    </div>
  );
};

export default PlaygroundPage;

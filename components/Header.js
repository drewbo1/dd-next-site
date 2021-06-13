import React, { Fragment } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <meta
          httpEquiv='Content-Type'
          content='text/html;
        charset=utf-8'
        />
        <meta
          name='viewport'
          content='width=device-width,
        initial-scale=1'
        />
        <meta
          name='description'
          content='Dog Destinations is an app that lets you share, find, like and review great locations for you and
                      your dog'
        />
        <title>
          Dog Destinations | Share, find, like and review great locations for
          you and your dog
        </title>
        <meta property='og:title' content='Dog Destinations' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.dogdestinations.co.uk' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dujftalas/image/upload/v1619904067/mainLogo_q77klp.png'
        />
        <meta
          property='og:description'
          content='Dog Destinations is an app that lets you share, find, like and review great locations for you and
                      your dog'
        />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <nav>
        <div className='logo'>
          <Image
            src='v1622472450/logo2black_kn3nkw.png'
            alt='logo'
            width={100}
            height={100}
          />
        </div>
        <Link href='/'>
          <a
            className={router.pathname == '/' ? 'active' : ''}
            style={{ textDecoration: 'none' }}
          >
            Home
          </a>
        </Link>
      </nav>
    </Fragment>
  );
};

export default Header;

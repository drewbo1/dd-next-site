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

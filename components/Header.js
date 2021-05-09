import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav>
      <div className='logo'>
        <Image
          src='https://res.cloudinary.com/dujftalas/image/upload/v1619639711/logo2black_kn3nkw.png'
          alt='logo'
          width={100}
          height={100}
        />
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/privacy'>
        <a>Privacy</a>
      </Link>
    </nav>
  );
};

export default Header;

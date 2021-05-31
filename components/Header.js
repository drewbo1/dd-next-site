import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav>
      <div className='logo'>
        <Image
          src='https://res.cloudinary.com/dujftalas/image/upload/v1622472450/logo2black_kn3nkw.png'
          alt='logo'
          width={100}
          height={100}
        />
      </div>
      <Link href='/'>
        <a style={{ textDecoration: 'none' }}>Home</a>
      </Link>
      <Link href='/privacy'>
        <a style={{ textDecoration: 'none' }}>Privacy</a>
      </Link>
    </nav>
  );
};

export default Header;

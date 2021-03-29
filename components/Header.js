import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/logo2black.png' alt='logo' width={100} height={100} />
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </nav>
  );
};

export default Header;

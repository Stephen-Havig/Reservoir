import React from 'react';
import Link from 'next/link';
import Navbar from './navbar/navbar';

const HomePage: React.FC = () => {
  return (
<div>
  <div>
    <Navbar />
  </div>
      <h1>Welcome to my Next.js app!</h1>
      <p>
        Click the link below to go to the "budget" page:
        <Link href="/budget">
          Budget Page
        </Link>
      </p>
    </div>
  );
};

export default HomePage;

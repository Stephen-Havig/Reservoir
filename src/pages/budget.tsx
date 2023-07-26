import React from 'react';
import Link from 'next/link';
import Navbar from './navbar/navbar';

const BudgetPage: React.FC = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
      <h1>Welcome to the budget page</h1>
    </div>
  );
};

export default BudgetPage;
import React from 'react';
import Link from 'next/link';

const BudgetPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the budget page</h1>
        <Link href="/">
          Home Page
        </Link>
    </div>
  );
};

export default BudgetPage;
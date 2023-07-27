import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Navbar from './navbar/navbar';

const BudgetPage: React.FC = () => {

    const [budget, setBudget] = useState({});

    useEffect(() => {
        try{
            const loadBudget = async () => {
                await fetch(`/api/obtainBudgetData`)
                .then(data => data.json())
                .then(data => {
                    setBudget(data)
                })
            }
            loadBudget();
        } catch {

        }
    }, [])

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
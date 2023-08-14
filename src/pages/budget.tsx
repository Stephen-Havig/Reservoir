import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from './navbar/navbar';
import prisma from '../../lib/prisma';
import { budget_table } from '@prisma/client';

const BudgetPage: React.FC = () => {
    const [budgetData, setBudgetData] = useState<budget_table[]>([]);

    useEffect(() => {
        async function fetchBudgetData() {
            try {
                const fetchedBudgetData = await prisma.budget_table.findMany();
                setBudgetData(fetchedBudgetData);
            } catch (error) {
                console.error('Error fetching budget data:', error);
            }
        }

        fetchBudgetData();
    }, []);

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <h1>Welcome to the budget page</h1>
            <ul>
                {budgetData.map((entry) => (
                    <li key={entry.id}>
                        {entry.name.toString()} {entry.monthlyallotment_.toString()} {entry.savedpool?.toString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BudgetPage;

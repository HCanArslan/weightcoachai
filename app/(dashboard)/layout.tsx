"use client";

import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import React, { ReactNode } from 'react';
import Dashboard from './(routes)/dashboard/page';
import { SignedIn } from '@clerk/nextjs';

type DashboardLayoutProps = {
    children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className='h-full relative'>
            <SignedIn>
                
            </SignedIn>
            {/* Add your header component here */}
            <div className='hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900 md:w-72'>
            <Sidebar />
            </div>
            <main className='md:pl-72 space-4 gap-4'>
            <Navbar title="Your Title Here" />
            <Dashboard />
            </main>
            
            
            
            {/* Add your footer component here */}
        </div>
    );
};

export default DashboardLayout;
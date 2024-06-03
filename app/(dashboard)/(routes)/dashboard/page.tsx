"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import ProgressChart from '@/components/ProgressChart';
import NutritionPlanStatistics from '@/components/NutritionPlanStatistics';
import DailyProgress from '@/components/DailyProgress';
import CalendarWidget from '@/components/CalendarWidget';
import Schedule from '@/components/Schedule';

const DashboardPage = () => {
  return (
     <div>
       <div className='space-y-4'>
        <SignedIn>
        <section className="flex flex-wrap gap-8 justify-center">
            <div className="w-full lg:w-2/3">
              <ProgressChart />
            </div>
            <div className="w-full lg:w-1/4 mt-16">
              <DailyProgress />
            </div>
          </section>
          <section className="flex gap-8 justify-center items-stretch m-16">
            <div className="flex-1 min-h-full">
              <NutritionPlanStatistics />
            </div>
            <div className="flex-1 min-h-full">
              <CalendarWidget />
            </div>
            <div className="flex-1 min-h-full">
              <Schedule />
            </div>
          </section>
      </SignedIn>
      <SignedOut>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Please sign in to access your dashboard</h1>
            <SignInButton mode="modal" >
              <button className="btn btn-primary">Sign In</button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>
      </div>
     </div>
  );
};

export default DashboardPage;

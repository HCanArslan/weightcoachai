"use client";

import Link from 'next/link';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {

  return (
    <section
      className="py-section relative w-full h-screen bg-cover bg-center bg-no-repeat md:bg-[url('/hero-image.png')] bg-[url('/hero-image-mobile.png')]"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-left h-full">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-bold mb-4 text-darkGray text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            Personalized <br /> Nutrition Coaching<br />
            <span className="inline-block">Powered by <span className='bg-orange text-white rounded-sm'>AI</span></span>

            <span className="inline-block text-white brushing-effect">
              AI
            </span>

          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray mb-8">
            Achieve your health goals with tailored plans designed just for you.
          </p>
          <Link href="/sign-up" passHref>
            <Button className="bg-ctaBlue text-white py-3 px-8 rounded-md font-bold hover:bg-ctaBlueHover transition duration-300">Get Started</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

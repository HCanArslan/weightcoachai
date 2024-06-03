"use client";


import { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const plans = [
    {
      name: 'Starter',
      description: 'Kickstart your health journey',
      monthlyPrice: '$49/mo',
      yearlyPrice: '$33/mo',
      yearlyDiscount: '4 months off',
      yearlyBilling: '$396 billed annually',
      monthlyBilling: '$49 billed monthly',
      features: [
        'Personalized nutrition plans',
        'AI-driven insights',
        'Weight tracking',
        'Email support',
      ],
    },
    {
      name: 'Advanced',
      description: 'Elevate your health goals',
      monthlyPrice: '$69/mo',
      yearlyPrice: '$49/mo',
      yearlyDiscount: '4 months off',
      yearlyBilling: '$588 billed annually',
      monthlyBilling: '$69 billed monthly',
      features: [
        'All features in Starter',
        'Advanced performance analytics',
        'Priority email support',
        'Access to exclusive content',
      ],
    },
    {
      name: 'Pro',
      description: 'Achieve peak performance',
      monthlyPrice: '$99/mo',
      yearlyPrice: '$69/mo',
      yearlyDiscount: '5 months off',
      yearlyBilling: '$828 billed annually',
      monthlyBilling: '$99 billed monthly',
      features: [
        'All features in Advanced',
        'Personalized coaching sessions',
        '24/7 priority support',
        'Health plan customization',
      ],
    },
  ];

  return (
    <section className="bg-bodyBackground py-section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-6xl font-bold text-headlineText mb-8">Choose a plan and start your health journey today</h2>
        <p className="text-xl text-bodyText mb-16">Select a subscription plan that best fits your needs. Save more by paying yearly.</p>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsYearly(false)}
            className={`py-2 px-8 rounded-l-full transition duration-300 ${!isYearly ? 'bg-ctaBlue text-white shadow-lg' : 'bg-gray-200 text-gray-700'
              } hover:bg-ctaBlueHover hover:text-white`}
          >
            Pay monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`py-2 px-8 rounded-r-full transition duration-300 ${isYearly ? 'bg-ctaBlue text-white shadow-lg' : 'bg-gray-200 text-gray-700'
              } hover:bg-ctaBlueHover hover:text-white`}
          >
            Pay yearly
          </button>
        </div>
        <p className="text-gray-600 mb-12">Get up to <span className="font-bold">5 months off</span> by paying yearly</p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 transform transition duration-300 hover:scale-105">
              <div className={`p-2 rounded-t-lg ${index === 0 ? 'bg-third text-gray' : index === 1 ? 'bg-orange text-white' : 'bg-third text-gray'}`}>
                {plan.yearlyDiscount}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-headlineText mb-4">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <p className="text-4xl font-bold text-headlineText mb-4">
                  <span className="line-through text-gray-400">{isYearly ? plan.monthlyPrice : plan.yearlyPrice}</span> {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </p>
                <p className="text-gray-600 mb-4">{isYearly ? plan.yearlyBilling : plan.monthlyBilling}</p>
                <Link href="/sign-up" passHref>
                  <Button className="bg-ctaBlue text-white py-3 px-8 rounded-md font-bold hover:bg-ctaBlueHover transition duration-300">Get Started</Button>
                </Link>
                <ul className="text-left mt-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

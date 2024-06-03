"use client";


import { useState } from 'react';
import { Button } from './ui/button'; 

const JoinWaitlistSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send the email to your server or a service like Mailchimp
    console.log('Email submitted:', email);
  };

  return (
    <section className="bg-bodyBackground py-section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-6xl font-bold text-headlineText mb-8">Join the Waitlist</h2>
        <p className="text-xl text-bodyText mb-16">
          Be the first to know when we launch! Join our waitlist to get early access and updates.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center md:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-1/2 p-4 mb-4 md:mb-0 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ctaBlue"
            required
          />
          <Button
            type="submit"
            className="py-3 px-6 bg-ctaBlue text-white font-bold rounded-md hover:bg-ctaBlueHover"
          >
            Join Waitlist
          </Button>
        </form>
      </div>
    </section>
  );
};

export default JoinWaitlistSection;

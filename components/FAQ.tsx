"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    { question: 'What is WeightCoachAI?', answer: 'WeightCoachAI is an AI-powered personalized nutrition and weight loss coaching service designed to help you achieve your health goals efficiently.' },
    { question: 'How does WeightCoachAI create personalized plans?', answer: 'Our AI analyzes your dietary needs, preferences, and goals to create customized meal plans and exercise routines that are tailored specifically to you.' },
    { question: 'Is WeightCoachAI available on mobile devices?', answer: 'Yes, WeightCoachAI is available as a web application accessible on all major browsers. A dedicated mobile app is planned for future release.' },
    { question: 'What is the cost of WeightCoachAI?', answer: 'WeightCoachAI offers a freemium model with premium subscriptions available at $39.99 per month for advanced features and personalized coaching.' },
    { question: 'How do I track my progress with WeightCoachAI?', answer: 'You can track your weight loss and fitness progress through our comprehensive dashboard that provides detailed analytics and insights.' },
    { question: 'Can I integrate WeightCoachAI with other fitness apps?', answer: 'Yes, WeightCoachAI is designed to integrate with popular fitness apps and devices to provide a seamless experience.' },
    { question: 'How secure is my data with WeightCoachAI?', answer: 'Your data security is our top priority. We use state-of-the-art encryption and security protocols to ensure your information is safe and private.' },
    { question: 'What kind of support is available for WeightCoachAI users?', answer: 'We offer 24/7 customer support through chat and email to assist you with any questions or issues you may have.' },
    { question: 'Can I cancel my subscription at any time?', answer: 'Yes, you can cancel your subscription at any time without any cancellation fees.' },
    { question: 'What makes WeightCoachAI different from other nutrition apps?', answer: 'WeightCoachAI combines advanced AI technology with personalized expert guidance to provide a unique and effective approach to weight loss and nutrition coaching.' },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-bodyBackground py-section">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-headlineText mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-300 pb-4">
                <Button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center py-2 text-xl text-bodyText focus:outline-none bg-bodyBackground faq-button hover:bg-white"
                >
                  {faq.question}
                  <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
                </Button>
                <div
                  className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  } mt-2 px-5 py-2 text-bodyText`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import React from 'react';
import Image from 'next/image';

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-bodyBackground py-section">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-headlineText mb-8 text-center">Our Features</h2>
        <p className="text-xl text-bodyText mb-16 text-center space-b-features">
          Experience the perfect blend of AI technology and personalized expert guidance to achieve your health goals.
        </p>

        <div className="flex flex-col space-y-features">
          <div className="flex flex-col lg:flex-row items-center lg:items-center">
            <div className="lg:w-1/2 px-4 flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-headlineText mb-2">Weight Loss Tracking</h3>
              <p className="text-bodyText">
                Monitor your weight loss journey with our comprehensive tracking tools. Our detailed reports and insights provide you with everything you need to stay on track and achieve your weight loss goals. Whether you are just starting out or are already on your journey, our tools will help you make informed decisions every step of the way.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end items-center md:py-bodyToImage">
              <Image 
                src="/A_person_using_a_mobile_app_for_quick_calorie_trac.png" 
                alt="Weight Loss Tracking" 
                className="rounded-lg shadow-lg w-2/3 lg:w-3/4" 
                width={500} 
                height={300} 
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-center">
            <div className="lg:w-1/2 flex justify-center lg:justify-start items-center order-last lg:order-none md:py-bodyToImage">
              <Image 
                src="/A_person_using_a_mobile_app_for_meal_planning.png" 
                alt="AI-Generated Personalized Nutrition Plans" 
                className="rounded-lg shadow-lg w-2/3 lg:w-3/4" 
                width={500} 
                height={300} 
              />
            </div>
            <div className="lg:w-1/2 px-4 flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-headlineText mb-2">AI-Generated Personalized Nutrition Plans</h3>
              <p className="text-bodyText">
                Our AI analyzes your dietary needs and preferences to create customized meal plans that help you achieve your health goals efficiently. With AI-driven insights, you get personalized recommendations that are tailored to your unique lifestyle and dietary requirements, ensuring that you always have the best plan to follow.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-center">
            <div className="lg:w-1/2 px-4 flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-headlineText mb-2">Performance Analytics and Insights</h3>
              <p className="text-bodyText">
                Gain valuable insights into your performance with detailed analytics. Track your progress over time and make informed decisions based on comprehensive data. Our performance analytics tools help you understand what works best for you, allowing you to make adjustments to your plans and stay motivated throughout your journey.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end items-center md:py-bodyToImage">
              <Image 
                src="/A_person_using_a_mobile_app_for_progress_tracking.png" 
                alt="Performance Analytics and Insights" 
                className="rounded-lg shadow-lg w-2/3 lg:w-3/4" 
                width={500} 
                height={300} 
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-center">
            <div className="lg:w-1/2 flex justify-center lg:justify-start items-center order-last lg:order-none md:py-bodyToImage">
              <Image 
                src="/Expert_coaching.png" 
                alt="Expert Coaching" 
                className=" w-2/3 lg:w-3/4" 
                width={500} 
                height={300} 
              />
            </div>
            <div className="lg:w-1/2 px-4 flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-headlineText mb-2">Expert Coaching with AI Assistance</h3>
              <p className="text-bodyText">
                Our expert coaches work alongside our advanced AI technology to provide you with personalized coaching. The AI analyzes your data and progress, offering insights and recommendations that our expert coaches use to tailor their guidance specifically to you. This ensures that you receive the best of both worlds: the precision of AI and the human touch of professional coaching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

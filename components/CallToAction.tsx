import Link from 'next/link';
import { Button } from './ui/button';

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-darkGray py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-black mb-4">Take the First Step to a Healthier You</h2>
        <p className="text-xl text-gray-800 mb-8">Join <span className='font-bold'>WeightCoachAI</span> today and start your personalized health journey.</p>
        <Link href="/sign-up" passHref>
          <Button className="bg-ctaBlue text-white py-3 px-8 rounded-md font-bold hover:bg-ctaBlueHover transition duration-300">Get Started</Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;

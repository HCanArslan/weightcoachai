// src/pages/sign-up.tsx

import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-headlineText mb-8">Sign Up</h1>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
};

export default SignUpPage;

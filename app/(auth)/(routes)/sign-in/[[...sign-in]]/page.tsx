// src/pages/sign-in.tsx

import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-headlineText mb-8">Sign In</h1>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
};

export default SignInPage;

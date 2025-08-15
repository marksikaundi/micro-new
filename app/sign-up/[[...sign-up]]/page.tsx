import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Join Inc. Magazine
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Create an account to access exclusive content and features
          </p>
        </div>
        <div className="flex justify-center">
          <SignUp
            routing="path"
            path="/sign-up"
            redirectUrl="/"
            signInUrl="/sign-in"
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { signUpSchema } from "@/lib/validations";
import AuthForm from "@/components/AuthForm";

const Page = () => {
  return (
    <div>
      <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{
          email: "",
          password: "",
          fullName: "",
          universityId: 0,
          universityCard: "",
        }}
        onSubmit={() => {}}
      />
    </div>
  );
};

export default Page;

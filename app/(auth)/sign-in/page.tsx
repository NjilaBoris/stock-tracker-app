"use client";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import InputField from "@/components/forms/InputField";
import FooterLink from "@/components/forms/FooterLink";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>();
  const onSubmit: SubmitHandler<SignInFormData> = (data) => console.log(data);
  return (
    <>
      <h1 className="form-title">Welcome back</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email"
          placeholder="contact@jsmastery.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: /^\w+@\w+\.\w+$/,
          }}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 8 }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Signing In" : "Sign In"}
        </Button>

        <FooterLink
          text="Don't have an account?"
          linkText="Create an account"
          href="/sign-up"
        />
      </form>
    </>
  );
};

export default SignIn;

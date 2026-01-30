import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const userInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "E-mail is required")
    .refine((value) => z.email().safeParse(value).success, {
      message: "E-mail is invalid",
    }),
  subject: z.string().optional(),
});

type UserInfoFormValues = z.infer<typeof userInfoSchema>;

const UserInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserInfoFormValues>({
    resolver: zodResolver(userInfoSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
    },
  });

  const onSubmit = (values: UserInfoFormValues) => {
    console.log("User info submitted", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Name</label>
        <Input
          placeholder="Your name"
          autoComplete="name"
          {...register("name")}
        />
        {errors.name ? (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">E-mail</label>
        <Input
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email ? (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Subject
          <span className="text-muted-foreground"> (optional)</span>
        </label>
        <Input placeholder="Subject" {...register("subject")} />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default UserInfoForm;

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { CustomInput } from "../ui/CustomInput";
import { CustomTextArea } from "../ui/CustomTextArea";
import { useScheduleStore } from "@/stores/ScheduleStore";

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
  const { schedule } = useScheduleStore();
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
    console.log("User info submitted", values, schedule);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-end justify-center gap-2 relative"
    >
      <CustomInput
        // label="Name"
        error={errors.name ? errors.name.message : null}
        className="w-full bg-purple-50/50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-600 focus:border-purple-200 dark:focus:border-purple-600 resize-none shadow-none placeholder:text-purple-400 dark:placeholder:text-purple-600"
        type="text"
        placeholder="Your name"
        autoComplete="name"
        {...register("name")}
      />

      <CustomInput
        // label="E-mail"
        error={errors.email ? errors.email.message : null}
        className="w-full bg-purple-50/50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-600 focus:border-purple-200 dark:focus:border-purple-600 resize-none shadow-none placeholder:text-purple-400 dark:placeholder:text-purple-600"
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
        {...register("email")}
      />

      <div className="w-full ">
        {/* <label className="text-sm font-medium text-foreground">
          Subject
          <span className="text-muted-foreground"> (optional)</span>
        </label> */}
        <CustomTextArea
          // label="Subject"
          className="w-full bg-purple-50/50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-600 focus:border-purple-200 dark:focus:border-purple-600 resize-none shadow-none placeholder:text-purple-400 dark:placeholder:text-purple-600"
          placeholder="Subject"
          {...register("subject")}
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default UserInfoForm;

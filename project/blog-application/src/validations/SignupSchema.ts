import z from "zod";

const SignupFormSchema = z.object({
    name: z.string({ message: "Username is required" }).min(10, "must contain minimum 10 characters").max(30, "Name can maximum contains 30 characters"),
    email: z.string({ message: "Email with correct format is required" }).email({ message: "Invalid email address" }),
    password: z
    .string({ message: "Please enter password wisely" })
    .regex(/(?=.*[A-Z])/, "Please enter at least one uppercase letter")
    .regex(/(?=.*[a-z])/, "Please enter at least one lowercase letter")
    .regex(/(?=.*\d)/, "Please enter at least one number")
    .regex(/(?=.*[\W_])/, "Please enter at least one special character")
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be 20 characters long")
  
}).strict();

export default SignupFormSchema;
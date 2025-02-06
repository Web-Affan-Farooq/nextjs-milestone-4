import z from "zod";

const SignupFormSchema = z.object({
    name: z.string({ message: "Username is required" }).min(10, "must contain minimum 10 characters").max(30, "Name can maximum contains 30 characters"),
    email: z.string({ message: "Email with correct format is required" }).email({ message: "Invalid email address" }),
    password: z.string({ message: "Please enter password wisely" }).min(8).max(20).regex(/^(?=(?:.*\d){2,})(?=(?:.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]){1,})(?=(?:.*[A-Z]){3,}).{8,}$/
        , "Please create a strong password "),
}).strict();

export default SignupFormSchema;
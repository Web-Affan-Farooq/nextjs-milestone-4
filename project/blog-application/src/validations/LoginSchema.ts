import z from "zod";

const LoginFormSchema = z.object({
    email: z.string({ message: "Email with correct format is required" }).email({ message: "Invalid email address" }),
    password: z.string({ message: "Please enter password wisely" }).min(8).max(20).regex(/^(?=(?:.*\d){2,})(?=(?:.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]){1,})(?=(?:.*[A-Z]){3,}).{8,}$/
        , "Password doesn't match the correct format "),
}).strict();

export default LoginFormSchema;
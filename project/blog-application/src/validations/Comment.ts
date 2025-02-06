import z from "zod";

const CommentSchema = z.object({
    comment:z.string({message:"Please comment wisely"}).min(8, "Comment must contain minimum 8 characters").max(500, "Please consise your comment"),
}).strict();

export default CommentSchema;
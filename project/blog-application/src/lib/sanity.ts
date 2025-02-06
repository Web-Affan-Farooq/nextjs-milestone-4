import { createClient } from "@sanity/client";

const sanityClient = createClient(
{
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion:"2024-01-01",
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    token:process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
    useCdn:true,
}
);
export default sanityClient;
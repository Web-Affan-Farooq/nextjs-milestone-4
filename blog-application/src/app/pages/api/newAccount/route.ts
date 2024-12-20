import type { NextApiRequest, NextApiResponse } from 'next'
 
export function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log("This is a post request");
    console.log(req.query);    
    return Response.json({message:"hello world"})
}
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(request:NextApiRequest, response:NextApiResponse){
response.status(200).json({name:"affan"});
}


/**
 // incorrect code


import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(request:NextApiRequest, response:NextApiResponse){
response.status(200);
response.json({name:"hello"});
}

 */
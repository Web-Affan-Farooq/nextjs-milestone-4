import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(request:NextApiRequest, response:NextApiResponse){
response.status(200).json({name:"Admin", id:"00223338"});
}


/**
 // incorrect code


import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(request:NextApiRequest, response:NextApiResponse){
response.status(200);
response.json({name:"hello"});
}

 */
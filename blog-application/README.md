## 1. NextJS Milestone 4 Assignment no 3

This is a final Fullstack blog application using  NextJs , Tailwindcss, Shadcn-ui postgres and deployed on vercel

[Deployed]()


Approaches:

1. First Create a simple landing page for blog website
2. Create a simple create account page (or signup page).
3. Create one page for reading and showcasing blogs
4. integrate gsap threejs and framer motion in landing page

---------------layout:

## Home page:
header --responsive --fixed --completed
3 sections
footer 


## Home page:
header
3 sections
footer 


import React from 'react';

interface Button {
    type: string
}
const Button = ({ type }: Button) => {
    if (type === "hide-responsive") {
        return (
            <button type="button" className='bg-blue-700 text-white md:px-8 px-0 py-3 rounded-xl font-bold text-1xl transition md:block hidden'>Click</button>
        )
    }else if(type === "small") {
        return (
            <button type="button" className='bg-blue-700 text-white md:px-8 px-0 py-2 rounded-xl font-bold text-1xl transition block'>Click</button>
        )
    } 
    else {
        return (
            <button type="button" className='bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-1xl transition'>Click</button>
        )
    }
}

export default Button
"use client";

import React, { useEffect, useState } from 'react';
import CommentSchema from '@/validations/Comment';
import toast from 'react-hot-toast';
import NotifyError from '../Notifications/NotifyError';

const Comment_section = () => {
    const [comment, setcomment] = useState("");
    const [load, setload] = useState(false);

    useEffect(() => {
        if(load) {
            const getData = async () => {
                try {
                    const response = await fetch("/api/comment", {
                        method:"POST",
                        headers: {
                            "Content-Type":"application/json",
                        },
                        body:JSON.stringify({comment:comment}),
                    });
                } catch (err) {
                    toast.custom(<NotifyError message={`Error while fetching`}/>, {
                        duration:500,
                        removeDelay:2000,
                        style: {
                            backgroundColor: "rgba(255,255,255,0.5)",
                            backdropFilter: "blur(20px)",
                            transition:"all 1s ease-in-out"
                        }
                    });
                }
            }

            getData();
        }
        return () => {}
    },[load]);

    const handleComment = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            comment:comment.trim(),
        }
        try {
            CommentSchema.parse(data);
            // console.log(CommentSchema.parse(data).comment);
            setload(true);

        }catch(err:any) {
            // toast.error(JSON.parse(err)[0].message);
            toast.custom(<NotifyError message={`${JSON.parse(err)[0].message}`}/>, {
                duration:500,
                removeDelay:2000,
                style: {
                    backgroundColor: "rgba(255,255,255,0.5)",
                    backdropFilter: "blur(20px)",
                    transition:"all 1s ease-in-out"
                }
            });
        }
    }
  return (
    <section>
    <form action="" onSubmit={handleComment} className='flex flex-row flex-nowrap justify-center items-center'>
        <input type="text" name='comment' id='comment' placeholder='Enter comment' className='border-2 border-solid border-black px-[20px] py-[6px] w-[400px] max-md:w-[65vw]' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setcomment(e.target.value);
        }}/>
        <button type="submit" className='rounded-md bg-black text-white px-[20px] py-[8px] font-bold'>Comment</button>                
        </form>
    <br />
    <div>
        <div className='border-2 border-solid border-black' >kjfklsjdfklsjdflksdjfkljdslkj</div>
    </div>
</section>  )
}

export default Comment_section
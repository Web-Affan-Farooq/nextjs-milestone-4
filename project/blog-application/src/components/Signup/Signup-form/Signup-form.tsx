"use client";

import React, {useState, useEffect} from 'react';
import toast from 'react-hot-toast';
import SignupFormSchema from '@/validations/SignupSchema';
import NotifyError from '@/components/Notifications/NotifyError';
import type { ZodError } from 'zod'

const Signup_form = () => {
    const [userData, setuserData] = useState<{userName:string; userEmail:string; userPassword:string}>({
        userName:"",
        userEmail:"",
        userPassword:"",
    });
    const [load, setload] = useState(false);



    useEffect(() => {
        if(load) {
            const getData = async () => {
                try {
                    const response = await fetch("/api/signup", {
                        method:"POST",
                        headers: {
                            "Content-Type":"application/json",
                        },
                        body:JSON.stringify(userData),
                    });
                    const data = response.json();
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

    const handleSignup = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            name:userData.userName.trim(),
            email:userData.userEmail.trim(),
            password:userData.userPassword.trim(),
        }
        try {
            SignupFormSchema.parse(data);
            setload(true);
        } catch (err:any) {
            console.log(JSON.parse(err)[0]);
            console.log(err);            
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
        <div className='bg-signup bg-cover bg-center flex justify-center items-center bg-no-repeat w-full h-screen'>
            <div className='text-white w-[350px] bg-[rgba(255,255,255,0.1)] backdrop-opacity-100 backdrop-blur-3xl p-5 rounded-xl'>
                <h1 className='text-[22px] font-bold text-center'>Create Account</h1>
                <br />
                <p className='text-gray-400 text-[15px] text-center'>Have an idea? let's tell us</p>
                <br />

                <form action="" className='text-center' onSubmit={handleSignup}>
                    <div className='flex flex-col flex-wrap gap-5'>
                        <input type="text" name='userName' id='user-name' placeholder='Username' required className='w-[300px] rounded-lg px-5 py-2 bg-gray-600' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                            setuserData({...userData, userName:e.target.value})
                        }}/>
                        <input type="email" name='email' id='user-email' placeholder='Your email' required className='w-[300px] rounded-lg px-5 py-2 bg-gray-600' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                            setuserData({...userData, userEmail:e.target.value})
                        }}/>
                        <input type="password" name='password' id='user-password' placeholder='Set password' required className='w-[300px] rounded-lg px-5 py-2 bg-gray-600' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                            setuserData({...userData, userPassword:e.target.value})
                        }}/>
                    </div>
                    <br />
                    <button type="submit" className='bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-1xl transition'>Signup</button>
                </form>
                <br />
                <p className='text-gray-400 text-[15px] text-left'>By signing up, you'll agree to our <span className='text-blue-500'>terms and conditions</span></p>
            </div>
        </div>
    )
}

export default Signup_form
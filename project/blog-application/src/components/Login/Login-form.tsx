"use client";

import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import NotifyError from '@/components/Notifications/NotifyError';
import { ZodError } from 'zod';
import LoginFormSchema from '@/validations/LoginSchema';

const Login_form = () => {
    const [userData, setuserData] = useState<{ userEmail: string; userPassword: string }>({
        userEmail: "",
        userPassword: "",
    });


    const [load, setload] = useState(false);

    useEffect(() => {
        if(load) {
            const getData = async () => {
                try {
                    const response = await fetch("/api/login", {
                        method:"POST",
                        headers: {
                            "Content-Type":"application/json",
                        },
                        body:JSON.stringify(userData),
                    });
                    const data = response.json();
                    // --------> if success then proceed to dashboard else return no user exists
                } catch (err) {
                    toast.custom(<NotifyError message={`Error while logging you in`}/>, {
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

    const handleLogin = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            email:userData.userEmail.trim(),
            password:userData.userPassword.trim(),
        }
        try {
            LoginFormSchema.parse(data);
            setload(true);
        } catch (err:ZodError | any) {
            console.log(JSON.parse(err)[0]);
            
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
                <h1 className='text-[22px] font-bold text-center'>Welcome Back</h1>
                <br />
                <p className='text-gray-400 text-[15px] text-center'>Forgot password <span className='text-blue-500'>Login using SSO</span></p>
                <br />

                <form action="" className='text-center' onSubmit={handleLogin}>
                    <div className='flex flex-col flex-wrap gap-5'>
                        <label htmlFor="Enter your email">
                            <input type="email" name='email' id='user-email' placeholder='Your email' required className='w-[300px] rounded-lg px-5 py-2 bg-gray-600' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setuserData({ ...userData, userEmail: e.target.value })
                            }} />
                        </label>
                        <label htmlFor="Enter your password">
                            <input type="password" name='password' id='user-password' placeholder='Your password' required className='w-[300px] rounded-lg px-5 py-2 bg-gray-600' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setuserData({ ...userData, userPassword: e.target.value })
                            }} />
                        </label>
                    </div>
                    <br />
                    <button type="submit" className='bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-1xl transition'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login_form
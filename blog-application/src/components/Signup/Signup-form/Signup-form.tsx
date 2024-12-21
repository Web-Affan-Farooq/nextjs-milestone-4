"use client";

import React, { useState } from 'react'

const Signup_form = () => {

    const [userName, setuserName] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [userPassword, setuserPassword] = useState("");
    const [userMotive, setuserMotive] = useState("");

    const handleForm = async (e:React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();

     const userData = {
        name:userName,
        email:userEmail,
        password:userPassword,
        motive:userMotive
     }
     // fetching logic should be implemented here
    }

    return (
        <div className='bg-signup bg-cover bg-center flex justify-center items-center bg-no-repeat w-full h-screen'>
            <div className='text-white w-[350px] bg-[rgba(255,255,255,0.1)] backdrop-opacity-100 backdrop-blur-3xl p-5 rounded-xl'>
                <h1 className='text-[22px] font-bold text-center'>Create Account</h1>
                <br />
                <p className='text-gray-400 text-[15px] text-center'>Have an idea? let's tell us</p>
                <br />

                <form action="/" className='text-center' onSubmit={handleForm}>
                    <div className='flex flex-col flex-wrap gap-5'>
                        <input type="text" name='userName' id='user-name' placeholder='Username' required className='w-[300px] rounded-lg px-5 py-2 bg-gray-600' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                            setuserName(e.target.value)
                        }}/>
                        <input type="email" name='email' id='user-email' placeholder='Your email' required className='w-[300px] rounded-lg px-5 py-2 bg-gray-600' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                             setuserEmail(e.target.value)
                        }}/>
                        <input type="password" name='password' id='user-password' placeholder='Set password' required className='w-[300px] rounded-lg px-5 py-2 bg-gray-600' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                             setuserPassword(e.target.value)
                        }}/>
                        <label htmlFor="For which Idea you were writing your blogs?" id='user-idea'>
                            <textarea name="userIdea" id="user-idea" placeholder='For effective use of AI ...' className='w-[300px] h-[100px] rounded-lg px-5 py-2 bg-gray-600' onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => {
                                 setuserMotive(e.target.value)
                            }}></textarea>
                        </label>
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
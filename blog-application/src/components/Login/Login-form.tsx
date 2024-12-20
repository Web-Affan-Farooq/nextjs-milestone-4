import React from 'react'

const Login_form = () => {
    return (
        <div className='bg-signup bg-cover bg-center flex justify-center items-center bg-no-repeat w-full h-screen'>
            <div className='text-white w-[350px] bg-[rgba(255,255,255,0.1)] backdrop-opacity-100 backdrop-blur-3xl p-5 rounded-xl'>
                <h1 className='text-[22px] font-bold text-center'>Welcome Back</h1>
                <br />
                <p className='text-gray-400 text-[15px] text-center'>Forgot password <span className='text-blue-500'>Login using SSO</span></p>
                <br />

                <form action="" className='text-center'>
                    <div className='flex flex-col flex-wrap gap-5'>
                        <label htmlFor="Enter your email">
                        <input type="email" name='email' id='user-email' placeholder='Your email' required className='w-[300px] rounded-lg px-5 py-2 bg-gray-600' />
                        </label>
                        <label htmlFor="Enter your password">
                        <input type="password" name='password' id='user-password' placeholder='Your password' required className='w-[300px] rounded-lg px-5 py-2 bg-gray-600' />
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
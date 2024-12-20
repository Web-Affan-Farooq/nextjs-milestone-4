import React from 'react'

const Signup_form = () => {
    return (
        <div className='bg-signup bg-cover bg-center flex justify-center items-center bg-no-repeat w-full h-screen'>
            <div className='text-white w-[350px] bg-[rgba(255,255,255,0.1)] backdrop-opacity-100 backdrop-blur-3xl p-5 rounded-xl'>
                <h1 className='text-[22px] font-bold text-center'>Create Account</h1>
                <br />
                <p className='text-gray-400 text-[15px] text-center'>Have an idea? let's tell us</p>
                <br />

                <form action="" className='text-center'>
                    <div className='flex flex-col flex-wrap gap-5'>
                        <input type="text" name='userName' id='user-name' placeholder='Username' required className='w-[300px] rounded-lg px-5 py-2 bg-gray-600' />
                        <input type="email" name='email' id='user-email' placeholder='Your email' required className='w-[300px] rounded-lg px-5 py-2 bg-gray-600' />
                        <input type="password" name='password' id='user-password' placeholder='Set password' required className='w-[300px] rounded-lg px-5 py-2 bg-gray-600' />
                        <label htmlFor="For which Idea you were writing your blogs?" id='user-idea'>
                            <textarea name="userIdea" id="user-idea" placeholder='For effective use of AI ...' className='w-[300px] h-[100px] rounded-lg px-5 py-2 bg-gray-600'></textarea>
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
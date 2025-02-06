import React from 'react'

const NotifyError = ({message}:{message:string}) => {
  return (
    <div className='font-bold text-black flex flex-row flex-nowrap justify-start items-center px-[20px] gap-3 py-[10px] rounded-md w-[400px] bg-slate-400 transition-all duration-1000 ease-in-out'>
        <i className="fa-solid fa-circle-exclamation"></i>
        <span>{message}</span>
    </div>
  )
}

export default NotifyError
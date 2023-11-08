import React from 'react'

const Input = ({ label, type }) => {
    return (
        <div className='flex flex-col gap-2'>
            <h3 className='text-black ml-2'>{label}</h3>
            <input type={type} className='px-4 py-2 focus:outline-none border border-[#DADADA] rounded-full placeholder:text-sm' placeholder={`Enter ${label}`} />
        </div>
    )
}

export default Input
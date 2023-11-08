import React from 'react';
import Input from './SingleInput';

const Form = () => {

    return (
        <div className="form w-full lg:w-2/3 pr-5">
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input label='First Name' type='text' />
                    <Input label='Last Name' type='text' />
                    <Input label='Company Name' type='text' />
                    <Input label='Email' type='email' />
                </div>
                <div className="flex flex-col gap-5">
                    <Input label='Address Line 1' type='text' />
                    <Input label='Address Line 2' type='text' />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input label='City' type='text' />
                    <Input label='State' type='text' />
                    <Input label='Zip Code' type='text' />
                    <Input label='Phone Number' type='email' />
                    <Input label='Country' type='email' />
                </div>
            </div>
            <div className="flex justify-center">
                <button className='px-11 py-3 text-white bg-[#55B76E] rounded-full mt-5'>Buy Now</button>
            </div>
        </div>
    );
}

export default Form;

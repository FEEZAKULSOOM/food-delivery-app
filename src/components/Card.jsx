import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { add } from '../redux/CartSlice.js'
import { toast } from 'react-toastify';

function Card({ name, image, id, price, type }) {
    let dispatch = useDispatch();
    return (
        <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 hover:border-green-300'>
            <div className='w-full h-[60%] overflow-hidden rounded-lg bg-gray-100'>
                <img
                    src={image}
                    alt={name}
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                    onError={(e) => {
                        e.target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600' // Fallback image
                    }}
                />
            </div>
            <div className='text-2xl font-semibold line-clamp-1'>
                {name}
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='text-lg font-bold text-green-500'>
                    Rs {price}/-
                </div>
                <div className='flex justify-center items-center gap-2 text-lg font-semibold'>
                    {type === 'veg' ? <LuLeafyGreen className='text-green-500' /> :
                        < GiChickenOven className='text-red-500' />}
                    <span className={type === 'veg' ? 'text-green-500' : 'text-red-500'}>
                        {type === 'veg' ? 'Veg' : 'Non-Veg'}
                    </span>
                </div>
            </div>
            <button className="w-full bg-green-500 hover:bg-green-400 transition-all 
            duration-200 ease-in-out text-white-700 font-bold py-2 px-3 rounded-lg cursor-pointer

            "
                onClick={() => dispatch(add({ name, image, id, price, type, quantity: 1 }))
                    < toast.success("Item added to cart")} >
                Add to dish
            </button>
        </div>
    )
}

export default Card
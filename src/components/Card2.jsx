import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux'
import { remove, incrementQuantity, decrementQuantity } from '../redux/CartSlice';

function Card2({ name, image, id, price, type }) {
    let dispatch = useDispatch();

    // Get current item from Redux store
    const item = useSelector(state => state.cart.find(item => item.id === id));
    const quantity = item?.quantity || 1;

    // Don't render if item not found
    if (!item) return null;

    return (
        <div className='w-full min-h-[120px] p-3 shadow-lg flex justify-between items-center bg-white rounded-lg flex-shrink-0'>
            {/* Left section with image and details */}
            <div className='flex gap-4 items-center h-full flex-1'>
                {/* Image - fixed size */}
                <div className='w-[80px] h-[80px] overflow-hidden rounded-lg flex-shrink-0'>
                    <img
                        src={image}
                        alt={name}
                        className='object-cover w-full h-full'
                        onError={(e) => {
                            e.target.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600'
                        }}
                    />
                </div>

                {/* Name and quantity controls */}
                <div className='flex flex-col gap-2 flex-1'>
                    <div className='text-lg text-gray-600 font-semibold line-clamp-1'>
                        {name}
                    </div>

                    {/* Quantity Controls */}
                    <div className='flex items-center border-2 border-green-400 rounded-lg overflow-hidden w-[110px] h-[40px] flex-shrink-0'>
                        <button
                            className='w-8 h-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-green-600 font-bold text-xl'
                            onClick={() => dispatch(decrementQuantity(id))}>
                            -
                        </button>
                        <span className='w-10 h-full bg-white flex items-center justify-center text-green-600 font-semibold'>
                            {quantity}
                        </span>
                        <button
                            className='w-8 h-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-green-600 font-bold text-xl'
                            onClick={() => dispatch(incrementQuantity(id))}>
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* Right section with price and delete - fixed width */}
            <div className='flex flex-col items-end gap-2 flex-shrink-0 min-w-[100px]'>
                <span className='text-lg text-green-500 font-bold'>
                    Rs {price * quantity}/-
                </span>
                <RiDeleteBin6Line
                    className='w-6 h-6 text-red-500 cursor-pointer hover:text-red-700'
                    onClick={() => dispatch(remove(id))}
                />
            </div>
        </div>
    )
}

export default Card2
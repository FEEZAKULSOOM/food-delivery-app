import React, { useContext, useEffect } from 'react'
import { IoFastFood } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Nav() {
    let { input, setInput, setCate, showCart, setShowCart } = useContext(dataContext); // Removed unused 'cate'
    // Move useSelector inside the component
    const items = useSelector(state => state.cart)
    console.log(items);

    useEffect(() => {
        if (input.trim() === '') {
            setCate(food_items);
            return;
        }

        let updatedList = food_items.filter((item) =>
            item.food_name.toLowerCase().includes(input.toLowerCase()) // Fixed: added () and return
        );
        setCate(updatedList);
    }, [input, setCate]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Fixed: added e parameter
    };

    return (
        <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <IoFastFood className='w-[30px] h-[30px] text-green-500' />
            </div>

            <form
                className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]'
                onSubmit={handleSubmit}
            >
                <FaSearch className='w-[16px] h-[20px] text-green-500 md:text-[20px]' />
                <input
                    type="text"
                    placeholder='Search Items...'
                    className='w-[100%] outline-none text-[20px]'
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
            </form>

            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center
             rounded-md shadow-xl relative cursor-pointer' onClick={() => {
                    setShowCart(true);
                }}>
                <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>{items.length}</span>
                <RiShoppingBag3Fill className='w-[30px] h-[30px] text-green-500 ' />
            </div>
        </div>
    )
}

export default Nav
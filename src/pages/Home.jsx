import React, { useContext } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross1 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Home() {
    // Use context instead of local useState
    const { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

    let items = useSelector(state => state.cart)
    let subTotal = items.reduce((total, curr) => total + (curr.price * curr.quantity), 0)
    let deliveryFee = 20;
    let taxes = (0.05 * subTotal).toFixed(2);
    let grandTotal = (subTotal + deliveryFee + parseFloat(taxes)).toFixed(2);

    function filter(category) {
        if (category === 'All') {
            setCate(food_items);
        }
        else {
            let updatedList = food_items.filter((x) =>
                x.food_category.toLowerCase() === category.toLowerCase()
            );
            setCate(updatedList);
        }
    }

    return (
        <div className='w-full bg-slate-200 min-h-[100vh]'>
            <Nav />
            {!input ?
                <div className='flex flex-wrap justify-center items-center gap-6 w-full p-4'>

                    {Categories.map((category) => (
                        <div

                            key={category.id}
                            className='w-[140px] h-[150px] text-gray-600 text-[20px] 
                            font-semibold p-5 gap-5 bg-white flex flex-col 
                            justify-start items-start rounded-lg shadow-xl 
                            hover:bg-green-200 cursor-pointer transition-all 
                            duration-200 ease-in-out hover:text-green-500'
                            onClick={() => filter(category.name)}
                        >
                            {category.icon}
                            {category.name}
                        </div>
                    ))}
                </div> : null}

            <div className='w-full flex flex-wrap justify-center items-center gap-6 px-4 pt-8 pb-8'>

                {cate.length > 1 ?

                    cate.map((item) => (
                        <Card
                            key={item.id}
                            name={item.food_name}
                            image={item.food_image}
                            id={item.id}
                            price={item.price}
                            type={item.food_type}
                        />
                    ))
                    : <div className='flex flex-col items-center justify-center w-full min-h-[300px] md:min-h-[400px] px-4 py-8 md:py-12'>
                        {/* Rect Icon - Simple box with fork/knife or search icon */}
                        <div className='relative mb-4 md:mb-6'>
                            <div className='w-20 h-20 md:w-24 md:h-24 bg-green-50 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-inner border-2 border-green-100'>
                                <svg
                                    className='w-10 h-10 md:w-12 md:h-12 text-green-400'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={1.8}
                                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                    />
                                </svg>
                            </div>
                            {/* Optional small accent dot */}
                            <div className='absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full animate-pulse'></div>
                        </div>

                        {/* Text Content */}
                        <h3 className='text-lg md:text-xl font-bold text-gray-700 mb-2'>
                            No items found
                        </h3>

                        <p className='text-sm md:text-base text-gray-500 text-center max-w-[250px] md:max-w-sm'>
                            Sorry, we couldn't find any items matching your search.
                        </p>

                        {/* Optional subtle line */}
                        <div className='w-16 h-0.5 bg-green-100 rounded-full mt-4 md:mt-6'></div>
                    </div>}

            </div>

            {/* Cart Sidebar */}
            <div className={`w-[100%] md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl
                 px-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart ? 'translate-x-0' : 'translate-x-full'}`}>

                <header className='w-full flex justify-between items-center py-4 sticky top-0 bg-white z-10'>
                    <span className='text-green-400 text-lg md:text-xl font-semibold'>Order Items</span>
                    <RxCross1
                        className='w-6 h-6 md:w-7 md:h-7 text-green-400 cursor-pointer hover:text-green-600'
                        onClick={() => setShowCart(false)}
                    />
                </header>

                {items.length > 0 ? (
                    <>
                        <div className='w-full mt-4 flex flex-col gap-4 pb-4'>
                            {items.map((item) => (
                                <Card2
                                    key={item.id}
                                    name={item.name}
                                    image={item.image}
                                    id={item.id}
                                    price={item.price}
                                    type={item.type}
                                />
                            ))}
                        </div>

                        <div className='w-full border-t-2 border-gray-200 mt-4 flex flex-col gap-2 p-6'>
                            <div className='flex w-full justify-between items-center'>
                                <span className='text-base md:text-lg font-semibold text-gray-600'>Subtotal</span>
                                <span className='text-green-500 font-semibold text-base md:text-lg'>Rs {subTotal}/-</span>
                            </div>

                            <div className='flex w-full justify-between items-center'>
                                <span className='text-base md:text-lg font-semibold text-gray-600'>Delivery Fee</span>
                                <span className='text-green-500 font-semibold text-base md:text-lg'>Rs {deliveryFee}/-</span>
                            </div>

                            <div className='flex w-full justify-between items-center'>
                                <span className='text-base md:text-lg font-semibold text-gray-600'>Taxes</span>
                                <span className='text-green-500 font-semibold text-base md:text-lg'>Rs {taxes}/-</span>
                            </div>
                        </div>

                        <div className='w-full border-t-2 border-gray-200'></div>

                        <div className='flex w-full justify-between items-center p-6 text-xl md:text-2xl'>
                            <span className='font-bold text-gray-700'>Total</span>
                            <span className='text-green-500 font-bold'>Rs {grandTotal}/-</span>
                        </div>

                        <button className="w-[80%] bg-green-500 hover:bg-green-600 text-white 
                        font-bold py-3 mb-6 rounded-lg shadow-lg 
                        transition-all duration-300 transform hover:scale-105" onClick={() => {
                                toast.success("Order Placed Successfully")
                            }}>
                            Place Order
                        </button>
                    </>
                ) : (
                    // Empty Cart Section - Fixed
                    <div className='flex flex-col items-center justify-center h-full w-full px-4 py-8'>
                        {/* Empty Cart Illustration */}
                        <div className='relative mb-6 flex-shrink-0'>
                            <div className='w-36 h-36 md:w-40 md:h-40 bg-green-100 rounded-full flex items-center justify-center animate-pulse'>
                                <svg
                                    className='w-20 h-20 md:w-24 md:h-24 text-green-400'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={1.5}
                                        d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                                    />
                                </svg>
                            </div>

                        </div>

                        {/* Text Content */}
                        <h2 className='text-xl md:text-2xl font-bold text-gray-700 mb-2 flex-shrink-0'>
                            Your cart is empty!
                        </h2>
                        <p className='text-sm md:text-base text-gray-500 mb-6 max-w-xs text-center flex-shrink-0'>
                            You haven't added any items.
                            Explore our delicious menu!
                        </p>

                        {/* Food Icons Animation */}
                        <div className='flex gap-3 md:gap-4 mb-8 flex-shrink-0'>
                            <div className='w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center animate-bounce' style={{ animationDelay: '0s' }}>
                                <span className='text-xl md:text-2xl'>🍔</span>
                            </div>
                            <div className='w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center animate-bounce' style={{ animationDelay: '0.2s' }}>
                                <span className='text-xl md:text-2xl'>🍕</span>
                            </div>
                            <div className='w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center animate-bounce' style={{ animationDelay: '0.4s' }}>
                                <span className='text-xl md:text-2xl'>🥗</span>
                            </div>
                            <div className='w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center animate-bounce' style={{ animationDelay: '0.6s' }}>
                                <span className='text-xl md:text-2xl'>🍝</span>
                            </div>
                        </div>

                        {/* Browse Menu Button */}
                        <button
                            onClick={() => setShowCart(false)}
                            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base flex-shrink-0'
                        >
                            Browse Menu
                        </button>


                    </div>
                )}
            </div>
        </div>
    )
}

export default Home
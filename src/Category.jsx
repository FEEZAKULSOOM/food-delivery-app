import {
    GiFullPizza,
    GiNoodles,

    GiMeat,
    GiHamburger,

} from 'react-icons/gi';

import { MdOutlineBreakfastDining } from 'react-icons/md';
import { BsGrid3X3Gap } from "react-icons/bs";
import { LuSoup } from 'react-icons/lu'; // Add this import for soup icon

const Categories = [
    {
        id: 1,
        name: "All",
        icon: <BsGrid3X3Gap className='w-[60px] h-[60px] text-green-600' />,
    },
    {
        id: 2,
        name: "breakfast",
        icon: <MdOutlineBreakfastDining className='w-[60px] h-[60px] text-green-600' />,
    },
    {
        id: 3,
        name: "soups",
        icon: <LuSoup className='w-[60px] h-[60px] text-green-600' />, // Fixed: using LuSoup instead of GiSoup
    },
    {
        id: 4,
        name: "pasta",
        icon: <GiNoodles className='w-[60px] h-[60px] text-green-600' />,
    },
    {
        id: 5,
        name: "main_course",
        icon: <GiMeat className='w-[60px] h-[60px] text-green-600' />,
    },
    {
        id: 6,
        name: "pizza",
        icon: <GiFullPizza className='w-[60px] h-[60px] text-green-600' />,
    },
    {
        id: 7,
        name: "burger",
        icon: <GiHamburger className='w-[60px] h-[60px] text-green-600' />,
    }
];

export default Categories;
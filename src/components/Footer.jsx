import React from 'react'

function Footer() {
    return (
        <footer className='w-full bg-white py-6 px-4 border-t border-gray-200'>
            <div className='max-w-7xl mx-auto flex flex-col items-center justify-center gap-2'>
                {/* Copyright */}
                <div className='text-gray-500 text-sm'>
                    © 2024 FreshBite. All rights reserved.
                </div>

                {/* Made with love in Pakistan */}
                <div className='text-gray-400 text-sm flex items-center gap-1'>
                    Made with <span className='text-green-500 text-lg'>💚</span> in Pakistan
                </div>
            </div>
        </footer>
    )
}

export default Footer
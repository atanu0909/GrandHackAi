import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-black text-white flex justify-around items-center h-10'>
            <div>logo</div>
            <ul>
                <li className='flex gap-4'>
                <a href="/" class=" font-lg  hover:font-bold hover:shadow-xl px-2 py-1 rounded">
                home</a>
                    <a class=" font-lg  hover:font-bold hover:shadow-xl px-2 py-1 rounded" href="#">about</a>
                    <a class=" font-lg  hover:font-bold hover:shadow-xl px-2 py-1 rounded" href="#">contacts</a>
                </li>
            </ul>
            <div>log in</div>
        </nav>
    )
}

export default Navbar

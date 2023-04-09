import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../Languages/languageStorage'

import { LaguagueIcon } from '../../assets'


export const NavBar = () => {
    const [icon, setIcon] = useState('☀')
    const { language: { nav }, setLanguageStorage } = useLanguage()

    const hanleDarkMode = () => {
        document.body.classList.toggle('dark')
        if (icon === '☀') {
            setIcon('☾')
        }
        else {
            setIcon('☀')
        }
    }

    const hanleLanguage = () => {
        setLanguageStorage('es')
    }
    /* 
    <li className='hover:text-gray-500'>
        <Link to='/'>projects</Link>

    </li>
    <li className='hover:text-gray-500'>
        <Link to='/'>contacts</Link>
    </li>
    */

    return (
        <>
            <nav className=" text-xl mx-auto shadow text-center flex justify-between items-center px-4 py-2 mt-3 rounded-lg bg-white dark:bg-slate-800 dark:border-slate-500 dark:text-slate-50">
                <span className="font-bold ">POPA<span className="palo" >/</span>DEV</span>
                <div className="flex">
                    <ul className="text-[15px] flex font-semibold justify-center dark:text-slate-400 items-center gap-2 ">
                        {
                            nav.links.map((item, index) => (
                                <li className='hover:text-gray-500  dark:text-slate-400 dark:hover:text-white' key={index}>
                                    <Link to={item.url}>{item.text}</Link>
                                </li>
                            ))
                        }
                    </ul>


                    <button
                        className="ml-4 flex items-center justify-center h-10 w-10 rounded hover:bg-gray-200 dark:hover:bg-slate-600"
                        onClick={() => (
                            <>
                                {/* select */}
                                <select className="
                               
                                " onChange={hanleLanguage}

                                >
                                    <option value="en">English</option>
                                    <option value="es">Español</option>
                                </select>
                                {/* select */}

                            </>
                        )}

                    >
                        <LaguagueIcon className="h-6 w-6" />

                    </button>

                    <button
                        className="ml-4 mr-1"
                        onClick={hanleDarkMode}

                    >{icon}</button>

                </div>
            </nav >


        </>
    )
}

import { useEffect } from "react"
import { NavBar } from "../../components/NavBar"
import { Toaster, toast } from 'sonner'

import './style.css'
import { Education } from "./Education"
import { useLanguage } from "../../Languages/languageStorage"
// import { useTranslation } from "react-i18next"



export const Home = () => {
    useEffect(() => {
        toast.error('Warning: This area is for developers only.')
    }, [])

    const { language: { header } } = useLanguage()

    return (
        <div className="container mx-auto h-screen justify-center items-center ">
            <Toaster richColors position="top-center" />
            <NavBar />
            <div className="flex flex-col justify-center items-center mt-52">
                <p className="font-bold text-5xl text-center mb-7">
                    {header.quote.text}
                    <br />
                    <span className="text-blue-600 text-center">
                        {header.quote.textBlue}
                    </span>
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-center mb-7">
                    {header.quote.author}
                </p>
                <button className="h-10 px-6 font-semibold hover:text-white rounded-md border hover:bg-blue-600 hover:border-0 border-slate-400 text-slate-900  dark:border-blue=600 dark:text-white" type="button">
                    {header.button.text}
                </button>
            </div>
            <Education />
        </div>
    )
}
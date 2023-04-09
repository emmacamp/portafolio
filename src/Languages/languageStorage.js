import { useEffect, useState } from 'react'
import EN from './en.json'
import ES from './es.json'

export const useLanguage = () => {
    const [language, setLanguage] = useState(EN)

    const setLanguageStorage = async (language) => {
        localStorage.setItem('language', language)
        const lan = localStorage.getItem('language')
        if (lan === 'es') {
            setLanguage(ES)
        }
    }


    return { language, setLanguageStorage }
}
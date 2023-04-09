
import { BackpackIcon, BrainIcon, BookIcon, SchoolIcon } from '../../../assets';
import { Card } from '../../../components/Card'

import './education.css'
import { useLanguage } from '../../../Languages/languageStorage';

export const Education = () => {

    const { language: { education } } = useLanguage()

    const icons = {
        0: <BookIcon className=" text-white" />,
        1: <BackpackIcon className=" text-white" />,
        2: <SchoolIcon className=" text-white" />,
        3: <BrainIcon className=" text-white" />

    }


    return (
        <section className='section-education mt-36'>
            <h1 className='text-3xl font-bold'>{education.title}</h1>
            <div className="cards flex gap-3 flex-wrap">
                {
                    education.cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            date={card.date}
                            text={card.text}
                            icon={icons[index] || <BookIcon className=" text-white" />}
                        />
                    ))
                }
            </div>
        </section>
    )
}


/* 
<Card
                    title='self-taught'
                    date='2020 - Present'
                    text='Soy una persona a la que le encanta aprender nuevas tecnologías y hacer proyectos con dichas tecnologías.'
                    icon={<BookIcon className=" text-white" />}
                />
                <Card
                    title='Platzi'
                    date='2020 - Present'
                    text='Realice la escuela de desarrollo web en esta plataforma, donde aprendí Fundamentos HTML, CSS, Javascript también React y Node.'
                    icon={<BackpackIcon className=" text-white" />}
                    className="relative top-4"
                />
                <Card
                    title='ITLA'
                    date='2019 - 2020'
                    text='Es el instituto más prestigioso de mi país en cuanto a tecnología y ahí tomé la tecnología de desarrollo de software.'
                    icon={<SchoolIcon className=" text-white" />}
                />
                <Card
                    title='FreeCodeCamp'
                    date='2020 - Present'
                    text='Decidí tomar algunos bootcamps en esta plataforma debido a su prestigio y tomé Web Responsive Design, Javascript Algorithms and Data Structures y Backend Development and Apis.'
                    icon={<BrainIcon className=" text-white" />}
                    className="relative top-4 "
                />
*/
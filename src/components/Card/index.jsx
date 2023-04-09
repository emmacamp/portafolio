

export const Card = ({ title, text, icon, className, date }) => (
    <div
        className={`card-component bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-64  mt-10 mx-2 ${className}`}
    >
        <div>
            <span
                className="inline-flex items-center justify-center p-2 bg-blue-600 dark:bg-blue-800 text-white rounded-md shadow-lg"
            >
                {icon}
            </span>
        </div>
        <h3
            className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"
        >
            {title}
        </h3>
        <small className="text-slate-400  dark:text-blue-500 relative bottom-1 italic">{date}</small>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            {text}
        </p>
    </div>
)

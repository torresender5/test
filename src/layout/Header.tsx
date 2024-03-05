

type Title = {
    title: string
}

const Header = ({title}: Title) => {

    return (
        <div className="w-full h-20 bg-violet-600 dark:bg-violet-600 mb-8 rounded-xl shadow-xl">
            <div className="pt-6 ml-8">
                <h1 className=" text-start text-xl text-slate-50  font-bold"> {title}</h1>
            </div>
        </div>

    )
}
export default Header; 
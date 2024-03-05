


type  Props = {
    children: React.ReactNode
}

const Container = ({children}: Props) => {
    return (
        <div className=" shadow-xl bg-slate-50 dark:bg-slate-900  w-full h-auto rounded-3xl">
            {children}
        </div>
    )
}

export default Container;
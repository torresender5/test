import Container from "../../layout/Container";
import Header from "../../layout/Header";
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    email: string

}


const Create = () => {

    const {
        egister,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onsubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <>
        <Header title={"Evaluation"}/>
        <Container>
            <div className=" divide-y divide-slate-400">
                <div className=" p-8" >
                    <h1 className=" dark:text-slate-50"> Create new evaluation</h1>
                </div>    
                <form action="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                        <div>
                            <label for="email" className="block text-sm font-medium mb-2 dark:text-slate-50">Email</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="email" 
                                    name="email" 
                                    className="py-3 px-4 block w-full border-red-500 rounded-lg text-sm dark:focus:border-red-500 dark:focus:ring-red-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                    required
                                    aria-describedby="hs-validation-name-error-helper"
                                />
                                <div 
                                    className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
                                >
                                    <svg 
                                        className="flex-shrink-0 size-4 text-red-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                            <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid email address.</p>
                        </div>
                        <div>
                            <label for="email" className="block text-sm font-medium mb-2 dark:text-slate-50">Email</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="email" 
                                    name="email" 
                                    className="py-3 px-4 block w-full border-red-500 rounded-lg text-sm dark:focus:border-red-500 dark:focus:ring-red-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                    required
                                    aria-describedby="hs-validation-name-error-helper"
                                />
                                <div 
                                    className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
                                >
                                    <svg 
                                        className="flex-shrink-0 size-4 text-red-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                            <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid email address.</p>
                        </div>
                        <div>
                            <label for="email" className="block text-sm font-medium mb-2 dark:text-slate-50">Email</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="email" 
                                    name="email" 
                                    className="py-3 px-4 block w-full border-red-500 rounded-lg text-sm dark:focus:border-red-500 dark:focus:ring-red-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                    required
                                    aria-describedby="hs-validation-name-error-helper"
                                />
                                <div 
                                    className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
                                >
                                    <svg 
                                        className="flex-shrink-0 size-4 text-red-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                            <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid email address.</p>
                        </div>
                        <div>
                            <label for="email" className="block text-sm font-medium mb-2 dark:text-slate-50">Email</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="email" 
                                    name="email" 
                                    className="py-3 px-4 block w-full border-red-500 rounded-lg text-sm dark:focus:border-red-500 dark:focus:ring-red-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                    required
                                    aria-describedby="hs-validation-name-error-helper"
                                />
                                <div 
                                    className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
                                >
                                    <svg 
                                        className="flex-shrink-0 size-4 text-red-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                            <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid email address.</p>
                        </div>
                        <div>
                            <label for="email" className="block text-sm font-medium mb-2 dark:text-slate-50">Email</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="email" 
                                    name="email" 
                                    className="py-3 px-4 block w-full border-red-500 rounded-lg text-sm dark:focus:border-red-500 dark:focus:ring-red-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                    required
                                    aria-describedby="hs-validation-name-error-helper"
                                />
                                <div 
                                    className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
                                >
                                    <svg 
                                        className="flex-shrink-0 size-4 text-red-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                            <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid email address.</p>
                        </div>
                        <div>
                            <label for="email" className="block text-sm font-medium mb-2 dark:text-slate-50">Email</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="email" 
                                    name="email" 
                                    className="py-3 px-4 block w-full border-red-500 rounded-lg text-sm dark:focus:border-red-500 dark:focus:ring-red-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                    required
                                    aria-describedby="hs-validation-name-error-helper"
                                />
                                <div 
                                    className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
                                >
                                    <svg 
                                        className="flex-shrink-0 size-4 text-red-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                            <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid email address.</p>
                        </div>
                        <div>
                            <label for="email" className="block text-sm font-medium mb-2 dark:text-slate-50">Email</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="email" 
                                    name="email" 
                                    className="py-3 px-4 block w-full border-red-500 rounded-lg text-sm dark:focus:border-red-500 dark:focus:ring-red-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                    required
                                    aria-describedby="hs-validation-name-error-helper"
                                />
                                <div 
                                    className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
                                >
                                    <svg className="fill-slate-950" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 10H7M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>


                                            {/* <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
                                    </svg> */}
                                </div>
                            </div>
                            <p className="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid email address.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 ">
                        <div className="col-span-2 sm:col-start-1 md:col-start-2 lg:col-start-3">
                            <button> submit </button>
                        </div>
                        <div className="sm:col-start-1 md:col-start-1 lg:col-start-2">
                            <button> cancel </button>
                        </div>

                    </div>
                </form>
            </div>
        
        </Container>
        </>

    );
}

export default Create;
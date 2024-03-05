import Container from "../../layout/Container";
import Header from "../../layout/Header";





const Create = () => {

    return (
        <>
        <Header title={"Evaluation"}/>
        <Container>
            <div className=" divide-y divide-slate-400">
                <div className=" p-8" >
                    <h1 className=" dark:text-slate-50"> Create new evaluation</h1>
                </div>    
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                    <div>
                        <label for="hs-validation-name-error" className="block text-sm font-medium mb-2 dark:text-slate-50">Email</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                id="hs-validation-name-error" 
                                name="hs-validation-name-error" 
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
                </div>
            </div>
        
        </Container>
        </>

    );
}

export default Create;
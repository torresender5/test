
import { useRouteError } from "react-router-dom";


type Error = {
    statusText: string,
    message: string
}
export default function ErrorPage() {
  const error  = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex h-screen justify-center flex-col">
      <h1 className=" text-center text-8xl pb-8">Oops!</h1>
      <p className=" text-center text-4xl pb-6">Sorry, an unexpected error has occurred.</p>
      <p className="text-center text-4xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
import { Outlet } from "react-router-dom";
import Nav from "./Nav";


export default function BaseLayout(){

    return (<>
        <header>
            <Nav/>
        </header>
        <main className="h-screen w-full">
            <div className="pt-15 border px-5 pb-2 border-yellow-500 h-full">
                <Outlet/>
            </div>
        </main>
    </>)
}
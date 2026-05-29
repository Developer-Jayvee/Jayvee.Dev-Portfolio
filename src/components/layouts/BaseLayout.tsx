import { Outlet } from "react-router-dom";
import Nav from "./Nav";


export default function BaseLayout(){

    return (<>
        <header>
            <Nav/>
        </header>
        <main className="h-screen w-full">
            <div className="pt-17 px-5 transition-all select-none  h-full">
                <Outlet/>
            </div>
        </main>
    </>)
}
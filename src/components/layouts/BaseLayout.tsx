import { Outlet } from "react-router-dom";
import Nav from "./Nav";


export default function BaseLayout(){

    return (<>
        <header>
            <Nav/>
        </header>
        <main>
            <Outlet/>
        </main>
    </>)
}
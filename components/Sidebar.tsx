import { appState } from "@app/features/app";
import { Fragment } from "react";

const SidebarButton = ({ text }: { text: string }) => <li className="py-6 px-4 font-semibold cursor-pointer hover:bg-sky-200 transition-all text-center" onClick={event => alert(text)}>{text}</li>

const Sidebar = () => {

    const buttons = ["test1", "test2", "test3"]

    return <Fragment>
        <div className='bg-sky-50 h-full shadow-md'>
            <ul>
                {buttons.map(b => <SidebarButton key={b} text={b} />)}
            </ul>
        </div>
    </Fragment>
}

export default Sidebar;
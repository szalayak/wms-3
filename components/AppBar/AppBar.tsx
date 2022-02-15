import { Fragment } from "react";
import { MenuIcon } from "@heroicons/react/solid";

interface Props {
    title: string;
}

const AppBar = ({ title }: Props) => <Fragment>
    <div className="bg-sky-600 dark:bg-slate-600 hover: py-5 pl-4 shadow-md flex items-center"><button className="mr-2" onClick={() => alert("test")}><MenuIcon className="h-5 w-5 text-white" /></button><h1 className="text-3xl leading-none text-white">{title}</h1></div>
</Fragment>

export default AppBar;
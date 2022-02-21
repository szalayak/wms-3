import { Fragment, useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { appState, setSelectedWarehouse, toggleSidebar } from "@app/features/app";

interface Props {
    title: string;
    warehouses?: Warehouse[],
}

const AppBar = ({ title, warehouses }: Props) => {

    const {selectedWarehouse} = useSelector(appState);
    const dispatch = useDispatch();

    const onSelectionChanged = ({id} : Partial<Warehouse>) => {
        const warehouse = warehouses?.find(w => w.id === id);
        dispatch(setSelectedWarehouse(warehouse));
    }

    const onToggleSidebar = () => void dispatch(toggleSidebar())

    return <Fragment>
        <div className="bg-sky-600 dark:bg-slate-600 py-5 pl-4 shadow-md flex flex-row items-center md:h-20 sm:h-16">
            <button className="mr-2 pt-1" onClick={onToggleSidebar}><MenuIcon className="h-5 w-5 text-white" /></button>
            <h1 className="text-3xl leading-none text-white font-semibold">{title}</h1><div className="flex-1" />
            <Dropdown items={warehouses?.map(({ id, name }) => ({ id, text: name }))} selectionChanged={onSelectionChanged} selectedId={selectedWarehouse?.id} /></div>
    </Fragment>
}

export default AppBar;
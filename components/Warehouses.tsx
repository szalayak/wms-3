import { appState, setSelectedWarehouse } from "@app/features/app";
import { Fragment } from "react"
import { useSelector, useDispatch } from "react-redux";

const Warehouses = ({ warehouses }: { warehouses: Warehouse[] }) => {

    const { selectedWarehouse } = useSelector(appState);
    const dispatch = useDispatch();

    if (!selectedWarehouse)
        dispatch(setSelectedWarehouse(warehouses[0]))

    const isWarehouseSelected = ({id} : Warehouse) => selectedWarehouse?.id === id;

    return <Fragment>
        {
            warehouses.map(warehouse =>
                <div className='flex-auto flex items-center' key={warehouse.id}>
                    <div className='flex flex-col'>
                        <p className='text-center text-4xl'>{warehouse.name}</p>
                        <p className='text-center text-xl'>{warehouse.createdAt}</p>
                        <p className='text-center'>{isWarehouseSelected(warehouse) && 'Selected'}</p>
                    </div>
                </div>)
        }</Fragment>
}

export default Warehouses;
import { Fragment, useState } from "react";

interface Item {
    id: string;
    text?: string;
}
interface Props {
    items?: Item[];
    selectedId?: string;
    selectionChanged?: (item: Item) => void
}

const Dropdown = ({ items, selectionChanged, selectedId }: Props) => {
    const selected = selectedId || items && items[0].id;
    const [selectedValue, setSelectedValue] = useState<string | undefined>(selected);

    const onChange = (value: string) => {
        setSelectedValue(value);
        const item = items?.find(({ id }) => id === value);
        if (selectionChanged && item)
            selectionChanged(item);
    }

    return <Fragment>
        <select value={selectedValue} className="block mr-4 py-3 px-4 border-0 bg-transparent text-white font-semibold outline-hidden outline-0" onChange={event => onChange(event.target.value)}>
            {items?.map(({ id, text }) => <option className="text-black" key={id} value={id}>{text}</option>)}
        </select>
    </Fragment>
}

export default Dropdown;
import React, {useEffect} from 'react';
import {useState} from "react";

const Employee = ({el, isCheckedAll, handleCheck}) => {
    const [isChecked, setIsChecked] = useState(false)
    useEffect(() => {
        setIsChecked(isCheckedAll)
    },[isCheckedAll])

    return (
        <tr>
            <td>
                <input type="checkbox"
                       checked={isChecked}
                       onChange={(e) => {
                           setIsChecked(e.target.checked)
                           handleCheck(el.id, e.target.checked)
                       }}

                />
            </td>
            <td>{el.name}</td>
            <td>{el.surname}</td>
            <td>{el.age}</td>
        </tr>
    );
};

export default Employee;
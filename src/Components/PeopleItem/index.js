import {useEffect, useState} from "react";

const PeopleItem = ({
                        person,
                        idx,
                        selectAll,
                        selectedPerson,
                        setSelectedPerson,
                        people,
                        setSelectAll,
                        setType,
                        type,
                        handleCheck
                    }) => {

    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(selectAll)
    },[selectAll])

    useEffect(() => {
        // проверяет равно ли общее количество количеству добавленных
        if (people.length === selectedPerson.length) {
            setType("all")
            setSelectAll(true)
        } else {
            setType("one")
            setSelectAll(false)
        }
    }, [people.length, selectedPerson.length, setSelectAll, setType])


    // смотрит за изменением типа события и изменилась ли общая галочка
    useEffect(() => {
        if (type === 'all') {
            setChecked(selectAll)
        }
    }, [selectAll, type])

    const isCheck = (e) => {
        setChecked(e.target.checked)
        if (e.target.checked) {
            //если отметили то добавляем в массив выбранных
            setSelectedPerson([...selectedPerson, person])
        } else {
            // если стало false то удаляем из массива
            setSelectedPerson(selectedPerson.filter(item => item.id !== person.id))
        }
    }
    return (
        <tr key={person.id}>
            <td><input type="checkbox" checked={checked}
                       onChange={(e) => {
                           setChecked(e.target.checked)
                           handleCheck(person.id, e.target.checked)
                       }}/>
            </td>
            <td>{idx + 1}</td>
            <td>{person.name}</td>
            <td>{person.surname}</td>
            <td>{person.age}</td>
        </tr>
    );
};

export default PeopleItem;
//Сначала отрабатывает первй useEffect потом второй
//useEffect вызываются в том порядке, в котором они появляются в вашем коде для подобных типов, как и вызовы useState .
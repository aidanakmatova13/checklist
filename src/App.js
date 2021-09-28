import axios from "axios";
import {useEffect, useState} from "react";
import Employee from "./Components/Employee";
import PeopleItem from "./Components/PeopleItem";

function App() {
    const [people, setPeople] = useState([])
    const [selectAll, setSelectAll] = useState(false)
    const [selectedPerson, setSelectedPerson] = useState([])
    const [type, setType] = useState('')

    useEffect(() => {
        axios('https://613d36a694dbd600172ab88f.mockapi.io/api/employees')
            .then(({data}) => setPeople(data))
    }, [])

    const handleInputAll = (e) => {
        setSelectAll(e.target.checked)
        setType("all")
        if(e.target.checked){
            setSelectedPerson(people)
        } else
        {setSelectedPerson([])}
    }

    const handleCheck = (id, type) => {
        // if (status){
        //     setSelected([...selected, employees.find(item => item.id === id)])
        // }
        (setSelectedPerson(type && selectedPerson.filter((item) => item.id !== id)? [...selectedPerson, people.find((item) => item.id === id)]
            : selectedPerson.filter((item) => item.id !== id && [...selectedPerson])))
        setSelectAll( false)
    }
    return (
        <div className='container'>
            <table className='table table-primary mt-4'>
                <thead>
                <tr>
                    <th>
                        <input type="checkbox"
                               onChange={handleInputAll}
                        />
                    </th>
                    <th>ID</th>
                    <th>Имя пользователя</th>
                    <th>Фамилия пользователя</th>
                    <th>Возраст пользователя</th>
                </tr>
                </thead>
                <tbody>
                {
                    people.map((person, idx) =>
                        // <Employee el={el} key={el.id} isCheckedAll={isCheckedAll} handleCheck={handleCheck}/>
                        <PeopleItem
                            key={person.id}
                            person={person}
                            idx={idx}
                            selectedPerson={selectedPerson}
                            setSelectedPerson={setSelectedPerson}
                            selectAll={selectAll}
                            setSelectAll={setSelectAll}
                            people={people}
                            setType={setType}
                            type={type}
                            handleCheck={handleCheck}
                        />
                    )
                }
                </tbody>
            </table>
            <h4>Пользователи:</h4>
            {
                selectedPerson.map(el =>
                    <div>{el.name}</div>
                )
            }
        </div>
    );
}



export default App;
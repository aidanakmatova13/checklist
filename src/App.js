import axios from "axios";
import {useEffect, useState} from "react";
import Employee from "./Components/Employee";

function App() {
    const [employees, setEmployees] = useState([])
    const [isCheckedAll, setIsCheckedAll] = useState(false)
    const [selected, setSelected] = useState([])

    useEffect(() => {
        axios('https://613d36a694dbd600172ab88f.mockapi.io/api/employees')
            .then(({data}) => setEmployees(data))
    }, [])

    const handleCheck = (id, status) => {
        // if (status){
        //     setSelected([...selected, employees.find(item => item.id === id)])
        // }
        (setSelected(status && selected.filter((item) => item.id !== id)? [...selected, employees.find((item) => item.id === id)]
            : selected.filter((item) => item.id !== id && [...selected])))
        setIsCheckedAll( false)
    }
    return (
        <div className='container'>
            <table className='table table-primary mt-4'>
                <thead>
                <tr>
                    <th>
                        <input type="checkbox"
                               onChange={(e) => setIsCheckedAll(e.target.checked)}
                        />
                    </th>
                    <th>Имя пользователя</th>
                    <th>Фамилия пользователя</th>
                    <th>Возраст пользователя</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map(el =>
                        <Employee el={el} key={el.id} isCheckedAll={isCheckedAll} handleCheck={handleCheck}/>
                    )
                }
                </tbody>
            </table>
            <h4>Пользователи:</h4>
            {
                selected.map(el =>
                    <div>{el.name}</div>
                )
            }
        </div>
    );
}



export default App;
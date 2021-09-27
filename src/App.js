import axios from "axios";
import {useEffect, useState} from "react";
import Employee from "./Components/Employee";

function App() {
    const [employees, setEmployees] = useState([])
    const [isCheckedAll, setIsCheckedAll] = useState(false)

    useEffect(() => {
        axios('https://613d36a694dbd600172ab88f.mockapi.io/api/employees')
            .then(({data}) => setEmployees(data))
    }, [])

    return (
        <div className='container'>
            <table className='table table-primary'>
                <thead>
                <tr>
                    <th>
                        <input type="checkbox"
                               onChange={(e) => setIsCheckedAll(e.target.checked)}
                        />
                    </th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Возраст</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map(el =>
                        <Employee el={el} key={el.id} isCheckedAll={isCheckedAll}/>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default App;
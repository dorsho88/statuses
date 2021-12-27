import React from "react";
import { EmployeesContext } from "./EmployeesContext";
import Axios from 'axios';

const EmployeesContextProvider = (props) => {
    const [employees, setEmployees] = React.useState([]);


    const fetchEmployees = async () => {
        const { data } = await Axios.get(
            "http://localhost:4000/api/employees/"
        );
        const employees = data;
        setEmployees(employees);
    };


    return (
        <EmployeesContext.Provider value={{ employees, setEmployees, fetchEmployees }}>
            {props.children}
        </EmployeesContext.Provider>
    );
}

export default EmployeesContextProvider;
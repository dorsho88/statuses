import React from 'react';
import Employee from "./Employee";
import Grid from '@mui/material/Grid';
import { EmployeesContext } from '../contexts/EmployeesContext';
import Axios from 'axios';


const Employees = (props) => {


    const { employees, fetchEmployees } = React.useContext(EmployeesContext);

    React.useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <Grid container spacing={4} >
            {employees.map((item, idx) => {
                return (
                    <Grid item xs={4} key={item._id}>
                        <Employee key={item._id} item={item} />
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default Employees;
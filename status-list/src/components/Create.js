import React from 'react';
import { EmployeesContext } from '../contexts/EmployeesContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import Button from '@mui/material/Button';
import useForm from '../hooks/useForm';
import Axios from 'axios';

const Create = (props) => {

    const [status, setStatus] = React.useState('');
    const { employees, setEmployees } = React.useContext(EmployeesContext);
    const { values, handleChange } = useForm();


    // TODO: move to contextProvider?
    const handleSubmit = (event) => {
        Axios.post("http://localhost:4000/api/employees", { name: values.name, status: values.status })
            .then((response) => {
                props.onClose();
                setEmployees([...employees, response.data]);
            })
    }

    return (
        <Box sx={{
            minWidth: 120
        }}>
            <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 80 }}>
                <TextField id="standard-basic"
                    label="Name"
                    name="name"
                    variant="standard"
                    value={values.name}
                    onChange={handleChange} />
            </FormControl>
            <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                {/* TODO: duplicate component create component and db collection for status options and colors, and get real options via component */}
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="status"
                    value={values.status}
                    label="Status"
                    onChange={handleChange}
                >


                    <MenuItem value={"Working"}>
                        <ListItemIcon style={{ color: "blue" }}>
                            <TripOriginIcon />
                        </ListItemIcon>
                        <ListItemText primary="Working" />
                    </MenuItem>
                    <MenuItem value={"OnVacation"}>
                        <ListItemIcon style={{ color: "purple" }}>
                            <TripOriginIcon />
                        </ListItemIcon>
                        <ListItemText primary="OnVacation" />
                    </MenuItem>
                    <MenuItem value={"LunchTime"}>
                        <ListItemIcon style={{ color: "orange" }}>
                            <TripOriginIcon />
                        </ListItemIcon>
                        <ListItemText primary="Lunch Time" />
                    </MenuItem>
                    <MenuItem value={"BusinessTrip"}>
                        <ListItemIcon style={{ color: "lightGreen" }}>
                            <TripOriginIcon />
                        </ListItemIcon>
                        <ListItemText primary="Business Trip" />
                    </MenuItem>
                </Select>
            </FormControl>

            <Button onClick={handleSubmit} variant="contained">create</Button>
            <Button onClick={props.onClose} variant="outlined">cancel</Button>
        </Box>
    );
}

export default Create;
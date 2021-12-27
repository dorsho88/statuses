import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from "@material-ui/core/styles";
import { EmployeesContext } from '../contexts/EmployeesContext';
import Axios from 'axios';

const style = makeStyles({
    closeBtn: {
        float: "right",
    }
});

const Employee = (props) => {

    const classes = style();
    const [status, setStatus] = React.useState(props.item.status);
    const { employees, setEmployees } = React.useContext(EmployeesContext);

    const handleChange = (event) => {
        // TODO: async await with spinner
        setStatus(event.target.value);
        Axios.put("http://localhost:4000/api/employees/" + props.item._id, { status: event.target.value }); // should be from service
    };

    const handleDelete = (event) => {
        Axios.delete("http://localhost:4000/api/employees/" + props.item._id); // should be from service
        let newItems = [...employees].filter(item => {
            return item._id !== props.item._id;
        })
        setEmployees(newItems);
    };

    return (

        <Card sx={{ minWidth: 175 }}>
            <IconButton className={classes.closeBtn} aria-label="close right" onClick={handleDelete}>
                <CloseIcon />
            </IconButton>

            <CardContent>
                <Avatar sx={{ width: 100, height: 100 }} />
                <h3>{props.item.name}</h3>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                flexDirection: 'row-reverse'
            }}>
                <Box sx={{
                    minWidth: 120
                }}>
                    <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        {/* TODO: duplicate component create component and db collection for status options and colors, and get real options via component */}
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
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
                </Box>
            </CardActions>
        </Card>
    )
}

export default Employee;
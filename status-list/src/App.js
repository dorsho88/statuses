import React from 'react';
import EmployeesContextProvider from './contexts/EmployeesContextProvider';
import Employees from "./components/EmployeesList";
import Create from "./components/Create";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './App.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <EmployeesContextProvider>
      <div className="App">
        <Button variant="contained" onClick={handleOpen}>Create New</Button>
        <Employees />

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Create onClose={handleClose} />
          </Box>
        </Modal>
      </div>
    </EmployeesContextProvider>
  );
}

export default App;

// db username 8teamthrowaway
// db password :i2nDZ75tWawUWDz
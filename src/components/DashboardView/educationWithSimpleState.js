import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button,Dialog,DialogTitle,DialogContent,DialogContentText,
DialogActions,TextField } from '@material-ui/core';
import Draggable from 'react-draggable';
import useEducation from './useEducation';
import validateInfo from './validateInfo';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}


export default function EducationWithSimpleState({email}) {
  const classes = useStyles();
  const data=JSON.parse(localStorage.getItem(email));
  const {handleChange,values,errors,handleSubmit,open,handleClickOpen,handleClose,storeValue}=useEducation(validateInfo);
  
  return (
    <>
    {/* {console.log("DATA:",storeValue)} */}
    {/* //Dialog Code */}
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Education</DialogTitle>
      <form onSubmit={handleSubmit} noValidate>
      <DialogContent>
        <DialogContentText>
        Add Education
        </DialogContentText>
        <TextField
            fullWidth
            label="First Name"
            error={errors.name && true}
            helperText={errors.name && errors.name}
            margin="normal"
            name="firstName"
            type="text"
            variant="outlined"
            value={values.firstName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Last Name"
            error={errors.shop_name && true}
            helperText={errors.shop_name && errors.shop_name}
            margin="normal"
            name="lastName"
            type="text"
            variant="outlined"
            value={values.lastName}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Select Your Gender"
            error={errors.gender && true}
            helperText={errors.gender && errors.gender}
            margin="normal"
            name="gender"
            type="text"
            variant="outlined"
            value={values.gender}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Email"
            error={errors.email && true}
            helperText={errors.email && errors.email}
            margin="normal"
            name="email"
            type="email"
            value={values.email}
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="number"
            margin="normal"
            error={errors.number && true}
            helperText={errors.number && errors.number}
            name="number"
            type="text"
            value={values.number}
            variant="outlined"
            onChange={handleChange}
          />
          
      </DialogContent>
      <DialogActions>
      <Button type="submit" color="primary">
            Submit
      </Button>
      <Button onClick={handleClose} color="primary" autoFocus>
            Close
        </Button>
      </DialogActions>
      </form>
    </Dialog>




    <TableContainer component={Paper}>
      
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        
        {storeValue.length>0?
          storeValue.map((value)=><TableRow key={value.email}>
            <TableCell component="th" scope="row">
              {value.email}
            </TableCell>
            <TableCell align="right">{value.lastName}</TableCell>
            <TableCell align="right">{value.gender}</TableCell>
            <TableCell align="right">{value.email}</TableCell>
            <TableCell align="right">{value.number}</TableCell>
          </TableRow>
        )
         :
        null
        } 
        

      </Table>
    </TableContainer>
    <br/>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Education
    </Button>
  </>
  );
}
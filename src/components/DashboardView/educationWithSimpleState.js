import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Drawer,
  IconButton,
  Divider,
  List,
} from "@material-ui/core";
import Draggable from "react-draggable";
import useEducation from "./useEducation";
import validateInfo from "./validateInfo";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { connect } from "react-redux";
import { addDetails } from "./../../redux/details/detail.actions";
import { editDetails } from "../../redux/details/details.utils";
import { deleteDetails } from "./../../redux/details/details.utils";
import { Delete, Update } from "@material-ui/icons";


const drawerWidth = 440;

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

function EducationWithSimpleState({
  details,
  detailsData,
  editDetails,
  deleteDetails,
}) {
  const classes = useStyles();

  const {
    handleChange,
    values,
    errors,
    handleSubmit,
    open,
    opens,
    handleClickOpen,
    handleClose,
    handleDrawerClose,
    storeValue,
    deleteopen,
    deleteHandleClickOpen,
    deleteHandleClickClose,
    handleDelete,
  } = useEducation(validateInfo, details, editDetails, deleteDetails);
  const theme = useTheme();

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Education</DialogTitle>
        <form onSubmit={handleSubmit} noValidate>
          <DialogContent>
            <DialogContentText>Add Education</DialogContentText>
            <TextField
              fullWidth
              label="First Name"
              error={errors.firstName && true}
              helperText={errors.firstName && errors.firstName}
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
              error={errors.lastName && true}
              helperText={errors.lastName && errors.lastName}
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
              <TableCell align="right">Operations</TableCell>
            </TableRow>
          </TableHead>

          {detailsData.length > 0
            ? detailsData.map((value) => (
                <TableRow key={value.email}>
                  <TableCell component="th" scope="row">
                    {value.email}
                  </TableCell>
                  <TableCell align="right">{value.lastName}</TableCell>
                  <TableCell align="right">{value.gender}</TableCell>
                  <TableCell align="right">{value.email}</TableCell>
                  <TableCell align="right">{value.number}</TableCell>
                   <TableCell>
                    <IconButton onClick={()=>handleClickOpen(value.id)}>
                     <Update/>
                    </IconButton>
                    <IconButton onClick={()=>deleteHandleClickOpen(value.id)}>
                      <Delete/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </Table>
      </TableContainer>
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Education
      </Button>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={opens}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}

          <form onSubmit={handleSubmit} noValidate>
            {/* <DialogContent>
              <DialogContentText>Add Education</DialogContentText> */}
            <TextField
              fullWidth
              label="First Name"
              error={errors.firstName && true}
              helperText={errors.firstName && errors.firstName}
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
              error={errors.lastName && true}
              helperText={errors.lastName && errors.lastName}
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
            {/* </DialogContent> */}
            {/* <DialogActions> */}
            <Button type="submit" color="primary">
              Submit
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
            {/* </DialogActions> */}
          </form>
        </List>
        <Divider />
        <List></List>
      </Drawer>

      {/* Delete Dialogue */}
      <Dialog
        open={deleteopen}
        onClose={deleteHandleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are You Sure You Want to Delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteHandleClickClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = (state) => ({
  detailsData: state.details.userDetails,
});

const mapDispatchToProps = (dispatch) => ({
  details: (userDetails) => dispatch(addDetails(userDetails)),
  editDetails: (userDetails) => dispatch(editDetails(userDetails)),
  deleteDetails: (userDetails) => dispatch(deleteDetails(userDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EducationWithSimpleState);

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";
import {Link,Redirect} from  'react-router-dom' 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    "&.active": {
      background:'black',
    },
  },
}));

export const Nav = ({email}) => {
    const classes = useStyles();
    const history = useHistory();
    function logOut(){
      const data=JSON.parse(localStorage.getItem(email));
      data['isLogged']=false
      localStorage.setItem(email,JSON.stringify(data))
      // history.push('/login');
      history.goBack();
    }

    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
           <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
        
          
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {/* <Link to='dashboard/home'> */}

          <Button component={Link} to={'/dashboard'} color="inherit">Home</Button>
          <Button component={Link} to={'/dashboard/details'} color="inherit">User Education</Button>
          <Button component={Link} to={'/dashboard/education'} color="inherit">User Details</Button>
          <Button component={Link} to={'/dashboard/educationwithsimplestate'} color="inherit">User Details 2</Button>
  
            {/* <Link className={classes.button}  to={'/dashboard/home'} color="inherit">Home</Link>
            <Link className={classes.button}  to={'/dashboard/details'} color="inherit">User Education</Link>
            <Link className={classes.button}  to={'/dashboard/education'} color="inherit">User Details</Link> */}
            <Button className={classes.button} color="inherit" onClick={()=>logOut()}>logOut</Button>
            {/* <a href='/'>LogOut</a> */}
          {/* </Link> */}
        </Toolbar>
      </AppBar>
    </div>
    )
}

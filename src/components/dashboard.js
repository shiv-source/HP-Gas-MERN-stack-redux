import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Vendors from "./vendors";
import Items from "./items";
import { useHistory } from "react-router-dom";
import Sidebar from "./sidebar";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { postLogout } from '../redux/ActionCreators';


const mapStateToProps = (state) => {
  return {
    userLogin: state.userLogin,
  };
};


const mapDispatchToProps = (dispatch) => ({
  postLogout: () => dispatch(postLogout()),

});


const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginRight: " 70px",
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 300,
  },

  title: {
    flexGrow: 1,
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogOut = this.handleLogOut.bind(this);

  }


  handleLogOut(){
    this.props.postLogout();
    this.props.history.push("/");

  }

  render() {
    const { classes } = this.props;
    // console.log(this.props.userLogin);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              HP Bill Invoice
            </Typography>
            <Button onClick={this.handleLogOut} color="inherit">
              {this.props.userLogin.firstName} (Logout)
            </Button>
          </Toolbar>
        </AppBar>
        <br></br>
        <Grid item xs={2} sm container>
          <Grid items xs={10}>
            <Vendors />
          </Grid>
          <Grid items xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs container direction="column" spacing={2}></Grid>
        </Grid>
        <br></br> <br></br>
        <Items />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(withStyles(useStyles)(Dashboard));

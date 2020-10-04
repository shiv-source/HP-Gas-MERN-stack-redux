import React, { useEffect, useState, Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../assests/download.png";
import { red } from "@material-ui/core/colors";
import { connect } from "react-redux";
import { actions, Form, Errors, Control } from "react-redux-form";
import { postLoginUser } from "../redux/ActionCreators";

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

// const mapDispatchToProps = (dispatch) => ({
//   resetLoginForm: () => {
//     dispatch(actions.reset("login"));
//   },
// });

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  postLoginUser: (credential) => dispatch(postLoginUser(credential)),
  resetFeedbackForm: () => { dispatch(actions.reset("feedback")); },
});

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    backgroundColor: red,
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const renderEmailField = ({ input, label, ...custom }) => (
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="email"
    label="Username/Email"
    name="email"
    autoComplete="email"
    autoFocus
    hinttext={label}
    floatinglabeltext={label}
    {...input}
    {...custom}
  />
);

const renderPasswordField = ({ input, label, ...custom }) => (
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
    hinttext={label}
    floatinglabeltext={label}
    {...input}
    {...custom}
  />
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value) {
    // alert(value);
    this.props.postLoginUser(value);
    this.props.resetFeedbackForm();
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img src={Logo} alt="website logo" style={{ height: "150px" }} />
          <br></br>
          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <Form
            model="feedback"
            onSubmit={(value) => this.handleSubmit(value)}
            className={classes.form}
          >
            <Control.text
              model=".email"
              component={renderEmailField}
              validators={{
                required,
                validEmail,
              }}
            />
            <Errors
              className="text-danger"
              model=".email"
              show="touched"
              messages={{
                required: "Required",
                validEmail: " / Invalid Email Address",
              }}
            />

            <Control.text
              model=".password"
              component={renderPasswordField}
              validators={{
                required,
                minLength: minLength(7),
              }}
              type="password"
            />
            <Errors
              className="text-danger"
              model=".password"
              show="touched"
              messages={{
                required: "Required",
                minLength: " / Password must be greater than 6 characters",
              }}
            />

            <Button type="submit" fullWidth variant="contained" color="primary">
              Login
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

// export default withStyles(useStyles)(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(Login));

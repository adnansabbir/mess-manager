import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import AuthStyleClasses from '../auth-components.style';
import {ReactComponent as GoogleLogo} from "../../../assets/icons/google.svg";
import {ReactComponent as FacebookLogo} from "../../../assets/icons/facebook.svg";
import {signInWithFacebook, signInWithGoogle} from "../../../firebase/firebase.utils";
import {AUTH_ROUTES} from "../../../routes/App.routes";
import {Link} from "react-router-dom";
import CustomInput from "../../CustomInput/custom-input.component";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignIn() {
    const classes = AuthStyleClasses();

    return (
        < Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={5} md={8} lg={9}/>
            <Grid item xs={12} sm={7} md={4} lg={3} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form}>
                        <CustomInput
                        label='Email'
                        required
                        fullWidth
                        type='email'/>

                        <CustomInput
                            label='Password'
                            required
                            fullWidth
                            type='password'/>

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >Sign In
                        </Button>

                        <Button
                            type="button"
                            fullWidth
                            variant="outlined"
                            color="default"
                            onClick={signInWithGoogle}
                            className={classes.otherSignInButton}>
                            <GoogleLogo className={classes.socialMediaLogo}/>
                            <span>Sign In With Google</span>
                        </Button>

                        <Button
                            type="button"
                            fullWidth
                            variant="outlined"
                            color="default"
                            onClick={signInWithFacebook}
                            className={classes.otherSignInButton}>
                            <FacebookLogo className={classes.socialMediaLogo}/>
                            <span>Sign In With Facebook</span>
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={AUTH_ROUTES.SIGN_UP} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        {/*<Box mt={5}>*/}
                        {/*    <Copyright/>*/}
                        {/*</Box>*/}
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
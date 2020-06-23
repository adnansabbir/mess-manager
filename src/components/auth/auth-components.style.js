import {makeStyles} from '@material-ui/core/styles';

const AuthStyleClasses = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    otherSignInButton: {
        margin: theme.spacing(0, 0, 2),
    },
    socialMediaLogo:{
        height: '24px',
        width: '24px',
        margin: '5px 20px'
    }
}));

export default AuthStyleClasses;
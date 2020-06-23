import {makeStyles} from '@material-ui/core/styles';

const AuthStyleClasses = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
    },
    bgImage: {
        backgroundImage: 'url(https://source.unsplash.com/random/1920x1080?friend)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
}));

export default AuthStyleClasses;
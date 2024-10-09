import { AppBar,Toolbar,Typography } from "@mui/material";
import {Link} from 'react-router-dom';

const Header:React.FC =()=>(
    <AppBar position="static" color="primary">
        <Toolbar>
            <Typography variant="h6" component={Link} to='/' style={{textDecoration: 'none',color: 'inherit',flexGrow:1}}>
                ProfileCard App
            </Typography>

        </Toolbar>
    </AppBar>
);
export default Header;
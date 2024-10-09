import { AppBar,Toolbar,Typography } from "@mui/material";

const Footer: React.FC =()=>(
    <AppBar position="static" color="primary" style={{marginTop:"auto",position:'relative'}}>
        <Toolbar>
            <Typography variant="body2" color="inherit" style={{textAlign:'center',width:'100%'}}>
                &copy; 2024 Gradious Technologies (ProfileApp)</Typography> 
        </Toolbar>
    </AppBar>
)
export default Footer;
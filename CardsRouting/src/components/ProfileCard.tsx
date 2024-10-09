import {Card,CardContent, Avatar,Typography,Button} from '@mui/material';
import { Link } from 'react-router-dom';

interface ProfileCardProps{
    name : string,
    role: string,
    id: number;
}

const ProfileCard : React.FC <ProfileCardProps> = ({name, role,id})=>{
    return(
        <Card>
            <CardContent >
                <Typography variant='h5' >{role}</Typography>
                <Link to={`/profiles/${id}`} style={{textDecoration: 'none'}}>
                    <Typography variant='h6' color='primary'>
                        {name}
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}
export default ProfileCard;
import { useParams } from "react-router-dom";
import { Container,Typography,Avatar, List, ListItem, ListItemText ,Box, Divider,Chip, Grid} from "@mui/material";

interface ProfileProps{
    id: number,
    name: string,
    age: number,
    location: string,
    bio: string,
    hourlyRate: number,
    role: string,
    imgSrc : string,
    online: boolean,
    lastSeen?: string,
    skills?:string[];
}

function CardDetail({profiles}: {profiles: ProfileProps[]}){
    const {id} = useParams<{id: string}>();
    const profile = profiles[parseInt(id)];

    return (
        <Container maxWidth= "md" sx={{mt:4,mb:4,p:4,boxShadow:3,borderRadius:3,backgroundColor: "#f7f7f7"}}>
            <Grid container spacing={4}>
                <Grid item xs={12} md= {4} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Avatar src={profile.imgSrc} alt={profile.name} sx={{width: 180,height: 180, boxShadow: 2, border:'3px solid #007bff'}}/>
                </Grid>
           
            <Grid item xs={12} md={8} >
                <Typography variant="h4" align="center">
                    {profile.name}, {profile.age}
                </Typography>
                <Typography variant="h6" align="center">
                    {profile.role}
                </Typography>
            
            <Divider sx={{my: 2}} />
            <Typography variant="body1" gutterBottom><strong>Bio:</strong>{profile.bio}</Typography>
            <Typography variant="body1" gutterBottom><strong>Location: </strong>{profile.location}</Typography>
            <Typography variant="body1" gutterBottom><strong>Rate: </strong>&#8364;{profile.hourlyRate}/hour</Typography>
            </Grid>
            </Grid>
            <Divider sx={{my: 4}} >
                <Chip label="skills" color="primary" />
            </Divider>
            <Box sx ={{display: "flex" , flexWrap: 'wrap',justifyContent: 'center'}} >
                {profile.skills?.map((skill,index) =>(
                    <Chip key={index} label={skill} sx={{m:1, backgroundColor: "#007bff",color: 'white',fontWeight: 'bold',borderRadius:2,px: 2}} />
                ))}
            </Box>
            <Box textAlign="center" mt={4} >
                {profile.online ?(
                    <Typography variant="body1" color="green">
                        <strong>Status:</strong> Online
                    </Typography>) :(
                    <Typography variant="body1" color="red" >
                        <strong>Last seen: </strong>{profile.lastSeen}
                    </Typography>

                )}
            </Box>
        </Container>
    )
}
export default CardDetail;
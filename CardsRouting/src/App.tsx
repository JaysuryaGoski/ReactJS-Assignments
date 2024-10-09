import { useEffect,useState } from 'react'
import {  Grid ,Typography ,Container} from '@mui/material'
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom'
import CardDetail from './components/CardDetail'
import ProfileCard from './components/ProfileCard'
import SharedLayout from './components/SharedLayout'
import profile from'./profile.json'


interface Profile{
  name: string,
  age: number,
  location: string,
  bio: string,
  hourlyRate :number,
  role: string,
  imgSrc: string,
  online: boolean,
  lastSeen?:string,
  starColor?:string,
  skills?:string[];

}

function App() {
  const [profiles,setProfiles] = useState<Profile[]>([]);

  useEffect(()=>{
    setProfiles(profile);
  },[])
  
  return (
    <>
    <div style= {pageContainerStyle}>
    <Router>
          <Routes>
            <Route path='/' element = {<SharedLayout />} >
            <Route index  element = {<ProfileList profiles = {profiles} />} />
            <Route path='/profiles/:id' element={<CardDetail profiles={profiles} />} />
            </Route>
          </Routes>
      </Router>
    </div>
      
    </>
  )
}
interface ProfileListProps{
  profiles: Profile[];
}
const ProfileList: React.FC<ProfileListProps> = ({profiles})=> {
  return(
<>
    <Container sx={containerStyle}>
      <Typography variant='h4' gutterBottom sx={titleStyle}>
        User Profile Cards
      </Typography>
      <Grid container spacing={4}>
        {profiles.map((profile,index)=>(
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProfileCard {...profile} id ={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
    
  </>
  )
  
}

const pageContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',  
};

const containerStyle = {
  flex: 1,
  paddingTop: '2rem',
  paddingBottom: '2rem',
  maxWidth: '1200px',
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '2rem',
  fontWeight: 'bold',
};

export default App;

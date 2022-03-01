import React,{useState} from 'react'
import NearestRides from './NearestRides'
import PastRides from './PastRides'
import UpcomingRides from './UpcomingRides'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import { apiGet } from "../Api";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import {Link}  from "react-router-dom";
const pages = [
  {text:'Nearest rides', to:'/'}, 
  {text:'Upcoming rides', to:'/UpcomingRides'}, 
  {text:'Past rides',to:'/pastRides'}
];

const Home = () => {
  const [data, setdata] = useState([])

  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const onSearch=()=>{
    apiGet(`/rides`).then(result=>{
      setdata(result)
      console.log(result.length)
      console.log(result)
    })
  }


  return (
    <div color='white'>
        <AppBar elevation={0} position="static" sx={{background: 'initial'}}>

          <Toolbar disableGutters sx={{justifyContent:'space-between'}}>
            <Typography variant="h6" noWrap component="div" sx={{ ml:0, mr: 2,pr:2, display:'flex' }}>
               {
                  pages.map(item=><div  style={{marginRight:'15px',minWidth:'140px' }} key={item.to}><Link data={data}  style={{color:'white', fontSize:'16px',textDecoration: 'none' }} to={item.to} onClick={onSearch()}>{item.text}({data.length})</Link></div>)
               }
            </Typography>
            {/* <Box >
            <FormControl sx={{ minWidth:120 }}>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={city}
                  label="City"
                  onChange={handleChange}
                >
                  {data && data.map(item =><MenuItem key={data.id} value={10}>{item.city}</MenuItem>)}
                </Select>
              </FormControl>
            </Box> */}
            
          </Toolbar>

        </AppBar>
    </div>
  )
}

export default Home


// <IconButton sx={{ p: 0 }}>
//                 <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" color='white'/><path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"/></svg>
//                   <Button  style={{ my: 2, color: 'white', display: 'block',fontSize:'16px',textDecoration: 'none'  }}> Filters</Button>  {/* borderBottom: '2px solid red',borderRadius:'0px' */}
//                 </IconButton>
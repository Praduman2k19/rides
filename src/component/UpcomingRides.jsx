import React,{useState,useEffect} from 'react'
import MainPageLayout from './MainPageLayout'
import { apiGet } from '../Api'
import Card from './Card'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const UpcomingRides = () => {
  const [data, setdata] = useState([])
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    console.log(event)
    setCity(event.target.value);
    handleSearch()
  };


  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = data.filter((data) => {
      console.log(data)
      return data.title.search(value) != -1;
    });
    console.log(result)
    setdata(result);
    }
  const onSearch=()=>{
    apiGet(`/rides`).then(result=>{
      setdata(result)
      console.log(result)
    })
  }

  return (
    <MainPageLayout onClick={onSearch()}>
      <div>
      <div style={{justifyContent:'space-between',display:'flex', marginTop:'-50px'}}>
          <box></box>
          <Box >
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
          </Box>
        </div>
        <div>{data && data.map(item=><Card item={item} />)}
      </div>
      </div>
    </MainPageLayout>
  )
}

export default UpcomingRides
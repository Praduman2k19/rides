import React, { useState } from "react";
import axios from "axios";
import MainPageLayout from "./MainPageLayout";
import Card from "./Card";
import { apiGet } from "../Api";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';

const NearestRides = () => {
  const [data, setdata] = useState([])
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    console.log(event)
    console.log("event")
    setCity((event.target.value) || '');
  };
  const handleChangeState=(event)=>{
    console.log(event)
    console.log("event")
    setState((event.target.value) || '');
    handleSearch()
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const onSearch=()=>{
    apiGet(`/rides`).then(result=>{
      setdata(result)
      console.log(result)
    })
  }

    const handleSearch = (event) => {
      let result=data.filter(item => item.city === city)
      setdata(result)
      console.log(data)
    }
  
  
  return (
    <MainPageLayout onClick={onSearch()}>
      <div>
          <div style={{justifyContent:'space-between',display:'flex', marginTop:'-50px'}}>
            <box></box>
            <Button onClick={handleClickOpen}>Filters</Button>
              <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Filters</DialogTitle>
                <DialogContent>
                  <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-dialog-select-label1">City</InputLabel>
                      <Select
                        labelId="demo-dialog-select-label1"
                        id="demo-dialog-select"
                        value={city}
                        onChange={handleChange}
                        input={<OutlinedInput label="City" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {data && data.map(item =><MenuItem key={item.id} value={item.city} >{item.city}</MenuItem>)}
                      </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-dialog-select-label">State</InputLabel>
                      <Select
                        labelId="demo-dialog-select-label"
                        id="demo-dialog-select"
                        value={state}
                        onChange={handleChangeState}
                        input={<OutlinedInput label="State" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {data && data.map(item =><MenuItem key={item.id} value={item.state}>{item.state}</MenuItem>)}
                      </Select>
                    </FormControl>
                  </Box>
                </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Ok</Button>
              </DialogActions>
            </Dialog>
          </div>
          <div>
            {data&&data.map((item) => (<Card item={item} />))}
          </div>
      </div>
    </MainPageLayout>
  );
};

export default NearestRides;

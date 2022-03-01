import React from 'react'
import './Card.css';
const Card = ({item}) => {
  return (
    <div>
        <div className='card'>
            <div className='section1'>
                <div className='img'><img src={item.map_url} alt="Map" /></div>
                <div className='info'>
                    <span>Ride Id : {item.id}</span><br></br>
                    <span>Origin Station : {item.origin_station_code}</span><br></br>
                    <span>station_path : [{item.station_path && item.station_path.map((d)=>(<span>{d}, </span>))}]</span><br></br>
                    <span>Date : {item.date}</span><br></br>
                    <span>Distance : {item.destination_station_code - item.origin_station_code}</span><br></br>

                </div>
            </div>

            <div className='section2'>
                <span>{item.city}</span>
                <span>{item.state}</span>
            </div>
        </div>
    </div>
  )
}

export default Card

//   "id": 819,
//   "origin_station_code": 16,
//   "station_path": [24, 30, 49, 59, 62, 77, 80],
//   "destination_station_code": 91,
//   "date": "01/01/2022 06:07 PM",
//   "map_url": "https://picsum.photos/200",
//   "state": "Himachal Pradesh",
//   "city": "Shimla"
// Ride Id : 002
// Origin Station : 20
// station_path : [20, 39, 40, 42, 54, 63, 72, 88, 98]
// Date : 15th Feb 2022 16:33
// Distance : 0
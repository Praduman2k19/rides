import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import NearestRides from './component/NearestRides'
import PastRides from './component/PastRides'
import UpcomingRides from './component/UpcomingRides'

class RouterFun extends Component {
    render() {
    return (
            <Switch>
                <Route exact path="/" component={NearestRides } />
                <Route exact path="/UpcomingRides" component={UpcomingRides } />
                <Route exact path="/PastRides" component={PastRides} />
                <Route><div>Not found</div></Route>
            </Switch>
    )
    }
}

export default RouterFun
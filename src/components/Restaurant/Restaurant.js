import React, { Component } from 'react'

import Bar from '../Bar/Bar';
import MainRoom from '../MainRoom/MainRoom';
import Lounge from '../MainRoom/Lounge/Lounge';
import Saloon from '../MainRoom/Saloon/Saloon';


class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            orders: 0
         }

         this.newOrder = this.newOrder.bind(this);
    }

    newOrder(){
        this.setState({
            orders: this.state.orders + 1
        })
    }
               
    render() { 
        return (  
            <div className="component">
                <h1>Restaurant - lifting state UP</h1>
                <h2>Total orders(this.state.orders):{this.state.orders}</h2>
                <Bar orders={this.state.orders} newOrder={this.newOrder}/>
                <MainRoom>
                    <Lounge orders={this.state.orders} newOrder={this.newOrder}/>
                    <Saloon orders={this.state.orders} newOrder={this.newOrder}/>
                </MainRoom>
            </div>
        );
    }
}
 
export default Restaurant;
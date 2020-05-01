import React from 'react'

const Saloon = ({orders, newOrder}) => 
    <div className="component">
        <h1>Saloon</h1>
        <h2>Total orders(this.state.orders):{orders}</h2>
        <button onClick={newOrder}>add order</button>
    </div>

export default Saloon;
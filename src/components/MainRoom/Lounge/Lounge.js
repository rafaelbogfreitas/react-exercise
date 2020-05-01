import React from 'react'

const Lounge = ({orders, newOrder}) => 
    <div className="component">
        <h1>Lounge</h1>
        <h2>Total orders(this.state.orders):{orders}</h2>
        <button onClick={newOrder}>add order</button>
    </div>

export default Lounge;
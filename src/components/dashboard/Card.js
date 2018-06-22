import React, {Component} from 'react';
import CardItem from './CardItem'

export class Dashboard extends Component {
  render () {
    return (
      <div className="mycontainer">
        <h1>Add Card </h1>
        <div className="card-container">

        <CardItem />
        <CardItem />
        <CardItem />
        
        </div>
      </div>
    );
  }
}

export default Dashboard;

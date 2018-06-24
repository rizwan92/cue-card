import React, { Component } from "react";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <a href={process.env.PUBLIC_URL + "/adminlogin"}>Dashboard</a>
      </div>
    );
  }
}

export default HomePage;

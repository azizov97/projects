import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid justify-content-start">
          <b className="navbar-brand">Counters</b>
          <span className="badge badge-lg bg-success">
            {this.props.amount || 0}
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;

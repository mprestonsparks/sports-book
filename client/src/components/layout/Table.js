import React, { Component } from "react";


class Table extends Component {
  render() {
    return (
        <div className="col s12">
            <p>** ADD BET BUTTON TO TABLE</p>
            <table  className="highlight responsive-table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Item Name</th>
                <th>Item Price</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>Alvin</td>
                <td>Eclair</td>
                <td>$0.87</td>
            </tr>
            <tr>
                <td>Alan</td>
                <td>Jellybean</td>
                <td>$3.76</td>
            </tr>
            <tr>
                <td>Jonathan</td>
                <td>Lollipop</td>
                <td>$7.00</td>
            </tr>
            </tbody>
        </table>
        </div>
    );
  }
}


export default Table;
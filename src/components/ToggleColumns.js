import React, { Component } from 'react'

export default class ToggleColumns extends Component {
  onCheckboxClick = (e) => {
    // to-do: implement checkbox click handler
    this.props.onCheckboxClick(e.target.name,e.target.checked);
  }
  
  render() {
    let {id, name} = this.props.columns;
    return (
      <div>
        { 
          Object.keys(this.props.columns).map((column, index, val) => {
            return ( 
            <div key={index}>
              <label>
                {column}
              </label>
              <input type="checkbox" onChange={this.onCheckboxClick} name={column} checked={this.props.columns[column]} />
            </div>)
          })
        }
      </div>
    );
  }
}

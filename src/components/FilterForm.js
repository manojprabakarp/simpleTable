import React, { Component } from 'react'

export default class FilterForm extends Component {
  
  onPriceInputChange = (e) => {
    // to-do: implement handler
    this.props.onPriceInputChange(e.target.name, e.target.value);
  }

  render() {
    return (
      <div>
        {/* Bind handlers and props */}
        <label htmlFor="name">Filter:</label>
        <input type="number"
               name="priceFrom"
               placeholder="Price from..." value={this.props.FilterForm} onChange={this.onPriceInputChange.bind(this)} />
        <input type="number"
               name="priceTo"
               placeholder="Price to..." value={this.props.FilterTo} onChange={this.onPriceInputChange.bind(this)}/>
      </div>
    )
  }
}

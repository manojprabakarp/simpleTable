import React, { Component } from 'react';


export default class ProductList extends Component {
  render() {
    let {id, name, department, currency, price} = this.props.columns;
    return (
      <div id="product-list">
        <header>
          <strong>Product List</strong>
        </header>
        <table>
          <thead>
            <tr>
              {id && <th>ID</th>}
              {name && <th>Name</th>}
              {department && <th>Department</th>}
              {currency && <th>Currency</th>}
              {price && <th>Price</th>}
            </tr>
          </thead>
          <tbody>
            {/* Display products here in new table rows */
              this.props.products.map((item) => {
                return (
                  <tr key={item.id}>
                  {id && <td>{item.id}</td>}
                  {name && <td>{item.name}</td>}
                  {department && <td>{item.department}</td>}
                  {currency && <td>{item.currency}</td>}
                  {price && <td>{item.price}</td>}
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

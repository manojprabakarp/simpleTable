import React, { Component } from 'react'
import './styles/Search.css';
import ToggleColumns from './components/ToggleColumns';
import ProductList from './components/ProductList';
import FilterForm from './components/FilterForm';
import products from './../src/assets/products.json';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [...products],
      priceFrom: '',
      priceTo: '',
      columns: {
        id: true,
        name: true,
        department: true,
        currency: true,
        price: true
      }
    };
  }


  onPriceInputChange = (name, value) => {
    // to-do: implement price change handler
    let state = this.state;
    state[name] = value;
    state.products = this.filterProducts(products, state.priceFrom, state.priceTo );
    this.setState( state );
  }

  filterProducts = (products, from, to) => {
    return products.filter((ele)=>{
      return ele.price >= (parseFloat(from) || 0 ) && ele.price <= ((parseFloat(to)) || Infinity);
    });
    // to-do: implement handler for filtering products by price range
  }

  onCheckboxClick = (name, checked) => {
    // to-do: implement checkbox click handler
    let columns = this.state.columns;
    columns[name] = checked;
    this.setState({columns: columns});
  }

  render() {
    let displayedProducts = [...this.state.products];
    return (
      <div className="Products">
        <FilterForm priceFrom={this.state.priceFrom}
                    priceTo={this.state.priceTo}
                    onPriceInputChange={this.onPriceInputChange}/>

        <ToggleColumns onCheckboxClick={this.onCheckboxClick}
                       columns={this.state.columns}/>

        <ProductList products={displayedProducts}
                     columns={this.state.columns}/>
      </div>
    );
  }
}

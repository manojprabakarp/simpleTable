import React from 'react';
import App from '../../App';
import '../../setupTests.js';
import { shallow, mount, render } from 'enzyme';
import products from './../../assets/products.json';

describe('App.js component', () => {
  const wrapper = shallow(<App/>);

  it('products are imported', () => {
    expect(wrapper.state().products.length).toBe(30);
  });

  it('is filter by price correct', () => {
    wrapper.setState({
      products,
      priceFrom: '10',
      priceTo: '100'
    });
    ;
    expect(wrapper.instance().filterProducts(products, '10', '100').length).toBe(2);
    wrapper.setState({
      products,
      priceFrom: '100',
      priceTo: '1000'
    });
    expect(wrapper.instance().filterProducts(products, '100', '1000').length).toBe(6);
    wrapper.setState({
      products,
      priceFrom: '100',
      priceTo: '100'
    });
    expect(wrapper.instance().filterProducts(products, '100', '100').length).toBe(0);
  });

  it('is incorrect filter range returning whole products array', () => {
    wrapper.setState({
      products,
      priceFrom: '1000',
      priceTo: '100'
    });
    expect(wrapper.instance().filterProducts(products, '1000', '100').length).toBe(0);
  });

  it('is correct start price value shown in input', () => {
    wrapper.setState({
      products,
      priceFrom: '123',
      priceTo: ''
    });
    expect(wrapper.instance().state.priceFrom).toBe('123');
  });

  it('is correct end price value shown in input', () => {
    wrapper.setState({
      products,
      priceFrom: '',
      priceTo: '123'
    });
    expect(wrapper.instance().state.priceTo).toBe('123');
  });

});

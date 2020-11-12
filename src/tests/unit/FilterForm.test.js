import React from 'react';
import FilterForm from './../../../src/components/FilterForm'
import '../../setupTests.js';
import { shallow, mount, render } from 'enzyme';

describe('FilterForm.js component', () => {
  it('is change start price handler binded to input', () => {
    const onPriceInputChange = jest.fn(),
      props = {
          priceFrom: '',
          onPriceInputChange
      },
    InputComponent = mount(<FilterForm {...props} />).find('input[name="priceFrom"]');
    InputComponent.simulate('change', { target: {
      name: 'priceFrom',
      value: 123
    }});
    expect(onPriceInputChange).toHaveBeenCalledWith('priceFrom', 123);
  });

  it('is change end price handler binded to input', () => {
    const onPriceInputChange = jest.fn(),
      props = {
          priceTo: '',
          onPriceInputChange
      },
    InputComponent = mount(<FilterForm {...props} />).find('input[name="priceTo"]');
    InputComponent.simulate('change', { target: {
      name: 'priceTo',
      value: 123
    }});
    expect(onPriceInputChange).toHaveBeenCalledWith('priceTo', 123);
  });

})

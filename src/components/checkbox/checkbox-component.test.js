import React from 'react';
import CheckboxComponent from './checkbox-component';
import { shallow } from 'enzyme';

it('should render checkbox and label when passed', () => {
  const label = 'label';
  const checkboxComponent = shallow(<CheckboxComponent label={label} />);

  expect(checkboxComponent.find('.checkbox')).toHaveLength(1);
  expect(checkboxComponent.find('.checkbox-label')).toHaveLength(1);
});

it('should not render label when it is not passed', () => {
  const checkboxComponent = shallow(<CheckboxComponent />);

  expect(checkboxComponent.find('.checkbox')).toHaveLength(1);
  expect(checkboxComponent.find('.checkbox-label')).toHaveLength(0);
});

it('should add checked class when checkbox is clicked and it was not checked', () => {
  const checkboxComponent = shallow(<CheckboxComponent />);

  checkboxComponent.find('.checkbox').simulate('click');
  
  expect(checkboxComponent.find('.checkbox.checked')).toHaveLength(1);
});

it('should remove checked class when checkbox is clicked and it was previously checked', () => {
  const checkboxComponent = shallow(<CheckboxComponent />);

  checkboxComponent.find('.checkbox').simulate('click');
  expect(checkboxComponent.find('.checkbox.checked')).toHaveLength(1);
  checkboxComponent.find('.checkbox').simulate('click');
  expect(checkboxComponent.find('.checkbox.checked')).toHaveLength(0);
});

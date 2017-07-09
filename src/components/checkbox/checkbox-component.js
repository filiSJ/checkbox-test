import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class CheckboxComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    }
  }

  getClassName() {
    return classNames('checkbox', {
      checked: this.state.checked
    });
  }

  toggleCheckbox = () => {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  }

  render() {
    return (
      <div className="checkbox-component">
        <div className={this.getClassName()} onClick={this.toggleCheckbox}/>
        {this.props.label && <label className="checkbox-label">{this.props.label}</label>}
      </div>
    );
  }
}

CheckboxComponent.propTypes = {
  label: PropTypes.string
}

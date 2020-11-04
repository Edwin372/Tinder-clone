import React, { Component } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
export default class TagDropDown extends Component {
    render() {
        return (
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[]}
              isMulti
              options={this.props.options}
            />
        );
    }
}

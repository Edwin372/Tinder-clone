import React, { Component } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './TagDropDown.scss'

const animatedComponents = makeAnimated();
const options=[
    {value: 'entertainment', label: '#Entertainment'},
    {value: 'family', label: '#Family'},
    {value: 'life', label: '#Life'},
    {value: 'marriage', label: '#Marriage'},
    {value: 'computer', label: '#Computer'},
    {value: 'science', label: '#Science'},
    {value: 'helmet', label: '#Helmet'},
    {value: 'bun bo hue', label: '#Bun Bo Hue'},
    {value: 'day du khong gio', label: '#Day Du Khong Gio'},
    {value: 'tai nam gau gan', label: '#Tai Nam Gau Gan'},
]
const customStyles = {
    dropdownIndicator: (styles) => ({...styles, color:'black' }),
    clearIndicator: (styles) => ({...styles, color:'black' }),
    noOptionsMessage: (styles) => ({...styles, color:'black',  }),
    menu: (styles) => ({...styles, backgroundColor:'#D3F4E1', marginTop:'0', borderRadius: '0', }),
    indicatorSeparator: (styles) => ({...styles, backgroundColor:'black',  }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: '#D3F4E1',
      };
    },
  };
export default class TagDropDown extends Component {
    render() {
        return (
            <div className="container">
                <div className="title">
                    <label>DISCOVER SOME INTERESTING TOPIC</label>
                </div>
                <div className="tag-dropdown">
                    <Select
                        styles={customStyles}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={options}
                        placeholder=""
                    />
                </div>
            </div>
        );
    }
}

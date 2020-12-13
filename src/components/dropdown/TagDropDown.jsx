import React, { Component } from 'react'
import Select, {components} from 'react-select';
import makeAnimated from 'react-select/animated';
import './TagDropDown.scss'
import dropdownIndicator from '../../svg/dropdownIndicator.svg'
import dropdownMini from '../../svg/dropdownMini.svg'

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
    valueContainer: (styles) => ({...styles, fontFamily:"'Rosario', sans-serif", marginTop:'0px',width:'300px', padding: '1px 10px'}),
    input: (styles) => ({...styles, fontFamily:"'Rosario', sans-serif",height:'23.87px',margin:'0px'}),
    multiValue: (styles) => ({...styles, borderRadius:'8px', margin:'2px',height:'15.87px'}),
    multiValueLabel: (styles) => ({...styles, padding:'0'}),
    control: (styles) => ({
        ...styles,
        border: '1px solid #000000',
        borderRadius: '0',
        minHeight: 'fit-content',
        width:'350.84px',
        backgroundColor: '#FFFFFF',
        boxSizing: 'border-box',
        boxShadow:'0'
      }),
    clearIndicator: (styles) => ({...styles, color:'black', padding:'0',width: '21.37px', height:'26,87px'}),
    noOptionsMessage: (styles) => ({...styles, color:'black'}),
    menu: (styles) => ({...styles, backgroundColor:'#D3F4E1', marginTop:'0', borderRadius: '0', width: '350.84px', boxShadow:'0'}),
    indicatorSeparator: (styles) => ({...styles, backgroundColor:'white' }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: '#D3F4E1',
        width: '337.93px',
        height: '28.83px',
        padding: '1.65px',
        marginLeft:'12px',
        fontFamily:"'Rosario', sans-serif"
      };
    },
};
const DropdownIndicator = props => {
    return (
      components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <div className="parent">
        <img className="image1" src={dropdownIndicator} alt="dropdownIndicator-icon"/>
        <img className="image2" src={dropdownMini} alt="dropdownMini-icon"/>
        </div>
      </components.DropdownIndicator>
      )
    );
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
                        components={animatedComponents, {DropdownIndicator}}
                        isMulti
                        options={options}
                        placeholder=""
                    />
                </div>
            </div>
        );
    }
}

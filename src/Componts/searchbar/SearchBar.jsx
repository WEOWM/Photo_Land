import React from 'react'
import './SearchBar.css'
import { BsSearch } from "react-icons/bs";
function SearchBar (props) {
  return (
    <div className="searchbar" >
    <input
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      // onChange={(e)=>props.onChange(e)}
      className="searchbar__input"
    />
    <button onClick={props.handleSubmit} type="submit" className="searchbar__button">
      
      {props.width === "100px" ? <p className='m-0 p-0'>Join</p> : <BsSearch className="text-dark"  /> }
    </button>
  </div>
  )
}

export default SearchBar
import React from 'react'
import './input.css'
import { BsSearch } from "react-icons/bs";
function Input(props) {
  return (
    <div className="searchbar">
    <input
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e)=>props.onChange(e)}
      className="searchbar__input"
    />
    <button onClick={props.handleSubmit} type="submit" className="searchbar__button">
      <BsSearch className="text-dark" />
    </button>
  </div>
  )
}

export default Input
import React, { Dispatch, SetStateAction } from 'react'
import styles from './input_house_style.module.css'

interface InputFieldProps {
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
}


const InputField = ({searchTerm, setSearchTerm}: InputFieldProps) => {
  return (
    <div>
      <input type = "input" 
        value={searchTerm}
        onChange={
            (e) => setSearchTerm(e.target.value)
        }
        placeholder="Search houses" className = {styles.input_box}>
        </input>
    </div>
  )
}

export default InputField

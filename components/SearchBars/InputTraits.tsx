import React from 'react';
import styles from './input_traits_style.module.css';

interface Props {
    searchTrait: string;
    setSearchTrait: React.Dispatch<React.SetStateAction<string>>;
}

const InputTraits = ({searchTrait, setSearchTrait}: Props) => {
    return (
        <div>
            <input className={styles.input_box} type="input" 
                value={searchTrait}
                onChange={
                (e) => setSearchTrait(e.target.value)
        }
                placeholder="Search house traits" 
            />
        </div>
    )
}

export default InputTraits;
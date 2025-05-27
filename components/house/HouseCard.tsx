import React, { useEffect } from 'react';
import styles from './houseCard_style.module.css'
import Spinner from '../Spinner/Spinner';
import { House } from '../../types/house';
import InputTraits from '../SearchBars/InputTraits';
import TraitsCard from '../Traits/TraitsCard';
import {Trait} from '../../types/trait';
import { getTraits } from '../../services/traitsService';

type Props = {
  house: House;
};

const HouseCard = ({house}: Props) => {

    //States to hold the search term and traits
    const [searchTrait, setSearchTrait] = React.useState<string>('');
    const [traits, setTraits] = React.useState<Trait[]>([]);
    //State to give the spinner the loading effect
    const [loading, setLoading] = React.useState<boolean>(true);


    React.useEffect(() => {
       //When the searchTrait or house changes, the spinner should be animated
       setLoading(true);

       //Use a timeout to simulate a delay for the loading effect
       const timeoutId = setTimeout(() => {
           //Fetch the traits based on the search term and house
           const filteredTraits = getTraits({ searchTrait, house });
           setTraits(filteredTraits);
           //After the traits are fetched, set loading to false
           setLoading(false);
       }, 1000); //1000ms delay

       //Clear the timeout if the searchTrait or house changes before the previous timeout completes
        return () => clearTimeout(timeoutId);
    }, [searchTrait, house]); //Dependency array to re-run effect when searchTrait or house changes


    //Return the HouseCard component with the house details and traits
    //Checks for each property of the house object. When the property is not defined, it returns an empty string
    //This ensures that the component does not crash if a property is missing providing a dynamic rendering of the houses
    return (
        <div className={styles.houseCard}>
            <div className={styles.name_and_animal_alignment}>
                <h2 className={styles.name}>{house.name || ""}</h2>
                <p className={styles.animal}>{house.animal}</p>
            </div>
            <Spinner houseColours={house.houseColours} loading={loading}></Spinner>
            <div className={styles.founder_alignment}>
                <p>Founder: </p>
                <p className={styles.founder}>{house.founder || ""}</p>
            </div>
            <InputTraits searchTrait={searchTrait} setSearchTrait={setSearchTrait}></InputTraits>
            <div className={styles.traits_container}>
                {traits.map((trait) => (
                    <TraitsCard key={trait.id} trait={trait}/> //Key because we are mapping over an array
                ))}
            </div>
            
        </div>

    )
}

export default HouseCard;
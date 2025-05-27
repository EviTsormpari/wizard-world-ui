import {House} from '../types/house';

interface Props {
    searchTrait: string;
    house: House;
}

//Search house's traits based on the search term. Check if the search term is included in a trait's name
//Trim the search term to avoid unnecessary spaces
export const getTraits = ({searchTrait, house}: Props) => {
    if(searchTrait && searchTrait.trim() !== ' ') {
        return house.traits.filter((trait) =>
            trait.name.toLowerCase().includes(searchTrait.toLowerCase())
        );
    } else {
        return house.traits;
    }
}
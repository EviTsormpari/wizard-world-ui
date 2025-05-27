import styles from './traits_card_style.module.css';

interface Props {
    trait: {
        id: string;
        name: string;
    }
}

//Check if the trait object has a name property
//and if it is not empty, return the name. Else return an empty string
const TraitsCard = ({trait} : Props) => {
    return (
        <p className={styles.traits_box}>{trait.name || ""}</p>
    )
}

export default TraitsCard;
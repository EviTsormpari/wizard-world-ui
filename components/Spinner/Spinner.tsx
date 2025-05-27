import React, { useEffect, useState } from 'react';
import styles from './spinner_style.module.css';

//Interface for house colours
interface Props {
    houseColours: string;
    loading?: boolean;
}

const Spinner = ({houseColours, loading}: Props) => {

    //Split the house colours into an array
    const colors = houseColours.split(" and ").map(color => color.trim());

    let startColor = colors[0];
    let endColor = colors[1];

    //Check if the houseColours are valid in CSS. If at least one is not, return black and white
    if (!isValidCssColor(startColor) || !isValidCssColor(endColor)) {
        startColor = "white";
        endColor = "black";
    }

    //LOADING SPINNER
    //State to manage the width of the spinner
    const [width, setWidth] = useState(0);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        //If the traits still loading, start the spinner
        if (loading) {
            //Reset when loading begins
            setWidth(0);

            //Set an interval to increment the width every 10ms
            interval = setInterval(() => {
                //Increment width until it reaches 95% so it doesn't fill completely
                setWidth((prev) => (prev < 95 ? prev + 1 : prev));
            }, 10);
        } else {
            //Set width to 100% when loading is done
            setWidth(100);
        }

        //Clear the interval when loading is done or when the component unmounts
        return () => clearInterval(interval);
    }, [loading]); //Run every time loading changes

    return (
       <div className={styles.container}>
            <div 
                className={styles.spinner} 
                //Apply the gradient background and width dynamically
                style={{ background: `linear-gradient(to right, ${startColor}, ${endColor})` , width: `${width}%`}}>
            </div>
       </div>
    )
}

//Function to check if a color is valid in css
function isValidCssColor(color: string) {
    const s = new Option().style;
    s.color = "";
    s.color = color;
    return s.color !== "";
}

export default Spinner;
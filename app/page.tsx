'use client';

import styles from "./page.module.css";
import InputField from "../components/SearchBars/InputHouse"
import HouseCard from "../components/house/HouseCard";
import { useState } from "react";
import { House } from "../types/house";
import React from "react";
import {fetchHouses} from "../services/API_Calls/houseService";


export default function HousePage() {
  //State to hold the search term
  const [searchTerm, setSearchTerm] = useState<string>("");
  //State for all houses
  const [houses, setHouses] = useState<House[]>([]);
  //State for pages (for pagination)
  const [page, setPage] = useState<number>(1);
  //State to check if there are more houses to load. This helps to stop loading more houses when there are no more left
  const [hasMore, setHasMore] = useState<boolean>(true);

  //Limit (number of houses per page)
  const limit = 2;

    React.useEffect(() => {
      //When a search term is provided, reset the houses list (setHouses([])) to start fresh and avoid duplicate keys.
      if(searchTerm) {
        setHouses([]);
        fetchHouses({ searchTerm, page, limit}).then(setHouses);
        //Reset to the first page to ensure search results after this action start from the beginning
        setPage(1);
      } else { //Else, we fetch and append the new houses from the new page
        fetchHouses({ searchTerm, page, limit }).then(newData => {
        //If it's the first page, replace the houses, otherwise append to the existing list
        setHouses(prev => page === 1 ? newData : [...prev, ...newData]);
        //If the number of new houses is less than the limit, there are no more houses to load
        setHasMore(newData.length === limit);
      });
      }
      

    }, [searchTerm, page]); //Run every time searchTerm or page changes

    // Function to handle page change while the user scrolls
    React.useEffect(() => {
      const handleScroll = () => {
        //If the user scrolls to the bottom of the page, load more houses - If the visible height of the page 
        //plus the amount the user has scrolled is greater than or equal to the total height of the page, 
        //then the user has reached the bottom of the page
        //+1 to avoid inccorect rouding
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
          //If there are more houses to load, increment the page
          if(hasMore) {
            setPage(prevPage => prevPage + 1);
          }
        }
      };
  
      //Add the scroll event listener
      window.addEventListener('scroll', handleScroll);

      //Clean up the event listener when the component unmounts or hasMore changes
      //This prevents memory leaks and ensures that the event listener is not added multiple times
      return () => window.removeEventListener('scroll', handleScroll);
    }, [hasMore]); //Run every time hasMore changes

  if (!houses) return null;

  return (
    <div className={styles.container}>
      <div>
        <InputField searchTerm={searchTerm} setSearchTerm={setSearchTerm}></InputField>
      </div>
      <div>
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} /> //Key because we are mapping over an array
        ))}
      </div>
    </div>
  );

}

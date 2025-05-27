import axios from "axios";
import { House } from "../../types/house";

interface Props {
  searchTerm: string;
  page: number;
  limit: number;
}

//The base URL for the API endpoint to fetch houses
//const baseURL = "http://localhost:8080/api/routes/houses";
const baseURL = "https://wizard-world-api.herokuapp.com/houses";

export const fetchHouses = async ({searchTerm, page, limit}: Props): Promise<House[]> => {
  try {
    let searchURL = "";

    //Call to the backend API to fetch houses based on the search term. Includes pagination parameters
    if(searchTerm && searchTerm.trim() !== "") {
        searchURL = `${baseURL}?name=${searchTerm}&page=${page}&limit=${limit}`;
    } else {
        searchURL = `${baseURL}?page=${page}&limit=${limit}`;
    }

    const response = await axios.get<House[]>(searchURL);
    return response.data;

  } catch (error) {
    console.error("Error fetching houses:", error);
    throw error;
  }
};
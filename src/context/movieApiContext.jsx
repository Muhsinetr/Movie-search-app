import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MovieApiContext = createContext();

export const MovieApiProvider = ({children})=>{
    const [searchValue, setSearchValue] = useState("");
    const [searchList, setSearchList] = useState([]);
    const API_URL = "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

    const handlesearchValue = (event)=>{
        setSearchValue(event.target.value)
    }

    const fetchMovieList = async () =>{
        try {
          const response = await axios(API_URL, {
            params: {
              query: searchValue,
            },
          });
          setSearchList(response.data.results);
          console.log(response.data.results);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        const timeOut = setTimeout(() => {
          fetchMovieList();
        }, 500);
        return ()=>{
          clearTimeout(timeOut);
        }
      },[searchValue]);
    
    
return(<MovieApiContext.Provider value={{
    searchList,
handlesearchValue,
}}>
    {children}
</MovieApiContext.Provider>)
}
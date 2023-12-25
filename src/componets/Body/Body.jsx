import { useContext } from "react"
import "./Body.css"
import { MovieApiContext } from "../../context/movieApiContext";
export const Body =()=>{
    const {searchList,handlesearchValue} =useContext(MovieApiContext);
    return <main>
        <div className="search-output-aria">
            {searchList.map((data)=>(
                    <div key={data.id} className="container">
                    <div className="card">
                        <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${data.poster_path})`}} className="front"></div>
                        <div className="back">
                            <h4>{data.title}</h4>
                            <div><p>{data.overview}</p></div>
                            
                        </div>
        
                    </div>
                    </div>
                // <div key={data.id} title={data.title} style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${data.poster_path})`}} className="search-output">
                // </div>
            ))}
            
        </div>
    </main>
}
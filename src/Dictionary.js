import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(){
    let [keyword,setKeyword]=useState("");
    let [results,setResults]=useState(null);
    let [photos,setPhotos]=useState(null);
    
    function handleResponse(response){
        //console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search(event){
        event.preventDefault();
        // documentation:https://dictionaryapi.dev/
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey=`563492ad6f917000010000017cb201d4c1af481f9ec5dafe9f14a09f`;
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers={Authorization:pexelsApiKey};
        axios.get(pexelsApiUrl,{headers:headers}).then(handlePexelsResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <section>
                <form onSubmit={search}>
                    <input placeholder="What do you wanna learn about today? Try strawberry or sunrise!" type="search"onChange={handleKeywordChange}/>
                </form>
            </section>
            
            <Results results={results}/>
            <Photos photos={photos} />
        </div>
    );
}
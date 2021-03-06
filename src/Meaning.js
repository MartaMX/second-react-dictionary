import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    console.log(props.meaning);
//    return meaning.definitions[0].definition;
    return (
        <div className="Meaning">
        <h3> {props.meaning.partOfSpeech} </h3>
        {props.meaning.definitions.map(function (definition,index) {
            return (
                <div key={index}> 
                <p>
                   <strong>Definition: </strong> {definition.definition}
                    <br/>
                    
                    <em className="examples"> {definition.example} </em>
                    <br/>
                    
                </p>
                 </div>
            );
        } )
        }
        <Synonyms synonyms={props.meaning.synonyms} />
    
        </div>
            );

    
}
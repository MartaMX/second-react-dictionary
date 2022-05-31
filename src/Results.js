import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props){
    
    if (props.results){
        console.log(props.results.phonetics);
        return(
            <div className="Results">
                <section>
                    <h2 id="respuesta"> {props.results.word} </h2>
                    {props.results.phonetics.map(function(phonetic,index) {
                        return(
                            <div key={index}>
                                <Phonetics phonetics={phonetic} />
                            </div>
                        );
                     } ) }
                </section>
                
                {props.results.meanings.map(function (meaning,index) {
                    return (
                        <section key={index} > 
                        <Meaning meaning={meaning} />
                        </section>
                    );
                })}
            </div>
        );
}else {
        return null;
    }
}
import React from "react";

export default function Phonetics(props) {
    console.log(props);
    return (
        <div className="Phonetic">
                        <span className="Audio-button">
                <a href={props.phonetics.audio} target="_blank">Listen</a>
            </span>
            {props.phonetics.text}
        </div>
    );
}
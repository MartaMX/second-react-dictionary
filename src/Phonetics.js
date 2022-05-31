import React from "react";

export default function Phonetics(props) {
    console.log(props);
    return (
        <div className="phonetics">
                        <span className="Audio-button">
                <a  href={props.phonetics.audio} target="_blank" rel="noreferrer">Listen</a>
            </span>
            {props.phonetics.text}
        </div>
    );
}
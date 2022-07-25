import React, { useState } from "react";
import companyLogo from "../companyLogo/YouTube-Logo.wine.svg";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(term); 
    };

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <img alt="youtube" className="ui image logo" src={companyLogo} />
                    <input type="text" value={term} onChange={event => setTerm(event.target.value)} />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
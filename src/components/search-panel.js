import React from 'react';
import ItemStatusFilter from './item-status-filter';
import './search-panel/search-panel.css';


const SearchPanel = () => {
    return (
        <div className="d-flex">
            <input placeholder='search' className="search-input" />
            <ItemStatusFilter />
        </div>
    );
};

export default SearchPanel;
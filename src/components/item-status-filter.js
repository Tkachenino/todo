import React from 'react';
// import './app-header/app-header.css'

const ItemStatusFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-info">All</button>
            <button className="btn btn-outline-secondary">Active</button>
            <button className="btn btn-outline-secondary">Done</button>
        </div>
    );
};

export default ItemStatusFilter;
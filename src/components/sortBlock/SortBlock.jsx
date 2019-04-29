import React, { Component } from 'react';

import './style.scss';

export default class SortBlock extends Component {

    render() {
        const sortOptions = this.props.sortOptions.map(o => {
            return {
                ...o,
                selected: this.props.selectedSortOption === o.value
            };
        });
        return (
            <div className="filter h5">
                Sort by
                {sortOptions.map(option => 
                    <label htmlFor={option.value}
                        key={option.value}>
                        <input type="radio"
                            id={option.value}
                            value={option.value}
                            name="sort"
                            onChange={() => this.props.sort(option)}
                            checked={option.selected}
                        />
                        <span>{option.label}</span>
                    </label>
                )}
            </div>
        );
    }
}

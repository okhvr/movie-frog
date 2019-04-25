import React, { Component } from 'react';

import './style.scss';

export default class SortBlock extends Component {

    render() {
        const {sortOptions, sort} = this.props;
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
                            onChange={() => sort(option)}
                            checked={option.selected}
                        />
                        <span>{option.label}</span>
                    </label>
                )}
            </div>
        );
    }
}

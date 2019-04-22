import React, { Component } from 'react';

import './style.scss';

export default class SortBlock extends Component {
    state = {
        sortCriteria: {}
    }

    sort = (e) => {
        const value = e.currentTarget.value;
        const sortCriteria = this.props.sortOptions.find(o => o.value === value);
        this.setState({
            sortCriteria
        });
        this.props.sort(value);
    };

    componentDidMount() {
        this.setState({
            sortCriteria: this.props.sortOptions[0]
        });
    }
    
    render() {
        const {sortOptions} = this.props;
        return (
            <div className="filter h5">
                Sort by
                {sortOptions.map(option => 
                    <label htmlFor={option.value}  key={option.value}>
                        <input type="radio"
                            id={option.value}
                            value={option.value}
                            name="sort"
                            onChange={this.sort}
                            checked={this.state.sortCriteria.value === option.value}
                        />
                        <span>{option.label}</span>
                    </label>
                )}
            </div>
        );
    }
}

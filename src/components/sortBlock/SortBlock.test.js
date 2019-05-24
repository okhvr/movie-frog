import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SortBlock from './SortBlock';

describe('SortBlock component', () => {
    const sortMockFn = jest.fn();
    const sortOptions = [
        {
            value: '1',
            label: '1'
        },
        {
            value: '2',
            label: '2'
        }];
    const selectedSortOption = sortOptions[1].value;

    let sortElement;

    beforeEach(() => {
        sortElement = shallow(
            <SortBlock sortOptions={sortOptions}
                selectedSortOption={selectedSortOption}
                sort={sortMockFn}/>
            );
    });

    it('should render different sort options buttons', () => {
        const sortButtons = sortElement.find('label');
        expect(sortButtons.length).toBe(sortOptions.length);   
        
        const uncheckedButton = sortButtons.at(0);
        const checkedButton = sortButtons.at(1);

        expect(uncheckedButton.find('input').props().checked).toBe(false);
        expect(checkedButton.find('input').props().checked).toBe(true);
    
        expect(uncheckedButton.find('span').text()).toBe(sortOptions[0].label);
        expect(checkedButton.find('span').text()).toBe(sortOptions[1].label);
    });

    it('should change search options buttons and call sort method from props with correct arguments', () => {
        const sortButtons = sortElement.find('label');
        const uncheckedButtonInput = sortButtons.at(0).find('input');

        uncheckedButtonInput.simulate('change');
        expect(sortMockFn).toHaveBeenCalledWith({...sortOptions[0], selected: false});
    });
});
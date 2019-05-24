import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

describe('Search component', () => {
    const searchInput = 'test';
    const searchOptions = ['a', 'b'];
    const selectedSearchOption = 'a';
    const searhMockFn = jest.fn();
    const changeSearchByMockFn = jest.fn();

    let searchElement;

    beforeEach(() => {
        searchElement = shallow(
            <Search searchInput={searchInput}
                searchOptions={searchOptions}
                selectedSearchOption={selectedSearchOption}
                search={searhMockFn}
                changeSearchBy={changeSearchByMockFn}/>
            );
    });

    it('should render different search options buttons', () => {
            const primary = searchElement.find('.btn-primary');
            const secondary = searchElement.find('.btn.btn-secondary.btn-sm.margins');

            expect(primary.length).toBe(1);
            expect(secondary.length).toBe(1);
            expect(primary.text()).toBe('A');
            expect(secondary.text()).toBe('B');
    });

    it('should change search options buttons and call changeSearchBy from props with correct arguments', () => {
        const secondary = searchElement.find('.btn.btn-secondary.btn-sm.margins');

        secondary.simulate('click');
        expect(changeSearchByMockFn).toHaveBeenCalledWith({name: 'b', selected: false});
    });

    it('should render search input correctly', () => {
        expect(searchElement.find('.form-control.transparentInput').props().value).toBe(searchInput);
    });

    it('should upate search input if changed', () => {
        const searchInput2 ='test2';

        searchElement.setProps({ searchInput: searchInput2});
        expect(searchElement.instance().state.search).toBe(searchInput2);
    });

    it('should change search state on input value change', () => {
        const input = searchElement.find('.form-control.transparentInput');
        const value = 'foo';

        input.simulate('change', { currentTarget: { value: searchInput }});
        expect(searchElement.instance().state.search).toBe(searchInput);

        input.simulate('change', { currentTarget: { value }});
        expect(searchElement.instance().state.search).toBe(value);
    });

    it('should call search from props with current search value after clicks on search buttons', () => {      
        const firstSearchButton = searchElement.find('.input-group-append');
        const secondSearchButton = searchElement.find('div.spaceBetween>.btn.btn-secondary');
        const input = searchElement.find('.form-control.transparentInput');
    
        input.simulate('keyDown', { key: 'A'});
        expect(searhMockFn).not.toHaveBeenCalled();

        input.simulate('keyDown', { key: 'Enter'});
        expect(searhMockFn).toHaveBeenCalledWith(searchInput);

        firstSearchButton.simulate('click');
        expect(searhMockFn).toHaveBeenCalledWith(searchInput);
        
        secondSearchButton.simulate('click');
        expect(searhMockFn).toHaveBeenCalledWith(searchInput);
    });
});
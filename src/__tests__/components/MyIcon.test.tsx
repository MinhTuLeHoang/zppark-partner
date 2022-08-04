import { BackIcon, SearchIcon } from 'components/MyIcon';
import { render, screen } from '@testing-library/react'

import React from 'react';


describe ('Icon FE testing', () => {
    it ('should render correctly', () => {
        const { getByText } = render(
            <div>
                <SearchIcon/>
                <BackIcon/>
            </div>
        );
        // expect(getByText('Help Center')).toBeInTheDocument();
    });

})
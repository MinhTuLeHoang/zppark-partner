import { render, screen } from '@testing-library/react'
import Welcome from 'components/welcome';
import React from 'react';


describe ('Welcome tab FE testing', () => {
    it ('should render correctly', () => {
        const { getByText } = render(<Welcome/>);
        expect(getByText('Welcome to ZPPark')).toBeInTheDocument();
    });

})
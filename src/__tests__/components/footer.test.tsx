import { render, screen } from '@testing-library/react'
import Footer from 'components/footer';
import React from 'react';


describe ('Footer FE testing', () => {
    it ('should render correctly', () => {
        const { getByText } = render(<Footer />);
        expect(getByText('Help Center')).toBeInTheDocument();
    });

})
import { render, screen } from '@testing-library/react'
import NavBar from 'components/navBar';
import React from 'react';


describe ('NavBar FE testing', () => {
    it ('should render correctly', () => {
        const { getByText } = render(<NavBar pageName='' />);
        expect(getByText('ZPPark')).toBeInTheDocument();
    });

    it ('should render correctly with login Page', () => {
        let { getByText }  = render(<NavBar pageName='login' />);
        expect(getByText('Register')).toBeInTheDocument();
    })

    it ('should render correctly with register Page', () => {
        let { getByText }  = render(<NavBar pageName='register' />);
        expect(getByText('Log In')).toBeInTheDocument();
    })

    it ('should render correctly with forgot Page', () => {
        let { getByText }  = render(<NavBar pageName='forgot' />);
        expect(getByText('Log In')).toBeInTheDocument();
    })
})

describe ('NavBar logic testing', () => {
    it ('state isLogin do properly', () => {
        const setStateMock = jest.fn();
        const useStateMock:any = (useState:any) => [useState, setStateMock];
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);

        jest.spyOn(localStorage, "setItem");
        localStorage.setItem = jest.fn();

        const { getByText } = render(<NavBar pageName=''/>);
        expect(getByText('ZPPark')).toBeInTheDocument();
    });
})
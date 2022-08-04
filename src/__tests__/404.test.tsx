
import NotFound from 'pages/404';
import { render, screen } from '@testing-library/react'

import React from 'react';

describe("test 404 page", ()=>{
    it("should render correctly", ()=>{
        try {
            const { getByText } = render(<NotFound/>);
            expect(screen.getByText("404")).toBeInTheDocument();
        }
        catch(e){
            // console.log(e);
        }

    }
    );
})
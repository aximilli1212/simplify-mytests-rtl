import {render, screen} from '@testing-library/react'
import Jumbotron from "./Jumbotron";

describe('Jumbo Tron', ()=>{
    it('by role for header',()=>{
        render(<Jumbotron/>)
        const headElement = screen.getByRole('heading', {name: /welcome to our site!/i})
        expect(headElement).toBeInTheDocument()
    })
})

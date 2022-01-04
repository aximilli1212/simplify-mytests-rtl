import {screen, render} from '@testing-library/react'
import Table from "./Table";
import fakeEmployees from "../mocks/employees";

describe('Table',() =>{
    it('renders with expected values', ()=>{
        render(<Table employees={fakeEmployees} />)
        expect(screen.getByRole('cell', { name: /john smith/i })).toBeInTheDocument()
        expect(screen.getByRole('cell', { name: /engineering/i })).toBeInTheDocument()
        expect(screen.getByRole('cell', { name: /designer/i })).toBeInTheDocument()
    })

    // Check for Class present
    it('has the correct class', () => {
        render(<Table employees={fakeEmployees} />)
        expect(screen.getByRole('table')).toHaveAttribute(
            'class',
            'table table-striped'
        )
    })
})

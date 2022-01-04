import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import EmployeeEmail from './EmployeeEmail'

describe('Employee Email', ()=>{
    test('It accepts a username and displays to screen', ()=>{
        render(<EmployeeEmail />)
        const  input = screen.getByPlaceholderText('enter your name')
        user.type(input, 'hello')
        expect(input).toHaveValue('hello')
        expect(screen.getByText(/hello@software-plus.com/i)).toBeInTheDocument()
    })
})

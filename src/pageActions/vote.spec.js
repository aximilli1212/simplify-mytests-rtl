import { fireEvent, render, screen } from '@testing-library/react'
import Vote from './Vote'
import user from '@testing-library/user-event'


describe('Vote System', ()=>{
    test('increase total like by one', ()=>{
        render(<Vote totalGlobalLikes={10} />)
    expect(screen.getByText(/10/i)).toBeInTheDocument()

        expect(screen.getByText(/10/i)).toBeInTheDocument()
        user.click(screen.getByRole('button', { name: /thumbs up/i }))// Nii Here
        expect(screen.getByText(/11/i)).toBeInTheDocument()

        expect(screen.getByRole('button', { name: /thumbs up/i })).toHaveStyle(
            'background: green')
})


    test('A user can only vote once', () => {
        render(<Vote totalGlobalLikes={10} />)
        const thumbsUpBtn = screen.getByRole('button', { name: /thumbs up/i })
        const thumbsDownBtn = screen.getByRole('button', { name: /thumbs down/i })

        expect(screen.getByText(/10/i)).toBeInTheDocument()
        user.click(thumbsUpBtn)
        user.click(thumbsUpBtn)
        expect(screen.getByText(/11/i)).toBeInTheDocument()

        user.click(thumbsDownBtn)
        expect(screen.getByText(/11/i)).toBeInTheDocument()
    })
})

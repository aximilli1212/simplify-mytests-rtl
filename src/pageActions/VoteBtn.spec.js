import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import thumbsUp from './images/thumbs-up.svg'
import VoteBtn from './VoteBtn'

test('invokes handle', ()=>{
    const mockHandleVote = jest.fn()
     render(
         <VoteBtn
             handleVote={mockHandleVote}
             hasVoted={false}
             imgSrc={thumbsUp}
             altText="Vote like" />
     )

    user.click(screen.getByRole('button', { name: /vote like/i }))
    expect(mockHandleVote).toHaveBeenCalled()
    expect(mockHandleVote).toHaveBeenCalledTimes(1)
})


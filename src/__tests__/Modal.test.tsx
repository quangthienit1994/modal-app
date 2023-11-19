import { describe, it, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import Modal, { ModalProps } from '@/components/Modal';
import { useState } from 'react';

const Component: React.FC<ModalProps> = (props) => {
    const [state, setState] = useState(false)
    return (
        <>
            <button className='toggle' onClick={() => setState(prev => !prev)}>Toggle</button>
            <Modal {...props} open={state} onClose={() => setState(false)}><span id="content">Content</span></Modal>
        </>
    )
}

describe('Modal', () => {
    it('should not render the modal when render', () => {
        const screen = render(<Modal open />)
        expect(screen.container.querySelector(".modal-root")).not.toBeInTheDocument()
    })

    it('should does not have the header in the modal', () => {
        const screen = render(<Modal><span id="content">I should'n to be show</span></Modal>)
        expect(screen.container.querySelector(".modal-root")).toBeNull()
    })

    it('should have the header in the modal', () => {
        const screen = render(<Modal open><span id="content">I should to be show</span></Modal>)
        expect(screen.getByText(/I should to be show/i)).toBeInTheDocument()
    })

    it('should keep the content in the modal', () => {
        const screen = render(<Component isKeep />)
        const toggle = screen.container.querySelector(".toggle")!

        expect(screen.container.querySelector("#content")).toBeNull()

        fireEvent.click(toggle)
        expect(screen.getByText(/Content/i)).toBeInTheDocument()

        fireEvent.click(toggle)
        expect(screen.getByText(/Content/i)).toBeInTheDocument()
    })
})
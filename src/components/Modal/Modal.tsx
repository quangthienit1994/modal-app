import { useEffect, useRef, useState } from "react"
import Wrapper, { WrapperProps } from "./Wrapper"
import { createPortal } from "react-dom"

export interface ModalProps extends WrapperProps {
}

const Modal: React.FC<ModalProps> = ({ open, ...props }) => {
    const [active, setActive] = useState(false)
    const ref = useRef(false)

    useEffect(() => {
        if (open && !ref.current) {
            ref.current = true
            setActive(true)
        }else{
            setActive(open ?? false)
        }
    }, [open])

    if(!open && !ref.current) return null

    return createPortal(<Wrapper {...props} open={active} />, document.querySelector("body")!)
}

export default Modal

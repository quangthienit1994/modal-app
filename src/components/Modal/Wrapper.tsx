import styled from '@emotion/styled'
import Backdrop from './Backdrop'
import Body from './Body'
import Content from './Content'
import classNames from 'classnames'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Close from './Close'
import Header from './Header'

const Container = styled.div({
    position: "fixed",
    zIndex: 1000,
    inset: 0,
    overflow: "hidden",
    outline: "none",
    minHeight: "100vh",
    ".modal-content, .modal-backdrop": {
        transition: "all .3s ease-in-out",
        transformOrigin: "center center",
    },
    ".modal-content": {
        transform: "scale(1)"
    },
    "&:not(.open)": {
        pointerEvents: "none",
        ".modal-content": {
            opacity: 0,
            transform: "scale(0)"
        },
        ".modal-backdrop": {
            opacity: 0,
            pointerEvents: "none"
        }
    },
    "&.open": {
        width: "100%",
        height: "100%",
        overflow: "auto",
    },
})

const Modal = styled.div({
    overflow: "auto",
    position: "absolute",
    zIndex: 1,
    margin: "0 auto",
    top: "100px",
    left: "50%",
    width: "calc(100% - 30px)",
    transform: "translate(-50%, 0)",
    transition: "all .3s ease",
    "&.centered": {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }
})

export interface WrapperProps {
    children?: any
    width?: number | string
    open?: boolean
    onClose?(): void
    header?: any
    closeable?: boolean
    isKeep?: boolean
    bodyClass?: string
    bodyStyles?: React.CSSProperties
    centered?: boolean
    className?: string
    id?: string
}

const Wrapper: React.FC<WrapperProps> = ({ id, children, width = 800, open, className, header, onClose, bodyClass, bodyStyles, closeable = true, isKeep = false, centered }) => {
    const bodyRef = useRef<HTMLDivElement | null>(null)
    const ref = useRef({ activated: false })
    const [isShowBody, setShowBody] = useState(true)

    useLayoutEffect(() => {
        const body = document.querySelector("body")!
        body.style.overflow = open ? "hidden" : ""
        body.style.width = open ? "calc(100% - 17px)" : ""
        ref.current.activated = true
    }, [open])

    useEffect(() => {
        if (!open) {
            const timeout = setTimeout(() => {
                setShowBody(!(!ref.current.activated || !isKeep))
            }, 300);
            return () => {
                clearTimeout(timeout)
            }
        } else {
            setShowBody(true)
        }
    }, [open, isKeep])

    return (
        <Container id={id} className={classNames({ open }, className, "modal-root")}>
            <Backdrop className="modal-backdrop" onClick={onClose} />
            <Modal style={{ maxWidth: width }} className={classNames({ centered })}>
                <Content ref={bodyRef} className={classNames("modal-content", { "no-header": !header })}>
                    {
                        isShowBody && (
                            <>
                                {closeable && <Close aria-label="close" className="modal-close" onClick={onClose} />}
                                {header && <Header>{header}</Header>}
                                <Body className={bodyClass} style={bodyStyles}>{children}</Body>
                            </>
                        )
                    }
                </Content>
            </Modal>
        </Container>
    )
}

export default Wrapper

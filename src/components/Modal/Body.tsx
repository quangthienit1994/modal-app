import styled from "@emotion/styled";
import classNames from "classnames";

interface ContainerProps {
}

const Container = styled.div<ContainerProps>({
    position: "relative",
    zIndex: 10,
    margin: "0 auto",
    maxHeight: "80vh",
    overflow: "auto",
    flex: 1
})

export interface BodyProps extends ContainerProps {
    children?: any
    className?: string
    style?: React.CSSProperties
}

const Body: React.FC<BodyProps> = ({ children, className, style }) => {
    return (
        <Container className={classNames("modal-body", className)} style={style}>
            {children}
        </Container>
    )
}

export default Body
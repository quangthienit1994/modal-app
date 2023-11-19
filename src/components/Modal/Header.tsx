import styled from "@emotion/styled"

const Container = styled.div({
    minHeight: "40px",
    display: "flex",
    alignItems: "center"
})

const Header: React.FC<{children: any}> = ({ children }) => {
    return <Container>{children}</Container>
}

export default Header
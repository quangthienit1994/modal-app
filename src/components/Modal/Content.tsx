import styled from "@emotion/styled";

interface ContentProps {
}

const Content = styled.div<ContentProps>(() => ({
    backgroundColor: "#fff",
    boxShadow: "0 0 15px #c5c5c5",
    padding: "10px 30px 30px 30px",
    borderRadius: 6,
    overflow: "hidden",
    "&.no-header": {
        paddingTop: 30
    }
}))

export default Content
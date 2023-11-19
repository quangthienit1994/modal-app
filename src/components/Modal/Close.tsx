import styled from "@emotion/styled";

const Close = styled.button({
    position: "fixed",
    right: 5,
    top: 5,
    height: 40,
    width: 40,
    border: "none",
    cursor: "pointer",
    zIndex: 11,
    "&:before, &:after": {
        content: "''",
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "60%",
        height: "1px",
        backgroundColor: "#000"
    },
    "&:before": {
        transform: "translate(-50%,-50%) rotate(45deg)",
    },
    "&:after": {
        transform: "translate(-50%,-50%) rotate(-45deg)",
    },
    '&:hover': {
        backgroundColor: "#f2f2f2"
    }
})

export default Close
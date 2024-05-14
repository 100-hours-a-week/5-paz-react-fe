import styled from "styled-components";
import backBtn from "./backBtn.png"



function Navbar() {
  return (
    <Container>
      <BackButton onClick={(e) => alert("e")}></BackButton>
    </Container>
  );
}

const Container = styled.div`
  border: 1px;
  minWidth: 1920px;
  height: 104px;
  display: flex;
  align-items: center;
  flex-direction: row;
`

const BackButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 1px;
  background-image: url(${backBtn});
`

export default Navbar
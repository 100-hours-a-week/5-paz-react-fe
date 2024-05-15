import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 컴포넌트
import Dropdown from "./dropdown";

// 파일
import backBtn from "./backBtn.png"

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <Blank />
      <Filled>
        <BackButton onClick={(e) => navigate(-1)}></BackButton> 
      </Filled>
      <Filled>
        <Title>아무말 대잔치</Title>
      </Filled>
      <Filled>
        <DropdownButton onClick={(e) => setIsOpened(!isOpened)}>
          {isOpened && <Dropdown/>}
        </DropdownButton>
      </Filled>
      <Blank />
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
  background-color: #F4F5F7;
`
const Blank = styled.div`
  flex: 3;
`
const Filled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
`

const BackButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: none;
  background-image: url(${backBtn});
`

const DropdownButton = styled.button`
 width: 40px;
 height: 40px;
 border-radius: 50px;
 border: solid;
`

const Title = styled.p`
  font-size: 32px;
`

export default Navbar;
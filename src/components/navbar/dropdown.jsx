import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { Login } from "../../pages"

function Dropdown() {

    const navigate = useNavigate();

    function Goto(where) {
        navigate(where);
    }

    return (
        <>
            <Box>
                <List onClick={(e) => Goto('/info')}>회원정보 수정</List>
                <List onClick={(e) => Goto('/pw')}>비밀번호 수정</List>
                <List onClick={(e)=> Goto('/login')}>로그 아웃</List>
            </Box>

        </>
    );
}

const Box = styled.ul`
   background-color: white;
   width: 100px;
   height: 100px;
   margin-top: 50px;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 0;
`

const List = styled.li`
    list-style: none;
    align-items: center;
`
export default Dropdown;
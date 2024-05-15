import styled from "styled-components";
import Navbar from "../components/navbar/navbar";

function Login() {
  return (
    
    <Container>
      <Navbar/>
      <p>로그인</p>
    </Container>

  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F4F5F7;
  min-width: 100vh;
  min-height: 100vh;
`

export default Login;
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <p>로그인</p>
    </Container>

  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F4F5F7;
  min-width: 100vh;
  min-height: 100vh;
`

export default Login;
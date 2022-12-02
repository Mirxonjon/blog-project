import Container from "../../components/container/container"
import LoginContent from "../../components/login-content/login-content"
import NavLogo from "../../components/nav-logo/nav-logo";

const Login = () => {
  return(
    <Container className="login">
      <NavLogo />
      <LoginContent />  
    </Container>
  );
};

export default Login;
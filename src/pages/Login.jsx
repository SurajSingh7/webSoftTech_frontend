import loginImg from "../assets/Images/login.png"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Login"
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
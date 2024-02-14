import loginImg from "../assets/Images/login.png"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <div>

    <Template
      title="Login"
      image={loginImg}
      formType="login"
    />

    <div  className="h-10"></div>

    </div>
  
    
  )
}

export default Login
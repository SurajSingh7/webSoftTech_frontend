import registerImg from "../assets/Images/signup.jpg"
import Template from "../components/core/Auth/Template"

function Register() {
  return (
    <Template
      title="Register"
      image={registerImg}
      formType="register"
    />
  )
}

export default Register
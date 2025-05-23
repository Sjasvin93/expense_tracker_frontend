import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";



function SignUp() {

  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleEmailInput = (email) => {
    setError(" ");
    setEmail(email);
  }

  const handlePasswordInput = (password) => {
    setError("");
    setPassword(password);
  }

  const handleFullNameInput = (fullName) => {
    setError("");
    setFullName(fullName);
  }


  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!fullName) {
      setError("Please enter your full name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    let response;
    try {
      response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password
      });    

      const { errors } = response?.data || {};

      if(response.status === 200){
        navigate("/login");
      }

      setError(errors[0]);
    } catch (error) {      
      if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("Something went wrong, Please try again.");
      }
    }
  }

  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below.</p>

        <form onSubmit={handleSignUp}>

          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              value={fullName}
              onChange={(e) => handleFullNameInput(e.target.value)}
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
            />

            <Input
              value={email}
              onChange={(e) => handleEmailInput(e.target.value)}
              label="Email address"
              placeholder="Enter your email address"
              type="text"
            />

            <div className='col-span-2'>
              <Input
                value={password}
                onChange={(e) => handlePasswordInput(e.target.value)}
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
          </div>

          {
            error &&
            <p className='text-red-500 text-xs pb-2.5'>
              {error}
            </p>
          }

          <button type="submit" className='btn-primary'>
            SIGN UP
          </button>

          <p className='text-[13px] text-slate-800 mt-3'>
            Already have an account?{" "}
            <Link className='font-medium text-primary underline' to="/login">
              Login
            </Link>
          </p>
        </form>



      </div>
    </AuthLayout>
  )
}

export default SignUp
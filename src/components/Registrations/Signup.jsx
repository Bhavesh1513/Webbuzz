import React, { useState } from "react";
import Stepper from "../Registrations/Stepper/Stepper";
import "./Signup.css";
import { TiTick } from "react-icons/ti";
import UserInformation from "./UserInformation";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [formData, setFormData] = useState({
    personalDetails: { name: "", email: "", password: "" },
    contact: { phone: "", alternatePhone: "" },
    address: { street: "", city: "", zip: "" },
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const[showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Input change handler
  const handleInputChange = (step, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], [field]: value },
    }));
  };

  // Validation function to check fields for each step
  const validateStep = () => {
    switch (currentStep) {
      case 1:
        if (!formData.personalDetails.name) {
          toast.error("Name is required");
          return false;
        }
        if (!formData.personalDetails.email || !/\S+@\S+\.\S+/.test(formData.personalDetails.email)) {
          toast.error("Please enter a valid email address.");
          return false;
        }
        if (!formData.personalDetails.password) {
          alert("Password is required.");
          toast.error("Password is required");
          return false;
        }
        if(formData.personalDetails.password.length<5){
          toast.error("Password should be more than 4 characters.");
          return false;
        }
        return true;
      case 2:
        if (!formData.contact.phone || formData.contact.phone.length !== 10) {
          toast.error("Phone number must be 10 digits.");
          return false;
        }
        if(formData.contact.alternatePhone && formData.contact.alternatePhone.length!==10){
          toast.error("Phone number must be 10 digits.");
          return false;
        }
        return true;
      case 3:
        if (!formData.address.street || !formData.address.city || !formData.address.zip) {
          toast.error("Please fill out Street, City, and ZIP.");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleSubmit = () => {
    if (!isChecked) {
      alert("You must agree to the terms and conditions before submitting.");
      toast.error("You must agree to the terms and conditions before submitting.");
      return;
    }

    const apiUrl = "https://jsonplaceholder.typicode.com/posts"; // Adjust your API URL

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
        toast.success("USER REGISTERED SUCCESSFULLY")
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("userCredentials", JSON.stringify({
          email: formData.personalDetails.email,
          password: formData.personalDetails.password,
        }));
        setComplete(true);
        setTimeout(() => {
          navigate("/upcomingmatches");
        }, 1000);
      })
      .catch((error) => {
        toast.error("There was an error submitting the form. Please try again. ",error);
      });
  };

  // Handler for moving to the next step
  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  // Function to render step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-step  bg-richwhite-1  rounded-3xl">
            <div className="input-group">
              <label className="text-richblack-900 font-semibold text-3xl">Name:</label>
              <input
               className="outline-none border-b-2 border-[#0000ff] text-2xl"
               required
                type="text"
                value={formData.personalDetails.name}
                onChange={(e) => handleInputChange("personalDetails", "name", e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div className="input-group">
              <label className="text-richblack-900 font-semibold text-3xl">Email:</label>
              <input
              className="outline-none border-b-2 border-[#0000ff] text-2xl"
                type="email"
                value={formData.personalDetails.email}
                onChange={(e) => handleInputChange("personalDetails", "email", e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="input-group relative">
              <label className="text-richblack-900 font-semibold text-3xl">Password:</label>
              <input
              className="outline-none border-b-2 border-[#0000ff] text-2xl "
              type= {showPassword ? ("text") : ("password")}
                value={formData.personalDetails.password}
                onChange={(e) => handleInputChange("personalDetails", "password", e.target.value)}
                placeholder="Enter Password"
              />
               <span 
            className='absolute right-[-2px] top-[29px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-step bg-richwhite-1  rounded-3xl">
            <div className="input-group">
              <label className="text-richblack-900 font-semibold text-3xl">Phone:</label>
              <input
                type="number"
                className="outline-none border-b-2 border-[#0000ff] text-2xl"
                value={formData.contact.phone}
                onChange={(e) => handleInputChange("contact", "phone", e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="input-group">
              <label className="text-richblack-900 font-semibold text-3xl">Alternate Phone:</label>
              <input
              className="outline-none border-b-2 border-[#0000ff] text-2xl"
                type="text"
                value={formData.contact.alternatePhone}
                onChange={(e) => handleInputChange("contact", "alternatePhone", e.target.value)}
                placeholder="Enter an alternate phone number"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step bg-richwhite-1  rounded-3xl">
            <div className="input-group">
              <label className="text-richblack-900 font-semibold text-3xl">Street:</label>
              <input
              className="outline-none border-b-2 border-[#0000ff] text-2xl"
                type="text"
                value={formData.address.street}
                onChange={(e) => handleInputChange("address", "street", e.target.value)}
                placeholder="Enter your street"
              />
            </div>
            <div className="input-group">
              <label className="text-richblack-900 font-semibold text-3xl">City:</label>
              <input
              className="outline-none border-b-2 border-[#0000ff] text-2xl"
                type="text"
                value={formData.address.city}
                onChange={(e) => handleInputChange("address", "city", e.target.value)}
                placeholder="Enter your city"
              />
            </div>
            <div className="input-group">
              <label className="text-richblack-900 font-semibold text-3xl">ZIP:</label>
              <input
              className="outline-none border-b-2 border-[#0000ff] text-2xl"
                type="text"
                value={formData.address.zip}
                onChange={(e) => handleInputChange("address", "zip", e.target.value)}
                placeholder="Enter your ZIP code"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-step bg-richwhite-1  rounded-3xl">
            <UserInformation
              name={formData.personalDetails.name}
              email={formData.personalDetails.email}
              phone={formData.contact.phone}
              alternateNumber={formData.contact.alternatePhone}
              street={formData.address.street}
              city={formData.address.city}
              zip={formData.address.zip}
            />
            <div className="checkbox-group">
              <input
              
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label className="text-lg ">
                By submitting this form, you agree to the following terms and conditions:
                <br />
                You confirm that the information you provide is accurate, complete, and up-to-date to the best of your knowledge.
              </label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="signup-container mt-40">
      <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} complete={complete} />
      <div className="form-content mt-20">
        {!complete ? renderStepContent() : (
          <div className="flex flex-col justify-center items-center bg-[#16a34a] gap-10 mt-24 p-5 rounded-full pt-7">
            <p className="text-5xl text-richwhite-1 font-semibold text-center">User Registered Successfully</p>
            <TiTick size={96} color="white" />
          </div>
        )}
      </div >
      {!complete && (
        <div className="navigation-buttons text-3xl font-semibold  text-richwhite-1 ">
          {currentStep > 1 ? (
            <button className="bg-[#0000ff] shadow-2 px-10 py-3 md:btn-pink"  onClick={() => setCurrentStep((prev) => prev - 1)}>Prev</button>
          ) : (
            <button className="bg-[#0000ff] shadow-2 px-10 py-3 md:btn-pink"  onClick={handleNavigate}>Already have an account? Login</button>
          )}
          <button className="bg-[#0000ff] shadow-3 px-10 md:btn-pink" onClick={() => (currentStep === 4 ? handleSubmit() : handleNext())}>
            {currentStep === 4 ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Signup;

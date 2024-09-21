import React, { useState } from "react";
import Stepper from "../Registrations/Stepper/Stepper";
import "./Signup.css";
import { TiTick } from "react-icons/ti";
import UserInformation from "./UserInformation";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    personalDetails: { name: "", email: "", password:"" },
    contact: { phone: "", alternatePhone: "" },
    address: { street: "", city: "", zip: "" },
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [isChecked, setIsChecked] = useState(false); 
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
      case 1: // Validate Name and Email
        if (!formData.personalDetails.name) {
          alert("Name is required.");
          return false;
        }
        if (!formData.personalDetails.email || !/\S+@\S+\.\S+/.test(formData.personalDetails.email)) {
          alert("Please enter a valid email address.");
          return false;
        }
        if (!formData.personalDetails.password) {
          alert("Password is required.");
          return false;
        }
        return true;
      case 2: // Validate Phone and Alternate Phone
        if (!formData.contact.phone || formData.contact.phone.length !== 10) {
          alert("Phone number must be 10 digits.");
          return false;
        }
        if (!formData.contact.alternatePhone || formData.contact.alternatePhone.length !== 10) {
          alert("Alternate phone number must be 10 digits.");
          return false;
        }
        return true;
      case 3: // Validate Address fields
        if (!formData.address.street || !formData.address.city || !formData.address.zip) {
          alert("Please fill out Street, City, and ZIP.");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  // Submit handler with checkbox validation
  const handleSubmit = () => {
    if (!isChecked) {
      alert("You must agree to the terms and conditions before submitting.");
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
        return response.json();
      })
      .then((data) => {
        // Store user credentials in local storage
        localStorage.setItem("userCredentials", JSON.stringify({
          email: formData.personalDetails.email,
          password: formData.personalDetails.password,
        }));
        
        console.log("Form submitted successfully:", data);
        setComplete(true);
        setTimeout(() => {
          navigate("/champions");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form. Please try again.");
      });
  };
  

  // Handler for moving to the next step
  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleNavigate= ()=>{
    navigate("/login")
  }

  // Function to render step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col bg-richwhite-1 gap-10 mt-5 p-5 rounded-3xl pt-7">
            <div className="flex flex-col gap-5">
              <label className="text-richblack-900 font-semibold text-3xl">Name:</label>
              <input
                className="outline-none text-3xl border-b-2 border-b-[#0000ff] pb-4"
                type="text"
                value={formData.personalDetails.name}
                onChange={(e) =>
                  handleInputChange("personalDetails", "name", e.target.value)
                }
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="text-richblack-900 font-semibold text-3xl">Email:</label>
              <input
                type="email"
                className="outline-none text-3xl border-b-2 border-b-[#0000ff] pb-4"
                value={formData.personalDetails.email}
                onChange={(e) =>
                  handleInputChange("personalDetails", "email", e.target.value)
                }
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="text-richblack-900 font-semibold text-3xl">Password:</label>
              <input
                type="password"
                className="outline-none text-3xl border-b-2 border-b-[#0000ff] pb-4"
                value={formData.personalDetails.password}
                onChange={(e) =>
                  handleInputChange("personalDetails", "password", e.target.value)
                }
                placeholder="Enter Password"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col bg-richwhite-1 gap-10 mt-5 p-5 rounded-3xl pt-7">
            <div className="flex flex-col gap-5">
              <label className="text-richblack-900 font-semibold text-3xl">Phone:</label>
              <input
                className="outline-none text-3xl border-b-2 border-b-[#0000ff] pb-4"
                type="text"
                value={formData.contact.phone}
                onChange={(e) =>
                  handleInputChange("contact", "phone", e.target.value)
                }
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="text-richblack-900 font-semibold text-3xl">Alternate Phone:</label>
              <input
                className="outline-none text-3xl border-b-2 border-b-[#0000ff] pb-4"
                type="text"
                value={formData.contact.alternatePhone}
                onChange={(e) =>
                  handleInputChange("contact", "alternatePhone", e.target.value)
                }
                placeholder="Enter an alternate phone number"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col bg-richwhite-1 gap-10 mt-5 p-5 rounded-3xl pt-7">
            <div className="flex flex-col gap-5">
              <label className="text-richblack-900 font-semibold text-3xl">Street:</label>
              <input
                className="outline-none text-3xl border-b-2 border-b-[#0000ff] pb-4"
                type="text"
                value={formData.address.street}
                onChange={(e) =>
                  handleInputChange("address", "street", e.target.value)
                }
                placeholder="Enter your street"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="text-richblack-900 font-semibold text-3xl">City:</label>
              <input
                className="outline-none text-3xl border-b-2 border-b-[#0000ff] pb-4"
                type="text"
                value={formData.address.city}
                onChange={(e) =>
                  handleInputChange("address", "city", e.target.value)
                }
                placeholder="Enter your city"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="text-richblack-900 font-semibold text-3xl">ZIP:</label>
              <input
                className="outline-none text-3xl border-b-2 border-b-[#0000ff] pb-4"
                type="text"
                value={formData.address.zip}
                onChange={(e) =>
                  handleInputChange("address", "zip", e.target.value)
                }
                placeholder="Enter your ZIP code"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col bg-richwhite-1 gap-10 mt-5 p-5 rounded-3xl pt-7">
            <UserInformation
              name={formData.personalDetails.name}
              email={formData.personalDetails.email}
              phone={formData.contact.phone}
              alternateNumber={formData.contact.alternatePhone}
              street={formData.address.street}
              city={formData.address.city}
              zip={formData.address.zip}
            />
            <div className="flex flex-row items-baseline text-lg">
              <input
                type="checkbox"
                className=""
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <div>
                <p className="ml-2 text-2xl">By submitting this form, you agree to the following terms and conditions:</p>
                <p className="ml-2 text-2xl">You confirm that the information you provide is accurate, complete, and up-to-date to the best of your knowledge. Providing false or misleading information may result in disqualification from any services or benefits provided through this form.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-[600px] mt-44 ">
      <Stepper
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        complete={complete}
      />
      <div>
        {!complete ? renderStepContent() :
          <div className="flex flex-col justify-center items-center bg-[#16a34a] gap-10 mt-24 p-5 rounded-full pt-7">
            <p className="text-5xl text-richwhite-1 font-semibold text-center">User Registered Successfully</p>
            <TiTick size={96} color="white"/> 
          </div>
        }
      </div>
      {!complete && (
        <div className="flex flex-row justify-between px-10 mt-12">
          {/* {currentStep > 1 && (
            <div className="bg-[#0000ff] text-3xl font-semibold text-richwhite-1 py-2 px-8 shadow-2">
              <button
                className="w-[100%] h-[100%]"
                onClick={() => setCurrentStep((prev) => prev - 1)}
              >
                Prev
              </button>
            </div>
          )} */}

          {
            currentStep >1 ? ( <div className="bg-[#0000ff] text-3xl font-semibold text-richwhite-1 py-2 px-8 shadow-2">
              <button
                className="w-[100%] h-[100%]"
                onClick={() => setCurrentStep((prev) => prev - 1)}
              >
                Prev
              </button>
            </div>) :
            (<div className="bg-[#0000ff] text-3xl font-semibold text-richwhite-1 py-2 px-8 shadow-2">
              <button
                className="w-[100%] h-[100%]"
                onClick={handleNavigate}
              >
                ALready have an account? Login
              </button>
            </div>)
          }
          <div className="bg-[#0000ff] text-3xl font-semibold text-richwhite-1 py-2 px-8 shadow-3">
            <button
              className="w-[100%] h-[100%]"
              onClick={() => (currentStep === 4 ? handleSubmit() : handleNext())}
            >
              {currentStep === 4 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;

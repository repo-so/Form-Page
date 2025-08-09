import { useState } from "react";
import Checkbox from "./checkbox.tsx";

import verified from '../assets/svgs/verified.png'
import italy from '../assets/svgs/italy.svg'

type Props = {
  onValidChange: (valid: boolean) => void;
  onSubmitSuccess?: () => void;
};

export default function Step3({ onValidChange, onSubmitSuccess }: Props) {

  
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [name3, setName3] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isValidPhone = (value: string) => /^[0-9]{10}$/.test(value);
  const prefix: string = "+39"; 
  const isValidText = (text: string) => {return text.trim().length > 0};


  const [touched, setTouched] = useState({
    email: false,
    phone: false,
    name: false,
    name3: false,
    isChecked: false,
  })

  const showError = touched.email && !isValidEmail(email);
  const showError1 = touched.phone && !isValidPhone(phone);
  const showError2 = touched.name && !isValidText(name);
  const showError3 = touched.name3 && !isValidText(name3);
  const showCheckboxError = touched.isChecked && !isChecked;

  const handleSubmit = () => {
    // segna tutti gli input come gia toccati, cosi anche se non l'hai toccati checka se sono poi validi
    setTouched({
      email: true,
      phone: true,
      name: true,
      name3: true,
      isChecked: true,
    });

    const allValid =
      isValidEmail(email) &&
      isValidPhone(phone) &&
      isValidText(name) &&
      isValidText(name3) &&
      isChecked;

    if (allValid && onSubmitSuccess) {
      //alert("tutti validi");
      onValidChange(true);
      onSubmitSuccess();
    }
  };


  return (
    <div className="py-4 px-7 bg-white h-full ">
      <div>
        <p className="text-xs text-black/50 font-poppins -mb-1">Step 3</p>
      <h2 className="text-xl font-poppins font-extrabold mb-4">Personal Info</h2>
      </div>

      <div className="flex flex-row justify-between mb-4">
        <div className="flex flex-col">
        <p className={`font-poppins text-[0.89rem] `}>First Name</p>
      <input value={name} className={`border-3  p-[0.3rem] w-full  rounded-lg text-sm font-poppins
                          ${showError2 ? "border-red-500 focus:ring-red-300" : "border-[#222222] "} outline-none`} placeholder="Your first name" 
              onChange={(e) => setName(e.target.value)} 
          onBlur={() => setTouched((previous) => ({ ...previous, name: true }))}/>
      </div>

      <div className="flex flex-col">
      <p className="font-poppins text-[0.89rem]">Last Name</p>
<input value={name3} className={`border-3  p-[0.3rem] w-full  rounded-lg text-sm font-poppins
                          ${showError3 ? "border-red-500 focus:ring-red-300" : "border-[#222222] "} outline-none`} placeholder="Your last name" 
              onChange={(e) => setName3(e.target.value)} 
          onBlur={() => setTouched((previous) => ({ ...previous, name3: true }))}/>      </div>
      </div>

      <p className="font-poppins text-[0.89rem]">Email</p>
    <div className="flex flex-row items-center justify-between font-poppins">
      <input className={`
                p-1.5 pt-[0.425rem] w-[92%] mb-1 rounded-lg text-sm border-3
                ${showError ? "border-red-500 focus:ring-red-300" : "border-[#222222] "} focus:outline-none 
                ${touched && isValidEmail(email) ? "border-green-600" : " "}`} 

              type="email" value={email} placeholder="name@domain.com"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((previous) => ({ ...previous, email: true }))} />

          <div className={`flex justify-center items-center rounded-full size-4.5 mr-1.5 transition-transform duration-200"
                ${touched && isValidEmail(email) ? "scale-100" : "scale-0 "}`}>
            <img src={verified}  />
          </div>
    </div>
               <p className={`text-red-500 text-[0.775rem] mb-0.5 -mt-1.5 transition-all duration-300 ease-out transform ${
                  showError ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >Invalid email address.
              </p>
                

      <p className="font-poppins text-[0.89rem]">Phone Number</p>
    <div className="relative flex flex-row items-center justify-between font-poppins">
      <div className=" absolute left-0  h-full flex items-center pl-3">
          <span className={`h-[89%] border-r-3  text-gray-500 text-[0.825rem] text-center pr-2  flex flex-row items-center 
                ${showError1 ? "border-red-500 focus:ring-red-300" : "border-[#222222] "} focus:outline-none 
                ${touched.phone && isValidPhone(phone) ? "border-green-600" : ""}`}><img src={italy} width={16} className="mr-0.5" /><p className="pt-[0.14rem]">{prefix}</p></span>
        </div>
      <input  type="tel" value={phone} placeholder="1234567890"
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} // digits only
          onBlur={() => setTouched((previous) => ({ ...previous, phone: true }))}
          className={`p-1.5 pt-2 pl-18 border-3  w-[92%] rounded-lg text-sm 
          ${showError1 ? "border-red-500 focus:ring-red-300" : "border-[#222222] "} focus:outline-none 
          ${touched.phone && isValidPhone(phone) ? "border-green-600" : " "}`} /> 

    <div className={`flex justify-center items-center rounded-full size-4.5 mr-1.5 transition-transform duration-200"
                ${touched.phone && isValidPhone(phone) ? "scale-94" : "scale-0 "}`}>
            <img src={verified}  />
          </div>
    </div>

          <p className={`text-red-500 text-[0.775rem] mb-0.5 -mt-0.5 transition-all duration-300 ease-out transform ${
                  showError1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >Invalid phone number.
              </p> 

        
      <div className="flex flex-row my-1.5 ml-0.5 ">
        <Checkbox 
              isChecked={isChecked}
              onChange={() => {
                setIsChecked(!isChecked);
                setTouched((t) => ({ ...t, isChecked: true }));
              }}
            />
        <p className={`font-poppins text-[0.89rem] pl-1 
                      ${showCheckboxError ? "text-red-600 underline" : "text-black"}`}>I agree to the Terms and Conditions.</p>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer font-poppins text-md hover:bg-blue-600 transition-colors duration-300"
        onClick={handleSubmit}>
        Apply Now!
      </button>
    </div>
  );
}

import React, { useState } from 'react';
import logo from "../images/logo.png";
import { CiSaveDown2 } from "react-icons/ci"; // Save icon
import { MdHome } from "react-icons/md"; // Home icon
import { useNavigate } from "react-router-dom"; // For navigation

const EditiorNavbar = () => {
  const [showDialog, setShowDialog] = useState(false); // State to control the dialog visibility
  const navigate = useNavigate(); // For navigating to Home.jsx

  // Function to handle the Home button
  const handleGoHome = () => {
    navigate("/"); // Navigate to the Home route
  };

  // Function to handle Save button click
  const handleSaveClick = () => {
    setShowDialog(true); // Show the dialog box
    setTimeout(() => setShowDialog(false), 3000); // Auto-hide after 3 seconds
  };

  return (
    <>
      <div className="EditiorNavbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414] relative">
        <div className="logo">
          <img className="w-[150px] cursor-pointer" src={logo} alt="logo" />
        </div>
        <p>File / <span className="text-[gray]">My first project</span></p>
        <div className="flex gap-2 relative">
          {/* Save Button */}
          <i
            className="p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px] relative"
            onClick={handleSaveClick}
            title="Save Project"
          >
            <CiSaveDown2 />
            {/* Dialog box for Save */}
            {showDialog && (
              <div className="dialog absolute top-[110%] left-[50%] transform -translate-x-[10%] bg-[#222] text-white py-[25px] px-[25px] rounded shadow-lg">
                Press <span className="font-bold">Ctrl + S</span> to save your project!
              </div>
            )}
          </i>

          {/* Home Button */}
          <i
            className="p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px]"
            onClick={handleGoHome}
            title="Go to Home"
          >
            <MdHome />
          </i>
        </div>
      </div>
    </>
  );
};

export default EditiorNavbar;

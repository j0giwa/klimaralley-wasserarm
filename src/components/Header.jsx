import React from "react";
/**
 * Header UI Component
 * 
 * Provide Header
 * @author R. Walter Dongmepi W. & Marlon Schrader
 */


function Header() {
  return (
      <div className="flex justify-between items-center top-0 left-0 right-0 h-[88px] w-full px-[16px] py-[24px]  bg-[#6CA96C]/60 backdrop-blur-3xl fixed z-20">
        {/* Language change */}
        <details className="dropdown">
          <summary className="btn hover:bg-green-800 w-[35px] h-[35px] p-0 bg-transparent border-none">
            <img src="public/images/language_image.svg" className="rounded-full" alt="language icon"/>
          </summary>
          <ul className="dropdown-content z-[9000] bg-[#9EFFB9]/20 backdrop-blur-3xl rounded-box w-36 h-[110px] flex flex-col justify-between">
            <li className="w-full px-[11px] py-[8px]">English</li>
            <li className="w-full px-[11px] py-[8px]">German</li>
          </ul>
        </details>

        {/* Money */}
        <div className="bg-[#E5F0FF]/60 rounded-full border-#E5F0FF border-2 p-2.5 w-[95px] flex justify-between">
        <p className="text-[#75F94C]">500</p>
        <span>🪙</span>
        </div>

        {/* Profile */}
        <details className="dropdown dropdown-end">
          <summary className="btn w-[45px] h-[40px] p-0 bg-white border-white">
            <img src="public/dummyPB.webp" className="rounded-full" alt="avatar icon"/>
          </summary>
          <ul className="px-[16px] py-[20px] shadow menu dropdown-content bg-[#6CA96C]/60 backdrop-blur-3xl  rounded-box w-[122px] h-28 flex flex-col justify-between">
            <li>Edit Profile</li>
            <li>Home</li>
            <li>Logout</li>
          </ul>
        </details>
      </div>
  );
}

export default Header;

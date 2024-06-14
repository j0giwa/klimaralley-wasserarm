function Header() {
  return (
    <>
      <div className="flex justify-between items-center fixed top-0 left-0 right-0 z-10 h-[88px] mb-[88px] w-[430px] px-[16px] py-[24px]  bg-[#9EFFB9]">
        {/* Language change */}
        <details className="dropdown">
          <summary className="btn w-[35px] h-[35px] p-0 bg-transparent border-none w-[35px] h-[35px] p-0">
            <img src="/translation-icon.webp" class="rounded-full"></img>
          </summary>
          <ul className="p-2 menu dropdown-content z-[1] bg-base-100 rounded-box">
            <li>English</li>
            <li>German</li>
          </ul>
        </details>

        {/* Money */}
        <button className="btn bg-[#E5F0FF] text-[#75F94C] border-white">
          300 🪙
        </button>

        {/* Profile */}
        <details className="dropdown dropdown-end">
          <summary className="btn w-[45px] h-[40px] p-0 bg-white border-white">
            <img src="/dummyPB.webp" class="rounded-full"></img>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[100px]">
            <li>Edit Profile</li>
            <li>Home</li>
            <li>Logout</li>
          </ul>
        </details>
      </div>
    </>
  );
}

export default Header;

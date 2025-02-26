const Navbar = () => {
  return (
    <div className="px-3 py-2 text-bg-dark border-bottom header-container app-container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
          <li>
            <a
              onClick={() => setSelectedIcon("Home")}
              href="#"
              className={`nav-link text-secondary icons-container ${
                selectedIcon === "Home" && "active"
              }`}
            >
              <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                <use xlinkHref="#home"></use>
              </svg>
              <GoHomeFill className="react-icons" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`nav-link text-secondary icons-container ${
                selectedIcon === "Dashboard" && "active"
              }`}
            >
              <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              <MdSpaceDashboard className="react-icons" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setSelectedIcon("Create Post")}
              href="#"
              className={`nav-link text-secondary icons-container ${
                selectedIcon === "Create Post" && "active"
              }`}
            >
              <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                <use xlinkHref="#table"></use>
              </svg>
              <IoMdCreate className="react-icons" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setSelectedIcon("Help")}
              href="#"
              className={`nav-link text-secondary icons-container ${
                selectedIcon === "Help" && "active"
              }`}
            >
              <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                <use xlinkHref="#grid"></use>
              </svg>
              <BiSolidHelpCircle className="react-icons" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setSelectedIcon("Info")}
              href="#"
              className={`nav-link text-secondary icons-container ${
                selectedIcon === "Info" && "active"
              }`}
            >
              <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <FaCircleInfo className="react-icons" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

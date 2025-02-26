import { GoHomeFill } from "react-icons/go";
import { IoMdCreate } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import { BiSolidHelpCircle } from "react-icons/bi";
import { MdViewSidebar } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
const Sidebar = ({ selectedIcon, setSelectedIcon }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-body-tertiary "
      style={{ width: "6.5rem" }}
    >
      <a
        href="/"
        className="d-block p-3 link-body-emphasis text-decoration-none "
        style={{ backgroundColor: "black", fontSize: "50px" }}
        data-bs-toggle="toolftip"
        data-bs-placement="right"
        data-bs-original-title="Icon-only"
      >
        {" "}
        <MdViewSidebar className="sidebar-react-icons" />
        <svg className="bi pe-none" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center sidebar-container">
        <li className="nav-item">
          <a
            onClick={() => setSelectedIcon("Home")}
            href="#"
            className={`nav-link py-3 border-bottom rounded-0 ${
              selectedIcon === "Home" && "active"
            }`}
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Home"
            data-bs-original-title="Home"
          >
            <GoHomeFill className="sidebar-react-icons" />
            <svg
              className="bi pe-none"
              width="24"
              height="24"
              role="img"
              aria-label="Home"
            >
              <use xlinkHref="#home"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            onClick={() => setSelectedIcon("Create Post")}
            href="#"
            className={`nav-link py-3 border-bottom rounded-0 ${
              selectedIcon === "Create Post" && "active"
            }`}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Dashboard"
            data-bs-original-title="Dashboard"
          >
            <IoMdCreate className="sidebar-react-icons" />
            <svg
              className="bi pe-none"
              width="24"
              height="24"
              role="img"
              aria-label="Dashboard"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            onClick={() => setSelectedIcon("Help")}
            href="#"
            className={`nav-link py-3 border-bottom rounded-0 ${
              selectedIcon === "Help" && "active"
            }`}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Orders"
            data-bs-original-title="Orders"
          >
            <BiSolidHelpCircle className="sidebar-react-icons" />
            <svg
              className="bi pe-none"
              width="24"
              height="24"
              role="img"
              aria-label="Orders"
            >
              <use xlinkHref="#table"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            onClick={() => setSelectedIcon("Info")}
            href="#"
            className={`nav-link py-3 border-bottom rounded-0 ${
              selectedIcon === "Info" && "active"
            }`}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Products"
            data-bs-original-title="Products"
          >
            {" "}
            <FaCircleInfo className="sidebar-react-icons" />
            <svg
              className="bi pe-none"
              width="24"
              height="24"
              role="img"
              aria-label="Products"
            >
              <use xlinkHref="#grid"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            onClick={() => setSelectedIcon("Feedback")}
            href="#"
            className={`nav-link py-3 border-bottom rounded-0 ${
              selectedIcon === "Feedback" && "active"
            }`}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Customers"
            data-bs-original-title="Customers"
          >
            {" "}
            <VscFeedback className="sidebar-react-icons" />
            <svg
              className="bi pe-none"
              width="24"
              height="24"
              role="img"
              aria-label="Customers"
            >
              <use xlinkHref="#people-circle"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

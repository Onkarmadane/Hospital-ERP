import { useEffect, useState } from "react";
import { MdDashboard, MdMenu, MdOutlinePendingActions } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { LuNotebookPen } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";

// Tooltip Component
function Tooltip({ content, children }) {
  return (
    <div className="relative group" data-tip={content}>
      {children}
      <span className="absolute hidden group-hover:block bg-gray-800 text-white text-sm p-2 rounded-lg left-full ml-2 top-1/2 -translate-y-1/2 z-50 whitespace-nowrap">
        {content}
        {/* Arrow pointing left */}
        <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-800" />
      </span>
    </div>
  );
}

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Track if screen is small
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 768; // Adjust threshold as needed (e.g., 768px for tablet/mobile)
      setIsSmallScreen(isSmall);
      if (isSmall) {
        setIsHidden(true); // Hide sidebar on small screens
        setIsCollapsed(false);
      } else {
        setIsHidden(false); // Show sidebar on large screens
        setIsCollapsed(true); // Default collapsed on large screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [location]);

  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setIsHidden(!isHidden);
      setIsCollapsed(false);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setIsHidden(true);
    }
  };

  const navItemClass = ({ isActive }, to) => {
    return `flex items-center p-5 space-x-4 rounded-lg ${isActive || location.pathname.startsWith(to) ? "bg-primary text-white" : "hover:bg-primary"
      }`;
  };

  const navLinks = [
    { to: "/doctor/Dashboard", icon: <MdDashboard size={24} />, label: "Dashboard" },
    { to: "/doctor/Appointment", icon: <LuNotebookPen size={24} />, label: "Appointment" },
    { to: "/doctor/AllPatient", icon: <FaUsers size={24} />, label: "All Patient" },
    { to: "/doctor/FinanceAccounting", icon: <FaRupeeSign size={24} />, label: "Finance & Accounting" },
    { to: "/doctor/settings", icon: <IoSettings size={24} />, label: "Setup" },
    { to: "/doctor/support", icon: <IoIosHelpCircleOutline size={24} />, label: "Help & Support" },
  ];

  return (
    <>
      {/* Sidebar for large screens (hidden on small screens) */}
      <nav
        className={`sidebar bg-white text-black shadow-lg border-r-2 border-primary h-full fixed left-0 top-0 transition-all duration-300 z-50 
          ${isHidden ? "hidden" : "block"} 
          ${isCollapsed ? "w-16" : "w-64"} ${isSmallScreen ? "hidden" : "sm:block"}`}
      >
        <button
          onClick={toggleSidebar}
          className={`p-3 m-5 bg-primary text-white rounded-full transition duration-300 hover:bg-secondary fixed top-4 left-4 z-50 hidden md:block ${isCollapsed ? "rotate-0" : "rotate-180"
            }`}
        >
          <MdMenu size={24} />
        </button>

        <ul className="space-y-2 mt-[110px]">
          {navLinks.map(({ to, icon, label }, index) => (
            <li key={index} className="nav-item">
              <Tooltip content={label}> {/* Tooltip shows the label on hover */}
                <NavLink
                  to={to}
                  className={(navData) => navItemClass(navData, to)}
                  onClick={handleNavClick}
                >
                  {icon}
                  {!isCollapsed && <span className="font-semibold">{label}</span>}
                </NavLink>
              </Tooltip>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Navbar for small screens (hidden on large screens) */}
      <nav
        className={`fixed bottom-0 left-0 right-0 bg-white mt-[100px] shadow-lg border-t-2 border-primary p-2 flex justify-around items-center z-50 
          ${isSmallScreen ? "block" : "hidden"}`}
      >
        {navLinks.map(({ to, icon, label }, index) => (
          <NavLink
            key={index}
            to={to}
            className={({ isActive }) =>
              `p-2 rounded-lg ${isActive || location.pathname.startsWith(to) ? "text-primary" : "text-black"
              } hover:text-primary`
            }
            onClick={handleNavClick}
          >
            {icon}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
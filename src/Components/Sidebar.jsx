import { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LuNotebookPen } from "react-icons/lu";
import { FaUsers, FaUser, FaStethoscope } from "react-icons/fa";
import { RiMenu4Line, RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Swal from "sweetalert2";
import { RiLogoutBoxFill } from "react-icons/ri";

function Tooltip({ content, children }) {
  return (
    <div className="relative group" data-tip={content}>
      {children}
      <span className="absolute hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded-md left-full ml-2 top-1/2 -translate-y-1/2 z-50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {content}
        <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-700" />
      </span>
    </div>
  );
}

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isBottomNavVisible, setIsBottomNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 800;
      setIsSmallScreen(isSmall);
      if (isSmall) {
        setIsHidden(true);
        setIsCollapsed(false);
      } else {
        setIsHidden(false);
        setIsCollapsed(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (isSmallScreen) {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          setIsBottomNavVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsBottomNavVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isSmallScreen]);

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

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#77db8f',
      cancelButtonColor: '#a5a8ac',
      confirmButtonText: 'Yes, log out!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Logged out!', 'You have been logged out.', 'success').then(() => {
          navigate('/');
        });
      }
    });
  };

  const navItemClass = ({ isActive }, to) => {
    return `flex items-center p-5 space-x-4 rounded-lg transition-all duration-200 
      ${isActive || location.pathname.startsWith(to)
        ? "text-primary"
        : "text-text hover:scale-105"
      }`;
  };

  const navLinks = [
    { to: "/doctor/Dashboard", icon: <MdDashboard size={19} />, label: "Dashboard" },
    { to: "/doctor/Appointment", icon: <LuNotebookPen size={19} />, label: "Appointment" },
    { to: "/doctor/AllPatient", icon: <FaUsers size={19} />, label: "All Patient" },
    { to: "/doctor/settings", icon: <IoSettings size={19} />, label: "Setup" },
    { to: "/doctor/logout", icon: <RiLogoutBoxFill size={19} />, label: "Logout" },
  ];

  // Filter out Logout for small screen bottom nav
  const bottomNavLinks = navLinks.filter(link => link.to !== "/doctor/logout");

  return (
    <>
      {/* Sidebar for large screens */}
      <aside>
        <nav
          className={`sidebar rounded-xl bg-background text-text shadow-xl border-r-2 border-primary h-full fixed left-0 top-0 transition-all duration-500 ease-in-out z-[90] 
            ${isHidden ? "hidden" : "block"} 
            ${isCollapsed ? "w-12" : "w-64"} ${isSmallScreen ? "hidden" : "sm:block"}`}
        >
          {/* User Info Section with Profile and Logout */}
          <div className="flex items-center p-3 border-b border-gray-200 relative group">
            {isCollapsed ? (
              <Tooltip content="Dr. John Doe">
                <NavLink to="/doctor/profile">
                  <div className="flex items-center justify-center w-full">
                    <FaUser size={24} className="text-text" />
                  </div>
                </NavLink>
              </Tooltip>
            ) : (
              <>
                <div className="flex items-center space-x-3">
                  <FaUser size={24} className="text-text" />
                  <NavLink to="/doctor/profile">
                    <span className="text-lg font-semibold text-text hover:text-primary transition-colors duration-200">
                      Dr. John Doe
                    </span>
                  </NavLink>
                </div>
                {/* Logout Button - Visible on Hover
                <button
                  onClick={handleLogout}
                  className="absolute left-full top-1/2 -translate-y-1/2 hidden group-hover:flex items-center bg-gray-100 text-text p-3 rounded-lg shadow-lg ml-2 transition-all duration-200 hover:text-primary z-10 whitespace-nowrap"
                >
                  <RiLogoutBoxLine size={19} className="mr-2" />
                  <span className="font-sans font-semibold">Logout</span>
                </button> */}
              </>
            )}
          </div>

          <button
            onClick={toggleSidebar}
            className={`m-5 text-text bg-primary rounded transition duration-300 hover:bg-secondary fixed top-14 left-5 z-50 hidden md:block ${isCollapsed ? "rotate-0" : "rotate-180"}`}
          >
            <MdOutlineKeyboardArrowRight size={19} />
          </button>

          <ul className="space-y-4 mt-[30px]">
            {navLinks.map(({ to, icon, label }, index) => (
              <li key={index} className="nav-item" style={{ margin: '0' }}>
                {isCollapsed ? (
                  <Tooltip content={label}>
                    <NavLink
                      to={to}
                      className={(navData) => `${navItemClass(navData, to)} flex items-center justify-center w-full`}
                      onClick={(event) => {
                        handleNavClick();
                        if (to === "/doctor/logout") {
                          event.preventDefault();
                          handleLogout();
                        }
                      }}
                    >
                      <div
                        className={`flex items-center justify-center w-10 p-2 h-10 rounded border-2 border-transparent group-hover:border-primary group-hover:bg-primary group-hover:text-text group-hover:scale-105 transition-all duration-200`}
                      >
                        {icon}
                      </div>
                    </NavLink>
                  </Tooltip>
                ) : (
                  <NavLink
                    to={to}
                    className={(navData) => navItemClass(navData, to)}
                    onClick={(event) => {
                      handleNavClick();
                      if (to === "/doctor/logout") {
                        event.preventDefault();
                        handleLogout();
                      }
                    }}
                  >
                    {icon}
                    <span className="font-sans font-semibold">{label}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Bottom Navbar for small screens */}
      <nav
        className={`fixed bottom-0 left-0 right-0 bg-background shadow-md border-t-2 border-primary p-3 flex justify-around items-center z-50 transition-transform duration-300 
          ${isSmallScreen ? "block" : "hidden"} 
          ${isBottomNavVisible ? "translate-y-0" : "translate-y-full"}`}
      >
        {bottomNavLinks.map(({ to, icon }, index) => (
          <NavLink
            key={index}
            to={to}
            className={({ isActive }) =>
              `p-3 ${isActive || location.pathname.startsWith(to) ? "text-primary" : "text-text"} hover:text-primary transition-colors duration-200`
            }
            onClick={handleNavClick}
          >
            {icon}
          </NavLink>
        ))}
        {/* Profile Tab */}
        <NavLink
          to="/doctor/profile"
          className={({ isActive }) =>
            `p-3 ${isActive || location.pathname.startsWith("/doctor/profile") ? "text-primary" : "text-text"} hover:text-primary transition-colors duration-200`
          }
          onClick={handleNavClick}
        >
          <FaUser size={19} />
        </NavLink>
      </nav>
    </>
  );
};

export default Sidebar;

// import { useEffect, useState } from "react";
// import { MdDashboard } from "react-icons/md";
// import { IoSettings } from "react-icons/io5";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { LuNotebookPen } from "react-icons/lu";
// import { FaUsers, FaUser } from "react-icons/fa";
// import { RiMenu4Line, RiLogoutBoxLine } from "react-icons/ri";
// import Swal from "sweetalert2";
// import { RiLogoutBoxFill } from "react-icons/ri";

// const Sidebar = () => {
//   const [isSidebarVisible, setIsSidebarVisible] = useState(false); // For large screens
//   const [isHidden, setIsHidden] = useState(true); // For small screens
//   const [isSmallScreen, setIsSmallScreen] = useState(false);
//   const [isBottomNavVisible, setIsBottomNavVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleResize = () => {
//       const isSmall = window.innerWidth < 768; // Matches Tailwind's md breakpoint
//       setIsSmallScreen(isSmall);
//       if (isSmall) {
//         setIsHidden(true);
//         setIsSidebarVisible(false); // Ensure sidebar is hidden on small screens
//       } else {
//         setIsHidden(false);
//         setIsSidebarVisible(false); // Sidebar hidden by default on large screens
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [location]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (isSmallScreen) {
//         const currentScrollY = window.scrollY;
//         if (currentScrollY > lastScrollY) {
//           setIsBottomNavVisible(false);
//         } else if (currentScrollY < lastScrollY) {
//           setIsBottomNavVisible(true);
//         }
//         setLastScrollY(currentScrollY);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY, isSmallScreen]);

//   const toggleSidebar = () => {
//     if (isSmallScreen) {
//       setIsHidden(!isHidden); // Toggle visibility for small screens
//     } else {
//       setIsSidebarVisible(!isSidebarVisible); // Toggle full sidebar for large screens
//     }
//   };

//   const handleNavClick = () => {
//     if (isSmallScreen) {
//       setIsHidden(true); // Hide sidebar on small screens after navigation
//     } else {
//       setIsSidebarVisible(false); // Hide sidebar on large screens after navigation
//     }
//   };

//   const handleLogout = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "Do you want to log out?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#77db8f",
//       confirmButtonText: "Yes, log out!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire("Logged out!", "You have been logged out.", "success").then(() => {
//           navigate("/");
//         });
//       }
//     });
//   };

//   const navItemClass = ({ isActive }, to) => {
//     return `flex items-center p-5 space-x-4 rounded-lg transition-all duration-200 
//       ${isActive || location.pathname.startsWith(to)
//         ? "text-primary"
//         : "text-text hover:scale-105"
//       }`;
//   };

//   const navLinks = [
//     { to: "/doctor/Dashboard", icon: <MdDashboard size={19} />, label: "Dashboard" },
//     { to: "/doctor/Appointment", icon: <LuNotebookPen size={19} />, label: "Appointment" },
//     { to: "/doctor/AllPatient", icon: <FaUsers size={19} />, label: "All Patient" },
//     { to: "/doctor/settings", icon: <IoSettings size={19} />, label: "Setup" },
//     { to: "/doctor/logout", icon: <RiLogoutBoxFill size={19} />, label: "Logout" },
//   ];

//   const bottomNavLinks = navLinks.filter((link) => link.to !== "/doctor/logout");

//   return (
//     <>
//       {/* Toggle Button for Large Screens */}
//       <button
//         onClick={toggleSidebar}
//         className={`fixed top-5 left-4 z-[100] text-text bg-primary p-2 rounded transition duration-300 hover:bg-secondary md:block hidden`}
//       >
//         <RiMenu4Line size={19} />
//       </button>

//       {/* Sidebar for Large Screens */}
//       <aside>
//         <nav
//           className={`sidebar rounded-xl bg-background text-text shadow-lg border-r-2 border-primary h-full fixed left-0 top-0 transition-all duration-500 ease-in-out z-[90] 
//             ${isSidebarVisible ? "w-64" : "w-0"} 
//             ${isSmallScreen ? "hidden" : "block"} overflow-hidden`}
//         >
//           {/* User Info Section */}
//           <div className="flex items-center p-5 border-b border-gray-200">
//             <div className="flex items-center space-x-3">
//               <FaUser size={24} className="text-text" />
//               <NavLink to="/doctor/profile" onClick={handleNavClick}>
//                 <span className="text-lg font-semibold text-text hover:text-primary transition-colors duration-200">
//                   Dr. John Doe
//                 </span>
//               </NavLink>
//             </div>
//           </div>

//           <ul className="space-y-4 mt-[30px]">
//             {navLinks.map(({ to, icon, label }, index) => (
//               <li key={index} className="nav-item" style={{ margin: "0" }}>
//                 <NavLink
//                   to={to}
//                   className={(navData) => navItemClass(navData, to)}
//                   onClick={(event) => {
//                     handleNavClick();
//                     if (to === "/doctor/logout") {
//                       event.preventDefault();
//                       handleLogout();
//                     }
//                   }}
//                 >
//                   {icon}
//                   <span className="font-sans font-semibold">{label}</span>
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>

//       {/* Sidebar for Small Screens (Hidden by Default, Toggled via Bottom Nav) */}
//       <aside>
//         <nav
//           className={`sidebar rounded-xl bg-background text-text shadow-lg border-r-2 border-primary h-full fixed left-0 top-0 transition-all duration-500 ease-in-out z-[90] 
//             ${isHidden ? "w-0" : "w-64"} 
//             ${isSmallScreen ? "block" : "hidden"} overflow-hidden`}
//         >
//           {/* User Info Section */}
//           <div className="flex items-center p-5 border-b border-gray-200">
//             <div className="flex items-center space-x-3">
//               <FaUser size={24} className="text-text" />
//               <NavLink to="/doctor/profile" onClick={handleNavClick}>
//                 <span className="text-lg font-semibold text-text hover:text-primary transition-colors duration-200">
//                   Dr. John Doe
//                 </span>
//               </NavLink>
//             </div>
//           </div>

//           <ul className="space-y-4 mt-[30px]">
//             {navLinks.map(({ to, icon, label }, index) => (
//               <li key={index} className="nav-item" style={{ margin: "0" }}>
//                 <NavLink
//                   to={to}
//                   className={(navData) => navItemClass(navData, to)}
//                   onClick={(event) => {
//                     handleNavClick();
//                     if (to === "/doctor/logout") {
//                       event.preventDefault();
//                       handleLogout();
//                     }
//                   }}
//                 >
//                   {icon}
//                   <span className="font-sans font-semibold">{label}</span>
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>

//       {/* Bottom Navbar for Small Screens */}
//       <nav
//         className={`fixed bottom-0 left-0 right-0 bg-background shadow-md border-t-2 border-primary p-3 flex justify-around items-center z-50 transition-transform duration-300 
//           ${isSmallScreen ? "block" : "hidden"} 
//           ${isBottomNavVisible ? "translate-y-0" : "translate-y-full"}`}
//       >
//         <button
//           onClick={toggleSidebar}
//           className="p-3 text-text hover:text-primary transition-colors duration-200"
//         >
//           <RiMenu4Line size={19} />
//         </button>
//         {bottomNavLinks.map(({ to, icon }, index) => (
//           <NavLink
//             key={index}
//             to={to}
//             className={({ isActive }) =>
//               `p-3 ${isActive || location.pathname.startsWith(to) ? "text-primary" : "text-text"} hover:text-primary transition-colors duration-200`
//             }
//             onClick={handleNavClick}
//           >
//             {icon}
//           </NavLink>
//         ))}
//         <NavLink
//           to="/doctor/profile"
//           className={({ isActive }) =>
//             `p-3 ${isActive || location.pathname.startsWith("/doctor/profile") ? "text-primary" : "text-text"} hover:text-primary transition-colors duration-200`
//           }
//           onClick={handleNavClick}
//         >
//           <FaUser size={19} />
//         </NavLink>
//       </nav>
//     </>
//   );
// };

// export default Sidebar;
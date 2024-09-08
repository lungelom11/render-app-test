import { Link, useLocation } from "react-router-dom";
import { FaHouseUser,FaWallet,FaFlag,FaFutbol} from "react-icons/fa6";
import { MdOutlineWaterfallChart } from "react-icons/md";

const navigationLinks = [
    {
      href: "/" ,
      iconClass: <FaHouseUser />,
      text: "Home",
    },
    {
      href: "/finances",
      iconClass: <FaWallet />,
      text: "Finances",
    },
    {
      href: "/betway",
      iconClass: <FaFlag />,
      text: "Betway",
    },
    {
      href: "/fpl",
      iconClass: <FaFutbol />,
      text: "FPL",
    },
    {
      href: "/forex",
      iconClass: <MdOutlineWaterfallChart />,
      text: "Forex",
    },
  ];

const SidebarContent = () => {
    const location = useLocation();
  
    return (
      <div className="sidebar">
        <ul>
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                className={location.pathname === link.href ? "active-page" : ""}
              >
                <span className="icon">{link.iconClass}</span>
                <span className="item">{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SidebarContent;
import { BiUser, BiGroup, BiArrowBack } from "react-icons/bi";
import projects from "../../data/projects";
import { Link, NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 text-xl
                    flex flex-col justify-between place-items-center bg-gray-900 text-white shadow-lg"
    >
      <div className="menu">
        <SidebarIcon text="Author" icon={<BiUser />} />
        <SidebarHr />
        {projects.map((project, idx) => (
          <SidebarIcon
            key={idx}
            text={project.title}
            icon={<project.icon />}
            url={project.url}
          />
        ))}
      </div>
      <div className="settings">
        <SidebarIcon text="Teams" icon={<BiGroup />} />
        <Link to="/" state={{ previousPath: pathname }}>
          <SidebarIcon text="Back" icon={<BiArrowBack />} />
        </Link>
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, url = "/", text = "Tooltip" }) => {
  return (
    <NavLink to={url}>
      <div
        className="relative flex items-center justify-center
                      h-12 w-12 my-4 mx-auto
                      hover:bg-green-600 bg-gray-800
                      text-green-500 hover:text-white
                      hover:rounded-xl rounded-3xl
                      transition-all duration-300 ease-linear
                      cursor-pointer shadow-lg group"
      >
        {icon}
        <span
          className="absolute w-auto p-2 m-2 min-w-max left-14
                          rounded-md shadow-md
                          text-white bg-gray-900
                          text-xs font-bold
                          transition-all duration-100 scale-0 origin-left group-hover:scale-100"
        >
          {text}
        </span>
      </div>
    </NavLink>
  );
};

const SidebarHr = () => {
  return <hr className="w-12 my-2" />;
};

export default Sidebar;

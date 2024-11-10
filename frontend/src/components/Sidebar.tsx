import React from "react";
import "../../src/";
import { sideBarData } from "../Utils/SidebarData";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
const navigate = useNavigate();

    const handlePathChange = ()=> {
        console.log("dkdkdk")
    }

  return (
    <>
    
    <div className="sidebar fixed w-64 h-screen bg-gray-800 text-white ">
    <div className="support-portal-headline">
        <h2>AI Customer Support Portal</h2>
    </div>
      <ul className="sidebar-list">
        {sideBarData.map((val, key) => {
          return (
            <li
              id={window.location.pathname === val.link ? "active" : ""}
              className="row"
              key={key}
              onClick={() => 
             navigate(val.link)
              }
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
    </>
  );
};

export default Sidebar;

import React from "react";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import pic from "../assets/picProfile.jpg";
import userImg from "../assets/profile.jpg";
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";

const SideBar = () => {
  const { user } = useContext(AuthContext);

  return (
    //nickgmail person
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="PicPerfil">
        {user?.displayName || "Demo"}
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>

          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;

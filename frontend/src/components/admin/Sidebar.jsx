import React from "react";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className="w-full bg-white py-24 flex flex-col gap-10 h-full px-10 ">
      <Link className="sidebarLinkStyles" to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link className="sidebarLinkStyles" to="#">
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Products">
            <Link className="sidebarLinkStyles" to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link className="sidebarLinkStyles" to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link className="sidebarLinkStyles" to="/admin/orders">
        <div className="flex items-center gap-2">
          <ListAltIcon />
          <p>Orders</p>
        </div>
      </Link>
      <Link className="sidebarLinkStyles" to="/admin/users">
        <div className="flex items-center gap-2">
          <PeopleIcon />
          <p>Users</p>
        </div>
      </Link>
      <Link className="sidebarLinkStyles" to="/admin/reviews">
        <div className="flex items-center gap-2">
          <RateReviewIcon />
          <p>Reviews</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;

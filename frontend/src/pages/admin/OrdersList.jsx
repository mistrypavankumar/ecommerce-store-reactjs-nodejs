import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteOrder,
  getAllOrders,
  clearErrors,
} from "../../actions/orderAction";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../../components/layout/MetaData";
import { Edit, Delete } from "@material-ui/icons";
import SideBar from "../../components/admin/Sidebar";
import { DELETE_ORDER_RESET } from "../../constants/orderConstants";
import Heading from "./_components/Heading";

const OrdersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const { error, orders } = useSelector((state) => state.allOrders);
  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Order is Deleted Successfully");
      navigate("/admin/orders");
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getAllOrders()); // getting all the orders
  }, [dispatch, error, alert, deleteError, isDeleted, navigate]);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "text-green-500"
          : "text-red-500";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link
              className="text-green-400 hover:text-green-500 transition-all duration-300"
              to={`/admin/order/${params.getValue(params.id, "id")}`}
            >
              <Edit />
            </Link>

            <button
              className="text-red-400 mx-7 hover:text-red-500 transition-all duration-300"
              onClick={() =>
                deleteOrderHandler(params.getValue(params.id, "id"))
              }
            >
              <Delete />
            </button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((order) => {
      rows.push({
        id: order._id,
        itemsQty: order.orderItems.length,
        status: order.orderStatus,
        amount: order.totalPrice,
      });
    });

  return (
    <Fragment>
      <MetaData title={`All Orders - Admin`} />

      {/* dashboard */}
      <div className="dashboardStyle">
        <div className="sidebarStyle">
          <SideBar />
        </div>

        <div className="dashboardRightBoxStyle">
          <div className="mb-5">
            <Heading
              title={`Orders (${orders && orders.length})`}
              description={"Manage orders for your store"}
            />
          </div>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="w-[95%] mx-auto"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};
export default OrdersList;

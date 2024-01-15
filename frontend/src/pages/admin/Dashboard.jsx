import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MetaData from "../../components/layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { Doughnut, Line } from "react-chartjs-2";
import Sidebar from "../../components/admin/Sidebar";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { getAdminProducts } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction";
import { getAllUsers } from "../../actions/userAction";
import { rupeeSymbol } from "../../constants/constants";
import Heading from "./_components/Heading";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products } = useSelector((state) => state.products);
  const { isAuthenticated } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProducts());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  Chart.register(CategoryScale);

  const state = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="dashboardStyle">
      <MetaData title="Dashboard - Admin Panel" />
      <div className="sidebarStyle">
        <Sidebar />
      </div>

      <div className="dashboardRightBoxStyle">
        <Heading title={"Overview"} description={"Overview of your store"} />

        {/* dashboardSummary */}
        <div className="pt-10 px-5">
          <div className="flex flex-wrap gap-5">
            <OverViewCard
              title={"Total Revenue"}
              label={rupeeSymbol + " " + totalAmount}
            />
            <OverViewCard
              title={"Total Products"}
              label={products && products.length}
            />
            <OverViewCard
              title={"Total Orders"}
              label={orders && orders.length}
            />
            <OverViewCard title={"Total Users"} label={users && users.length} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
            {/* lineChart */}
            <div className="w-full">
              <Line
                data={state}
                options={{
                  title: {
                    display: true,
                    text: "Average Rainfall per month",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </div>
            <div className="w-[80%] md:w-[50%] mx-auto md:h-[50%]">
              <Doughnut data={doughnutState} />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const OverViewCard = ({ title, label }) => {
  return (
    <div className="flex-1 w-full border-2 rounded-lg p-5">
      <h3 className="text-sm pb-2">{title}</h3>
      <h2 className="text-2xl font-semibold">{label}</h2>
    </div>
  );
};

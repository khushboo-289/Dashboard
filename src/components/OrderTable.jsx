// OrderTable.js
import React from "react";

const OrderTable = () => {
  const orders = [
    {
      distributor: "Janet Adebayo",
      date: "12 Aug 2022 - 12:25 am",
      type: "Home Delivery",
      trackingId: "9348fj73",
      total: "₦25,000.00",
      action: "Completed",
      status: "Completed",
    },
    {
      distributor: "Samuel Johnson",
      date: "12 Aug 2022 - 12:25 am",
      type: "Pick Up",
      trackingId: "9348fj73",
      total: "₦25,000.00",
      action: "In-Progress",
      status: "In-Progress",
    },
    {
      distributor: "Francis Doe",
      date: "12 Aug 2022 - 12:25 am",
      type: "Pick Up",
      trackingId: "9348fj73",
      total: "₦25,000.00",
      action: "Pending",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-white rounded shadow-sm p-4">
      <div className="d-flex justify-content-between mb-3">
        <div>
          <button className="btn btn-primary me-2">Pending</button>
          <button className="btn btn-outline-primary me-2">Approved</button>
          <button className="btn btn-outline-primary">Rejected</button>
        </div>
        <button className="btn btn-secondary">Create a New Order</button>
      </div>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Distributor Name</th>
            <th>Order Date</th>
            <th>Order Type</th>
            <th>Tracking ID</th>
            <th>Order Total</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.distributor}</td>
              <td>{order.date}</td>
              <td>{order.type}</td>
              <td>{order.trackingId}</td>
              <td>{order.total}</td>
              <td>
                <button className="btn btn-primary btn-sm">Details</button>
              </td>
              <td>
                <span
                  className={`badge ${
                    order.status === "Completed"
                      ? "bg-success"
                      : order.status === "In-Progress"
                      ? "bg-warning"
                      : "bg-danger"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;

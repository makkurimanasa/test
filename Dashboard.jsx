import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <section style={{ display: "flex", gap: "50px", alignItems: "center" }}>
        <Link to="/dashboard/laptops">Laptops</Link>

        <Link to="/dashboard/mobiles">Mobiles</Link>

        <Link to="/dashboard/watches">Watches</Link>
      </section>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;

import ProductTable from "./component/product-table";
import StatsGrid from "./component/stats-grid";

const Dashboard = () => {
  return (
    <div>
      <StatsGrid />
      <ProductTable />
    </div>
  );
};

export default Dashboard;

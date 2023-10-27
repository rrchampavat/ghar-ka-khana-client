import SimpleGrid from "@/components/wrapper/simple-grid";
import ProductTable from "./component/product-table";
import StatsGrid from "./component/stats-grid";
import { useMediaQuery } from "@mantine/hooks";

const Dashboard = () => {
  const isMobile = useMediaQuery("(max-width: 56.25rem)");

  return (
    <div>
      <StatsGrid />
      <SimpleGrid cols={isMobile ? 1 : 2}>
        <ProductTable />
      </SimpleGrid>
    </div>
  );
};

export default Dashboard;

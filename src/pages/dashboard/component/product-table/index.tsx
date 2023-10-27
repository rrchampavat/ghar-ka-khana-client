import Table from "@/components/ui/table";
import Text from "@/components/ui/text";

const elements = [
  { position: 1, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 2, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 3, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 4, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 5, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 6, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 7, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 8, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 9, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 10, mass: 140.12, symbol: "Ce", name: "Cerium" }
];

const columns = ["Element position", "Element name", "Symbol", "Atomic mass"];

const ProductTable = () => {
  return (
    <div className="rounded-sm border p-1">
      <Table
        rows={elements}
        columns={columns}
        caption={<Text className="sticky top-0">Most sold products</Text>}
      />
    </div>
  );
};

export default ProductTable;

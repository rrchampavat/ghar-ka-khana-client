import {
  BadgeDollarSign,
  BadgePercent,
  MoveDownRight,
  MoveUpRight,
  Receipt,
  UserPlus
} from "lucide-react";
import Text from "@/components/ui/text";
import Paper from "@/components/wrapper/paper";
import Group from "@/components/wrapper/group";
import SimpleGrid from "@/components/wrapper/simple-grid";

const icons = {
  user: UserPlus,
  discount: BadgePercent,
  receipt: Receipt,
  coin: BadgeDollarSign
};

const data = [
  { title: "Revenue", icon: "receipt", value: "13,456", diff: 34 },
  { title: "Profit", icon: "coin", value: "4,145", diff: -13 },
  { title: "Coupons usage", icon: "discount", value: "745", diff: 18 },
  { title: "New customers", icon: "user", value: "188", diff: -30 }
] as const;

const StatsGrid = () => {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    const DiffIcon = stat.diff > 0 ? MoveUpRight : MoveDownRight;

    return (
      <Paper
        withBorder
        p="md"
        radius="md"
        key={stat.title}
        className="!bg-background"
      >
        <Group justify="space-between">
          <Text size="sm" c="dimmed" className="!font-semibold uppercase">
            {stat.title}
          </Text>
          <Icon className="text-gray-400" size="1.4rem" />
        </Group>

        <Group align="flex-end" justify="left" gap="xs" mt={25}>
          <Text className="!text-3xl !font-semibold leading-none">
            {stat.value}
          </Text>

          <Text
            fz="sm"
            fw={500}
            className={`!flex items-center leading-none ${
              stat.diff > 0 ? "!text-green-600" : "!text-red-600"
            }`}
          >
            <span>{stat.diff}%</span>
            <DiffIcon size="1rem" />
          </Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7} className="!font-semibold">
          Compared to previous month
        </Text>
      </Paper>
    );
  });

  return (
    <div className="p-9">
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
    </div>
  );
};

export default StatsGrid;

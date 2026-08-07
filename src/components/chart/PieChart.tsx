import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042"
];

interface Props {
    data: any[];
}

export default function DashboardPieChart({ data }: Props) {
    return (
        <ResponsiveContainer
            width="100%"
            height={350}
        >
            <PieChart>

                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={120}
                    label
                >
                    {
                        data.map((_, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))
                    }

                </Pie>

                <Tooltip />

            </PieChart>
        </ResponsiveContainer>
    );
}
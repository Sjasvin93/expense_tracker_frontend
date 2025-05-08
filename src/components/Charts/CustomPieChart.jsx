import React from 'react'
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";
import CustomToolTip from './CustomToolTip';
import CustomLegend from './CustomLegend';

function CustomPieChart({ label, colors, data, totalAmount, showTextAnchor }) {

    function formatAmount(amount) {
        const num = parseFloat(amount.slice(1));
        if (isNaN(num)) return '$0.00';

        if (num >= 1_000_000_000) return `$${(num / 1_000_000_000).toFixed(2)}B`;
        if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(2)}M`;
        if (num >= 1_000) return `$${(num / 1_000).toFixed(2)}K`;

        return `$${num.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })}`;
    }

    return (
        <ResponsiveContainer width="100%" height={380}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={130}
                    innerRadius={100}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={colors[index % colors.length]}
                        />
                    ))}

                </Pie>
                <Tooltip content={<CustomToolTip />} />
                <Legend content={<CustomLegend />} />

                {showTextAnchor
                    && (
                        <g>
                            <text
                                x="50%"
                                y="50%"
                                dy={-25}
                                textAnchor="middle"
                                fill="#666"
                                fontSize="14px"
                            >
                                {label.length > 15 ? label.slice(0, 12) + '...' : label}
                            </text>
                            <text
                                x="50%"
                                y="50%"
                                dy={8}
                                textAnchor="middle"
                                fill="#333"
                                fontSize="24px"
                                fontWeight="600"
                            >
                                {formatAmount(totalAmount)}
                            </text>
                        </g>
                    )}

            </PieChart>
        </ResponsiveContainer>
    )
}

export default CustomPieChart
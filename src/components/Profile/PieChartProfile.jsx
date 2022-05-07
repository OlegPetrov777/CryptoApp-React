import React from "react";
import {Cell, Pie, PieChart} from "recharts";


let PieChartProfile = (props) => {

    let data = [
        {price: props.myCoins.btc * props.priceBtc},
        {price: props.myCoins.eth * props.priceEth},
        {price: props.myCoins.usd},
    ]

    const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
                                       cx,
                                       cy,
                                       midAngle,
                                       innerRadius,
                                       outerRadius,
                                       percent,
                                       index
                                   }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="price"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                ))}
            </Pie>
        </PieChart>
    )
}

export default PieChartProfile;
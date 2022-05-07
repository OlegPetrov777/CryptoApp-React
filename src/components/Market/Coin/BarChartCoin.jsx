import React from "react";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";


let BarChartCoin = (props) => {
    const data = [];

    props.priceList.map(e => {
        data.push({
            date: new Date(e.shift()).toLocaleDateString("en-US"), price: e.pop() // берется цена закрытия
        })
    })

    return (<BarChart
            width={1000}
            height={500}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5
            }}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="date"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="price" fill="#8884d8"/>
        </BarChart>)
}

export default BarChartCoin;
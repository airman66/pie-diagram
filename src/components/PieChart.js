import React, {useEffect} from "react";
import Chart from 'chart.js';

import "./PieChart.css";

const PieChart = ({data, labels}) => {
    const colors = [
        "rgb(0,169,66)",
        "rgb(49,181,98)",
        "rgb(105,195,134)",
        "rgb(150,219,175)",
        "rgb(202,237,217)",
        "rgb(193,197,196)"
    ];

    const ColorSquare = ({color}) => {
        return (
            <div style={{width: 13, height: 13, backgroundColor: color, borderRadius: 2}}></div>
        );
    };

    useEffect(() => {
        const ctx = "pie-chart";
        new Chart(ctx, {
            type: 'pie',
            data: {
                defaultColor: "rgba(150,21,38,1)",
                datasets: [
                    {
                        borderWidth: 0,
                        weight: 3,
                        data,
                        backgroundColor: colors
                    }
                ]
            },
            options: {
                events: [],
                legend: ""
            }
        });
    }, [data, colors]);
    return (
        <div className="diagram">
            <div className="chart-container pie-container">
                <canvas id="pie-chart"></canvas>
            </div>
            <table className="legend">
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <strong>
                                <br />
                                Масштаб внедрения
                            </strong>
                        </td>
                        <td>
                            <strong>
                                Количество<br />регионов
                            </strong>
                        </td>
                    </tr>
                    {labels.map((el, index) => (
                        <tr key={index}>
                            <td>
                                <div>
                                    {labels.length - index - 1}
                                </div>
                            </td>
                            <td>
                                <ColorSquare color={colors[index]} />
                            </td>
                            <td>
                                <div>
                                    {el}
                                </div>
                            </td>
                            <td>
                                {data[index]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PieChart;
import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {
    const dataPointValues = props.dataPoints.map(point => point.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
           {props.dataPoints.map(point => (
            <ChartBar
                key={point.label}
                value={point.value} 
                maxValue={totalMaximum} 
                label={point.label}
            />)
        )} 
        </div>
    );
}
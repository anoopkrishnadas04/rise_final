import './StockGraph.css'
import Buttons from './Buttons'
//import Highcharts from 'highcharts'
//import HighchartsReact from 'highcharts-react-official'
//<HighchartsReact highcharts={Highcharts} options={{}} />


export default function StockGraph({tickerID}) {
    return (
        <div id="graph-parts-container">
            <div id="graph-container">
            </div>
            <Buttons />
        </div>
    )
}
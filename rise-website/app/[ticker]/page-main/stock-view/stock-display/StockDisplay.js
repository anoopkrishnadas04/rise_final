import './StockDisplay.css'
import StockGraph from './stock-graph/StockGraph'
import StockTable from './stock-table/StockTable'

export default function StockDisplay({ tickerID }) {
    return (
        <div id="display-container">
            <StockGraph tickerID={tickerID}/>
            <StockTable tickerID={tickerID}/>
        </div>
    )
}
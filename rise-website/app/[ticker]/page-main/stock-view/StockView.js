import './StockView.css'
import StockHeader from './stock-header/StockHeader'
import StockDisplay from './stock-display/StockDisplay'

export default function StockView({ tickerID }) {
    return (
        <div id="view-container">
            <StockHeader tickerID={tickerID}/>
            <StockDisplay tickerID={tickerID}/>
        </div>
    )
}
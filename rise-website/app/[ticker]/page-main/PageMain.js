import './PageMain.css'
import Sidebar from './sidebar/Sidebar'
import StockView from './stock-view/StockView'


export default function PageMain({ tickerID }) {
    return (
        <div id="page-main-container">
            <Sidebar tickerID={tickerID}/>
            <StockView tickerID={tickerID}/>
        </div>
    )
}
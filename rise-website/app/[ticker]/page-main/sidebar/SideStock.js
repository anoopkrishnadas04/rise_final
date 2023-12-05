import './SideStock.css'

export default function SideStock({ headingData, linkData }) {
    return (
        <div className='side-stock-container'>
            <div className="news-heading">{headingData ? headingData : 'No Name Selected'}</div>
            <div className="news-link"><a href={linkData} target='_blank'>Link to Article</a></div>
            {/*<div className="stock-price">{price ? price : 'N/A'}</div>*/}                
        </div>
    )
}
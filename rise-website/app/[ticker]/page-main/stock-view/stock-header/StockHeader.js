import './StockHeader.css'
import StockName from './stock-name/StockName'
import MarketPrice from './market-price/MarketPrice'
import MarketChange from './market-change/MarketChange'
import MarketPercentage from './market-percentage/MarketPercentage'


export const getStock = async (tickerID) => {
  const url = "http://127.0.0.1:5000/?stock=" + tickerID;
  const data = await fetch(url, {
      next: { revalidate: 1},
    });
    const jdata = await data.json();
    console.log(jdata.stock);
    return jdata.stock;
};

export const getPrice = async (tickerID) => {
  const url = "http://127.0.0.1:5000/?stock=" + tickerID;
  const data = await fetch(url, {
      next: { revalidate: 1},
    });
    const jdata = await data.json();
    console.log(jdata.market_price);
    return jdata.market_price;
};

export const getChange = async (tickerID) => {
  const url = "http://127.0.0.1:5000/?stock=" + tickerID;  
  const data = await fetch(url, {
      next: { revalidate: 1},
    });
    const jdata = await data.json();
    console.log(jdata.market_change);
    return jdata.market_change;
};

export const getPercentage = async (tickerID) => {
  const url = "http://127.0.0.1:5000/?stock=" + tickerID;  
  const data = await fetch(url, {
      next: { revalidate: 1},
    });
    const jdata = await data.json();
    console.log(jdata.market_percentage);
    return jdata.market_percentage;
};


export default async function StockHeader({tickerID}) {
    const stock = getStock(tickerID);
    const market_price = getPrice(tickerID);
    const market_change = getChange(tickerID);
    const market_percentage = getPercentage(tickerID);
    return (
        <div id="header-container">
            <StockName stock={stock}/>
            <MarketPrice market_price={market_price}/>
            <MarketChange market_change={market_change}/>
            <MarketPercentage market_percentage={market_percentage}/>
        </div>
    )
}
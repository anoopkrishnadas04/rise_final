import { render } from 'react-dom';
import './StockTable.css'
import TableData from './TableData'


export const getKey = async (input, tickerID) => {
    const url = "http://127.0.0.1:5000/?stock=" + tickerID + "&table=TRUE"
    const data = await fetch(url, {
      next: { revalidate: 1},
    });
    const jdata = await data.json();
    console.log(jdata.table_arr[input].key)
    return jdata.table_arr[input].key;
};

export const getVal = async (input, tickerID) => {
    const url = "http://127.0.0.1:5000/?stock=" + tickerID + "&table=TRUE"
    const data = await fetch(url, {
      next: { revalidate: 1},
    });
    const jdata = await data.json();
    console.log(jdata.table_arr[input].val)
    return jdata.table_arr[input].val;
};

export default async function StockTable({tickerID}) {    
    const key0 = getKey(0,tickerID);
    const val0 = getVal(0,tickerID);
    const key1 = getKey(1,tickerID);
    const val1 = getVal(1,tickerID);
    const key2 = getKey(2,tickerID);
    const val2 = getVal(2,tickerID);
    const key3 = getKey(3,tickerID);
    const val3 = getVal(3,tickerID);
    const key4 = getKey(4,tickerID);
    const val4 = getVal(4,tickerID);
    const key5 = getKey(5,tickerID);
    const val5 = getVal(5,tickerID);
    const key6 = getKey(6,tickerID);
    const val6 = getVal(6,tickerID);
    const key7 = getKey(7,tickerID);
    const val7 = getVal(7,tickerID);
    const key8 = getKey(8,tickerID);
    const val8 = getVal(8,tickerID);
    const key9 = getKey(9,tickerID);
    const val9 = getVal(9,tickerID);
    const key10 = getKey(10, tickerID);
    const val10 = getVal(10, tickerID);
    const key11 = getKey(11, tickerID);
    const val11 = getVal(11, tickerID);
    const key12 = getKey(12, tickerID);
    const val12 = getVal(12, tickerID);
    const key13 = getKey(13, tickerID);
    const val13 = getVal(13, tickerID);
    const key14 = getKey(14, tickerID);
    const val14 = getVal(14, tickerID);
    const key15 = getKey(15, tickerID);
    const val15 = getVal(15, tickerID);

    return (
        <div id="table-container">
            <TableData keyData={key0} valData={val0}/>
            <TableData keyData={key1} valData={val1}/>
            <TableData keyData={key2} valData={val2}/>
            <TableData keyData={key3} valData={val3}/>
            <TableData keyData={key4} valData={val4}/>
            <TableData keyData={key5} valData={val5}/>
            <TableData keyData={key6} valData={val6}/>
            <TableData keyData={key7} valData={val7}/>
            <TableData keyData={key8} valData={val8}/>
            <TableData keyData={key9} valData={val9}/>
            <TableData keyData={key10} valData={val10}/>
            <TableData keyData={key11} valData={val11}/>
            <TableData keyData={key12} valData={val12}/>
            <TableData keyData={key13} valData={val13}/>
            <TableData keyData={key14} valData={val14}/>
            <TableData keyData={key15} valData={val15}/>
        </div>
    )
}
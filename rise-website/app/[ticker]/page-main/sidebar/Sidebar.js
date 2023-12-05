import { headers } from '@/next.config';
import './Sidebar.css'
import './SideStock'
import SideStock from './SideStock'

export const getHeading = async (tickerID, num) => {
    const url = "http://127.0.0.1:5000/?stock=" + tickerID;
    const data = await fetch(url, {
        next: { revalidate: 1},
      });
      const jdata = await data.json();
      console.log(jdata.news_arr[num].heading);
      return jdata.news_arr[num].heading;
  };

export const getLink = async (tickerID, num) => {
    const url = "http://127.0.0.1:5000/?stock=" + tickerID;
    const data = await fetch(url, {
        next: { revalidate: 1},
      });
      const jdata = await data.json();
      console.log(jdata.news_arr[num].link);
      return jdata.news_arr[num].link;
  };

export default function Sidebar({tickerID}) {
    const news0_heading = getHeading(tickerID, 0)
    const news0_link = getLink(tickerID, 0)
    const news1_heading = getHeading(tickerID, 1)
    const news1_link = getLink(tickerID, 1)
    
    return (
        <div id="sidebar-container">
            <h2>Associated News #1:</h2>
            <div id="News #1">
                <SideStock id="list-item-1" headingData={news0_heading} linkData={news0_link}/>
            </div>
            <h2>Associated News #2:</h2>
            <div id="News #2">
                <SideStock id="list-item-2" headingData={news1_heading} linkData={news1_link}/>
            </div>
        </div>
    )
}
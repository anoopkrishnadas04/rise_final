//import { useRouter } from 'next/router'
import PageMain from './page-main/PageMain'

export default function Home({params}) {
    //const {pathname} = useRouter();
    //console.log(pathname);
    return (
      <div style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        fontSize: "30px",
        fontWeight: "bold"
      }}>
        <PageMain tickerID={params.ticker}/>
        {/*<h1> {count} vs. {market_price}</h1>*/}
      </div>
    ) 
  }
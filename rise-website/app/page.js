export default function Home() {
  return (
    <div style={{
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      fontSize: "30px",
      fontWeight: "bold"
    }}>
      Hello! Please Type a Stock into Input to Begin.
      {/*<h1> {count} vs. {market_price}</h1>*/}
    </div>
  ) 
}

/*


export const getStock = async () => {
  const data = await fetch("http://127.0.0.1:5000/?stock=AAPL&graph=True&range=1d&table=True", {
    next: { revalidate: 5},
  });
  const jdata = await data.json();
  console.log(jdata.stock);
  return jdata.stock;
};

export default function Home() {
  const stock = getStock();
  return (
    <h1>My favorite stock is {stock}</h1>
  )
}
*/
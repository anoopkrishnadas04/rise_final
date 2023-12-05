export async function getStaticProps() {
    const data = await fetch("http://127.0.0.1:5000/?stock=AAPL&graph=True&range=1d&table=True");
    const jdata = await data.json();
    const interval = jdata.interval;
    return {
        props: { interval }
    }
}

export default function Interval({ interval }) {
    console.log(interval)
    return <p>
        {interval}
    </p>
}
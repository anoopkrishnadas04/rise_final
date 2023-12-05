import './TableData.css'

export default function TableData({keyData, valData}) {
    return (
        <div className="table-data-container">
            {keyData}: {valData}
        </div>
    )
}

function PropertyDetail({detail, value}) {

  return (
    <div className="characteristic">
        <span className="value">{value}</span>
        <span className="detail">{detail}</span>
    </div>
  )
}

export default PropertyDetail


function PropertyDetail({detail, value, style}) {

  return (
    <div className="characteristic">
        <span className="value" style={style}>{value}</span>
        <span className="detail">{detail}</span>
    </div>
  )
}

export default PropertyDetail

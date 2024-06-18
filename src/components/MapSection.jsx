
function MapSection() {

  return (
    <div className="mapContainer">
        <span className="objectLocated">Объект находится по адресу</span>
        <span className="objectAdress">Курганская обл., Кетовский муниципальный округ, с. Кетово, Заречная ул., 8</span>

        <div style={{ position: "relative", overflow: "hidden", width: "100%",  height: "400px" }}>
            <a
                href="https://yandex.com.ge/maps?utm_medium=mapframe&utm_source=maps"
                style={{ color: "#eee", fontSize: 12, position: "absolute", top: 0 }}
            >
                Яндекс&nbsp;Карты
            </a>
            <a
                href="https://yandex.com.ge/maps/11158/kurgan-oblast/house/zarechnaya_ulitsa_8/YkwYdQZlT0AGQFtvfX91d3RlYQ==/?ll=65.316573%2C55.346763&utm_medium=mapframe&utm_source=maps&z=18.01"
                style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}
            >
                Яндекс&nbsp;Карты — транспорт, навигация, поиск мест
            </a>
            <iframe
                src="https://yandex.com/map-widget/v1/?ll=65.316573%2C55.346763&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTg1NDAwOTY0EmjQoNC-0YHRgdC40Y8sINCa0YPRgNCz0LDQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDRgdC10LvQviDQmtC10YLQvtCy0L4sINCX0LDRgNC10YfQvdCw0Y8g0YPQu9C40YbQsCwgOCIKDZ2hgkIVMWNdQg%2C%2C&z=18.01"
                width={"100%"}
                height={400}
                allowFullScreen="true"
                style={{ position: "relative", border: "none" }}
            />
        </div>

    </div>
  )
}

export default MapSection

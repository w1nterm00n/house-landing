
function MapSection() {

  return (
    <div className="mapContainer">
        <p><a name="map"></a></p>
        <span className="objectLocated">Объект находится по адресу</span>
        <span className="objectAdress">Курганская обл., Кетовский муниципальный округ, с. Кетово, Заречная ул., 8а</span>

        <div style={{ position: "relative", overflow: "hidden", width: "100%",  height: "400px" }}>
            <div className='lightening'></div>
            <a
                href="https://yandex.com.ge/maps?utm_medium=mapframe&utm_source=maps"
                style={{ color: "#eee", fontSize: 12, position: "absolute", top: 0 }}
            >
                Яндекс&nbsp;Карты
            </a>
            <a
                href="https://yandex.com/maps/11158/kurgan-oblast/house/zarechnaya_ulitsa_8a/YkwYdQZmSEECQFtvfX91d3tgYw==/?from=mapframe&ll=65.316152%2C55.346875&source=mapframe&utm_medium=mapframe&utm_source=maps&z=19.2"
                style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}
            >
                Заречная улица, 8А - Яндекс&nbsp;Карты
            </a>
            <iframe
                src="https://yandex.com/map-widget/v1/?from=mapframe&ll=65.316152%2C55.346875&mode=whatshere&source=mapframe&utm_source=mapframe&whatshere%5Bpoint%5D=65.316102%2C55.346729&whatshere%5Bzoom%5D=17&z=19.2"
                width={"100%"}
                height={400}
                allowFullScreen="true"
                style={{ position: "relative", border: "none" }}
            />
        </div>


        {/* <div style={{ position: "relative", overflow: "hidden" }}>
            <a
                href="https://yandex.com/maps?utm_medium=mapframe&utm_source=maps"
                style={{ color: "#eee", fontSize: 12, position: "absolute", top: 0 }}
            >
                Yandex&nbsp;Maps
            </a>
            <a
                href="https://yandex.com/maps/11158/kurgan-oblast/house/zarechnaya_ulitsa_8a/YkwYdQZmSEECQFtvfX91d3tgYw==/?from=mapframe&ll=65.316152%2C55.346875&source=mapframe&utm_medium=mapframe&utm_source=maps&z=19.2"
                style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}
            >
                Zarechnaya ulitsa, 8А — Yandex&nbsp;Maps
            </a>
            <iframe
                src="https://yandex.com/map-widget/v1/?from=mapframe&ll=65.316152%2C55.346875&mode=whatshere&source=mapframe&utm_source=mapframe&whatshere%5Bpoint%5D=65.316102%2C55.346729&whatshere%5Bzoom%5D=17&z=19.2"
                width={560}
                height={400}
                frameBorder={1}
                allowFullScreen="true"
                style={{ position: "relative" }}
            />
        </div> */}



    </div>
  )
}

export default MapSection

const WeatherItem = (props) => {
  return (
    <div className="weatherItem">
      <h2>{props.weatherItem.stacja}</h2>
      <p>Temperatura: {props.weatherItem.temperatura} st. C.</p>
      <p>
        Ciśnienie:{" "}
        {props.weatherItem.cisnienie
          ? props.weatherItem.cisnienie + "hPa"
          : "brak danych"}{" "}
      </p>
      <p>Suma opadów: {props.weatherItem.suma_opadu} mm.</p>
      <p>Prędkość wiatru: {props.weatherItem.predkosc_wiatru} km/h</p>
    </div>
  );
};

export default WeatherItem;

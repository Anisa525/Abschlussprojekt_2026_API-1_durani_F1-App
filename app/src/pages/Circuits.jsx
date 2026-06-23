import "../styles/Circuits.css";

const circuits = [
  {
    name: "Monaco",
    country: "Monaco",
    image: "/circuits/monaco.jpg",
  },
  {
    name: "Silverstone",
    country: "Großbritannien",
    image: "/circuits/silverstone.jpg",
  },
  {
    name: "Spa-Francorchamps",
    country: "Belgien",
    image: "/circuits/spa.jpg",
  },
  {
    name: "Monza",
    country: "Italien",
    image: "/circuits/monza.jpg",
  },
  {
    name: "Suzuka",
    country: "Japan",
    image: "/circuits/suzuka.jpg",
  },
  {
    name: "Interlagos",
    country: "Brasilien",
    image: "/circuits/interlagos.jpg",
  },
];

function Circuits() {
  return (
    <div className="circuits-page">
      <h1 className="circuits-title">
        🏁 20 Beliebte F1 Strecken 🏁
      </h1>

      <p className="circuits-subtitle">
        Die bekanntesten Rennstrecken der Formel 1
      </p>

      <div className="circuits-grid">
        {circuits.map((circuit, index) => (
          <div className="circuit-card" key={index}>
            <span className="circuit-number">{index + 1}</span>

            <img
              src={circuit.image}
              alt={circuit.name}
              className="circuit-image"
            />

            <div className="circuit-info">
              <h3>{circuit.name}</h3>
              <p>{circuit.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Circuits;
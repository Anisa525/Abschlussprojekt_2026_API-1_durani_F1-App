import "../styles/Circuits.css";

const circuits = [
  "Monaco",
  "Silverstone",
  "Spa-Francorchamps",
  "Monza",
  "Suzuka",
  "Interlagos",
  "Circuit of the Americas",
  "Red Bull Ring",
  "Hungaroring",
  "Yas Marina",
  "Bahrain International Circuit",
  "Melbourne",
  "Imola",
  "Jeddah Corniche Circuit",
  "Miami International Autodrome",
  "Las Vegas Strip Circuit",
  "Shanghai International Circuit",
  "Zandvoort",
  "Singapore Marina Bay",
  "Circuit Gilles Villeneuve"
];

function Circuits() {
  return (
    <div className="circuits-page">
      <h1 className="circuits-title">🏎️ Beliebte F1-Strecken</h1>

      <div className="circuits-grid">
        {circuits.map((circuit, index) => (
          <div key={index} className="circuit-card">
            <div className="circuit-stripe"></div>
            <h2>{circuit}</h2>
            <p>Formel 1 Rennstrecke</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Circuits;
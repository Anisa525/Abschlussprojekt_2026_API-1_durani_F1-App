import "../styles/About_me.css";

const stats = [
  { label: "Favourite Team", value: "Red Bull Racing" },
  { label: "Favourite Driver", value: "Max Verstappen" },
  { label: "Favourite Circuit", value: "Spa-Francorchamps" },
  { label: "Seasons Watched", value: "8+" },
  { label: "Races Watched", value: "100+" },
  { label: "Passion Level", value: "∞" },
];

function AboutMe() {
  return (
    <div className="about-page">
      <h1 className="about-title">🏎️ About Me</h1>

      <p className="about-subtitle">
        A Formula 1 fan building a modern racing dashboard
      </p>

      {/* HERO */}
      <div className="about-hero">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="about-image"
        />

        <div className="about-text">
          <h2>Hey, I'm an F1 Enthusiast 🏁</h2>
          <p>
            I love Formula 1 because it's the perfect mix of speed, strategy,
            engineering and teamwork. This project is my way of building a
            modern F1 dashboard with stats, circuits and future live data.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="about-stats">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* MOTIVATION */}
      <div className="about-motivation">
        <h2>🔥 Why this project?</h2>
        <p>
          Formula 1 is not just a sport — it's precision engineering, split-second
          decisions and pure adrenaline. This website combines my passion for F1
          with web development skills to create something modern and interactive.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
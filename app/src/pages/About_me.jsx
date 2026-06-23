import "../styles/About_me.css";

const stats = [
  { label: "Favourite Team", value: "Red Bull Racing" },
  { label: "Favourite Driver", value: "Max Verstappen" },
  { label: "Favourite Circuit", value: "Spa-Francorchamps" },
  { label: "Seasons Watched", value: "8+" },
];

function AboutMe() {
  return (
    <div className="about-page">
      <h1 className="about-title">🏎️ About Me</h1>

      <p className="about-subtitle">
        A passionate Formula 1 fan building a modern F1 dashboard website
      </p>

      {/* HERO SECTION */}
      <div className="about-hero">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="about-image"
        />

        <div className="about-text">
          <h2>Hey, I'm a F1 Enthusiast 🏁</h2>
          <p>
            I created this website because I love Formula 1, racing strategy,
            and the thrill of high-speed competition.
            My goal is to build a clean, modern F1 dashboard with stats,
            circuits, and live data in the future.
          </p>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="about-stats">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* MOTIVATION SECTION */}
      <div className="about-motivation">
        <h2>🔥 Why this project?</h2>
        <p>
          Formula 1 is more than just racing – it's engineering, teamwork,
          strategy, and precision. This project helps me combine my passion
          for F1 with web development skills.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
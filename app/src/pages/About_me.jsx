import "../styles/About_me.css";

const stats = [
  { label: "Favourite Team", value: "MacLaren" },
  { label: "Favourite Driver", value: "Lando Norris" },
  { label: "Races Watched", value: "10" },
  { label: "Passion Level", value: "1" },
];

function AboutMe() {
  return (
    <div className="about-page">
      <h1 className="about-title">🏎️ About Me</h1>

      <p className="about-subtitle">
        Wilkommen zu meiner F1 Dashboard App!
      </p>

      {/* HERO */}
      <div className="about-hero">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="about-image"
        />

        <div className="about-text">
          <h2>Hey, </h2>
          <p>
            Ich habe sehr viele Freunde welche F1 Fans sind und ich wollte eine App erstellen, 
            die ihnen hilft, die neuesten Statistiken und Informationen über ihre Lieblingsfahrer und 
            Teams zu erhalten.
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
          Formel 1 ist eine der aufregendsten Sportarten der Welt, und ich wollte eine App erstellen, 
          die es den Fans ermöglicht, die neuesten Informationen über ihre Lieblingsfahrer und Teams zu erhalten. 
          Ich hoffe, dass diese App den Fans hilft, die F1 noch mehr zu genießen!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
import { useState } from "react";
import "./index.css";
import "./App.css";
import avatarMale from "./assets/images/avatar_male.png";
import data from "./data.json";

function App() {
  const [period, setPeriod] = useState("weekly");

  const periodLabels = {
    daily: "Yesterday",
    weekly: "Last Week",
  };

  return (
    <div className="app">
      <div className="dashboard">
        {/* Левая карточка профиля */}
        <aside className="profile-card">
          <div className="profile-top-block">
            <img src={avatarMale} alt="Avatar" className="avatar" />
            <div>
              <p className="profile-label">Report for</p>
              <h1 className="profile-name">
                Name <br /> Surname
              </h1>
            </div>
          </div>

          <div className="profile-bottom-block">
            <button
              className={`period-btn ${period === "daily" ? "active" : ""}`}
              onClick={() => setPeriod("daily")}
            >
              Daily
            </button>
            <button
              className={`period-btn ${period === "weekly" ? "active" : ""}`}
              onClick={() => setPeriod("weekly")}
            >
              Weekly
            </button>
          </div>
        </aside>

        {/* Карточки времени */}
        <section className="cards-grid">
          {data.map((item) => {
            const timeframe = item.timeframes[period];
            const current = timeframe.current;
            const previous = timeframe.previous;

            const typeClass = item.title.toLowerCase().replace(" ", "-");

            return (
              <article key={item.title} className={`time-card ${typeClass}`}>
                <div className="time-card-inner">
                  <header className="time-card-header">
                    <span className="time-card-title">{item.title}</span>
                    <span className="time-card-dots">...</span>
                  </header>
                  <div className="time-card-body">
                    <p className="time-card-hours">{current}hrs</p>
                    <p className="time-card-prev">
                      {periodLabels[period]} - {previous}hrs
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default App;

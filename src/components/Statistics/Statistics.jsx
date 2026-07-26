import React from 'react';
import './Statistics.css';

const Statistics = () => {
  const stats = [
    {
      id: 1,
      label: "Lorem ipsum",
      value: "123+",
      subtitle: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
    },
    {
      id: 2,
      label: "Lorem ipsum",
      value: "12+",
      subtitle: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
    },
    {
      id: 3,
      label: "Lorem ipsum",
      value: "12+",
      subtitle: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
    },
    {
      id: 4,
      label: "Lorem ipsum",
      value: "123",
      subtitle: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
    }
  ];

  return (
    <section className="statistics-section">
      <div className="statistics-container">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <span className="stat-label">{stat.label}</span>
            <h2 className="stat-value">{stat.value}</h2>
            <h3 className="stat-subtitle">{stat.subtitle}</h3>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;

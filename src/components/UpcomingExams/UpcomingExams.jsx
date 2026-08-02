
import React from 'react';
import './UpcomingExams.css';

const UpcomingExams = () => {
  const exams = [
    {
      date: '02th October 2014',
      level: 'Level 1 exam',
      subitems: []
    },
    {
      date: 'Nov-Dec 2016',
      level: 'Level 2',
      subitems: ['Lorem Ipsum', 'Lorem Ipsum']
    },
    {
      date: 'Ongoing this year',
      level: 'Level 3 (Grad)',
      subitems: []
    }
  ];

  return (
    <section className="upcoming-exams-section">
      <div className="upcoming-exams-container">
        <div className="upcoming-exams-left">
          <h2 className="upcoming-exams-title">Upcoming Examinations</h2>
          <p className="upcoming-exams-subtitle">Enquire about the examination & register for the exams</p>
        </div>

        <div className="upcoming-exams-divider" aria-hidden="true"></div>

        <div className="upcoming-exams-right">
          {exams.map((exam, index) => (
            <React.Fragment key={index}>
              <div className="exam-entry">
                <div className="exam-icon">
                  <img src="/Group 2645.svg" alt="Calendar" className="exam-calendar-icon" />
                  <img src="/Group 2647.svg" alt="Clock Hands" className="exam-clock-hands" />
                </div>
                <div className="exam-details">
                  <h3 className="exam-date">{exam.date}</h3>
                  <div className="exam-level">{exam.level}</div>
                  {exam.subitems.length > 0 && (
                    <div className="exam-subitems">
                      {exam.subitems.map((sub, sIdx) => (
                        <div className="exam-subitem" key={sIdx}>
                          <span className="exam-subitem-text">{sub}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {index < exams.length - 1 && (
                <div className="exam-column-divider"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingExams;
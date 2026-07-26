// import React from 'react';
// import './UpcomingExams.css';

// const UpcomingExams = () => {
//   const exams = [
//     {
//       date: '02th October 2014',
//       level: 'Level 1 exam'
//     },
//     {
//       date: 'Nov-Dec 2016',
//       level: 'Level 2 / Lorem Ipsum / Lorem Ipsum'
//     },
//     {
//       date: 'Ongoing this year',
//       level: 'Level 3 (Grad)'
//     }
//   ];

//   return (
//     <section className="upcoming-exams-section">
//       <div className="upcoming-exams-container">
//         <div className="upcoming-exams-left">
//           <h2 className="upcoming-exams-title">Upcoming Examinations</h2>
//           <p className="upcoming-exams-subtitle">Enquire about the examination & register for the exams</p>
//         </div>

//         <div className="upcoming-exams-divider" aria-hidden="true"></div>

//         <div className="upcoming-exams-right">
//           {exams.map((exam, index) => (
//             <div className="exam-entry" key={index}>
//               <div className="exam-icon">
//                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <circle cx="20" cy="20" r="20" fill="#E8F4F8"/>
//                   <path d="M26 14H14C12.8954 14 12 14.8954 12 16V26C12 27.1046 12.8954 28 14 28H26C27.1046 28 28 27.1046 28 26V16C28 14.8954 27.1046 14 26 14Z" stroke="#13406F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M22 12V16" stroke="#13406F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M18 12V16" stroke="#13406F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M12 20H28" stroke="#13406F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M16 24H16.01" stroke="#13406F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//               <div className="exam-details">
//                 <h3 className="exam-date">{exam.date}</h3>
//                 <p className="exam-level">{exam.level}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UpcomingExams;

import React from 'react';
import './UpcomingExams.css';

const UpcomingExams = () => {
  const exams = [
    {
      date: '02th October 2014',
      level: 'Level 1 exam'
    },
    {
      date: 'Nov-Dec 2016',
      level: 'Level 2 / Lorem Ipsum / Lorem Ipsum'
    },
    {
      date: 'Ongoing this year',
      level: 'Level 3 (Grad)'
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
            <div className="exam-entry" key={index}>
              <div className="exam-icon">
                <svg width="56" height="56" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26 14H14C12.8954 14 12 14.8954 12 16V26C12 27.1046 12.8954 28 14 28H26C27.1046 28 28 27.1046 28 26V16C28 14.8954 27.1046 14 26 14Z" stroke="#13406F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 12V16" stroke="#13406F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 12V16" stroke="#13406F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20H28" stroke="#13406F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 24H16.01" stroke="#13406F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="exam-details">
                <h3 className="exam-date">{exam.date}</h3>
                <p className="exam-level">{exam.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingExams;
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSlider from './components/HeroSlider/HeroSlider';
import UpcomingExams from './components/UpcomingExams/UpcomingExams';
import ExamCardSlider from './components/ExamCardSlider/ExamCardSlider';
import Statistics from './components/Statistics/Statistics';
import FAQ from './components/FAQ/FAQ';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSlider />
        <UpcomingExams />
        <ExamCardSlider />
        <Statistics />
        <FAQ />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}

export default App;

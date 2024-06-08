import Hero from './components/Hero/Hero';
import Home from './components/Home/Home';
import styles from './App.module.css';
import Features from './components/Features/Features';
import Testimonial from './components/Testimonial/Testimonial';

function App() {

  return (
    <>
      <div className={styles.App}>
        <Hero/>
        <Home/>
        <Features/>
        <Testimonial/>
      </div>
    </>
  )
}

export default App

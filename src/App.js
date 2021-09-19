import Header from './Header'
import Cards from './CardSection';
import SaveSection from './SaveSection';
import InternationalSection from './InternationalSection';
import image from './image2.jpg'
import image3 from './image4.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Cards/>
      <SaveSection heading="Save" subheading="now all your international and
                  domestic shipments for free to your
                  doorstep!"
                  para="
                  Subscribing to this service makes you a special customer as it allows you to benefit from many other services
                  For more details"
                  image={image}
      />
      <InternationalSection/>
      <SaveSection heading="Pioneering program for fresh graduates" image={image3}
                  para="
                  The Talent Development Department is pleased to announce the launch of a pioneering program for recent graduates in cooperation with the Misk Foundation.
                  The program aims to attract and attract the best promising competencies from recent graduates to qualify them through an intensive program that includes several practical activities with the aim of developing their skills and capabilities to support their professional growth and contribute to achieving the organization’s strategy and objectives."
                  />
    </div>
  );
}

export default App;

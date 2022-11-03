import './App.css';
import Countries from './component/Countries/Countries';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
//import './component/Header/Header.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

// function LoadCountry() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);

//   return (
//     <div>
//       <h1>Rest Countries API practice</h1>
//       <h1>{countries.length}</h1>
//       {countries.map((country) => (
//         <Country
//           name={country.name.common}
//           population={country.population}
//         ></Country>
//       ))}
//     </div>
//   );
// }

// function Country(props) {
//   return (
//     <div>
//       <h1>Name:{props.name}</h1>
//       <h3>Population:{props.population}</h3>
//     </div>
//   );
// }

export default App;

import './App.css';
import Cards from './components/Cards.jsx';
import characters, {Rick} from './data.js;';
import Nav from './components/Nav';
import axios from 'axios';



function App () {
  const [characters, setcharacters] = useState([]);

  function onSearch(id){
    axios('https://rickandmortyapi.com/api/character')
    .then(Response => Response.data)
    .then(({data})=>{
      if(data.name){
        setcharacters((oldChars)=> [...oldChars,data]);
      }else{
        window.alert('No hay personajes con este ID');
      }
      
    });
  }

  const onclose = (id) => {
    const charactersFiltered = characters.filter(characters=>characters.id !== Number(id))
    setcharacters(charactersFiltered)
  }

  

  return(
      <div className='App'>
          <Nav onSearch = {onSearch}/>
          <Cards characters = {characters} />
      </div>
  )
}
export default App;



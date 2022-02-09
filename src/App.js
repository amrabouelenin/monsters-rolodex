import logo from './logo.svg';
import react,  {Component} from 'react';
import './App.css';
import CardList from './components/card-list/CardList.js'
import SearchBox from './components/search-box/SearchBox';


class App extends Component {
  constructor(){
    super();
    
    this.state = {
     monsters: [

      ],
      searchField:''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }
  render() {
    
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          type='search'
          placeholder='Search monsters'
          handlechange={e => this.setState({searchField: e.target.value}, () => {console.log(this.state.searchField)})}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
        
      </div>
    );
  }
}
export default App;

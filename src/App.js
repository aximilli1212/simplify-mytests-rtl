import './styles/App.css';
// import Jumbotron from "./home/Jumbotron";
import Table from "./home/Table";

function App() {
  return (
    <div className="App">
      {/*<Jumbotron />*/}
        <Table employees={[{id: 1, name:"alice", department: "Moon", title: "off"}]} />
    </div>
  );
}

export default App;

import './styles/App.css';
// import Jumbotron from "./home/Jumbotron";
import Table from "./home/Table";
import Vote from "./pageActions/vote";

function App() {
  return (
    <div className="App">
      <Vote totalGlobalLikes={4} />
      {/*<Jumbotron />*/}
      {/*  <Table employees={[{id: 1, name:"alice", department: "Moon", title: "off"}]} />*/}
    </div>
  );
}

export default App;

import Card from './components/Card';
import SidePanel from './components/SidePanel';
import Header from './components/Header';


function App() {
  return <div className="wrapper">
    <SidePanel />

    <Header />

    <div className="content">

      <div className="search-sneakers-block">
        <h1>Все кроссовки</h1>
        <div>
          <img src="/img/search.svg" alt="Search Icon" />
          <input placeholder="Поиск..." />
        </div>
      </div>

      <div className="sneakers">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  </div>;
}

export default App;

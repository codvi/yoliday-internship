import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="flex max-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header className="hidden md:block" />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;

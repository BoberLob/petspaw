import Sidebar from '../sidebar/Sidebar';
import Home from '../home/Home';
import SearchPanel from '../searchPanel/SearchPanel';
import Voting from '../voting/Voting';

import './App.scss';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <main>
        {/* <Home /> */}
        <SearchPanel />
        <Voting />
      </main>
    </div>
  );
}

export default App;

import Header from './Header';
import LeftSidebar from './LeftSidebar';
import './App.css';
import RightSidebar from './RightSidebar';

function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="body-container">
        <LeftSidebar />
        <RightSidebar />
    </div>
    </div>
  );
}

export default App;
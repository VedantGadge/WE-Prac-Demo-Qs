import './App.css';
import SingleElement from './components/singleElement';
import MultiElement from './components/multiElement';
import StyledElement from './components/styledElement';
import Info from './components/info';

function App() {
  return (
    <div className="App">
      <SingleElement/>
      <MultiElement/>
      <StyledElement/>
      <Info/>
    </div>
  );
}
export default App;

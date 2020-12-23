
import './App.css';
import store from './functions/store/index';
import { useDispatch } from 'react-redux';
import {add} from './functions/actions';

function App() {
  console.log(store.getState())
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <span> Number </span> <br/>
            <div className="wrapper">
            <input type="button" value="Increment" className="btn"
            onClick={() => {
              dispatch(add())
            }}
             />
            <input type="button" value="Decrement" className="btn"/>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;

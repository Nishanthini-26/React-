import './App.css';
import { useState } from 'react';
import List from "./List";


function App() {

  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);


  const onChangehandler = e => {
    setCurrentItem(e.target.value);
  };

  const addItemsToList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem("")
  };
  return (
    <div>
      <h1 className="heading">MY TODO LIST</h1>
      <div className="App">
        <header className="App-header">

          <div className="wrapper">
            <div className="Input-wrapper">
              <input placeholder="Add item" value={currentItem} onChange={onChangehandler} />
              <button onClick={addItemsToList}>+</button>
            </div>
            <List itemList={itemList} updateItemList={updateItemList} />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;

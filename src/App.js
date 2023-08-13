import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

const App = () => {
      const [items, setItems] = useState(JSON.parse(localStorage.getItem('mark')));

      const [newItem, setNewItem] = useState('')

      const setAndSaveItems = (newItems) =>{
            setItems(newItems);
            localStorage.setItem('mark', JSON.stringify(newItems)); 
      }

      const addItem = (item) => {
            const id = items.length ? items[items.length - 1].id + 1 : 1;
            const myNewItem = {id, checked: false, item };
            const listItems = [...items, myNewItem];
            setAndSaveItems(listItems);
      }

      const handleCheck = (id) => {
        // console.log(`Key: ${id}`)
            const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
            // setItems(listItems);
            // localStorage.setItem('mark', JSON.stringify(listItems));
            setAndSaveItems(listItems); 
      }

      const handleDelete = (id) => {
            const listItems = items.filter((item) => item.id !== id);
            // setItems(listItems);
            // localStorage.setItem('mark', JSON.stringify(listItems));
            setAndSaveItems(listItems); 
      }

      const handleSubmit = (e) => {
            //e.preventDefault() is para ang mga blanko na form dili ma submit
            e.preventDefault();
            if(!newItem) return;
            console.log(newItem);
            //add a new item to defind!
            addItem(newItem);
            //gibalik nya sa walay value
            setNewItem('');
            
      }

  return (
    <div className="App">
      <Header title="" />
      <br />
      <AddItem 
            newItem={newItem}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit}
      />

      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;

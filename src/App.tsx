import { useEffect, useState } from "react";
import "./styles/Tailwind.css";
import "./styles/App.css";
import DragNDropPanel from "./components/DragNDropPanel";
import ItemInput from "./components/ItemInput";
import React from "react";

function App() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const storageItems = localStorage.getItem('dragItems');
    if (storageItems) {
      setItems(JSON.parse(storageItems));
    } else {
      console.error('No dragItems found in localStorage');
    }
    console.log(items);
    
  }, [])
  
  return (
    <>
      <ItemInput items={items} setItems={setItems} />
      <DragNDropPanel items={items} setItems={setItems}></DragNDropPanel>
    </>
  );
}

export default App;

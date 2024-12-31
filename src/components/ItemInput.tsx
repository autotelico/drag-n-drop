import React, { Dispatch, SetStateAction, useState } from "react";

export default function ItemInput({items, setItems}: {
  items: string[],
  setItems: (items: string[]) => void
}): React.ReactNode {
  const [currentItem, setCurrentItem] = useState("");

  const handleCreateItem = (newItem: string) => {
    const newItemList = items.concat(newItem)
    localStorage.setItem('dragItems', JSON.stringify(newItemList))
    setCurrentItem('');
    setItems(newItemList);
  }

  return (
    <>
      <input type="text" onChange={(e) => setCurrentItem(e.target.value)} value={currentItem} />
      <button type="button" onClick={() => handleCreateItem(currentItem)}>
        Create Item
      </button>
    </>
  );
}

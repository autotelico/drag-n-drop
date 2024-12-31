import React, { useEffect, useState } from "react";

export default function DragNDropPanel({items, setItems}): React.ReactNode {
  
  return (
    <div className="mx-auto w-[500px] h-[500px]">
      <h1 className="text-6xl text-center mt-5">Drag And Drop Panel</h1>
      <div
        id="container"
        className="flex gap-5 items-center justify-center p-3 border-dashed mx-auto border-4 border-black"
      >
        <Dragbox id="left" dragItems={items} />
        <Dragbox id="right" />
      </div>
    </div>
  );
}

/**
 * A box which you can drag items to.
 * @param {string} text Text that will be displayed
 * @returns {React.ReactNode}
 */
function Dragbox({
  id,
  dragItems,
}: {
  id: string;
  dragItems?: string[];
}): React.ReactNode {
  const handleDrag = (event) => {
    let item = event.target;
    const currentBox = item.parentElement.id;

    if (currentBox === "left") {
      const rightDragbox = document.querySelector("#right");
      rightDragbox?.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      rightDragbox?.addEventListener("drop", (e) => {
        rightDragbox.appendChild(item);
        item = null;
      });
    }
    
    if (currentBox === 'right') {
        const leftDragbox = document.querySelector("#left");
        leftDragbox?.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
  
        leftDragbox?.addEventListener("drop", (e) => {
          leftDragbox.appendChild(item);
          item = null;
        });
    }
  };

  return (
    <>
      <div
        id={id}
        className="flex flex-col gap-3 bg-pink-500 p-3 w-[200px] h-[500px]"
        onDragStart={(e) => handleDrag(e)}
      >
        {dragItems?.map((dragItem) => <DragItem key={dragItem} content={dragItem} />)}
      </div>
    </>
  );
}

function DragItem({content}: {
  content: string
}): React.ReactNode {
  return (
    <div draggable={true} className="bg-purple-500 p-2">
      {content}
    {/* Add trash icon here */}
    </div>
  )
}
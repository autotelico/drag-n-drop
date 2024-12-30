import React from "react";

export default function DragNDropPanel(): React.ReactNode {
    const dragItem1 = <div draggable={true} className="bg-purple-500 p-2">Item 1</div>
    const dragItem2 = <div draggable={true} className="bg-purple-500 p-2">Item 2</div>
    
  return (
    <div className="mx-auto w-[500px] h-[500px]">
      <h1 className="text-6xl text-center mt-5">Drag And Drop Panel</h1>
      <div
        id="container"
        className="flex gap-5 items-center justify-center p-3 border-dashed mx-auto border-4 border-black"
      >
        <Dragbox id="left" dragItems={[dragItem1, dragItem2]} />
        <Dragbox id="right" />
      </div>
    </div>
  );
}

/**
 * A rightDragbox which you can drag items to.
 * @param {string} text Text that will be displayed
 * @returns {React.ReactNode}
 */
function Dragbox({
  id,
  dragItems,
}: {
  id: string;
  dragItems?: React.ReactNode[];
}): React.ReactNode {

    const handleDragStart = event => {
        let item = event.target;
        const rightDragbox = document.querySelector('#right');
        rightDragbox?.addEventListener('dragover', e => {
            e.preventDefault();
        })

        rightDragbox?.addEventListener('drop', (e) => {
            rightDragbox.appendChild(item);
            item = null;
        })
    }
    
  return (
    <>
      <div
      id={id}
        className="flex flex-col gap-3 bg-pink-500 p-3 w-[200px] h-[500px]"
        onDragStart={e => handleDragStart(e)}
      >
        {dragItems?.map((dragItem) => dragItem)}
      </div>
    </>
  );
}

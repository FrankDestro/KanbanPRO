// src/components/KanbanBoard.tsx

import { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import Column from "../Column/Column";
import { KanbanData } from "../../types/KanbanTypes";
import { initialData } from "../../data/initialData"; // Dados iniciais

const KanbanBoard = () => {
  const [data, setData] = useState<KanbanData>(initialData);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      });

      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", gap: "10px"}}>
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          return (
            <Column key={column.id} column={column} tasks={data.tasks}/>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;

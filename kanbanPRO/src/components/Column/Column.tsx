import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "../TaskCard/TaskCard";
import type { Column, KanbanData } from "../../types/KanbanTypes";
import './Column.css';

interface ColumnProps {
  column: Column;
  tasks: KanbanData["tasks"];
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="droppable-container"
        >
          <h3>{column.title}</h3>
          {column.taskIds.map((taskId, index) => (
            <TaskCard
              key={taskId}
              taskId={taskId}
              index={index}
              title={tasks[taskId].title}
              content={tasks[taskId].content}
              data={tasks[taskId].data}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;

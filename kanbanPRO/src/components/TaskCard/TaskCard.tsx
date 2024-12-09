import { faBars, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import "./TaskCard.css";

interface TaskCardProps {
  taskId: string;
  index: number;
  title: string;
  content: string;
  data: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  taskId,
  index,
  title,
  content,
  data,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna a visibilidade do submenu
  };

  return (
    <Draggable draggableId={taskId} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="task-card"
        >
          <div className="task-card-container">
            <div className="task-card-header">
              <div className="task-card-title">{title}</div>
              <div
                className={`task-card-menu ${isMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faBars} />
                <div className="task-card-submenu">
                  <ul>
                    <li>Alterar cor</li>
                    <li>Outra opção</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="task-card-content">{content}</div>
            <div className="task-card-data">
              <span>Data inicial: {data}</span>
              <span>Data final: {data}</span>
              </div>
            <div className="task-card-details-icon">
              <FontAwesomeIcon icon={faEye} />
              <span>Show Details</span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;

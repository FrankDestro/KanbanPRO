// src/types/KanbanTypes.ts

export interface Task {
    id: string;
    title: string;
    content: string;
    data : string;
  }
  
  export interface Column {
    id: string;
    title: string;
    taskIds: string[]; // IDs das tarefas dessa coluna
  }
  
  export interface KanbanData {
    tasks: Record<string, Task>; // Chave é o id da tarefa
    columns: Record<string, Column>; // Chave é o id da coluna
    columnOrder: string[]; // Ordem das colunas
  }
  
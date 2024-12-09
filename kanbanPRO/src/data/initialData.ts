// src/data/initialData.ts
import { KanbanData } from "../types/KanbanTypes";

export const initialData: KanbanData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content:
        "Desenvolver a API para o módulo de autenticação, incluindo login, registro e recuperação de senha. Desenvolver a API para o módulo de autenticação, incluindo login, registro e recuperação de senha Desenvolver a API para o módulo de autenticação, incluindo login, registro e recuperação de senha",
      title: "Desenvolver API de Autenticação",
      data: "2024-12-05",
    },
    "task-2": {
      id: "task-2",
      content:
        "Concluir a integração com o sistema de pagamento. Realizar testes de transações e garantir a compatibilidade com diferentes métodos.",
      title: "Conclusão de Integração com Pagamento",
      data: "2024-12-07",
    },
    "task-3": {
      id: "task-3",
      content:
        "Realizar testes de implementação da nova funcionalidade de busca de produtos no e-commerce, incluindo testes de usabilidade.",
      title: "Testar Funcionalidade de Busca de Produtos",
      data: "2024-12-08",
    },
    "task-4": {
      id: "task-4",
      content:
        "Realizar otimizações de banco de dados para melhorar o tempo de resposta nas consultas e no carregamento de páginas.",
      title: "Otimizar Banco de Dados",
      data: "2024-12-06",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: ["task-3"],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-4"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

import { ReactNode } from "react";

export interface ITodoResponse {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export interface ITodo {
  todo: ITodoResponse;
  setIsCompleted: (id: number, completed: boolean) => void;
};

export interface ITodoContext {
  todos: ITodoResponse[];
  isLoading: boolean;
  getById: (id: number) => ITodoResponse | undefined;
  setIsCompleted: (id: number, completed: boolean) => void;
  errorLoading: boolean;
};

export interface IWithChildren {
  children?: ReactNode;
};
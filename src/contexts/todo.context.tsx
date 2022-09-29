import { createContext, FC, useCallback, useEffect, useState } from "react";
import { ITodoContext, ITodoResponse, IWithChildren } from "../types";

export const TodosContext = createContext<ITodoContext>({ todos: [], isLoading: true, getById: () => undefined, setIsCompleted: () => { } });

export const TodosProvider: FC<IWithChildren> = ({ children }) => {
    const [todos, setTodos] = useState<ITodoResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchTodos = async () => {
        setIsLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        setTodos(await res.json());
        setIsLoading(false);
    };

    const getById = (id: number) => todos.find((todo) => todo.id === id);
    const setIsCompleted = useCallback((id: number, completed: boolean) => setTodos((prev) => prev.map((todo) => id === todo.id ? { ...todo, completed } : todo)), []);

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <TodosContext.Provider value={{ todos, isLoading, getById, setIsCompleted }}>
            {children}
        </TodosContext.Provider>
    );
};
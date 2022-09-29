import { createContext, FC, useCallback, useEffect, useState } from "react";
import { ITodoContext, ITodoResponse, IWithChildren } from "../types";

export const TodosContext = createContext<ITodoContext>({ todos: [], isLoading: true, getById: () => undefined, setIsCompleted: () => { }, errorLoading: false });

export const TodosProvider: FC<IWithChildren> = ({ children }) => {
    const [todos, setTodos] = useState<ITodoResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorLoading, setErrorLoading] = useState(false);

    const fetchTodos = () => {
        setErrorLoading(false);
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                if (res.status >= 200 && res.status < 300) return res.json();
                throw Error();
            })
            .then((todos) => setTodos(todos))
            .catch((e) => setErrorLoading(true))
            .finally(() => setIsLoading(false));
    };

    const getById = (id: number) => todos.find((todo) => todo.id === id);
    const setIsCompleted = useCallback((id: number, completed: boolean) => setTodos((prev) => prev.map((todo) => id === todo.id ? { ...todo, completed } : todo)), []);

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <TodosContext.Provider value={{ todos, isLoading, getById, setIsCompleted, errorLoading }}>
            {children}
        </TodosContext.Provider>
    );
};
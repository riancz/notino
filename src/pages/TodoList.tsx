import { useContext } from 'react';
import styled from 'styled-components';
import Page from './page.template';
import Todo from '../components/Todo';
import { TodosContext } from '../contexts/todo.context';

const TodoList = () => {
  const { todos, setIsCompleted } = useContext(TodosContext);

  return (
    <Page title='Your ToDo List' backButton={false}>
      <Todos>
        {todos.map((todo) => (
          <Todo todo={todo} setIsCompleted={setIsCompleted} key={todo.id} />
        ))}
      </Todos>
    </Page>
  );
};

const Todos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export default TodoList;
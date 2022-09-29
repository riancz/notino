import { ChangeEventHandler, useContext } from "react";
import { useParams } from "react-router-dom";
import Page from "./page.template";
import { TodosContext } from "../contexts/todo.context";
import styled from "styled-components";

const TodoDetail = () => {
  let { id: pId } = useParams();
  const { getById, setIsCompleted } = useContext(TodosContext);

  const todo = getById(Number(pId))
  if (!todo) return (
    <Page title={`ToDo ID: ${pId}`}>
      <p>Sorry but such ToDo is not in our database</p>
    </Page>);

  const { title, id, completed, userId } = todo;
  const todoTitle = `ToDo: ${title}`;

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsCompleted(id, e.target.checked);
  };

  return (
    <Page title={todoTitle}>
      <table>
        <tbody>
          <tr>
            <Heading>
              Title:
            </Heading>
            <td>
              {title}
            </td>
          </tr>
          <tr>
            <Heading>
              Todo ID:
            </Heading>
            <td>
              {id}
            </td>
          </tr>
          <tr>
            <Heading>
              Author ID:
            </Heading>
            <td>
              {userId}
            </td>
          </tr>
          <tr>
            <Heading>
              Completed:
            </Heading>
            <td>
              <input type='checkbox' checked={completed} onChange={handleOnChange} />
            </td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
};

const Heading = styled.td`
  padding-right: 20px;
  font-weight: 800;
`;

export default TodoDetail;
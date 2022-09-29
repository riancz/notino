import { ChangeEventHandler, FC, memo, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ITodo } from "../types";

const Todo: FC<ITodo> = ({ todo: { title, id, completed }, setIsCompleted }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/todo/${id}`);
  };

  const stopPropagation: MouseEventHandler = (e) => {
    e.stopPropagation();
  };

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsCompleted(id, e.target.checked);
  };

  return (
    <TodoWrapper onClick={handleOnClick}>
      <Checkbox type='checkbox' checked={completed} onChange={handleOnChange} onClick={stopPropagation} />
      {title}
    </TodoWrapper >
  );
};

const TodoWrapper = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 3px;
  background-color: #dce3e4;
  margin-bottom: 5px;
  align-self: flex-start;
  cursor: pointer;

  &:hover {
  background-color: #c5d7da;
  }
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const shouldntRerender = (prevProps: ITodo, props: ITodo) => {
  if (props.todo.completed === prevProps.todo.completed) {
    return true;
  }
  return false;
};

export default memo(Todo, shouldntRerender);
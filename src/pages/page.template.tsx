import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TodosContext } from "../contexts/todo.context";

interface IPage {
  title: string;
  backButton?: boolean;
  children?: ReactNode;
};

const Page: React.FC<IPage> = ({ title, backButton = true, children }) => {
  const { isLoading, errorLoading } = useContext(TodosContext);

  if (errorLoading) return <Centering>Sorry but we were not able to load your ToDos</Centering>;

  return isLoading ? (
    <Centering>Loading...</Centering>
  ) : (
    <PageWrapper>
      <header>
        <H1>{title}</H1>
        {backButton && <StyledLink to='/'>← Go back to all</StyledLink>}
      </header>
      <main>
        {children}
      </main>
    </PageWrapper>
  );
};

const Centering = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const PageWrapper = styled.div`
  padding: 20px;
`;

const H1 = styled.h1`
  margin: 0 0 15px 0;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  color: #0b90a5;
  text-decoration: none;
  margin-bottom: 15px;
`;

export default Page;
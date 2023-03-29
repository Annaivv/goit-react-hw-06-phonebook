import '../index.css';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <h2>Contacts</h2>
      <GlobalStyle />
    </Layout>
  );
};

import './App.css';

import { Text } from './components';

const Emphasis = ({ children }: { children: React.ReactText }) => {
  return (
    <em style={{ background: 'yellow', color: 'black', fontSize: '40px' }}>
      {children}
    </em>
  );
};

function App() {
  return (
    <div>
      <h1>Hello Polymorphic Component</h1>
      <Text as="h1">H1 Component</Text>
      <Text as="h2" color="red">
        H2 Component
      </Text>
      <Text as="p">Paragraph Component</Text>
      <Text as="a" href="hihi">
        a tag Component
      </Text>
      <Text as={Emphasis}>This is important You are awesome!</Text>
    </div>
  );
}

export default App;

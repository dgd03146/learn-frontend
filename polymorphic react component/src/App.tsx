import './App.css';

import { Text } from './components';

function App() {
  return (
    <div>
      <h1>Hello Polymorphic Component</h1>
      <Text as="h1">H1 Component</Text>
      <Text as="h2" href="hihi">
        H2 Component
      </Text>
      <Text as="p">Paragraph Component</Text>
      <Text as="a" href="hihi">
        Span Component
      </Text>
    </div>
  );
}

export default App;

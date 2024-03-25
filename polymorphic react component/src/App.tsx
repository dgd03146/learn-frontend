import './App.css';

import { Text } from './components';
import { useRef } from 'react';

const Emphasis = ({ children }: { children: React.ReactNode }) => {
  return (
    <em style={{ background: 'yellow', color: 'black', fontSize: '40px' }}>
      {children}
    </em>
  );
};

function App() {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const ref2 = useRef<HTMLHeadingElement | null>(null);

  return (
    <div>
      <h1>Hello Polymorphic Component</h1>
      <Text as="h1" ref={ref}>
        H1 Component
      </Text>
      <Text as="h2" ref={ref2} color="orange" style={{ color: 'black' }}>
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

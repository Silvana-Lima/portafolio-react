import { useState } from 'react'
import { AppLayout } from './layouts/AppLayout'
import { Hello } from './modules/Hello';
import { MyKnowledges } from './modules/MyKnowledges';

function App() {
  const [hello, setHello] = useState(true)

  return (
    <>
      <AppLayout hello={hello} setHello={setHello}>
        {hello ? <Hello /> : <MyKnowledges />}
      </AppLayout>
    </>
  );
}

export default App

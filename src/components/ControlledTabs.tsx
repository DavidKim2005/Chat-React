import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Main from './Main';
import Create from './Create';

function ControlledTabsExample() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Main" title="Main">
        <p className='font-weight-bolder fs-3'>You're on main page</p> <Main />
      </Tab>
      <Tab eventKey="Create" title="Create">
      <p className='font-weight-bolder fs-3'>Share your thoughts</p> <Create />
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;
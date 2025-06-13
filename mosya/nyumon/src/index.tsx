import React from 'react';
import ReactDOM from 'react-dom/client';
import DefaultApp from './App';
import {Card} from './components/Card'
import {Card2} from './components/Card2'
import { FooButton } from './components/FooButton';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <DefaultApp />
    <Card title="カードのタイトル" bgColor="red"></Card>
    <Card2 title="あいうえお" bgColor="blue">
        <FooButton buttonName='FooButtonです' />
    </Card2>
  </>
);

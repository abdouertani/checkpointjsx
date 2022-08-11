import React from 'react';
import ReactDOM from 'react-dom/client';
import Padress from './component/Profile/Adress';
import Pimage from './component/Profile/ProfilePhoto';
import Pname from './component/Profile/FullName';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div className='app'>
<div className='body'>
<Pimage/>
<Padress />
<Pname/>
</div>
</div>
)
;

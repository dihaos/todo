import * as React from 'react';
import Main from './Main';
import Sidebar from './Sidebar';

const App = () => {
    return (
        <div className='app'>
            <Sidebar />
            <Main/>
        </div>
    );
}

export default App;
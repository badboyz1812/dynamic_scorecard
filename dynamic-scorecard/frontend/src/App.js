import React from 'react';
import DataInput from './components/DataInput';
import Visualization from './components/Visualization';

const App = () => {
    return (
        <div>
            <h1>Dynamic Scorecard</h1>
            <DataInput />
            <Visualization />
        </div>
    );
};

export default App;
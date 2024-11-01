import React from 'react';
import TipsForm from './components/Tips.form';

type Application = React.FC;

const App: Application = () => {

    return (
        <main
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#f2f2f2'
            }}
        >
            <TipsForm />
        </main>
    );
};

export default App;
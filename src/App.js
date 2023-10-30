import React, {StrictMode, useState} from 'react';
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import "/src/styles/main.sass"

function App() {
    const [activeModal, setActiveModal] = useState(false);
    return (
        <StrictMode>
            <div className="App">
                <Form/>
                <Modal active={activeModal} setActive={setActiveModal}/>
                <button className="openBtn" onClick={()=>setActiveModal(true)}>Open modal</button>
            </div>
        </StrictMode>
    );
}

export default App;
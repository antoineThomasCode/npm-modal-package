import React, {useState} from "react";
import { storiesOf } from "@storybook/react";

import  Modal  from "../components/Modal/Modal";

const stories = storiesOf('Modal', module)

stories.add('App', () => {

    const [isDisplayed, setModalDisplay]  = useState(false);

    function openModal (e) {
        e.preventDefault()
        setModalDisplay(true)
    }

    return (
        <div className="App">
            {!isDisplayed ? (<button onClick={(e) => openModal(e)}>Display modale</button>) : null}
            {isDisplayed ? (<Modal setModalState={setModalDisplay} title={'Je suis une modal'}>
                <p>Avec un paragraphe</p>
            </Modal>) : null}
        </div>
    );
})
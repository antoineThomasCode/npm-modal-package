import React, {useEffect} from "react";
import './Modal.css'

function Modal  ({children, setModalState, title, animation = true, closeAccessibility = true}) {

    function handleCloseModal (e) {
      e.preventDefault()
      setModalState(false)
    }
    const closeOnEscape = (e) => {
        if (!closeAccessibility) return
        if ((e.charcode || e.keyCode) === 27) {
          handleCloseModal(e);
        }
    };
    
    useEffect(() => {
      document.body.addEventListener("keydown", closeOnEscape);
      return function cleanup() {
        document.body.removeEventListener("keydown", closeOnEscape);
      };
    }, []);
    return (
        <div className="modal-container">
            <div className={`modal-content + ${animation ? ('animation-modal'): null}`}>
              <button className="modal-close" onClick={(e) => handleCloseModal(e)}>✕</button>
              {title && (<h2>{title}</h2>)}
              {children}
            </div>
        </div>
    )
}
export default Modal
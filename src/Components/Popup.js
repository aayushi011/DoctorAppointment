// import { Button, Modal } from "bootstrap";
import { Modal, Button } from 'react-bootstrap';

const Popup =({show,handleClose,text})=>{
    return(
        <Modal show ={show} onHide = {handleClose}>
            <Modal.Body>
                <p>You have {text} Successfully</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick = {handleClose}>OK</Button>
                <Button variant="primary" onClick = {handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default Popup;
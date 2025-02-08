import { useState } from 'react';
import DoctorModal from './DoctorModal';
import { Button } from 'react-bootstrap';

const Doctor = () =>{
    const [show,setShow] = useState(false);
    const handleClick = () =>{
        setShow(true);
    }
    const handleClose = () => setShow(false);
    return(
        <div>
            <Button onClick={handleClick}> Doctor </Button>
            <DoctorModal show = {show} handleClose = {handleClose}/>
        </div>
    )
}
export default Doctor;
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ApointBook = ({show}) =>{
    const [patientDetails,setPatitentDetails] = useState({
        'patientName':'',
        'patientMobileNo':'',
        'describeHealtIsuue':'',
        'prefferedTime':''
    });

    const handleBooking = () =>{
        
    }

    const handleChange =(event)=>{
        setPatitentDetails({...patientDetails,
            [event.target.name] : event.target.value
        }
        )
    }
    const handleClose =() =>{}
    const handleSubmit =() =>{}
        return (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Doctor</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="DoctorName">
                    <Form.Label>Patient Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="patientName"
                      value={patientDetails.patientName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {/* <p class="text-danger">{error.DoctorName}</p> */}
        
                  <Form.Group controlId="specialization">
                    <Form.Label>Patient Contact Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="patientMobileNo"
                      value={patientDetails.patientMobileNo}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {/* <p class="text-danger">{error.specialization}</p> */}
        
                  <Form.Group controlId="category">
                    <Form.Label>Description Health Issue</Form.Label>
                    <Form.Control
                      type="text"
                      name="describeHealtIsuue"
                      value={patientDetails.describeHealtIsuue}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {/* <p class="text-danger">{error.category}</p> */}
        
                  <Form.Group controlId="contact">
                    <Form.Label>Preffered Time</Form.Label>
                    <Form.Control
                      type="text"
                      name="contact"
                      value={patientDetails.prefferedTime}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {/* <p class="text-danger">{error.contact}</p> */}
        
                  <Button variant="primary" type="submit" onClick={handleBooking}>
                    Book Now
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          );
}

export default ApointBook;
import { Modal, Button, Form } from 'react-bootstrap';
import {useState} from 'react';
import {AddDoctorApicall} from './ApiCall';

const DoctorModal = ({show,handleClose}) =>{
    const [doctorData, setDoctorData] = useState({
        'DoctorName': '',
        'specialization': '',
        'category': '',
        'contact': '',
        'availableSlots': {
          'morning': '',
          'evening': ''
        },
        'Country': '',
        'State': '',
        'Location': '',
        'area': '',
        'offday': [],
        'rating': ''
});

const [error,setError] = useState(
    {
        'DoctorName': '',
        'specialization': '',
        'category': '',
        'contact': '',
        'availableSlots': {
          'morning': '',
          'evening': ''
        },
        'Country': '',
        'State': '',
        'Location': '',
        'area': '',
        'offday': [],
        'rating': ''
}
);

let isDataValid = false;

const validateData =(doctorData)=>{
    const requiredFields = Object.keys(doctorData); // Get the keys of the doctorData object

    requiredFields.forEach((field) => {
        if (doctorData[field] === '' || (field === 'offday' && doctorData[field].length === 0)) {
            error[field] = `Enter valid ${field}`;
            isDataValid = true;
        } else if (field === 'availableSlots') {
            // Check nested availableSlots
            Object.keys(doctorData.availableSlots).forEach((slot) => {
                if (doctorData.availableSlots[slot] === '') {
                    error[`availableSlots.${slot}`] = `Enter valid ${slot}`;
                    isDataValid = true;
                }
            });
        }
    });
    return error;
}

const handleSubmit =(event)=>{
    event.preventDefault();
    validateData(doctorData);
    if(isDataValid){
        setError(error);
        console.log("error",error);
    }
    else{
        AddDoctorApicall(doctorData)
        .then(()=>{
            console.log("Api called Successfully");
        });
    }

}
const handleChange = (event) => {
    const { name, value } = event.target;
    setDoctorData((prevData) => ({
      ...prevData,
      [name]: value
    }));
};
const handleAvailableSlotsChange =(event)=>{
    setDoctorData((prevData) => ({
        ...prevData,
        availableSlots: {
          ...prevData.availableSlots,
          [event.target.name]: event.target.value
        }
      }));
}
const handleOffdayChange =(event) =>{
    setDoctorData((prevData) => ({
        ...prevData,
        offday: event.target.value.split(',')
      }));
}
    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Doctor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="DoctorName">
                <Form.Label>Doctor Name</Form.Label>
                <Form.Control
                  type="text"
                  name="DoctorName"
                  value={doctorData.DoctorName}
                  onChange={handleChange}
                />
              </Form.Group>
              <p class="text-danger">{error.DoctorName}</p>
    
              <Form.Group controlId="specialization">
                <Form.Label>Specialization</Form.Label>
                <Form.Control
                  type="text"
                  name="specialization"
                  value={doctorData.specialization}
                  onChange={handleChange}
                />
              </Form.Group>
              <p class="text-danger">{error.specialization}</p>
    
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={doctorData.category}
                  onChange={handleChange}
                />
              </Form.Group>
              <p class="text-danger">{error.category}</p>
    
              <Form.Group controlId="contact">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  name="contact"
                  value={doctorData.contact}
                  onChange={handleChange}
                />
              </Form.Group>
              <p class="text-danger">{error.contact}</p>
    
              <Form.Group controlId="availableSlotsMorning">
                <Form.Label>Available Slots (Morning)</Form.Label>
                <Form.Control
                  type="text"
                  name="morning"
                  value={doctorData.availableSlots.morning}
                  onChange={handleAvailableSlotsChange}
                />
              </Form.Group>
              <p class="text-danger">{error.availableSlots.morning}</p>
    
              <Form.Group controlId="availableSlotsEvening">
                <Form.Label>Available Slots (Evening)</Form.Label>
                <Form.Control
                  type="text"
                  name="evening"
                  value={doctorData.availableSlots.evening}
                  onChange={handleAvailableSlotsChange}
                />
              </Form.Group>
              <p class="text-danger">{error.availableSlots.evening}</p>
    
              <Form.Group controlId="Country">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="Country"
                  value={doctorData.Country}
                  onChange={handleChange}
                />
              </Form.Group>
              <p class="text-danger">{error.Country}</p>
    
              <Form.Group controlId="State">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="State"
                  value={doctorData.State}
                  onChange={handleChange}
                />
              </Form.Group>
              <p class="text-danger">{error.State}</p>
    
              <Form.Group controlId="Location">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="Location"
                  value={doctorData.Location}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <p class="text-danger">{error.Location}</p>
    
              <Form.Group controlId="area">
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  name="area"
                  value={doctorData.area}
                  onChange={handleChange}
                />
              </Form.Group>
              <p class="text-danger">{error.area}</p>
    
              <Form.Group controlId="offday">
                <Form.Label>Off Day</Form.Label>
                <Form.Control
                  type="text"
                  name="offday"
                  value={doctorData.offday.join(',')}
                  onChange={handleOffdayChange}
                  placeholder="Enter off days separated by commas"
                />
              </Form.Group>
              <p class="text-danger">{error.offday}</p>
    
              <Form.Group controlId="rating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="text"
                  name="rating"
                  value={doctorData.rating}
                  onChange={handleChange}
                />
              </Form.Group>
              <p class="text-danger">{error.rating}</p>
    
              <Button variant="primary" type="submit" onClick={AddDoctorApicall}>
                Add Doctor
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      );
}

export default DoctorModal


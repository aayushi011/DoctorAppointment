import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from 'react-bootstrap';

const GetDoctorList = () =>{

    const [GetDoctorData,setGetDoctorData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const GetDoctorListApiCall = await axios("http://localhost:3001/allDoctors");
            if(!(GetDoctorListApiCall.status === 200)){
                throw new Error('There is Error somewhere');
            }
            const resdata = await GetDoctorListApiCall.data;
            console.log("resdata",resdata);
            return resdata;
        }
        fetchData().then((Data)=>{
            console.log("Data",Data);
            setGetDoctorData(Data.data);
        })
    },[])

   return(
    <div>
        {console.log("GetDoctorData",GetDoctorData)}
        {
            GetDoctorData.map((ListOfGetDoctorData)=>{
                return(
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Dr. {ListOfGetDoctorData.DoctorName}</Card.Title>
                            <Card.Text>
                                <h5>{ListOfGetDoctorData.specialization}</h5>
                                <h6>{ListOfGetDoctorData.category}</h6>
                                <small>{ListOfGetDoctorData.area}, {ListOfGetDoctorData.Location}, 
                                 {ListOfGetDoctorData.State}                                    
                                </small>
                                <hr></hr>
                                <small><div><b>Morning : </b>{ListOfGetDoctorData.availableSlots.morning}</div>
                                       <div><b>Evening : </b>{ListOfGetDoctorData.availableSlots.evening}</div>
                                       <div>
                                       <b>Offday : </b>{ListOfGetDoctorData.offday}
                                       </div>
                                </small>
                                <hr></hr>
                                <Button>Book Appointment</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
        }
    </div>
   )
}

export default GetDoctorList;
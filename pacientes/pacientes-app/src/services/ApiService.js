import axios from 'axios';

export function getPatient() {
    return axios.get('http://127.0.0.1:8000/patient/').then(res => {
        return res.data
})}

export function addPatient(patient) {
    return axios.post('http://127.0.0.1:8000/patient/'),
    
}

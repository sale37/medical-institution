import Doctor from './Doctor.js';

class Patient{
    constructor(firstName, lastName, jmbg, medicalRecordNum){
        console.log('Creating patient...')
        this.firstName = firstName;
        this.lastName = lastName;
        this.jmbg = jmbg;
        this.medicalRecordNum = medicalRecordNum;
        this.doctor;
    }

    setDoctor(doctor){
        this.doctor = doctor;
        doctor.addPatient(this);
    }
}

export default Patient;

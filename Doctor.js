import LaboratoryExamination from './LaboratoryExamination.js';
import BloodPressure from './BloodPressure.js';
import BloodSugar from './BloodSugar.js';
import BloodCholesterol from './BloodCholesterol.js';
import Patient from './Patient.js';
import Logger from './Logger.js';
const logger = new Logger;

class Doctor{
    constructor(firstName, lastName, speciality){
        this.firstName = firstName;
        this.lastName = lastName;
        this.speciality = speciality;
        this.patients = [];
        this.sheduledExaminations = [];
        logger.log('Created Doctor ' + this.firstName + ' ' + this.lastName);
    }
    
    getName(){
        return this.firstName;
    }

    schedulingExamination(labExamination){
        this.sheduledExaminations.push(labExamination);
        logger.schedulingExamination(labExamination);
    }

    addPatient(patient){
        this.patients.push(patient);
    }
}


export default Doctor;
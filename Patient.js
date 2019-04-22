import Doctor from './Doctor.js';
import LaboratoryExamination from './LaboratoryExamination.js';
import BloodPressure from './BloodPressure.js';
import BloodSugar from './BloodSugar.js';
import BloodCholesterol from './BloodCholesterol.js';
import Logger from './Logger.js';
const logger = new Logger;

class Patient{
    constructor(firstName, lastName, jmbg, medicalRecordNum){
        this.firstName = firstName;
        this.lastName = lastName;
        this.jmbg = jmbg;
        this.medicalRecordNum = medicalRecordNum;
        this.doctor;
        this.examinationResults = [];
        logger.log('Created patient ' + this.firstName + ' ' + this.lastName);
    }

    setDoctor(doctor){
        this.doctor = doctor;
        doctor.addPatient(this);
        logger.log('Patient ' + this.firstName + ' ' + this.lastName + ' is choosing ' +
        doctor.firstName + ' ' + doctor.lastName + ' for his doctor');
    }

    performExamination(labExamination){
        if(labExamination instanceof BloodPressure){
            labExamination.generateResults(labExamination);
            this.examinationResults.push(labExamination);
            removeExamination(labExamination);
            logger.performingExamination(labExamination);
    
        }else if(labExamination instanceof BloodSugar){
            labExamination.generateResults(labExamination);
            this.examinationResults.push(labExamination);
            removeExamination(labExamination);
            logger.performingExamination(labExamination);

        }else if(labExamination instanceof BloodCholesterol){
            labExamination.generateResults(labExamination);
            this.examinationResults.push(labExamination);
            removeExamination(labExamination);
            logger.performingExamination(labExamination);
        }
    }
}

function removeExamination(labExamination){
    for( var i = 0; i < labExamination.patient.doctor.sheduledExaminations.length; i++){ 
        if ( labExamination.patient.doctor.sheduledExaminations[i] === labExamination) {
            labExamination.patient.doctor.sheduledExaminations.splice(i, 1); 
        }
     }
}

export default Patient;

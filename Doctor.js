import LaboratoryExamination from './LaboratoryExamination.js';
import BloodPressure from './BloodPressure.js';
import BloodSugar from './BloodSugar.js';
import BloodCholesterol from './BloodCholesterol.js';

class Doctor{
    constructor(firstName, lastName, speciality){
        console.log('Creating doctor...')
        this.firstName = firstName;
        this.lastName = lastName;
        this.speciality = speciality;
        this.patients = [];
        this.sheduledExaminations = [];
        this.examinationResults = [];
    }
    
    getName(){
        return this.firstName;
    }

    schedulingExamination(labExamination){
        this.sheduledExaminations.push(labExamination);
    }

    performExamination(labExamination){
        if(labExamination instanceof BloodPressure){
            labExamination.generateResults(labExamination);
            this.examinationResults.push(labExamination);

            for( var i = 0; i < this.sheduledExaminations.length; i++){ 
                if ( this.sheduledExaminations[i] === labExamination) {
                  this.sheduledExaminations.splice(i, 1); 
                }
             }
    
        }else if(labExamination instanceof BloodSugar){
            labExamination.generateResults(labExamination);
            this.examinationResults.push(labExamination);

            for( var i = 0; i < this.sheduledExaminations.length; i++){ 
                if ( this.sheduledExaminations[i] === labExamination) {
                  this.sheduledExaminations.splice(i, 1); 
                }
             }
        }else if(labExamination instanceof BloodCholesterol){
            labExamination.generateResults(labExamination);
            this.examinationResults.push(labExamination);

            for( var i = 0; i < this.sheduledExaminations.length; i++){ 
                if ( this.sheduledExaminations[i] === labExamination) {
                  this.sheduledExaminations.splice(i, 1); 
                }
             }
        }
    }

    addPatient(patient){
        this.patients.push(patient);
    }
}

export default Doctor;
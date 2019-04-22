import LaboratoryExamination from './LaboratoryExamination.js';

class BloodSugar extends LaboratoryExamination{
    constructor(dateAndTime, patient){
        super(dateAndTime, patient);
        this.value;
        this.timeOfLastMeal;
    }

    generateResults(sheduledExamination){
        sheduledExamination.dateAndTime = new Date();
        sheduledExamination.value = 9;
        sheduledExamination.timeOfLastMeal = new Date('April 22, 2019 03:24:00').toLocaleString();
    }
}



export default BloodSugar;
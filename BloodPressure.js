import LaboratoryExamination from './LaboratoryExamination.js';

class BloodPressure extends LaboratoryExamination{
    constructor(dateAndTime, patient){
        super(dateAndTime, patient);
        this.upperValue;
        this.lowerValue;
        this.heartRate;
    }

    generateResults(sheduledExamination){
        sheduledExamination.dateAndTime = new Date();
        sheduledExamination.upperValue = 140;
        sheduledExamination.lowerValue = 80;
        sheduledExamination.heartRate = 95;
    }
}

export default BloodPressure;
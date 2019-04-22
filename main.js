import Patient from './Patient.js';
import Doctor from './Doctor.js';
import BloodSugar from './BloodSugar.js'
import BloodPressure from './BloodPressure.js';


function formatedDate(){
    const date = new Date();
    return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() +
    ' ' + date.getHours() + ':' + date.getMinutes();
}


const doctor = new Doctor('Milan', 'Ilic', 'Internista');
console.log(formatedDate() + ' Created Doctor ' + doctor.firstName + ' ' + doctor.lastName);
const patient = new Patient('Dragan', 'Peric', '0103994020394', 105);
console.log(formatedDate() + ' Created patient ' + patient.firstName + ' ' + patient.lastName);

// Pacijent bira Milana za svog doktora i Dragan postaje Milanov pacijent.
patient.setDoctor(doctor);
console.log(formatedDate() + ' Patient ' + patient.firstName + ' ' + patient.lastName + ' is choosing ' +
doctor.firstName + ' ' + doctor.lastName + ' for his doctor')
// Doktor zakazuje preglede
const labExamination1 = new BloodPressure(formatedDate(), patient);
const labExamination2 = new BloodSugar(formatedDate(), patient);

doctor.schedulingExamination(labExamination1);
console.log(formatedDate() + ' Sheduling blood pressure examination for ' + labExamination1.patient.firstName);
doctor.schedulingExamination(labExamination2);
console.log(formatedDate() + ' Sheduling blood sugar examination for ' + labExamination2.patient.firstName);

// Doktor obavlja preglede
doctor.performExamination(labExamination1);
console.log(formatedDate() + ' Performing  lab examination for ' + labExamination1.patient.firstName);
doctor.performExamination(labExamination2);
console.log(formatedDate() + ' Performing lab examination for ' + labExamination2.patient.firstName);

console.log(formatedDate() + ' Resluts:')
console.log(doctor.examinationResults);


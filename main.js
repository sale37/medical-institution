import Patient from './Patient.js';
import Doctor from './Doctor.js';
import BloodSugar from './BloodSugar.js'
import BloodPressure from './BloodPressure.js';
import { formatedDate } from './Logger.js';
import Logger from './Logger.js';
const logger = new Logger;


// Kreiranje pacijenta i doktora
const doctor = new Doctor('Milan', 'Ilic', 'Internista');
const patient = new Patient('Dragan', 'Peric', '0103994020394', 105);

// Pacijent bira Milana za svog doktora i Dragan postaje Milanov pacijent.
patient.setDoctor(doctor);
logger.log('Patient ' + patient.firstName + ' ' + patient.lastName + ' is choosing ' +
doctor.firstName + ' ' + doctor.lastName + ' for his doctor')
// Doktor zakazuje preglede
const labExamination1 = new BloodPressure(formatedDate(), patient);
const labExamination2 = new BloodSugar(formatedDate(), patient);

doctor.schedulingExamination(labExamination1);
logger.log('Sheduling blood pressure examination for ' + labExamination1.patient.firstName);
doctor.schedulingExamination(labExamination2);
logger.log('Sheduling blood sugar examination for ' + labExamination2.patient.firstName);

// Doktor obavlja preglede
patient.performExamination(labExamination1);
logger.log('Performing  lab examination for ' + labExamination1.patient.firstName);
patient.performExamination(labExamination2);
logger.log('Performing lab examination for ' + labExamination2.patient.firstName);

logger.log('Resluts:')
console.log(patient.examinationResults);


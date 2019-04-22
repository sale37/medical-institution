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
// Doktor zakazuje preglede
const labExamination1 = new BloodPressure(formatedDate(), patient);
const labExamination2 = new BloodSugar(formatedDate(), patient);

doctor.schedulingExamination(labExamination1);
doctor.schedulingExamination(labExamination2);

// Doktor obavlja preglede
patient.performExamination(labExamination1);
patient.performExamination(labExamination2);

logger.log('Resluts:')
console.log(patient.examinationResults);


class Logger {
    constructor() {
      if (!Logger.instance) {
        Logger.instance = this;
      }
      return Logger.instance;
    }
  
    log(message) {
      console.log(formatedDate() + ' ' + message);
    }

    schedulingExamination(labExamination){        
        console.log(`${formatedDate()} Sheduling lab examination for ${labExamination.patient.firstName}`)
    }

    performingExamination(labExamination){
        const name = labExamination.constructor.name.match(/[A-Z][a-z]+/g).join(' ');
        console.log(`${formatedDate()} Performing ${name} examination for ${labExamination.patient.firstName}`)
    }

}

export function formatedDate(){
    const date = new Date();
    return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() +
    ' ' + date.getHours() + ':' + date.getMinutes();
}

export default Logger;
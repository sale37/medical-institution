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
}

export function formatedDate(){
    const date = new Date();
    return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() +
    ' ' + date.getHours() + ':' + date.getMinutes();
}

export default Logger;
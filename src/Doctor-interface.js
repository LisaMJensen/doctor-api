export class DoctorService {
  getDoctorByMedicalIssue(medicalIssue) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&3&skip=0&limit=10&user_key=34853a487b63d7e734401c6341ae74f8`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

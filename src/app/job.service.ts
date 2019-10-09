import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(public http: HttpClient) { }

  getJobs(){
    return this.http.get('https://us-central1-mlab-challenge.cloudfunctions.net/jobs')
  }

  getFilteredJobs(jobId){
// console.log(this.http.get("https://us-central1-mlab-challenge.cloudfunctions.net/job?id="+ String(jobId)));

    return this.http.get("https://us-central1-mlab-challenge.cloudfunctions.net/job?id="+ String(jobId))

    
    
  }
}

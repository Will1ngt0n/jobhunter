import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular'
import { JobService } from '../job.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  jobs
  companyName ="Forbes"
  datePosted = "12/08/2019"
  position = "Clerk"
  location ="Centurion, Pretoria"
  // description = "We are looking for someone who is very intuitive and looks forward to working with a team that doesnt really know what its doing. Maybe like me on planet earth right now, I really have no idea whatsoever what all this shixt is about"

  constructor(public jobservice : JobService) {
    this.getJobs()
  }


  getJobs(){
    this.jobservice.getJobs().subscribe(data => {
      this.jobs = data
      console.log(this.jobs);
      // for(let i = 0; i < this.jobs.length; i++){
      //   this.companyName = this.jobs[i].company
      //   this.datePosted = this.jobs[i].created_at
      //   this.position = this.jobs[i].title

      //   //this.jobs[i].description.join('<p>')

      //   this.description = this.jobs[i].description
      // }
      
      
    })
  }


}

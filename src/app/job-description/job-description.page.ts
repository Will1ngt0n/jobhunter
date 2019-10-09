import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { ActivatedRoute } from '@angular/router';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.page.html',
  styleUrls: ['./job-description.page.scss'],
})
export class JobDescriptionPage implements OnInit {
  id
  job
  constructor(public jobService : JobService, public route : ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id')
   console.log(this.id);
   
   this.getJob(this.id)
  }
  
  getJob(id){
    this.jobService.getFilteredJobs(id).subscribe(data => {
      this.job = data
      console.log(this.job);
      
    })
   
  }
  ngOnInit() {
   
   
  }

}

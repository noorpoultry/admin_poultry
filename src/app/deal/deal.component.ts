import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from 'app/services/dashboard.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  dealDetails: any;

  constructor(private route: ActivatedRoute, private router: Router,private dealStatus:DashboardService) 
  { 
   
    route.queryParams.subscribe(param => {
      this.dealDetails = router.getCurrentNavigation().extras.state.dealDetails;
    })
    
    if(!this.dealDetails) {
      this.router.navigate(['dashboard']);
     }

    console.log("testing", this.dealDetails);
  }

  ngOnInit(): void {
    
  }

  updateDeal() 
  {
    this.dealStatus.dealStatus(this.dealDetails._id).subscribe((res)=> {
      console.log("userDatat=====", res);
      //this.userData = res.users

    })
  }

}

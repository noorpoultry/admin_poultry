import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   bidList:any;
   dealList:any;
   list:any;
   listAll:boolean=true;
   
  constructor(private dashboardList : DashboardService,
    private router: Router,
    public dialog: MatDialog) { }

  
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
     this.getBidList();

  }

  getBidList () 
  {
    document.getElementById('bidBtn')?.classList.add('active');
    document.getElementById('dealBtn')?.classList.remove('active');
    this.dashboardList.getBid().subscribe((res)=> {
      console.log("bidDatat=====", res.bids);
       this.list = res.bids;
       this.listAll=true;

    })
  }

  getDeals() 
  {
    document.getElementById('dealBtn')?.classList.add('active');
    document.getElementById('bidBtn')?.classList.remove('active');
    this.dashboardList.getDeals().subscribe((res)=> {
      console.log("dealDatat=====", res.deals);
       this.list = res.deals
       this.listAll=false;

    })
  }

  showDealDetails(index)
  {
    let navExtras: NavigationExtras = {
      state: {dealDetails: this.list[index]}
    }

    this.router.navigate(['deal'], navExtras);
  }

}

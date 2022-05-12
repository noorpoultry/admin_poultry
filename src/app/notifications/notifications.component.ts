import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AccountListService } from '../services/account-list.service';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

//import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  userData: any
  data: any
  display = "none";


  constructor(private accountList : AccountListService,
    private router: Router,
    public dialog: MatDialog) { }


  ngOnInit(): void {
    this.accountList.pendingAccountList.subscribe((data) => {
      this.getUserList();
    });
  }

  getUserList () {
    this.accountList.getNewUsers().subscribe((res)=> {
      console.log("userDatat=====", res);
      this.userData = res.users


    })
  }

  openDialog(index){
    this.dialog.open(DialogComponent, {data: {user: this.userData[index], name: 'notification'}});
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AccountListService } from '../services/account-list.service';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData: any
  data:any
  // showMe:any;
  isShowDivIf = false;  
  showBox = true;
  constructor(private accountList : AccountListService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getUserList();
  }


  getUserList (){
    this.accountList.getUserList(this.data).subscribe((res)=> {
      console.log("userDatat=====", res);
      this.userData = res.users
      

    })
  }


  openDialog(index){
    this.dialog.open(DialogComponent, {data: {user: this.userData[index], name: 'profile'}});
  }
}

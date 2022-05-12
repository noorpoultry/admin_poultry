import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountListService } from '../services/account-list.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private accountList : AccountListService,) {}

  ngOnInit(): void {
    console.log(this.data.user);
  }

  updateUserAccount (status: boolean) 
  {
    this.accountList.userStatus(this.data.user._id, {isActive: status}).subscribe((res)=> {
      console.log("userDatat=====", res);
      if(status) {
        this.accountList.pendingUserCount = --this.accountList.pendingUserCount;
      }
      
      this.accountList.nextUpdateAccountList();
    })
  }

}

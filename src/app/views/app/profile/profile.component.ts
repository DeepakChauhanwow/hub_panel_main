import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile_data: any;

  constructor(public _helper: Helper) { }

  ngOnInit(): void {
    this.profile_data = this._helper.user_details;
  }

}

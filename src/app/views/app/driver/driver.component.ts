import { Component, OnInit } from '@angular/core';
import { DriverModel } from 'src/app/models/driver.model';
import { Helper } from 'src/app/shared/helper';
import { DriverService } from '../../../services/driver.service';
import { environment } from 'src/environments/environment';
import { DEFAULT_IMAGE } from 'src/app/constants/constants';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  profile_data: DriverModel = new DriverModel();
  searchByList = [
    { label: 'label-title.id', value: 'unique_id' },
    { label: 'label-title.name', value: 'first_name' },
    { label: 'label-title.email', value: 'email' },
    { label: 'label-title.city', value: 'city' },
    { label: 'label-title.phone', value: 'phone' },
  ];
  selectedSearchBy = { label: 'label-title.name', value: 'first_name' };
  driver_data: Array<any> = []
  total_page: any
  start_date: any;
  end_date: any;
  sort_item: any
  sort_order: any
  search_item: any = undefined
  search_value: any = ''
  isFilterApply: boolean = false;
  values: any = ''
  item_bsRangeValue: any = '';
  IMAGE_URL = environment.IMAGE_URL;
  DEFAULT_IMAGE = DEFAULT_IMAGE.USER_PROFILE;
  itemOptionsPerPage = [5, 10, 20];
  viewType: string = 'grid';
  type: number = 2;
  current_page: number = 1;
  itemsPerPage: number = 5;
  count = 0;
  filterData: any;
  is_export: boolean = false;
  partnerId: any;
  vehicle_list: any = [];
  partner_id: string = '';
  service_type: string = '';
  vehicle_type: string = '';
  is_service_type: string = '';
  provider_id: string = '';
  service_type_list: any = [];
  selected_serviceType: string = '';
  AssignVehicle: UntypedFormGroup;
  providers: any;
  direction = localStorage.getItem('direction')

  constructor(private driver_service: DriverService, public helper: Helper,) { }

  ngOnInit(): void {
    this.providers = this.helper.user_details;
    if (this.helper.user_details) {
      this.driver_list();
    }
  }

  //get driver list
  driver_list() {
    let json: any = { hub_id: this.helper.user_details.hub_id, }
    this.driver_service.get_driver_list(json).then((res) => {
      this.driver_data = res.providers;
    })

  }
}

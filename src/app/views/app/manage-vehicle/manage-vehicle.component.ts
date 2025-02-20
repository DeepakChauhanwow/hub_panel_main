import { Component, OnInit, ViewChild } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { PROVIDER_TYPE } from 'src/app/constants/constants';
import { Helper } from 'src/app/shared/helper';
import { VehicleHistoryModalComponent } from 'src/app/containers/pages/vehicle-history-modal/vehicle-history-modal.component';
@Component({
  selector: 'app-manage-vehicle',
  templateUrl: './manage-vehicle.component.html',
  styleUrls: ['./manage-vehicle.component.scss']
})
export class ManageVehicleComponent implements OnInit {
  isCollapsedAnimated1 = true;
  vehicle_detail: Array<any> = [];
  provider_type: number;
  PROVIDER_TYPE_PARTNER = PROVIDER_TYPE.PROVIDER_TYPE_PARTNER;
  user: any;

  @ViewChild('vehicleHIstoryModal', { static: true }) vehicleHIstoryModal: VehicleHistoryModalComponent;

  constructor(private vehicleService: VehicleService, public _helper: Helper,) { }

  ngOnInit(): void {
    this.user = this._helper.user_details;
    if (this._helper.user_details) {
      this.vehicles();
    }
  }

  vehicles() {
    let json: any = { id: this._helper.user_details._id,hub_id:this._helper.user_details.hub_id }
    json.is_show_success_toast = false;
    this.vehicleService.get_vehicles_list(json).then((res: any) => {
      this.vehicle_detail = res.vehicles
    })
  }

  openVehicleHistoryModal(vehicle): void{
    this.vehicleHIstoryModal.show(vehicle);
  }

}

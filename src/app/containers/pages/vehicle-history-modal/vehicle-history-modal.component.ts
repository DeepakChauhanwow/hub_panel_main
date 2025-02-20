import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-vehicle-history-modal',
  templateUrl: './vehicle-history-modal.component.html',
  styleUrls: ['./vehicle-history-modal.component.scss']
})
export class VehicleHistoryModalComponent {
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };
  history: any;
  vehicle_datails: any;

  @ViewChild('template', { static: true }) template: TemplateRef<any>;

  constructor(private modalService: BsModalService, private _vehicleService: VehicleService, public _helper: Helper) { }

  show(vehicle) {
    this.vehicle_datails = vehicle;
    this.getVehicleHistory(vehicle);
  }

  getVehicleHistory(vehicle): void {
    let json: any = { vehicle_id: vehicle._id }
    this._vehicleService.getVehicleHistory(json).then((response) => {
      if (response.success) {
        this.modalRef = this.modalService.show(this.template, this.config);
        this.history = response.history[0];
        this.history.logs = this.history.logs.filter((log) => {
          return (
            log.type == this._helper.VEHICLE_HISTORY_TYPE.ASSIGNED ||
            log.type == this._helper.VEHICLE_HISTORY_TYPE.UNASSIGNED ||
            log.type == this._helper.VEHICLE_HISTORY_TYPE.PICKED ||
            log.type == this._helper.VEHICLE_HISTORY_TYPE.DROPPED
          );
        })
      }
    })
  }

}

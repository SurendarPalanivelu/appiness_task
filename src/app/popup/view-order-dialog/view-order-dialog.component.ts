import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'underscore';

import { OrderListService } from '../../service/order-list.service';

@Component({
  selector: 'app-view-order-dialog',
  templateUrl: './view-order-dialog.component.html',
  styleUrls: ['./view-order-dialog.component.scss']
})
export class ViewOrderDialogComponent implements OnInit {

  orderItem: any = {};
  constructor(public dialogRef: MatDialogRef<ViewOrderDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private orderListService: OrderListService) {

  }

  ngOnInit() {
    this.getOrder(this.data.id);
  }

  getOrder(orderId: number) {
    let orderList = this.orderListService.orderList();
    if(orderList != null && orderList.length > 0 && _.isNumber(orderId))
    {
      let statusObj = _.find(orderList, function(obj) {return obj.id == orderId});
      if(!_.isUndefined(statusObj))
      {
        this.orderItem = statusObj;
        this.orderItem["status"] = this.data.status;
      }
    }
  }

}

import { Component } from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import { OrderListService } from './service/order-list.service';
import * as _ from 'underscore';
import { ViewOrderDialogComponent } from './popup/view-order-dialog/view-order-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayedColumns: string[] = ['customer', 'items_count', 'total', 'status', 'action'];
  dataSource = new MatTableDataSource([]);

  statusList = [];
  orderList = [];

  constructor(private orderListService: OrderListService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getStatusList();
    this.loadTableData();
  }

  /**
   * Get the status of the ordered pizza
   * date: 06-10-2020
   */
  getStatusList() {
    this.statusList = this.orderListService.statusList();
  }

  /**
   * Get the status value based on Id
   * @param statusId : number
   * date: 06-10-2020
   */
  getStatusValue(statusId: number) {
    let result = "";
    if(this.statusList != null && this.statusList.length > 0 && _.isNumber(statusId))
    {
      let statusObj = _.find(this.statusList, function(obj) {return obj.id == statusId});
      //console.log(statusObj, _.isUndefined(statusObj));
      if(!_.isUndefined(statusObj))
        return statusObj.txt;
    }
    return result;
  }

  /**
   * Get the pizza order list
   * date: 06-10-2020
   */
  loadTableData() {
    this.orderList = this.orderListService.orderList();
    
    this.dataSource = new MatTableDataSource(this.orderList);
  }

  /**
   * Applying table filter
   * @param filterValue : string searching value 
   * date: 06-10-2020
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * change order status
   * @param orderId : number
   * @param statusId : number
   * date: 06-10-2020
   */
  changeStatus(orderId: number, statusId: number) {
    // api here update db
  }

  /**
   * view the order
   * @param orderId : number
   * @param orderStatus : string
   * date: 06-10-2020
   */
  viewOrder(orderId: number, orderStatus: string) {
    let dialogRef = this.dialog.open(ViewOrderDialogComponent, {
      height: '400px',
      width: '600px',
      hasBackdrop: false,
      data: {id : orderId, status: orderStatus}
    });
  }
}

import { Component, ViewChild } from '@angular/core';
import * as wjcCore from 'wijmo/wijmo';
import * as wjGrid from 'wijmo/wijmo.grid';
import * as wjcFilter from 'wijmo/wijmo.grid.filter';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('grid') grid: wjGrid.FlexGrid;
  gridData: wjcCore.CollectionView = undefined;       
  _filter : wjcFilter.FlexGridFilter;



  selectAll: boolean = false;
    gridSelectAllRows(value: any) {
        this.selectAll = !value;
        this.gridData.items.forEach((d:any, ind:number) => {
            if(d.isSelected !== this.selectAll) {
                this.grid.setCellData(ind, 'isSelected', this.selectAll);
            }
        });
    }
    
    selectedItems : any;//for selecting multiple rows at once
    gridSelectRow(selectItem: any){
        if(this.grid.selectedItems.length > 1){            
            this.selectedItems = this.grid.selectedItems.filter((s)=>{return s !== selectItem});            
        }else{
            this.selectedItems = undefined;
        }
    }

    gridChecked(value: boolean){
        if(this.selectedItems){ //multi selection상태이면 선택된 다른 row도 동일하게 Select
            this.selectedItems.forEach((s)=>{s.isSelected = value;})
        }
    }
}

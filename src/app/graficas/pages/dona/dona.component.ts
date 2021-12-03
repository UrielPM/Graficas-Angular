import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

   // Doughnut
   public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
   public doughnutChartData: MultiDataSet = [
     [350, 450, 100]
   ];
   public doughnutChartType: ChartType = 'doughnut';

   public colors: Color[] = [
     {
       backgroundColor: [
        '#C3FF49',
        '#54C2FA',
        '#FF5532',
        '#FFE566',


       ]
     }
   ]
 

  constructor() { }

  ngOnInit(): void {
  }

}

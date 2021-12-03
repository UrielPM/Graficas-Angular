import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  
   // Doughnut
   public doughnutChartLabels: Label[] = [
     //'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
    ];
   public doughnutChartData: MultiDataSet = [
   //  [350, 450, 100]
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

  constructor( private graficasService: GraficasService) { }

  ngOnInit(): void {

    /*
    this.graficasService.getUsuariosRedesSociales()
        .subscribe(data => {
          console.log(data);
          const labels = Object.keys( data);
          const values = Object.values( data);
          this.doughnutChartLabels = labels;
          this.doughnutChartData.push(values);
          
        })
        */

        this.graficasService.getRedesSocialesData()
            .subscribe( ({ labels, values }) => {
     
              this.doughnutChartLabels = labels;
              this.doughnutChartData.push(values);
              
            })
  }

}

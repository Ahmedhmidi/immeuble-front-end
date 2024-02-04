import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(() => {
      this.drawChart1();
      this.drawChart2();
    });
  }

  drawChart1() {
    const data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    const options = {
      title: 'Company Performance',
      hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
  }

  drawChart2() {
    const data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2013',  1000,      400],
      ['2014',  1170,      460],
      ['2015',  660,       1120],
      ['2016',  1030,      540]
    ]);

    const options = {
      title: 'Company Performance',
      hAxis: {title: 'Year', titleTextStyle: {color: '#333'}},
      vAxis: {minValue: 0}
    };

    const chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
  }
}

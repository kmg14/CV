import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit {

  // CHART OPTIONS.
  chartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true,
              suggestedMax: 100,
              fontColor: 'rgb(219, 218, 218)'
          }
      }],
      xAxes: [{
        maxBarThickness: 100,
        ticks: {
          fontColor: 'rgb(219, 218, 218)'
        }
      }]}
  };

  labels =  ['Forritunarmál', 'Öryggi Tölvukerfa', 'Vefforritun 1', 'Vefforritun 2',
            'Hugbúnaðarverkefni 2', 'Tölvunet og Öryggi', 'Stýrikerfi', 'Gagnasafnsfræði', 'Samskipti Manns og Tölvu', 'Tölvugrafík'];


  // Static Data fyrir Chart
  chartData = [
    {
      label: 'Einkunn',
      data: [90, 90, 80, 80, 80, 85, 80, 80, 100, 80],
    }
  ];

  // Chart Colors
  colors = [
    {
      backgroundColor: 'rgba(30, 169, 224, 1)',
      hoverBackgroundColor: 'rgba(200, 50, 100, 1)',
    }
  ];

  constructor() {}

  ChangeToListView() {
    const graph = document.getElementById('graph');
    graph.id += '--hide';

    const grades = document.getElementById('grades');
    grades.style.display = 'block';
  }

  ChangeToGraphView() {
    const graph = document.getElementById('graph--hide');
    graph.id = 'graph';

    const grades = document.getElementById('grades');
    grades.style.display = 'none';
  }

  ngOnInit() {
  }
}



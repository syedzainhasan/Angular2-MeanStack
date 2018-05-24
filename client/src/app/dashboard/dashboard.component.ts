import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;
list;
  constructor() {
      this.data = [{
          labels: ['sales','profit','loss'],
          datasets: [

              {
                
                label: 'My First dataset',
                  data: [300, 50, 100],
                  backgroundColor: [
                      "#6b5b95",
                      "#feb236",
                      "#d64161"
                  ],
                  hoverBackgroundColor: [
                    "#6b5b95",
                    "#feb236",
                    "#d64161"
                  ]
              }]    ,title: 'Sales', type: 'pie'
              
          },
          ////////////////
          
          {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ],
            title: 'Profits', type: 'bar'    
            },
            ///////////////
            {
              labels: ['sales','profit','loss'],
              datasets: [
    
                  {
                    title: 'Sales', type: 'doughnut',
                    label: 'My First dataset',
                      data: [300, 50, 100],
                      backgroundColor: [
                          "#6b5b95",
                          "#feb236",
                          "#d64161"
                      ],
                      hoverBackgroundColor: [
                        "#6b5b95",
                        "#feb236",
                        "#d64161"
                      ]
                  }] ,
                  title: 'Notifications', type: 'doughnut'    
              },
              /////////////////
              {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#4bc0c0'
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#565656'
                    }
                ]  ,
                title: 'Response', type: 'line' 
                },
                /////////////
                {
                  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]   , title: 'Messages', type: 'radar' 
                  },
            /////////////////      
                  {
                    datasets: [{
                      data: [
                          11,
                          16,
                          7,
                          3,
                          14
                      ],
                     
                      backgroundColor: [
                          "#FF6384",
                          "#4BC0C0",
                          "#FFCE56",
                          "#E7E9ED",
                          "#36A2EB"
                      ],
                      label: 'My dataset'
                  }],
                  labels: [
                      "Red",
                      "Green",
                      "Yellow",
                      "Grey",
                      "Blue"
                  ], title: 'Charts', type: 'polarArea', },
                    ////////////
        ];
  }

  ngOnInit() {
    this.list = [
      { title: 'Sales', type: 'pie' },
      { title: 'Profits', type: 'bar' },
      { title: 'Notifications', type: 'doughnut' },
      { title: 'Response', type: 'line' },
      { title: 'Messages', type: 'radar' },
      { title: 'Charts', type: 'polarArea' },
   

    ];

    
  }
  getLarger()
  {
      
  }
 

}

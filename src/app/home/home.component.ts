import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    data: Object;
    constructor() {
      this.data = {
        chart: {
            'caption': 'Student Enquiry',
         },
        data: [

            {
                'label': 'January',
                'value': '420000'
              }, {
                'label': 'February',
                'value': '810000'
              }, {
                'label': 'March',
                'value': '720000'
              },

        ]
      };
    }
}

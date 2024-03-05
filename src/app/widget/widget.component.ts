import {Component} from '@angular/core';
import {
	NgApexchartsModule,
	ApexChart,
	ApexXAxis,
	ApexAxisChartSeries,
	ApexTitleSubtitle
} from 'ng-apexcharts';

export type ChartOptions = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	xaxis: ApexXAxis;
	title: ApexTitleSubtitle;
};

@Component({
	selector: 'app-widget',
	standalone: true,
	imports: [
		NgApexchartsModule
	],
	templateUrl: './widget.component.html',
	styleUrl: './widget.component.css'
})
export class WidgetComponent {
	public chartOptions: ChartOptions;

	constructor() {
		this.chartOptions = {
			series: [
				{
					name: 'My-series',
					data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
				},
				{
					name: 'My-series 2',
					data: [15, 23, 4, 16, 89, 71, 18, 56, 12]
				}
			],
			chart: {
				height: 350,
				type: 'bar'
			},
			title: {
				text: 'My First Angular Chart'
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
			}
		};
	}
}

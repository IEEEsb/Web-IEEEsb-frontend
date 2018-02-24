import { Component, Input } from '@angular/core';

@Component({
	selector: 'loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.less']
})
export class LoaderComponent{
	@Input() enabled: boolean = true;
}
import {Component, OnInit, OnDestroy} from '@angular/core';
import {MdProgressCircle} from '@angular2-material/progress-circle';

@Component({
    moduleId: module.id,
    selector: 'spinner',
    directives: [MdProgressCircle],
    template: `
        <md-progress-circle mode="determinate" [value]="determinateValue"></md-progress-circle>
    `
})
export class SpinnerComponent implements OnInit, OnDestroy {
    public determinateValue: number = 30;
    public mode: string;

    constructor() {}
    ngOnInit() {
        setInterval(() => {
            this.determinateValue += 1;
            if (this.determinateValue > 100) {
                this.determinateValue = 30;
            }
        }, 100, 0, true);
    }

    ngOnDestroy() {

    }
}




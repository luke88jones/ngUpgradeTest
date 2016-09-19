import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "moduleOneComponent",
    template: `
        <div>
            Ng2 Module 1 Component
            <div *ngIf="country" class="selected-value">
                <p>Selected Country: <strong>{{country}}</strong></p>
                <button (click)="onRemove()">Remove</button>        
            </div>
            <p *ngIf="!country">No country selected</p>
        </div>`
})
export class Module1Component {
    @Input() country: string;
    @Output() removed = new EventEmitter();

    onRemove() {
        this.removed.emit();
    }
}
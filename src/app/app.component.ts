import { CountryService } from "../modules/ng2-module1/shared/country-service";

class AppComponentCtrl {
    static $inject = [
        "countryService"
    ];

    countries: string[];
    selected: string;

    constructor(
        countryService: CountryService
    ) {
        this.countries = countryService.get();
    }

    selectCountry(index: number) {
        this.selected = this.countries[index];
    }

    onRemoved() {
        this.selected = null;
    }
}

export class AppComponent implements angular.IComponentOptions {
    restrict = "E";
    controller = AppComponentCtrl;
    template = `
        <div>
            NG1 Root Component
            <p>Click to select a country</p>
            <ul>
                <li 
                    data-ng-repeat="country in $ctrl.countries track by $index"
                    data-ng-click="$ctrl.selectCountry($index)">
                    {{country}}
                </li>
            </ul>
            <module-one-component [country]="$ctrl.selected" (removed)="$ctrl.onRemoved()"></module-one-component>
        </div>
    `;
}
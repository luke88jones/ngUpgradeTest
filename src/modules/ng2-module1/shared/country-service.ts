import { Injectable } from "@angular/core";

@Injectable()
export class CountryService {
    get() {
        return [
            "United Kingdom",
            "France",
            "Germany",
            "Belgium",
            "Australia",
            "United States of America"
        ];
    }
}
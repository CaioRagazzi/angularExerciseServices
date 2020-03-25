import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToactiveCounter = 0;


    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
    }

    incrementInactiveToActive() {
        this.inactiveToactiveCounter++;
    }
}
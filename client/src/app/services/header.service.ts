import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HeaderService {
	private visibility = new BehaviorSubject<Boolean>(false);
	currentVisibility = this.visibility.asObservable();

	constructor() {}

	setVisibility(visibility: Boolean) {
		this.visibility.next(visibility);
	}
}

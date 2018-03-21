import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertService } from './alert.service';
import { AlertComponent } from './alert.component';

@NgModule({
	imports: [CommonModule],
	declarations: [AlertComponent],
	providers: [],
	exports: [AlertComponent]
})
export class AlertModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AlertModule,
			providers: [AlertService]
		};
	}
}

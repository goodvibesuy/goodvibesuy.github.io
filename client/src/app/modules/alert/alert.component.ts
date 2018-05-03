import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { Alert, AlertType, IAlert } from './alert.model';
import { AlertService } from './alert.service';
import { Timeouts } from 'selenium-webdriver';

@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.css']
})
export class AlertComponent {
    protected mostrarAlerta: boolean;
    protected alert: Alert;

    constructor(private router: Router, private alertService: AlertService) {

        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (!!this.alert) {
                    if (this.alert.keepAfterRouteChange) {
                        // only keep for a single route change
                        this.alert.keepAfterRouteChange = false;
                    } else {
                        // clear alert messages
                        this.alert = null;
                    }
                }
            }
        });
    }

    ngOnInit() {
        this.alertService.getAlert().subscribe(
            (alert: IAlert) => {
                this.alert = alert;
                this.mostrarAlerta = true;
                // shutdown alert after a fixed time
                setTimeout(() => {
                    this.removeAlert(alert);
                }, this.getTimeout(alert.type));
            },
            error => {
                console.error(error);
            }
        );
    }

    removeAlert(alert: IAlert) {
        this.mostrarAlerta = false;
        if (this.alert) {
            if (this.alert.id == alert.id) {
                setTimeout(() => {
                    this.alert = null;
                }, 500);
            }
        }
    }

    cssClass(alert: Alert) {
        if (!alert) {
            return;
        }

        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }

    getTypeText(type: AlertType) {
        // return css class based on alert type
        switch (type) {
            case AlertType.Success:
                return 'Hecho!';
            case AlertType.Error:
                return 'Error!';
            case AlertType.Info:
                return 'Info!';
            case AlertType.Warning:
                return 'Aviso';
        }
    }

    private getTimeout(type: AlertType) {
        let timeout = 0;

        switch (type) {
            case AlertType.Error:
                timeout = 5;
                break;
            case AlertType.Warning:
                timeout = 4;
                break;
            case AlertType.Info:
                timeout = 3.5;
                break;
            case AlertType.Success:
                timeout = 3;
                break;
            default:
                timeout = 1;
                break;
        }

        return timeout * 1000;
    }
}

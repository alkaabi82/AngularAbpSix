import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'AbpSix.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'AbpSix.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}

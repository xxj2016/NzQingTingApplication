import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { WorkspaceComponent } from './workspace.component';

import { workspaceRoutes } from './workspace.routes';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forChild(workspaceRoutes)
  ],
  declarations: [
    WorkspaceComponent
  ]
})
export class WorkspaceModule { }

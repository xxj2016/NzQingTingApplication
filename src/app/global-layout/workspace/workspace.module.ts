import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { WorkspaceComponent } from './workspace.component';

import { workspaceRoutes } from './workspace.routes';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(workspaceRoutes)
  ],

  declarations: [
    WorkspaceComponent,
    HeaderComponent
  ]
})
export class WorkspaceModule { }

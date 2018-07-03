import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { AudioComponent } from '../audio/audio.component';
import { WorkspaceComponent } from './workspace.component';

import { workspaceRoutes } from './workspace.routes';

import { SharedModule } from '../../common/shared.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SharedModule,
    RouterModule.forChild(workspaceRoutes)
  ],

  declarations: [
    WorkspaceComponent,
    AudioComponent,
    HeaderComponent
  ]
})
export class WorkspaceModule { }

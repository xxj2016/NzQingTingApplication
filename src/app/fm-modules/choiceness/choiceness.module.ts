import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ChoicenessComponent } from './choiceness.component';

import { choicenessRoutes } from './choiceness.routes';

import { SharedModule } from '../../common/shared.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgZorroAntdModule,
    RouterModule.forChild(choicenessRoutes)
  ],
  declarations: [
    ChoicenessComponent
  ]
})
export class ChoicenessModule { }

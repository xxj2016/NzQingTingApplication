import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ChoicenessComponent } from './choiceness.component';

import { choicenessRoutes } from './choiceness.routes';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(choicenessRoutes)
  ],
  declarations: [
    ChoicenessComponent
  ]
})
export class ChoicenessModule { }

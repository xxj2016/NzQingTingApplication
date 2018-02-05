import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ChoicenessComponent } from './choiceness.component';

import { choicenessRoutes } from './choiceness.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(choicenessRoutes)
  ],
  declarations: [
    ChoicenessComponent
  ]
})
export class ChoicenessModule { }

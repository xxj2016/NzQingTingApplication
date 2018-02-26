import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ChoicenessService } from './services/choiceness.service';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        ChoicenessService
    ]
  })

export class SharedModule { }

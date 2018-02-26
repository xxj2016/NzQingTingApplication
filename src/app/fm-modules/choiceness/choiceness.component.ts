import { Component, OnInit } from '@angular/core';

import { ChoicenessService } from '../../common/services/choiceness.service';

@Component({
    selector: 'app-choiceness',
    templateUrl: './choiceness.component.html',
    styleUrls: ['./choiceness.component.scss']
})
export class ChoicenessComponent implements OnInit {
    array = [1];
    public items: Array<any>;

    constructor(
        private choicenessService: ChoicenessService
    ) {}
    
    ngOnInit() {
        setTimeout(_ => {
            this.array = [1, 2, 3, 4];
        }, 500);

        this.choicenessService.getChiconessBanners().subscribe((items) => {
            this.items = items['data'];
        });
    }
}

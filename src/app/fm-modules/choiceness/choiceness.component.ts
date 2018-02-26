import { Component, OnInit } from '@angular/core';

import { ChoicenessService } from '../../common/services/choiceness.service';
import * as _ from 'lodash';
@Component({
    selector: 'app-choiceness',
    templateUrl: './choiceness.component.html',
    styleUrls: ['./choiceness.component.scss']
})
export class ChoicenessComponent implements OnInit {
    array = [1];
    public banners: Array<any>;
    public attrs: Array<any>;
    public categories: Array<any>;

    constructor(
        private choicenessService: ChoicenessService
    ) {}

    ngOnInit() {
        setTimeout(_ => {
            this.array = [1, 2, 3, 4];
        }, 500);

        // 获取轮播图
        this.choicenessService.getChiconessBanners().subscribe((banners) => {
            this.banners = banners['data'];
        });

        // 获取属性
        this.getChiconessAttrs();


    }

    getChiconessAttrs() {
        this.choicenessService.getChiconessAttrs().subscribe((attrs) => {
            this.attrs = attrs['data'];
            console.log(this.attrs);
            let arr = [];
            this.attrs.forEach(attr => {
                arr.push(attr.id);
            });
            console.log(arr);
            arr.sort(this.sortNumber);
            console.log(arr);

            let str = arr.join('_');
            console.log(str);

            // 获取分类内容
            this.getChiconessCategory(str);
        });
    }

    // 数组元素是数字进行排序时，必须调用一个排序函数
    sortNumber(a, b) {
        return a - b;
    }

    getChiconessCategory(str: string) {
        this.choicenessService.getChiconessCategory(str).subscribe((attrs) => {
            this.categories = _.valuesIn(attrs['data']);
            // console.log(_.toPairsIn(this.categories)); // 返回键值对的数组
            console.log(this.categories); // 返回对象属性的值的数组
            this.categories.forEach(cate => {
                this.attrs.forEach(attr => {
                   if (cate.more.category_id === String(attr.id)) {
                       cate.attr = attr;
                   }
                });
            });
            console.log(this.categories);
        });
    }
}

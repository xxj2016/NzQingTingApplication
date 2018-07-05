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
    public channelList: Array<any>;
    public channels: Array<any>;
    public channel_id: number;

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
        }, error => {
            console.error(error);
        });

        // 获取属性
        this.getChiconessAttrs();

        // 获取电台频道
        this.getChannelList();


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
        }, error => {
            console.error(error);
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
        }, error => {
            console.error(error);
        });
    }

    // http://rapi.qingting.fm/recommendations/0/channel_list?more=true&replay=false
    getChannelList() {
        this.choicenessService.getChannelList().subscribe( channel => {
            this.channelList = channel['Data'];
            console.table(this.channelList);
        }, error => {
            console.error(error);
        });
    }

    calcu(start_time, duration) {
        const arr = start_time.split(':');
        const hour = Number(arr[0]) * 3600;
        const minute = Number(arr[1]) * 60;
        const sum = hour + minute + duration;
        const HOUR = Math.floor(sum / 3600);
        const MINUTE = sum % 3600 / 60;
        const newTime = String(HOUR + ':' + MINUTE);
        return newTime;
    }

    playThis(cate: any) {
        console.log(cate);
        this.channel_id = cate.id;
        this.choicenessService.getPrograme(cate.id, 1).subscribe((channels) => {
            this.channels = channels['data'];
        }, error => {
            console.error(error);
        });
    }
}

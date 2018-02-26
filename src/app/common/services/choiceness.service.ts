import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChoicenessService {

  constructor(private hc: HttpClient) {

  }

  /**
   * 获取精选页面轮播图
   * url: 'http://i.qingting.fm/capi/neo-recommend/banner'
   */
  public getChiconessBanners(): Observable<any> {
    return this.hc.get('http://i.qingting.fm/capi/neo-recommend/banner');
  }

  /**
   * 获取精选页面属性
   * url: 'http://i.qingting.fm/capi/neo-recommend/attrs'
   */
  public getChiconessAttrs(): Observable<any> {
    return this.hc.get('http://i.qingting.fm/capi/neo-recommend/attrs');
  }

  /**
   * 获取精选页面属性
   * @param attrs 属性数组
   * url: 'http://recpage.c.qingting.fm/v2/hotpage/category/${attr}'
   */
  public getChiconessCategory(attrs: string): Observable<any> {
    return this.hc.get(`http://recpage.c.qingting.fm/v2/hotpage/category/${attrs}`);
  }

}

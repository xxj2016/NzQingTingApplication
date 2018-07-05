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

  /**
   * 获取精选页面属性
   * @param attrs 属性数组
   * url: 'http://rapi.qingting.fm/recommendations/0/channel_list?more=true&replay=false'
   */
  public getChannelList(): Observable<any> {
    return this.hc.get(`http://rapi.qingting.fm/recommendations/0/channel_list?more=true&replay=false`);
  }

  /**
   * 获取点击的节目信息
   * @param id 节目id
   * @param page 数据页码
   * url: 'http://i.qingting.fm/wapi/channels/${id}/programs/page/${page}'
   */
  public getPrograme(id: number, page: number): Observable<any> {
    return this.hc.get(`http://i.qingting.fm/wapi/channels/${id}/programs/page/${page}`);
  }

  /**
   * 获取点击的节目信息
   * @param channel_id 节目id
   * url: 'http://i.qingting.fm/wapi/channels/${channel_id}'
   */
  public getDetail(channel_id: number): Observable<any> {
    return this.hc.get(`http://i.qingting.fm/wapi/channels/${channel_id}`);
  }

  /**
   * 获取点击的节目信息
   * @param channel_id 节目id
   * url: 'http://d.qingting.fm/capi/channel/${channel_id}?user_id=null'
   */
  public getChannelDetial(channel_id: number): Observable<any> {
    return this.hc.get(`http://d.qingting.fm/capi/channel/${channel_id}?user_id=null`);
  }

}

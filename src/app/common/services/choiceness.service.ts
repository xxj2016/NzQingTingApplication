import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChoicenessService {

  constructor(private hc: HttpClient) {

  }

  public getChiconessBanners(): Observable<any> {
    return this.hc.get('http://i.qingting.fm/capi/neo-recommend/banner');
  }
}

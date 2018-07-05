import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { ChoicenessService } from '../../common/services/choiceness.service';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit, OnChanges {

  @Input('channels') channels;
  @Input('channelId') channelId;
  private channel_detail = {};
  private detail = {};
  constructor(
    private choicenessService: ChoicenessService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.channels = this.channels || [];
    this.channelId = this.channelId || null;
    
    if (this.channelId) {
      console.log('11111111');
      this.channel_detail = this.channels[0];
      this.getDetail(this.channelId);
    }
  }

  // getChannelDetial(channel_id: number) {
  //   this.choicenessService.getChannelDetial(channel_id).subscribe((detail) => {
  //     this.channel_detail = detail['data'];
  //     console.log(this.channel_detail);
  //   }, error => {
  //     console.error(error);
  //   });
  // }

  getDetail(channel_id: number) {
    this.choicenessService.getDetail(channel_id).subscribe((detail) => {
      this.detail = {
        file_path: this.channel_detail['file_path'] ? this.channel_detail['file_path'] : null,
        sub_name: this.channel_detail['name'],
        duration: this.channel_detail['duration'],
        author: detail['data'].podcasters ? detail['data'].podcasters[0].name : null,
        name: detail['data'].name,
        img_url: detail['data'].img_url
      };

      console.log(detail['data']);
      console.log(this.detail);
    }, error => {
      console.error(error);
    });
  }

}

import { Component } from '@angular/core';
import { NzMenu } from '@ngo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  menus: NzMenu = {
    mode: 'inline',
    data: [
      // 此时缩进菜单有bug
      {
        name: '全部文件',
        icon: 'bars',
        link: './demo/demo2',
        matchRouter: true
      },
      {
        title: '全部文件',
        icon: 'bars',
        children: [
          { link: './demo/demo1', name: '所有文件', matchRouter: true },
          { link: './demo/demo2', name: '图片', matchRouter: true }
        ]
      },
      {
        title: '全部文件',
        icon: 'bars',
        children: [
          { link: './demo/demo1', name: '所有文件', matchRouter: true },
          { link: './demo/demo2', name: '图片', matchRouter: true }
        ]
      }
    ]
    // children: [
    //   { link: './demo/demo1', name: '所有文件' },
    //   { link: './demo/demo2', name: '图片' }
    // ]
  };

  user = {
    name: 'syz',
    picture: 'http://qiniu.yonsunzhen.cn/%E5%A4%B4%E5%83%8F.jpg'
  };

  async logout() {

  }
}

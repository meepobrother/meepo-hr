import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { WechatService } from "../../../providers/wechat.service";
import { UtilService } from "../../../providers/util.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  search: string = "";
  options: any[] = [
    {
      value: 1,
      label: "0-50"
    },
    {
      value: 2,
      label: "50-100"
    },
    {
      value: 3,
      label: "100-500"
    },
    {
      value: 4,
      label: "500-1000"
    },
    {
      value: 5,
      label: "1000人以上"
    }
  ];
  s_options: any[] = [
    {
      value: 1,
      label: "天使轮"
    },
    {
      value: 2,
      label: "A轮"
    },
    {
      value: 3,
      label: "B轮"
    },
    {
      value: 4,
      label: "C轮"
    },
    {
      value: 5,
      label: "D轮"
    },
    {
      value: 6,
      label: "上市"
    },
    {
      value: 7,
      label: "未融资"
    }
  ];
  wzpCompanyid: number = 2;
  categoryId: any = 0;
  list: any[] = [];
  searchPage: any = {};
  config: any = {
    pageSize: 9,
    pageNum: 1,
    totalCount: 1
  };
  posId: number = 0;
  categoryName: string = "";
  all: any = [];
  getAllRecruit: string = "查看全部职位";
  showAll: string = "全部";
  companyName: string = "";
  nonceStr: boolean = true;
  imgUrl: string = "";
  title: string = "";
  desc: string = "";
  subcribeMap: any = {
    subcribeStatus: ""
  };
  careQrcode: boolean = false;
  officilQrcodeUrl: string = "";
  isAuthorization: number = 0;
  code: string = "";
  careHref: string = "";
  redirectUri: string = "";

  openId: string;
  shareOpenId: string;

  type: string = "";
  companyId: string = "";
  positionId: string = "";
  vcode: "";
  email: "";
  name: "";
  showScrollBox: false;
  showScrollBox1: true;

  @Input()
  homeData: any = {
    type: {}
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private $wechat: WechatService,
    private util: UtilService
  ) {
    this.route.queryParams.subscribe((res: any) => {
      this.companyId = res.companyId;
      this.type = res.type;
      this.code = res.code;
    });
  }

  ngOnInit() {
    this.getCode();
    this.toCare();
    this.getShareTitleInfo();
    this.all = "";
    window.scrollTo(0, 1);
    window.scrollTo(0, 0);
    localStorage.clear();
    if (localStorage.resumeFrom != "17") {
      localStorage.resumeFrom = "17";
    }
  }

  urlParse() {
    let url = window.location.href;
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    if (arr) {
      arr.forEach(item => {
        let tempArr = item.substring(1).split("=");
        let key = decodeURIComponent(tempArr[0]);
        let val = decodeURIComponent(tempArr[1]);
        obj[key] = val;
      });
    }
    return obj;
  }

  toCare() {
    let method = "subscribeWeChat/subscribeCompanyWeChat";
    let param = JSON.stringify({
      type: 2,
      companyId: this.companyId,
      code: this.code
    });
    var successd = function(res) {};
    this.http.post(method, param).subscribe((res: any) => {
      this.isAuthorization = res.data.data.subcribeStatus;
      this.officilQrcodeUrl = res.data.data.officilQrcodeUrl;
    });
  }

  getCodeUrl() {
    var method = "subscribeWeChat/getCodeUrl";
    var param = JSON.stringify({
      type: 2,
      companyId: this.companyId,
      redirectUri:
        "https://aijuhr.com/miniRecruit/#/?companyId=" + this.companyId + "",
      code: this.code
    });
    this.http.post(method, param).subscribe((res: any) => {
      if (res.data.data.codeUrl == "") {
      } else {
        location.href = res.data.data.codeUrl;
      }
    });
  }

  push() {
    this.router.navigate(["/about"], {
      queryParams: {
        companyId: this.companyId
      }
    });
  }

  goSearch() {
    this.all = "全部";
    this.router.navigate(["/list"], {
      queryParams: {
        companyId: this.companyId,
        search: this.search,
        all: this.all
      }
    });
  }

  SelectTo(item) {
    this.categoryId = item.categoryId;
    this.categoryName = item.name;
    for (var key in localStorage) {
      if (key != "resumeFrom") {
        localStorage.removeItem(key);
      }
    }
    localStorage.setItem("posId", this.categoryId);
    localStorage.setItem("posName", this.categoryName);

    this.router.navigate(["/list"], {
      queryParams: {
        companyId: this.companyId,
        showAll: this.showAll
      }
    });
  }

  toList() {
    for (var key in localStorage) {
      if (key != "resumeFrom") {
        localStorage.removeItem(key);
      }
    }
    this.router.navigate(["/list"], {
      queryParams: {
        all: this.all,
        companyId: this.companyId
      }
    });
  }

  getShareTitleInfo() {
    var method = "positionRecommend/getShareTitleInfo";
    let param = JSON.stringify({
      reqType: 3,
      companyId: this.companyId
    });
    this.http.post(method, param).subscribe((res: any) => {
      this.imgUrl = res.data.data.imgUrl;
      this.title = res.data.data.title;
      this.desc = res.data.data.desc;
      this.companyName = res.data.data.companyName;
      document.title = this.companyName;
      this.getSignature();
    });
  }

  getSignature() {
    this.http
      .get(
        this.util.wxSignature +
          "url=" +
          encodeURIComponent(location.href.split("#")[0])
      )
      .subscribe((res: any) => {
        this.$wechat.config({
          debug: false,
          appId: res.data.appid,
          timestamp: res.data.timestamp,
          nonceStr: res.data.noncestr,
          signature: res.data.signature,
          jsApiList: [
            "checkJsApi",
            "onMenuShareTimeline",
            "onMenuShareAppMessage",
            "onMenuShareQQ",
            "onMenuShareWeibo",
            "onMenuShareQZone",
            "hideMenuItems",
            "showMenuItems",
            "hideAllNonBaseMenuItem",
            "showAllNonBaseMenuItem",
            "translateVoice",
            "startRecord",
            "stopRecord",
            "onVoiceRecordEnd",
            "playVoice",
            "onVoicePlayEnd",
            "pauseVoice",
            "stopVoice",
            "uploadVoice",
            "downloadVoice",
            "chooseImage",
            "previewImage",
            "uploadImage",
            "downloadImage",
            "getNetworkType",
            "openLocation",
            "getLocation",
            "hideOptionMenu",
            "showOptionMenu",
            "closeWindow",
            "scanQRCode",
            "chooseWXPay",
            "openProductSpecificView",
            "addCard",
            "chooseCard",
            "openCard"
          ]
        });
        this.$wechat.ready(res => {
          this.$wechat.onMenuShareAppMessage({
            title: this.title,
            desc: this.desc,
            link:
              "https://aijuhr.com/miniRecruit/#/?companyId=" + this.companyId, //分享链接
            imgUrl: this.imgUrl, //分享图标
            type: "",
            dataUrl: "",
            success: () => {
              console.log("分享成功1");
            },
            cancel: () => {
              console.log("用户取消分享后执行的回调函数1");
            }
          });
          this.$wechat.onMenuShareTimeline({
            title: this.title,
            desc: this.desc,
            link:
              "https://aijuhr.com/miniRecruit/#/?companyId=" + this.companyId, //分享链接
            imgUrl: this.imgUrl, //分享图标
            success: () => {
              console.log("分享成功2");
            },
            cancel: () => {
              console.log("用户取消分享后执行的回调函数2");
            }
          });
        });
      });
  }
  getCompanyId() {
    return this.companyId;
  }
  getCode() {
    return this.code;
  }
  goCare() {
    if (this.isAuthorization == 1) {
      return;
    }
    this.careQrcode = true;
  }
}

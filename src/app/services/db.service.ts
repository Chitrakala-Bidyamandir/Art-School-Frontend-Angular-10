import { Injectable } from '@angular/core';

interface ImageStore {
  creators: any;
  events: any[];
  group_pics: any;
  quotes: any;
}
@Injectable({
  providedIn: 'root'
})
export class DbService {
  public PhotoDb: ImageStore;
  constructor() {
    this.PhotoDb ={
      creators: {
        "developer": "https://drive.google.com/uc?id=11cfDU3lKOJXVXcsUo-GdomZDJ_49tgrM",
        "initiator": "https://drive.google.com/uc?id=1ONs96Ka0Qfet4DuQNXzl1dgrFyEfpCjO",
        "teacher2": "https://drive.google.com/uc?id=1sYE-ivdRzgnMQ0mV2CameJ-GhLP52lsP",
        "teacher3": "https://drive.google.com/uc?id=1UGdxlBLuHd7-XhCs10xbbc5bgj0MA7Yh",
        "teacher4": "https://drive.google.com/uc?id=1BTeZLZuKUa8egBeuf6mqGME4J-2K-lft",
        "teacher5": "https://drive.google.com/uc?id=1FuVXnymUMJ3CubCLOfpW0O_aESs7cbj-",
      }
        
        
      ,
      events: [
        {
          "banner1": "https://drive.google.com/uc?id=1k4mHthB5C46JkxoC_dNF0tym9sIG7KUJ",
          "banner2": "https://drive.google.com/uc?id=1l1PiawzzAllCWBARWENZNBnjshUGEkKb",
        },
        {
          "pic1": "https://drive.google.com/uc?id=1SRsfdbIpS8LrsfBwkuk7zorTtithO5oB",
          "pic2": "https://drive.google.com/uc?id=1Wb3sGBkvWotRvOK6bmswZwdnFvB0gYsF",
          "pic3": "https://drive.google.com/uc?id=14YpEF5C1AyJS50vDN2LQvkxLRNLBspp7",
          "pic4": "https://drive.google.com/uc?id=12GhxT-PJkIdImrIKk4n6R5bI4SsyuhlH",
          "pic5": "https://drive.google.com/uc?id=1KPiCbiPAzRbV5dFHCiw6OxF5qAd29sGO",
          "pic6": "https://drive.google.com/uc?id=1l4h9UXcrRDeuWEP-VjwsQdLqPqBlxMpt",
          "pic7": "https://drive.google.com/uc?id=1DBR0knDQksyCLX8ICSKnJQRhLNXknXJH",
          "pic8": "https://drive.google.com/uc?id=1G-xpHW9mHSC6XN7_Aqpx9FMmVlHiTLsf",
          "pic9": "https://drive.google.com/uc?id=1t8rUwbG83B0CSzEFyF8ly3QxHPO31bOf",
          "pic10": "https://drive.google.com/uc?id=1EDfYun0TUERqokVBsH_OcwdZf3n3UnKz",
          "pic11": "https://drive.google.com/uc?id=15rI6ov6Lq01NODOXKKrnro_a44MDzffa",
          "pic12": "https://drive.google.com/uc?id=1q1CTJV0eqTGKQyrFi9fB2IRUaCxlTbXh",
          "pic13": "https://drive.google.com/uc?id=1xjm_Yp2Fwr561oViGu_4FkxHiFyHQY1x",
          "pic14": "https://drive.google.com/uc?id=1zNnfpl6C3a718eu0oyeLcPEMGSBlmVlN",
          "pic15": "https://drive.google.com/uc?id=1NMwZXe-f8f18hiv9YPBeJ-8MrTEtoU5_",
          "pic16": "https://drive.google.com/uc?id=1FQafSxcq61I9tpQIqiDzffm77-gW1akL",
          "pic17": "https://drive.google.com/uc?id=1JHL70WqWhtegmjyOScXbG9KvVNEeZ8lr",
        },
      ],
      group_pics: {
        "group1":"https://drive.google.com/uc?id=1p9yUn17hbOTinMrUeOENljYH58SPqc9F"
      },
      quotes: {
        "quotes1":"https://drive.google.com/uc?id=1hw6oAO0rZEUWCHDwYqMG2oZeXWtZNhSB",
        "quotes2":"https://drive.google.com/uc?id=1nDkG8KZBfgftv2BPE4DkbWVNb_6uOqn3",
        "quotes3":"https://drive.google.com/uc?id=1iRQwbVSec8CoOqhbTYcDPgOeTCpSub3p",
        "quotes4":"https://drive.google.com/uc?id=1kwNRD8iEnvj23_4SpSTFExG_xueM2aja",
        "quotes5":"https://drive.google.com/uc?id=1RFg_dsFW04xSJCe32sjbtoUI3ikoH3zJ",
        "quotes6":"https://drive.google.com/uc?id=1IpK6BBOSq7-dFnYsNqfNXV7IO_05WvpE",
        "quotes7":"https://drive.google.com/uc?id=12jamXp7oc-BVZKkwlbYiJ0vC3fn8IkNP",
        "quotes8":"https://drive.google.com/uc?id=168C2y7YUpjHJDgJMcZbMbUMuqoMlw6xp"
      }
    } 
      
      
    
  }
}

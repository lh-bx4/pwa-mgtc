import { Injectable, HostListener} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VarService {

  private static scrH:number;
  private static scrW:number;
  private static mH:number;
  private static ntH:number = 30;
  private static readonly mC:number = 5;
  private static mclrs = ["#A62C23","#8C251D","#661B15","#4d1410","#330D0B","#2B0906"];

  public static get SCRH():number { return this.scrH; }
  public static get SCRW():number { return this.scrW; }
  public static get NTH():number { return this.ntH; }
  public static get MH():number { return this.mH; }
  public static get PH():number { return this.mH*4; }
  public static get MEMBERS() { return this.members; }
  public static get SECTIONS() { return this.sections; }
  public static get FLYERS() { return this.flyers; }
  public static get SONGS() { return this.songs; }
  public static get PARTYS() { return this.partys; }

  public static getMCLR(n:number, a:string="FF"):string { return this.mclrs[n]+a; }
  public static getL(n:number):string { return this.links[n]; }
  public static gradient(fc:string, ec:string, angle) {
    return "linear-gradient("+angle+","+fc+" 0, "+ec+" 100%)";;
  }

  init() {
    VarService.scrH=window.innerHeight;
    VarService.scrW=window.innerWidth;
    VarService.ntH=(VarService.scrH-VarService.ntH)%VarService.mC+VarService.ntH;
    VarService.mH=(VarService.scrH-VarService.ntH)/VarService.mC;
    console.log("VarService Initialised");
    console.log("SCR::"+VarService.SCRW+":"+VarService.SCRH);
    console.log("NTH::"+VarService.NTH+" | MH:"+VarService.MH);
    // get party state in terms of date
  }

  constructor() {
    this.init();
  }

  private static members = [
    {name:"Anna BUTTAZZONI - Toad", lore:"For the glory of the muSTHroom kingdom !", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Eddy GUILLON - Kiss", lore:"T’en fais pas. Viens prendre ton bisou magique et tout ira mieux.", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Jeremie Carpentier - D’ZY", lore:"Peach en low-cost. Carapace rouge sur Toad", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Louise CHARLES- Wolf", lore:"Je ne sors que les soirs de pleine lune", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Louis HOAREAU - XV", lore:"Jamais 2 sans 3 fois 5", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Lucas JOLY - Atchoum", lore:"A mes souhaits", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Lucas TRUPCEVIC - SPLASH", lore:"Et ça fait BIM BAM PLOUF…", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Ophélie EVIEUX - VETO", lore:"Il faut bien que quelqun s’occupe du Minautore.", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Tiffaine Bailly - TOUILLETTE", lore:"Ma bassine, c’est ma meilleure amie", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"_", lore:"_", src:'../../assets/files/team/polo/POLO_nom.JPG'},
  ];
  static sections = [
    {id:0, title:"Pole A&I", lore:"-", state:false},
    {id:1, title:"Pole Accueil", lore:"Ce petit pôle a une unique mission : accueillir tout le monde ! On organise des événments, on offre des cadeaux, on vous fait découvrir tout le nécessaire pour s’armer à une année à l’INSA !!! On aime aussi faire des câlins ;) A travers des journées d’accueil, un WEB de trois jours, des cadeaux, du rire et de l’amour, vous serez préparez à découvrir, et aimer notre école, ses étudiants et ses alentours !",state:false},
    {id:2, title:"Pole AEI", lore:"Le pôle AEI a pour rôle de faire le liens entre le BDE de l'insa de Strasbourg et les autres INSA. Il prend place au sein du bureau de gestion de l'Association des Elèves des INSA. Association qui a pour but de rapprocher les élèves au travers d'événements inter-INSA mais aussi de représenter les élèves du groupe INSA.",state:false},
    {id:3, title:"Pole Bureau", lore:"-",state:false},
    {id:4, title:"Pole Club", lore:"-",state:false},
    {id:5, title:"Pole Com", lore:"-",state:false},
    {id:6, title:"Pole Culture", lore:"-",state:false},
    {id:7, title:"Pole FIP", lore:"-",state:false},
    {id:8, title:"Pole International", lore:"-",state:false},
    {id:9, title:"Pole Multi", lore:"Le Pôle multi sert à développer les outils nécessaire au bons fonctionnement du BDE. Les objectifs principaux sont la pérennisation de l’application du BDE, l’ajout de fonctionnalité à l’application… +- de détails comme vous voulez.",state:false},
    {id:10, title:"Pole Partenariat", lore:"-",state:false},
    {id:11, title:"Pole Prev DD", lore:"-",state:false},
    {id:12, title:"Pole Réseau", lore:"-",state:false},
    {id:13, title:"Pole Soirées", lore:"-",state:false},
    {id:14, title:"Pole STH", lore:"Le pôle STH est responsable de l’organisation d'événements concernants les étudiants en première année. Ses objectifs sont de faire entrer les étudiants dans l’univers de l’Insa Strasbourg, tant scolairement que extra-scolairement.",state:false},
  ];
  static flyers = [
    {id:0, title:"Jour 1", path:"../../assets/files/campaign/flyer_1.pdf"},
    {id:1, title:"Jour 2", path:"../../assets/files/campaign/flyer_2.pdf"},
    {id:2, title:"Jour 3", path:"../../assets/files/campaign/flyer_3.pdf"},
    {id:3, title:"Jour 4", path:"../../assets/files/campaign/flyer_4.pdf"}
  ];
  static songs = [
    {id:0, title:"Musique 1", lyrics:"blabla\nblala", state:false},
    {id:1, title:"Musique 2", lyrics:"drla\nblala", state:false}
  ];
  static partys = [
    {name:"Soft 1", date:"00/00/00 hh:mm", theme:"Jeux", src:"../../assets/files/party/party_soft_1.png", spoil:true},
    {name:"Hard 1", date:"00/00/00 hh:mm", theme:"Jeux", src:"../../assets/files/party/party_hard_1.png", spoil:true},
    {name:"Soft 2", date:"00/00/00 hh:mm", theme:"Jeux", src:"../../assets/files/party/party_soft_2.png", spoil:true},
    {name:"Hard 2", date:"00/00/00 hh:mm", theme:"Jeux", src:"../../assets/files/party/party_hard_2.png", spoil:true}
  ];
  // TODO links !
  static links = [
    "https://magellantic.forumactif.com",
    "https://www.facebook.com",
    "https://www.instagram.com/?hl=fr",
    "http://snap",
    "http://http://magell1nuits.fr/"
  ]

}

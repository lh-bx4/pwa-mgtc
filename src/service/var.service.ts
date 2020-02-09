import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VarService {

  @HostListener('window:resize', ['$event'])
  onResize(event?){
    VarService.scrH=window.innerHeight;
    VarService.scrW=window.innerWidth;
    VarService.ntH=(VarService.scrH-VarService.ntH)%VarService.mC+VarService.ntH;
    VarService.mH=(VarService.scrH-VarService.ntH)/VarService.mC;
    console.log("Resized [SCR::"+VarService.SCRW+":"+VarService.SCRH+"] [NTH::"+VarService.NTH+" | MH:"+VarService.MH+"]");
  }
  
  public static get DEVMODE() {return true}

  public static get ICO() { return "../assets/icon/notif_ico.png"}
  public static get BDG() { return "../assets/icon/notif_badge.png"}

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
    this.onResize();
    // get party state in terms of date
  }

  constructor() {
    this.init();
  }

  private static members = [
    {name:"Anna Buttazzoni - Toad", lore:"For the glory of the muSTHroom kingdom !", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Eddy Guillon - Kiss", lore:"T’en fais pas. Viens prendre ton bisou magique et tout ira mieux.", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Jérémie Carpentier - D’ZY", lore:"Peach en low-cost. Carapace rouge sur Toad", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Louise Charles- Wolf", lore:"Je ne sors que les soirs de pleine lune", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Louis Hoareau - XV", lore:"Jamais 2 sans 3 fois 5", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Lucas Joly - Atchoum", lore:"A mes souhaits", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Lucas Trupcevic - SPLASH", lore:"Et ça fait BIM BAM PLOUF…", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Ophélie Evieux - VETO", lore:"Il faut bien que quelqun s’occupe du Minautore.", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Tiffaine Bailly - TOUILLETTE", lore:"Et tu chantes chantes chantes ce refrain qui te plait, et tu touilles touilles touilles c’est ta façon d’aimer", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Flavien CHASSARD - Petit Poucet", lore:"Il y a pas de bonne ou mauvaise manière de retrouver son chemin", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Mélanie BEDUER - Melanight", lore:"Qu'on me donne l'obscurité puis la lumière", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Tom SERVIERE - Denied", lore:"Toujours un plan B", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Coline PITHON - Turbo", lore:"Ca commence sur les chapeaux de roue et ça finit dans le décor", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Sophie Tardy - OLY", lore:"Oly mais pas couchée", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Jules Mehn - Panoramix", lore:"Une petite louche et c'est reparti", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Loïc Cholvy - L'élu", lore:"Gainez, vous êtes filmées", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Killian Baucor - Hawkings", lore:"Les trous noirs ça me connaît", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Jérémie Wasmer - La Croix", lore:"Il vaut mieux rester debout que de finir en croix", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Adrien Thomas - Belpech", lore:"Par dessus l'étang, soudain j'ai vu, passer les oies sauvages", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Antonin Rigau - Rolex", lore:"Désolé pour le retard. Quelqu'un a vu ma montre ?", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Lucas Nikolovski - Dior", lore:"Pas besoin d'habits pour être une perle", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Joris Garnier - Fireman", lore:"On est on Fire !", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Gaëlle Compin - Totem", lore:"Une fête est unu excès permis, voire ordonné. Freud", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Amélie Douzet - Godzilla", lore:"J'adore tout détruire ! RROOOAAAARR (ceci est l'onomatopée du cri du dinosaure)", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Laura Premet - Donatello", lore:"COWABUNGA", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Léa Gourdès - ALKALINE", lore:"Deux fois plus puissante qu'une Duracell ;)", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Valentin Barlaud - MIAOU", lore:"Qu'est-ce-qu'il dit lui ?", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Maxime Terrier - La Source", lore:"Mon surnom coule de source", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Quentin Morel - Rave", lore:"Bett -.- oli. Et plus compliqué T-los", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Tom Seger - Suez", lore:"Bandes de canals, vous allez tous crever comme des canals ! Mais ça faisait deux fois canals. Quoi ? On dit des canaux ?", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Lola Doyhenard - Slide", lore:"Championne olympique de la glisse", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Denis Kuy - Kuysto", lore:"On va vous mijoter un BDE aux petits oignons !", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Hugo François - Cata", lore:"Faut-il vraimnt une explication ?", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Alexandre Gonzalez - Applause", lore:"Il dégaine plus vite qu'il applaudit", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Julie Zinnie - Bobo", lore:"La campagne des Magell'antic, aïe ça va faire mal !", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Samuel Missioux - Patoche", lore:"...", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Baptiste Gaumont - LDM", lore:"En cape tchana baby", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Lauraline Antoine - Wesh", lore:"AALORS ! Viens pas sur mon terter !", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Sabrina Desjobert - Strampa", lore:"La cata corse débarque", src:'../../assets/files/team/polo/POLO_nom.JPG'},
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
    {id:0, title:"Jour 1", path:"../../assets/files/campaign/flyer_1.pdf", spoil:new Date('2020-04-11T10:20:30Z')<new Date()},
    {id:1, title:"Jour 2", path:"../../assets/files/campaign/flyer_2.pdf", spoil:new Date('2020-04-11T10:20:30Z')<new Date()},
    {id:2, title:"Jour 3", path:"../../assets/files/campaign/flyer_3.pdf", spoil:new Date('2020-04-11T10:20:30Z')<new Date()},
    {id:3, title:"Jour 4", path:"../../assets/files/campaign/flyer_4.pdf", spoil:new Date('2020-04-11T10:20:30Z')<new Date()}
  ];
  static songs = [
    {id:0, title:"Musique 1", lyrics:"blabla\nblala", state:false},
    {id:1, title:"Musique 2", lyrics:"drla\nblala", state:false}
  ];
  static partys = [
    {name:"Soft 1", date:"00/00/00 hh:mm", theme:"Jeux", src:"../../assets/files/party/party_soft_1.png", spoil:new Date('2020-04-11T10:20:30Z')<new Date()},
    {name:"Hard 1", date:"00/00/00 hh:mm", theme:"Jeux", src:"../../assets/files/party/party_hard_1.png", spoil:new Date('2011-04-11T10:20:30Z')<new Date()},
    {name:"Soft 2", date:"00/00/00 hh:mm", theme:"Jeux", src:"../../assets/files/party/party_soft_2.png", spoil:new Date('2011-04-11T10:20:30Z')<new Date()},
    {name:"Hard 2", date:"00/00/00 hh:mm", theme:"Jeux", src:"../../assets/files/party/party_hard_2.png", spoil:new Date('2011-04-11T10:20:30Z')<new Date()}
  ];
  // TODO links !
  static links = [
    "https://magellantic.forumactif.com",
    "https://www.facebook.com",
    "https://www.instagram.com/?hl=fr",
    "http://snap",
    "http://magell1nuits.fr/"
  ]

}

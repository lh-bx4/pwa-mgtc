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
    {name:"Anna Buttazzoni - Toad", lore:"FoR the gloRy of the muSTHRoom kingdom !", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Eddy Guillon - Kiss", lore:"T’en fais pas. Viens pRendRe ton bisou magique et tout iRa mieux.", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"JéRémie CaRpentieR - D’ZY", lore:"Peach en low-cost. CaRapace Rouge suR Toad", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Louise ChaRles- Wolf", lore:"Je ne soRs que les soiRs de pleine lune", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Louis HoaReau - XV", lore:"Jamais 2 sans 3 fois 5", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Lucas Joly - Atchoum", lore:"A mes souhaits", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Lucas TRupcevic - SPLASH", lore:"Et ça fait BIM BAM PLOUF…", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Ophélie Evieux - VETO", lore:"Il faut bien que quelqun s’occupe du MinautoRe.", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Tiffaine Bailly - TOUILLETTE", lore:"Et tu chantes chantes chantes ce RefRain qui te plait, et tu touilles touilles touilles c’est ta façon d’aimeR", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Flavien ChassaRd - Petit Poucet", lore:"Il y a pas de bonne ou mauvaise manièRe de RetRouveR son chemin", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Mélanie BedueR - Melanight", lore:"Qu'on me donne l'obscuRité puis la lumière", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Tom SeRvièRe - Denied", lore:"ToujouRs un plan B", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Coline Pithon - TuRbo", lore:"Ca commence suR les chapeaux de Roue et ça finit dans le décoR", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Sophie TaRdy - OLY", lore:"Oly mais pas couchée", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Jules Mehn - PanoRamix", lore:"Une petite louche et c'est RepaRti", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Loïc Cholvy - L'élu", lore:"Gainez, vous êtes filmées", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Killian BaucoR - Hawkings", lore:"Les tRous noiRs ça me connaît", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"JéRémie WasmeR - La CRoix", lore:"Il vaut mieux ResteR debout que de finiR en cRoix", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"AdRien Thomas - Belpech", lore:"PaR dessus l'étang, soudain j'ai vu, passeR les oies sauvages", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Antonin Rigau - Rolex", lore:"Désolé pouR le retaRd. Quelqu'un a vu ma montRe ?", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Lucas Nikolovski - DioR", lore:"Pas besoin d'habits pouR êtRe une peRle", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"JoRis GaRnieR - FiReman", lore:"On est on FiRe !", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Gaëlle Compin - Totem", lore:"Une fête est un excès peRmis, voire oRdonné. FReud", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Amélie Douzet - Godzilla", lore:"J'adoRe tout détRuiRe ! RROOOAAAARR (ceci est l'onomatopée du cRi du dinosauRe)", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"LauRa PRemet - Donatello", lore:"COWABUNGA", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Léa GouRdès - ALKALINE", lore:"Deux fois plus puissante qu'une DuRacell ;)", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Valentin BaRlaud - MIAOU", lore:"Qu'est-ce-qu'il dit lui ?", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Maxime TeRRieR - La SouRce", lore:"Mon suRnom coule de souRce", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Quentin MoRel - Rave", lore:"Bett -.- ioli. Et plus compliqué T-los", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Tom SegeR - Suez", lore:"Bandes de canals, vous allez tous cReveR comme des canals ! Mais ça faisait deux fois canals. Quoi ? On dit des canaux ?", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Lola DoyhenaRd - Slide", lore:"Championne olympique de la glisse", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Denis Kuy - Kuysto", lore:"On va vous mijoteR un BDE aux petits oignons !", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Hugo FRançois - Cata", lore:"Faut-il vraiment une explication ?", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"AlexandRe Gonzalez - Applause", lore:"Il dégaine plus vite qu'il applaudit", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Julie Zinnie - Bobo", lore:"La campagne des Magell'antic, aïe ça va faiRe mal !", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Samuel Missioux - Patoche", lore:"...", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"Baptiste Gaumont - LDM", lore:"En cape tchana baby", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"LauRaline Antoine - Wesh", lore:"AALORS ! Viens pas sur mon teRteR !", src:'../../assets/files/team/polo/POLO_nom.JPG'},
    {name:"SabRina DesjobeRt - StRampa", lore:"La cata coRse débaRque", src:'../../assets/files/team/polo/POLO_nom.JPG'},
  ];
  static sections = [
    {id:0, title:"Pôle A&I", lore:"Le pôle ARts & IndustRies a pouR objectif de faiRe se RencontReR les étudiants de l’INSA StRasbouRg et les membRes de l’association ARts & IndustRies.", state:false},
    {id:1, title:"Pôle Accueil", lore:"Ce petit pôle a une unique mission : accueilliR tout le monde ! On oRganise des événements, on offRe des cadeaux, on vous fait découvRiR tout le nécessaiRe pouR s’aRmeR à une année à l’INSA !!! On aime aussi faiRe des câlins ;) A tRaveRs des jouRnées d’accueil, un WEB de tRois jouRs, des cadeaux, du RiRe et de l’amouR, vous seRez pRépaRés à découvRiR, et aimeR notRe école, ses étudiants et ses alentouRs !",state:false},
    {id:2, title:"Pôle AEI", lore:"Le pôle AEI a pouR Rôle de faiRe le liens entRe le BDE de l'insa de StRasbouRg et les autRes INSA. Il pRend place au sein du buReau de gestion de l'Association des Elèves des INSA. Association qui a pouR but de RappRocheR les élèves au tRaveRs d'événements inteR-INSA mais aussi de RepRésenteR les élèves du gRoupe INSA.",state:false},
    {id:3, title:"Pôle BuReau", lore:"L’objectif pRincipal du buReau est d’assuReR la cohésion et la logistique entRe les difféRents pôles, l’administRation et les oRganismes extéRieuRs à l’INSA StRasbouRg.",state:false},
    {id:4, title:"Pôle Club", lore:"NotRe but : pRomouvoiR les clubs de l'INSA et faiRe le lien entRe l'administRation, les élèves et les clubs.",state:false},
    {id:5, title:"Pôle Com", lore:"Cette année tu auRas le plaisiR de communiqueR avec HectoR, qui pouRRa facilement t'aiguilleR dans ta quête d'infoRmation. Et gRâce à instagRam tu pouRRas te teniR infoRmé en images/vidéos suR toute l'actu de l'insa. Nous, le pôle com Rouge seRont la pouR faciliteR la communication des élèves veRs ton BDE.",state:false},
    {id:6, title:"Pôle Culture", lore:"Le pôle CultuRe a pouR objectif de pRoposeR aux Insassiens des activités enRichissantes de paR leuR oRiginalité ou leuR instRuction.",state:false},
    {id:7, title:"Pôle FIP", lore:"Le pôle FIP est là pouR dynamiseR la Relation entre les étudiants fip et les initiaux.",state:false},
    {id:8, title:"Pôle InteRnational", lore:"Le pôle inteRnationnal est là pouR s'occupeR de l'accueil des élèves inteRnationaux et faciliteR les mobilités à l'étRanger pouR les étudiants de l'INSA.",state:false},
    {id:9, title:"Pôle Multi", lore:"Le Pôle multi seRt à développeR les outils nécessaiRe au bons fonctionnement du BDE. Les objectifs pRincipaux sont la péRennisation de l’application du BDE, l’ajout de fonctionnalité à l’application… +- de détails comme vous voulez.",state:false},
    {id:10, title:"Pôle PaRtenaRiat", lore:"Le Rôle majeuR du pôle paRtenaRiat est d'entReteniR les paRtenaiRes du BDE afin de faciliteR la vie des étudiants et de souteniR le BDE paR des aides financièRes. ",state:false},
    {id:11, title:"Pôle PRev DD", lore:"Le pôle pRévention peRmet de sensibiliseR les élèves à des thématiques diveRses! ",state:false},
    {id:12, title:"Pôle Réseau", lore:"Le pôle Réseau est là pouR connecteR l'INSA aux autRes écoles fRancaises.",state:false},
    {id:13, title:"Pôle SoiRées", lore:"Le Rôle pRincipal du pôle soiRée est d’oRganiseR des évènements festifs et distRayants pouR les élèves de l’école. De plus, il peRmet de mettRe en avant les étudiants de l’école de manièRe singulièRe avec des évènements ayant pouR vocation une ouveRtuRe musicale mais aussi cultuRelle.",state:false},
    {id:14, title:"Pôle STH", lore:"Le pôle STH est Responsable de l’oRganisation d'événements conceRnants les étudiants en pRemière année. Ses objectifs sont de faiRe entReR les étudiants dans l’univeRs de l’Insa StRasbouRg, tant scolaiRement que extRa-scolaiRement.",state:false},
  ];
  static flyers = [
    {id:0, title:"Jour 1", path:"../../assets/files/campaign/flyer_1.pdf", spoil:new Date('2020-02-11T10:20:30Z')<new Date()},
    {id:1, title:"Jour 2", path:"../../assets/files/campaign/flyer_2.pdf", spoil:new Date('2020-02-11T10:20:30Z')<new Date()},
    {id:2, title:"Jour 3", path:"../../assets/files/campaign/flyer_3.pdf", spoil:new Date('2020-02-11T10:20:30Z')<new Date()},
    {id:3, title:"Jour 4", path:"../../assets/files/campaign/flyer_4.pdf", spoil:new Date('2020-02-11T10:20:30Z')<new Date()}
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

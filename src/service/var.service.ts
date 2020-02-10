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
  public static p(msg:string):void { if (this.DEVMODE) console.log(msg); }
  public static get ICO() { return "../../assets/files/team/polo/icon-72x72.png"}
  public static get BDG() { return "../../assets/icons/ui_forum.png"}

  private static NotifyAble:boolean = true;
  //private static OpSys;
  private static scrH:number;
  private static scrW:number;
  private static mH:number;
  private static ntH:number = 30;
  private static readonly mC:number = 5;
  private static mclrs = ["#A62C23","#8C251D","#661B15","#4d1410","#330D0B","#2B0906"];

  //public static get OS():string { return this.OpSys;}
  public static get SCRH():number { return this.scrH; }
  public static get NA():boolean { return this.NotifyAble; }
  public static get SCRW():number { return this.scrW; }
  public static get NTH():number { return this.ntH; }
  public static get MH():number { return this.mH; }
  public static get PH():number { return this.mH*4; }
  public static get MEMBERS() { return this.members; }
  public static get SECTIONS() { return this.sections; }
  public static get FLYERS() { return this.flyers; }
  public static get SONGS() { return this.songs; }
  public static get PARTYS() { return this.partys; }
  public static get LYRICS() { return this.lyrics; }
  public static get PARTNERS() { return this.partners; }
  public static get MENUS() { return this.menus; }


  public static getMCLR(n:number, a:string="FF"):string { return this.mclrs[n]+a; }
  public static getL(n:number):string { return this.links[n]; }
  public static gradient(fc:string, ec:string, angle) {
    return "linear-gradient("+angle+","+fc+" 0, "+ec+" 100%)";;
  }

  init() {
    //VarService.OpSys=this.getMobileOperatingSystem();
    this.onResize();
    // get party state in terms of date
  }

  static CheckCompatibility() {
    try {
      Notification;
    } catch (error) {
      console.log("! This OS doesn't handle notifications.");
      VarService.NotifyAble=false;
    }
  }

  /*getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor;
  
        // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        console.log("Windows Phone");
        return "Windows Phone";
      }
  
      if (/android/i.test(userAgent)) {
        console.log("Android");
          return "Android";
      }
  
      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent)) {
        console.log("iOS");
          return "iOS";
      }
  
      return "unknown";
  }*/

  static onRedirect(str:string) {
    alert("Vous allez être redirigé vers "+str);
    window.open(str);
  }

  constructor() {
    this.init();
    VarService.CheckCompatibility();
  }

  private static members = [
    {name:"Anna Buttazzoni - Toad", lore:"For the glory of the muSTHroom kingdom !", src:'../../assets/files/team/polo/POLO_ANNAB.jpg'},
    {name:"Eddy Guillon - Kiss", lore:"T’en fais pas. Viens prendre ton bisou magique et tout ira mieux.", src:'../../assets/files/team/polo/POLO_EDDYG.jpg'},
    {name:"Jérémie Carpentier - D’ZY", lore:"Peach en low-cost. Carapace rouge sur Toad", src:'../../assets/files/team/polo/POLO_JEREMIEC.jpg'},
    {name:"Louise Charles- Wolf", lore:"Je ne sors que les soirs de pleine lune", src:'../../assets/files/team/polo/POLO_LOUISEC.jpg'},
    {name:"Louis Hoareau - XV", lore:"Jamais 2 sans 3 fois 5", src:'../../assets/files/team/polo/POLO_LOUISH.jpg'},
    {name:"Lucas Joly - Atchoum", lore:"A mes souhaits", src:'../../assets/files/team/polo/POLO_LUCASJ.jpg'},
    {name:"Lucas Trupcevic - SPLASH", lore:"Et ça fait BIM BAM PLOUF…", src:'../../assets/files/team/polo/POLO_LUCAST.jpg'},
    {name:"Ophélie Evieux - VETO", lore:"Il faut bien que quelqun s’occupe du Minautore.", src:'../../assets/files/team/polo/POLO_OPHELIEE.jpg'},
    {name:"Tiffaine Bailly - Touillette", lore:"Et tu chantes chantes chantes ce refrain qui te plait, et tu touilles touilles touilles c’est ta façon d’aimer", src:'../../assets/files/team/polo/POLO_TIFFAINEB.jpg'},
    {name:"Flavien CHASSARD - Petit Poucet", lore:"Il n'y a pas de bonne ou mauvaise manière de retrouver son chemin", src:'../../assets/files/team/polo/POLO_FLAVIENC.jpg'},
    {name:"Mélanie BEDUER - Melanight", lore:"Qu'on me donne l'obscurité puis la lumière", src:'../../assets/files/team/polo/POLO_MELANIEB.jpg'},
    {name:"Tom SERVIERE - Denied", lore:"Toujours un plan B", src:'../../assets/files/team/polo/POLO_TOMSEV.jpg'},
    {name:"Coline PITHON - Turbo", lore:"Ca commence sur les chapeaux de roue et ça finit dans le décor", src:'../../assets/files/team/polo/POLO_COLINEP.jpg'},
    {name:"Sophie Tardy - OLY", lore:"Oly mais pas couchée", src:'../../assets/files/team/polo/POLO_SOPHIET.jpg'},
    {name:"Jules Mehn - Panoramix", lore:"Une petite louche et c'est reparti", src:'../../assets/files/team/polo/POLO_JULESM.jpg'},
    {name:"Loïc Cholvy - L'élu", lore:"Gainez, vous êtes filmées", src:'../../assets/files/team/polo/POLO_LOICC.jpg'},
    {name:"Killian Baucor - Hawkings", lore:"Les trous noirs ça me connaît", src:'../../assets/files/team/polo/POLO_KILLIANB.jpg'},
    {name:"Jérémie Wasmer - La Croix", lore:"Il vaut mieux rester debout que de finir en croix", src:'../../assets/files/team/polo/POLO_JEREMIEW.jpg'},
    {name:"Adrien Thomas - Belpech", lore:"Par dessus l'étang, soudain j'ai vu, passer les oies sauvages", src:'../../assets/files/team/polo/POLO_ADRIENT.jpg'},
    {name:"Antonin Rigau - Rolex", lore:"Désolé pour le retard. Quelqu'un a vu ma montre ?", src:'../../assets/files/team/polo/POLO_ANTONINR.jpg'},
    {name:"Lucas Nikolovski - Dior", lore:"Pas besoin d'habits pour être une perle", src:'../../assets/files/team/polo/POLO_LUCASN.jpg'},
    {name:"Joris Garnier - Fireman", lore:"On est on Fire !", src:'../../assets/files/team/polo/POLO_JORISG.jpg'},
    {name:"Gaëlle Compin - Totem", lore:"Une fête est un excès permis, voire ordonné. Freud", src:'../../assets/files/team/polo/POLO_GAELLEC.jpg'},
    {name:"Amélie Douzet - Godzilla", lore:"J'adore tout détruire ! RROOOAAAARR (ceci est l'onomatopée du cri du dinosaure)", src:'../../assets/files/team/polo/POLO_AMELIED.jpg'},
    {name:"Laura Premet - Donatello", lore:"COWABUNGA", src:'../../assets/files/team/polo/POLO_LAURAP.jpg'},
    {name:"Léa Gourdès - ALKALINE", lore:"Deux fois plus puissante qu'une Duracell ;)", src:'../../assets/files/team/polo/POLO_LEAG.jpg'},
    {name:"Valentin Barlaud - MIAOU", lore:"Qu'est-ce-qu'il dit lui ?", src:'../../assets/files/team/polo/POLO_VALB.jpg'},
    {name:"Maxime Terrier - La Source", lore:"Mon surnom coule de source", src:'../../assets/files/team/polo/POLO_MAXIMET.jpg'},
    {name:"Quentin Morel - Rave", lore:"Bett- . -oli. Et plus compliqué T-los", src:'../../assets/files/team/polo/POLO_QUENTINM.jpg'},
    {name:"Tom Seger - Suez", lore:"Bandes de canals, vous allez tous crever comme des canals ! Mais ça faisait deux fois canals. Quoi ? On dit des canaux ?", src:'../../assets/files/team/polo/POLO_TOMSEG.jpg'},
    {name:"Lola Doyhenard - Slide", lore:"Temps de descente : 3 secondes (ce n'est pas ce que vous croyez)", src:'../../assets/files/team/polo/POLO_LOLAD.jpg'},
    {name:"Denis Kuy - Kuysto", lore:"On va vous mijoter un BDE aux petits oignons !", src:'../../assets/files/team/polo/POLO_DENISK.jpg'},
    {name:"Hugo François - Cata", lore:"Faut-il vraiment une explication ?", src:'../../assets/files/team/polo/POLO_HUGOF.jpg'},
    {name:"Alexandre Gonzalez - Applause", lore:"Il dégaine plus vite qu'il applaudit", src:'../../assets/files/team/polo/POLO_ALEXANDREG.jpg'},
    {name:"Julie Zinnie - Bobo", lore:"La campagne des Magell'antic, aïe ça va faire mal !", src:'../../assets/files/team/polo/POLO_JULIEZ.jpg'},
    {name:"Samuel Missioux - Patoche", lore:"Alors, on n'attend pas patoche ?", src:'../../assets/files/team/polo/POLO_SAMUELM.jpg'},
    {name:"Baptiste Gaumont - LDM", lore:"En cape tchana baby", src:'../../assets/files/team/polo/POLO_BAPTISTEG.jpg'},
    {name:"Lauraline Antoine - Wesh", lore:"AALORS ! Viens pas sur mon terter !", src:'../../assets/files/team/polo/POLO_LAURALINEA.jpg'},
    {name:"Sabrina Desjobert - Strampa", lore:"La cata corse débarque", src:'../../assets/files/team/polo/POLO_SABRINAD.jpg'},
  ];
  static sections = [
    {id:0, content:1, title:"Pôle A&I", video:'https://youtu.be/embed/rUAwl-PiZaA', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"Le pôle Arts & Industries a pour objectif de faire se rencontrer les étudiants de l’INSA Strasbourg et les membres de l’association Arts & Industries", state:false},
    {id:1, content:1, title:"Pôle Accueil", video:'https://youtu.be/embed/sH4v37fCQ0o', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"Accueillir, aider, rencontrer, rigoler : telle est la devise du Pôle Acueil !",state:false},
    {id:2, content:1, title:"Pôle AEI", video:'https://youtu.be/embed/oGeEUYW9CKs', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"Le pôle AEI a pour rôle de faire le liens entre le BDE de l'insa de Strasbourg et les autres INSA. Il prend place au sein du bureau de gestion de l'Association des Elèves des INSA. Association qui a pour but de rapprocher les élèves au travers d'événements inter-INSA mais aussi de représenter les élèves du groupe INSA.",state:false},
    {id:3, content:1, title:"Pôle Bureau", video:'https://www.youtube.com/embed/pjwGpx-1_Q8', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"L’objectif principal du bureau est d’assurer la cohésion et la logistique entre les différents pôles, l’administration et les organismes extérieurs à l’INSA Strasbourg.",state:false},
    {id:4, content:1, title:"Pôle Club", video:'https://youtu.be/embed/B5aHnsn4zcA', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"Notre mission : promouvoir les clubs de l'INSA et faire le lien entre l'administration, les élèves et les clubs !",state:false},
    {id:5, content:1, title:"Pôle Com", video:'https://youtu.be/embed/pjwGpx-1_Q8', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"Cette anée tu auras le plaisir de communiquer avec Hector, qui pourra facilement t'aiguiller dans ta quête d'information. Et grâce à instagram tu pourras te tenir informé en images/vidéos sur toute l'actu de l'insa. Nous, le pôle com rouge seront la pour faciliter la communication des élèves vers ton BDE.",state:false},
    {id:6, content:1, title:"Pôle Culture", video:'https://youtu.be/embed/OxwY90T927o', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"Si t’as envie d’aller au théâtre, de faire une initiation au Self-défense ou d’assister à un match de hockey, le pôle Culture est fait pour toi !",state:false},
    {id:7, content:1, title:"Pôle FIP", video:'https://youtu.be/embed/3wik3rshVLs', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"Le pôle FIP est là pour représenter les élèves en alternance. Il est aussi là pour les encourager à participer aux événements organisés par le BDE et à la vie associative de l’école.",state:false},
    {id:8, content:1, title:"Pôle International", video:'https://youtu.be/embed/pjwGpx-1_Q8', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"Accueille les internationnaux et encourae à la mobilité, le pôle internationnal ouvre ton esprit !",state:false},
    {id:9, content:1, title:"Pôle Multi", video:'https://youtu.be/embed/WzbO_abt82s', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"Le Pôle multi sert à développer les outils nécessaire au bons fonctionnement du BDE. Les objectifs principaux sont la pérennisation de l’application du BDE, l’ajout de fonctionnalité à l’application… +- de détails comme vous voulez.",state:false},
    {id:10, content:1, title:"Pôle Partenariat", video:'https://youtu.be/embed/7zU4QJBFoCI', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"Le rôle majeur du pôle partenariat est d'entretenir les partenaires du BDE afin de faciliter la vie des étudiants et de soutenir le BDE par des aides financières.",state:false},
    {id:11, content:1, title:"Pôle Prev DD", video:'https://youtu.be/embed/pnGwZ3Dbe3w', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"Le pôle prévention permet de sensibiliser les élèves à des thématiques diverses!",state:false},
    {id:12, content:1, title:"Pôle Réseau", video:'https://youtu.be/embed/zC0pCi2dseI', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"Le pole Réseau est là pour connecter l'INSA aux autres écoles francaises.",state:false},
    {id:13, content:1, title:"Pôle Soirées", video:'https://youtu.be/embed/HUNDOEz_K_0', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"Le rôle principal du pôle soirée est d’organiser des évènements festifs et distrayants pour les élèves de l’école. De plus, il permet de mettre en avant les étudiants de l’école de manière singulière avec des évènements ayant pour vocation une ouverture musicale mais aussi culturelle.",state:false},
    {id:14, content:1, title:"Pôle STH", video:'https://youtu.be/embed/ToMrrK3Um64', prog:{
      new:[
        {t:"title", l:"lore"},
      ],
      reuse:[
        {t:"title", l:"lore"},
      ]
    }, lore:"Le pôle STH est responsable de l’organisation d'événements concernants les étudiants en première année. Ses objectifs sont de faire entrer les étudiants dans l’univers de l’Insa Strasbourg, tant scolairement que extra-scolairement.",state:false},
    {id:15, content:2, title:"🔥 Partenaires"}
  ];

  static partners = [
    {src:"../../assets/files/prog/partner1.png", link:"about:blank"},
  ];
  static menus = [
    {src:"../../assets/files/prog/menu_1.png", spoil:new Date('2020-03-11T10:20:30Z')<new Date()},
  ];

  static prpaccn = [
    {id:0, title:"Journée d’accueil (1er septembre)", lore:"Cet événement permettra aux nouveaux entrants de mieux connaître l’INSA grâce à des visites organisées par les anciens et permettra aux primo-entrants d’échanger et de partager avec leur future classe. Les visites seront suivies d’un pique-nique au parc de l’orangerie où des activités seront organisées telles que du Molky, du foot, de l’ultimate ou encore du volley."},
    {id:1, title:"Groupe Facebook des participants du WEB", lore:"Ce groupe a pour objectif de communiquer les différentes informations du WEB, de publier les teasers du week-end ainsi que les photos et les vidéos prises durant ce week-end bus de 3 jours."},
    {id:2, title:"Profil Facebook “Pol Ak”", lore:"Ce profil a pour but d’améliorer la réactivité face aux questions des nouveaux entrants en donnant la possibilité aux 4 membres du pôle Accueil, le Président et le VPI de pouvoir y répondre."},
    {id:3, title:"Teasers des bus lors du WEB", lore:"Des teasers du WEB seront publiés sur le groupe Facebook et auront pour principal but d’attiser la curiosité des nouveaux entrants et d’accentuer leur enthousiasme."},
  ];

  static prpaccr = [
    {id:0, title:"WEB (18-19-20 septembre)", lore:"Le WEB est un week-end en bus de 3 jours destiné à accueillir les nouveaux en alliant activités traditionnelles, activités de découverte et soirées dans l’objectif d’une cohésion entre les nouveaux."},
    {id:1, title:"Journée ASCPA (4 septembre)", lore:"Cette journée aura pour but de permettre aux nouveaux entrants de passer un bon moment et de se rencontrer par le biais de plusieurs activités avec un déjeuner en commun avec les STH."},
    {id:2, title:"Rallye coloc (5 septembre)", lore:"Le rallye coloc est un événement traditionnel important de l’accueil des nouveaux entrants. Il permet la rencontre entre nouveaux entrants et anciens et fera découvrir les colocs existantes de l’INSA."},
    {id:3, title:"Pot de spécialité (8 septembre)", lore:"Le pot de spécialité est une rencontre entre les nouveaux entrants et les anciens d’une même section dans un bar. Cette rencontre se finit ensuite dans un seul et même bar avec toutes les autres sections."},
    {id:4, title:"SQUAT", lore:"Le SQUAT permet de loger les Insassiens qui n’ont pas trouvé de logements avant la rentrée et les aide  temporairement à mieux connaître Strasbourg, à assister aux cours et à profiter des activités."},
    {id:5, title:"WELCOME PACK", lore:"Petit cadeau pour tous les entrants I3 AI1 primo ou non, il contient des cartes des bons endroits à Strasbourg, une brochure regroupant l’ensemble des événements, le PIFE et bien plus encore. Ces derniers donneront la possibilité aux nouveaux entrants de profiter des activités de Strasbourg en se basant sur des recommandations personnalisées des Insassiens."}
  ];

  static flyers = [
    {id:0, title:"Jour 1", path:"../../assets/files/campaign/flyer_1.pdf", spoil:new Date('2020-03-11T10:20:30Z')<new Date()},
    {id:1, title:"Jour 2", path:"../../assets/files/campaign/flyer_2.pdf", spoil:new Date('2020-03-11T10:20:30Z')<new Date()},
    {id:2, title:"Jour 3", path:"../../assets/files/campaign/flyer_3.pdf", spoil:new Date('2020-03-11T10:20:30Z')<new Date()},
    {id:3, title:"Jour 4", path:"../../assets/files/campaign/flyer_4.pdf", spoil:new Date('2020-03-11T10:20:30Z')<new Date()}
  ];
  
  static songs = [
    {id:0, title:"Musique 1", video:"blabla\nblala", state:false},
    {id:1, title:"Musique 2", lyrics:"drla\nblala", state:false},
    {id:2, title:"Coré", lyrics:"", state:false}
  ];
  static lyrics = "../../assets/files/campaign/Chansons.pdf"
  static partys = [
    {name:"Soft 1", date:"00/00/00 hh:mm", theme:"Jeux", src:"../../assets/files/party/party_soft_1.png", spoil:new Date('2020-03-11T10:20:30Z')<new Date()},
    {name:"Hard 1", date:"00/00/00 hh:mm", theme:"Jeux", src:"../../assets/files/party/party_hard_1.png", spoil:new Date('2020-03-11T10:20:30Z')<new Date()},
    {name:"Soft 2", date:"00/00/00 hh:mm", theme:"Jeux", src:"../../assets/files/party/party_soft_2.png", spoil:new Date('2020-03-11T10:20:30Z')<new Date()},
    {name:"Hard 2", date:"00/00/00 hh:mm", theme:"Jeux", src:"../../assets/files/party/party_hard_2.png", spoil:new Date('2020-03-11T10:20:30Z')<new Date()}
  ];
  // TODO links !
  static links = [
    "https://magellantic.forumactif.com",
    "https://www.facebook.com/magellantic",
    "https://instagram.com/magell.antic",
    "http://www.snapchat.com/add/magellantic",
    "http://magell1nuits.fr/"
  ]

}

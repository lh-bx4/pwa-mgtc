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
    {name:"Gaëlle Compin - Totem", lore:"Une fête est un excès permis, voir ordonné. Freud", src:'../../assets/files/team/polo/POLO_GAELLEC.jpg'},
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
    {id:0, content:1, title:"Pôle A&I", pole:"../assets/files/prog/Pole-AI.png", lore:"Le pôle Arts & Industries a pour objectif de faire se rencontrer les étudiants de l’INSA Strasbourg et les membres de l’association Arts & Industries", img:"../assets/files/prog/Pole-A&I.JPG", state: false},
    {id:1, content:1, title:"Pôle Accueil", pole:"../assets/files/prog/Pole-acceuil.png", lore:"Accueillir, aider, rencontrer, rigoler : telle est la devise du Pôle Acueil !",state:false},
    {id:2, content:1, title:"Pôle AEI", pole:"../assets/files/prog/pole-AEI.png", lore:"Le pôle AEI a pour rôle de faire le liens entre le BDE de l'insa de Strasbourg et les autres INSA. Il prend place au sein du bureau de gestion de l'Association des Elèves des INSA. Association qui a pour but de rapprocher les élèves au travers d'événements inter-INSA mais aussi de représenter les élèves du groupe INSA.",state:false},
    {id:3, content:1, title:"Pôle Bureau", pole:"../assets/files/prog/Pole-Bureau.png", lore:"L’objectif principal du bureau est d’assurer la cohésion et la logistique entre les différents pôles, l’administration et les organismes extérieurs à l’INSA Strasbourg.",state:false},
    {id:4, content:1, title:"Pôle Clubs", pole:"../assets/files/prog/Pole-club.png", lore:"Notre mission : promouvoir les clubs de l'INSA et faire le lien entre l'administration, les élèves et les clubs !",state:false},
    {id:5, content:1, title:"Pôle Com", pole:"../assets/files/prog/Pole-Com.png", lore:"Cette anée tu auras le plaisir de communiquer avec Hector, qui pourra facilement t'aiguiller dans ta quête d'information. Et grâce à instagram tu pourras te tenir informé en images/vidéos sur toute l'actu de l'insa. Nous, le pôle com rouge seront la pour faciliter la communication des élèves vers ton BDE.",state:false},
    {id:6, content:1, title:"Pôle Culture", pole:"../assets/files/prog/Pole-culture.png", lore:"Si t’as envie d’aller au théâtre, de faire une initiation au Self-défense ou d’assister à un match de hockey, le pôle Culture est fait pour toi !",state:false},
    {id:7, content:1, title:"Pôle FIP", pole:"../assets/files/prog/Pole-Fip.png", lore:"Le pôle FIP est là pour représenter les élèves en alternance. Il est aussi là pour les encourager à participer aux événements organisés par le BDE et à la vie associative de l’école.",state:false},
    {id:8, content:1, title:"Pôle International", pole:"../assets/files/prog/Pole-international.png", lore:"Accueille les internationnaux et encourae à la mobilité, le pôle internationnal ouvre ton esprit !",state:false},
    {id:9, content:1, title:"Pôle Multi", pole:"../assets/files/prog/pole-multi.png", lore:"Le Pôle multi sert à développer les outils nécessaire au bons fonctionnement du BDE. Les objectifs principaux sont la pérennisation de l’application du BDE, l’ajout de fonctionnalité à l’application… +- de détails comme vous voulez.",state:false},
    {id:10, content:1, title:"Pôle Partenariat", pole:"../assets/files/prog/pole-parteneriat.png", lore:"Le rôle majeur du pôle partenariat est d'entretenir les partenaires du BDE afin de faciliter la vie des étudiants et de soutenir le BDE par des aides financières.",state:false},
    {id:11, content:1, title:"Pôle Prev DD", pole:"../assets/files/prog/Pole-Sauvegarde.png", lore:"Le pôle prévention permet de sensibiliser les élèves à des thématiques diverses!",state:false},
    {id:12, content:1, title:"Pôle Réseau", pole:"../assets/files/prog/POLE_RÉSEAU.png", lore:"Le pole Réseau est là pour connecter l'INSA aux autres écoles francaises.",state:false},
    {id:13, content:1, title:"Pôle Soirées", pole:"../assets/files/prog/Pole-soiree.png", lore:"Le rôle principal du pôle soirée est d’organiser des évènements festifs et distrayants pour les élèves de l’école. De plus, il permet de mettre en avant les étudiants de l’école de manière singulière avec des évènements ayant pour vocation une ouverture musicale mais aussi culturelle.",state:false},
    {id:14, content:1, title:"Pôle STH", pole:"../assets/files/prog/Pole-STH.png", lore:"Le pôle STH est responsable de l’organisation d'événements concernants les étudiants en première année. Ses objectifs sont de faire entrer les étudiants dans l’univers de l’Insa Strasbourg, tant scolairement que extra-scolairement.",state:false},
    {id:15, content:2, title:"🔥 Partenaires"}
  ];
  static partners = [
    {src:"../../assets/files/prog/partner1.png", link:"about:blank"},
  ];
  static menus = [
    {src:"../assets/files/campaign/Menu-J1.png", spoil:new Date('2020-02-09T06:20:30Z')<new Date()},
    {src:"../assets/files/campaign/Menu-J3.png", spoil:new Date('2020-02-17T06:20:30Z')<new Date()},
  ];

  static flyers = [
    {id:0, title:"Jour 1", path:"../../assets/files/campaign/FLYER-MGTC-11.02.pdf", spoil:new Date('2020-02-11T06:20:30Z')<new Date()},
    {id:1, title:"Jour 2", path:"../../assets/files/campaign/FLYER-MGTC-13.02.pdf", spoil:new Date('2020-02-13T06:20:30Z')<new Date()},
    {id:2, title:"Jour 3", path:"../../assets/files/campaign/FLYER-MGTC-17.02.pdf", spoil:new Date('2020-03-17T06:20:30Z')<new Date()},
    {id:3, title:"Jour 4", path:"../../assets/files/campaign/FLYER-MGTC-19.02.pdf", spoil:new Date('2020-03-19T06:20:30Z')<new Date()}
  ];
  
  static songs = [
    {id:0, title:"Scooby-D’Antic", parole:["Nous c’est magell’Antic","Une liste fantastique","On va t’faire kiffer cette campagne","Parés pour rigoler","Et pour te faire bouger","Les Magell’Annnntiiiic","","Nous c’est Magell’Antic","Une liste Mythique","Des comme nous t’en verras jamais","On est prêts pour t’ambiancer","Et on va pas s’gèner","Les Magell’Annntiiic","","Ne t’y trompes pas","On sera ton unique choix","“Ta-ta-ta-ta”","Et à l’INSA, c’est du rouge que tu verras!","","Nous c’est Magell’Antic","Une liste Mythique","Des comme nous t’en verras jamais","On est prêts pour t’ambiancer","Et on va pas s’gèner","Les Magell’Annntiiic","","Nananananana, nananananaaaaa…","Les Magell’Annnnnnntiiiiiic","","Nous c’est Magell’Antic","Avec nous c’est magique","Tous unis pour te faire rêver","Alors viens avec nous","Et suis nous jusqu’au bout","Les Magell’Annntiiiiic","","Nous c’est Magell’Antic","Les seuls et les uniques","Tu votes Bordeaux pour voir plus haut","2 semaines c’est pas assez","Pour kiffer toute l’année","Les Magell’Annnntiiiic","","","Ne t’y trompes pas","On sera ton unique choix","“Ta-ta-ta-ta”","Et à l’INSA, c’est du rouge que tu verras!","","Nous c’est Magell’Antic","Les seuls et les uniques","Tu votes Bordeaux pour voir plus haut","2 semaines c’est pas assez","Pour kiffer toute l’année","Les Magell’Annnntiiiic","","Nananananana, nananananaaaaa…","Les Magell’Annnnnnntiiiiiic ","Nananananana, nananananaaaaa…","Les Magell’Annnnnnntiiiiiic","blabla\nblala"], state:false},
    {id:1, title:"Red is Life", parole:["INSA ","Lala la lala ","Insa Chante avec moi","Lala la lala ","","Les rouges sont là pour toi, ","Lala la lala ","Red is Life","Lala la lala ","","Si tu n’veux pas t’ennuyer ","Durant toute ton année,","Si tu veux que l’INSA bouge ","Alors vote pour les rouges.","","En c’moment tous les dieux grecs ","Dansent au dessus de ta tête,","Pour que ton  année soit fantastique et magnifique,","Vote Magellantic ","","Alors L’INSA ","Lala la lala ","INSA chante avec moi ","Lala la lala ","Les rouges sont là pour toi ","Lala la lalaa","Red is life","Lala la lala ","","Quand on débarque le matin","Pour t'chanter ce refrain","Le midi comme en soirée ","On s’ra là pour t'ambiancer","","Alors maintenant suis l'minotaure","Pour des souvenirs en or","Et que ton  année soit fantastique et magnifique,","Vote Magellantic ","","Alors L’INSA ","Lala la lala ","INSA chante avec moi ","Lala la lala","Les rouges sont tous là pour toi","Lala la lala","RED IS LIFE."], state:false},
    {id:2, title:"Sur l'air de Femme Libérée", parole:["A Magellopolis vous êtes les bienvenus","Les bordeaux sont ici et on est pas prêts de repartir","Pendant deux semaines de dingue on va faire la bringue","Avec vous les copains oui on va se mettre bien"]},
    {id:3, title:"Ô Magell’antic", parole: ["Magell’antic est là pour vous","La coeur ouvert un peu beaucoup","On a envie d’être présent pour n’importe qui","N’importe qui, on s’est dit toi","Alors vraiment n’hésites pas","T’as plus qu’a rejoindre la cité pour kiffer l’année","","Oooooooooo Magell’antic ! lala la lala","Oooooooooooo Magell’antic ! lala la lalala","Au grands jeux, aux soirées","A midi ou à  minuit","Vnez voir c’quils vous ont préparés les Magell’antic","x2"]},
    {id:4, title: "N’hésite pas", parole:["Non n’hésite pas, vote Bordeaux car c’est le bon choix (x4)","Oui nous c’est Magell’Antic","Et y a du bruit y a d’la zik","Du lundi au samedi","Et Nanani Nanana","Ça va être la folie","Et pour un an si tu veux","Qu’on chauffe le BDE","Prends le papier viens voter !"]},
    {id:5, title: "J’suis Rouge", parole:["J’suis rouge, ","J’y crois pas comment j’suis rouge, ","La liste parfaite, chez nous ça bouge ! ","Voici venir les rouges ","","Laisse nous nous présenter nous c’est Magell’antic !","La liste rouge, oui la seule et l’unique !","Présents ensemble matin, midi et soir pour toi,  ","Les Magell’antiques sont là,","Et la Grèce s’ouvre à toi !","Tellement chauds qu’à peine arrivés on t’offre déjà à manger, ","Pour ta pause de 10h, on est là pour t’faire rigoler ","Ce midi te régaler","Et ce soir te faire rêver ","Alors à la fin d’ta journée, franchement, t’auras kiffé !","","J’suis rouge, ","J’y crois pas comment j’suis rouge, ","La liste parfaite, chez nous ça bouge ! ","Voici venir les rouges !","J’suis rouge, ","J’y crois pas comment j’suis rouge, ","La liste parfaite, chez nous ça bouge ! ","Voici venir les rouges !"]},
    {id:6, title:"Chorée", parole:"", state:false}
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

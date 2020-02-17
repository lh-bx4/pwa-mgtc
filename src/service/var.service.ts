import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VarService {

  @HostListener('window:resize', ['$event'])
  onResize(event?){
    VarService.scrH=window.innerHeight;
    VarService.scrW=window.innerWidth;
    VarService.ntH=(VarService.scrH-VarService.ntH)%VarService.mC+VarService.ntH+1;
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

    {id:0, content:1, title:"Pôle A&I", pole:"../assets/files/prog/Pole-AI.png", video:'https://youtu.be/embed/rUAwl-PiZaA', 
      prog:{
        new:[ 
          {t:"Mise en place d’une coupe de l’école en extérieur (1er mai)", l:"Sur le même principe que les coupes de l’école, réaliser une coupe de l’école en plein air réunissant membres d’Arts et Industrie et élèves de l’INSA autour de jeux extérieurs (pétanque, Molky...)."},
          {t:"Journée de rencontre entre les étudiants et les membres d’A&I (jour du Gala 2020)", l:"Le temps d’une journée, anciens et étudiants se réuniront au sein d’une ambiance conviviale. Cela prendrait place le jour du gala : un brunch se tiendrait de 11h à 15h à l’INSA, brunch durant lequel anciens et étudiants pourront discuter et participer à des petits jeux en équipe (culture générale sur l’INSA, traditions...)."},
          {t:"Création de responsables de section au sein d’A&I", l:"Les étudiants cherchant des informations sur leur spécialité ont souvent du mal à savoir vers qui s’orienter en cas de besoin (stages, type de débouchés, informations pratiques). C’est pourquoi nous souhaitons que chaque section ait des responsables de section au sein d’A&I pour faciliter cet échange."},
          {t:"Mise en place d’une solution d’hébergement temporaire à l’attention des anciens pour différents évènements", l:"Lors de différents évènements (gala, soirée des régions, forum des métiers...), de nombreux anciens reviennent à Strasbourg, nous voulons leur proposer la possibilité d’avoir un lieu pour dormir après ces évènements."},
          {t:"Présence d’un stand A&I à la JCA (Journée des Clubs et des Associations)", l:"Un stand regroupant des anciens et des étudiants investis dans l’association Arts & Industries serait présent à la journée des clubs et des associations afin de faire découvrir l’association aux étudiants."},
        ],
        reuse:[
          {t:"Soirée des régions et afterwork (22 septembre)", l:"Cette soirée permet aux étudiants d’un groupement de rencontrer des ancêtres et de se rencontrer entre eux."},
          {t:"Présence des membres de A&I à la coupe de l’école", l:"La présence d’une équipe A&I lors de la coupe de l’école a eu un retour très positif. Cette année, s’il y a suffisamment de membres de A&I présents et si ces derniers le souhaitent, ils pourront jouer avec leur section."},
          {t:"Forum des métiers (2 février 2021)", l:"Cet événement permet aux étudiants de profiter d’un apport personnel grâce aux échanges avec les anciens."},
        ]
      }, 
    lore:"Le pôle Arts & Industries a pour objectif de faire se rencontrer les étudiants de l’INSA Strasbourg et les membres de l’association Arts & Industries", state:false},
    
    {id:1, content:1, title:"Pôle Accueil", pole:"../assets/files/prog/Pole-acceuil.png", video:'https://youtu.be/embed/sH4v37fCQ0o', 
    prog:{
      new:[
        {t:"Journée d’accueil (1er septembre)", l:"Cet événement permettra aux nouveaux entrants de mieux connaître l’INSA grâce à des visites organisées par les anciens et permettra aux primo-entrants d’échanger et de partager avec leur future classe. Les visites seront suivies d’un pique-nique au parc de l’orangerie où des activités seront organisées telles que du Molky, du foot, de l’ultimate ou encore du volley."},
        {t:"Groupe Facebook des participants du WEB", l:"Ce groupe a pour objectif de communiquer les différentes informations du WEB, de publier les teasers du week-end ainsi que les photos et les vidéos prises durant ce week-end bus de 3 jours."},
        {t:"Profil Facebook “Pol Ak”", l:"Ce profil a pour but d’améliorer la réactivité face aux questions des nouveaux entrants en donnant la possibilité aux 4 membres du pôle Accueil, le Président et le VPI de pouvoir y répondre."},
        {t:"Teasers des bus lors du WEB", l:"Des teasers du WEB seront publiés sur le groupe Facebook et auront pour principal but d’attiser la curiosité des nouveaux entrants et d’accentuer leur enthousiasme."},
      ],
      reuse:[
        {t:"WEB (18-19-20 septembre)", l:"Le WEB est un week-end en bus de 3 jours destiné à accueillir les nouveaux en alliant activités traditionnelles, activités de découverte et soirées dans l’objectif d’une cohésion entre les nouveaux."},
        {t:"Journée ASCPA (4 septembre)", l:"Cette journée aura pour but de permettre aux nouveaux entrants de passer un bon moment et de se rencontrer par le biais de plusieurs activités avec un déjeuner en commun avec les STH."},
        {t:"Rallye coloc (5 septembre)", l:"Le rallye coloc est un événement traditionnel important de l’accueil des nouveaux entrants. Il permet la rencontre entre nouveaux entrants et anciens et fera découvrir les colocs existantes de l’INSA."},
        {t:"Pot de spécialité (8 septembre)", l:"Le pot de spécialité est une rencontre entre les nouveaux entrants et les anciens d’une même section dans un bar. Cette rencontre se finit ensuite dans un seul et même bar avec toutes les autres sections."},
        {t:"SQUAT", l:"Le SQUAT permet de loger les Insassiens qui n’ont pas trouvé de logements avant la rentrée et les aide temporairement à mieux connaître Strasbourg, à assister aux cours et à profiter des activités."},
        {t:"WELCOME PACK", l:"Petit cadeau pour tous les entrants I3 AI1 primo ou non, il contient des cartes des bons endroits à Strasbourg, une brochure regroupant l’ensemble des événements, le PIFE et bien plus encore. Ces derniers donneront la possibilité aux nouveaux entrants de profiter des activités de Strasbourg en se basant sur des recommandations personnalisées des Insassiens."},
      ]
    }, 
    lore:"Accueillir, aider, rencontrer, rigoler : telle est la devise du Pôle Acueil !",state:false},
    
    {id:2, content:1, title:"Pôle AEI", pole:"../assets/files/prog/pole-AEI.png", video:'https://youtu.be/embed/oGeEUYW9CKs', 
    prog:{
      new:[
        {t:"Développer l’INSA SHOP à Strasbourg (lancement prévu au HIGH FIVE 2020)", l:"L’idée est d’avoir une boutique propre à chaque INSA dans ses locaux, mais aussi de créer un site internet commun, avec redirection vers les boutiques de chaque INSA."},
        {t:"Rubrique “Et les autres INSA” au mail hebdo", l:"Ajouter une rubrique dans le mail hebdo afin que les étudiants de l'INSA Strasbourg puissent avoir des informations courtes et ciblées sur ce qu'il se passe dans les autres INSA. En plus des quelques lignes, le lien du site de l’AEI sera communiqué."},
        {t:"Dynamiser les réseaux sociaux de l’AEI", l:"Nous voulons développer le compte Instagram et LinkedIn de l’association, en travaillant avec le pôle communication de l’AEI."},
      ],
      reuse:[
        {t:"Suivi et soutien de l’organisation de l’INSA Express", l:"L’INSA Express est un événement où des équipes de deux personnes de chaque INSA relient les INSA de France métropolitaine en stop pour rencontrer les étudiants des autres INSA."},
        {t:"Organisation de la participation au High Five", l:"Le High Five est un évènement inter-INSA proposé par l’AEI. Les étudiants des INSA se regroupent dans la ville d’une des INSA pour s’affronter lors d’une compétition sportive pendant plusieurs jours."},
        {t:"Congrès", l:"Le Congrès est un évènement inter-INSA proposé par l’AEI. C’est un week-end organisé dans une INSA au cours duquel les étudiants des INSA peuvent suivre des formations diverses autour du monde associatif."},
        {t:"Tenir un stand AEI durant la journée des clubs", l:"Afin d’apporter de la visibilité à l’association, un stand AEI sera ouvert lors de la journée des clubs, afin de présenter ce qu’est AEI et ses différents événements, son actualité..."},
        {t:"Participation aux Conseils d’Administration de l’AEI", l:"Ayant un rôle dans le bureau, je compte participer aux Conseils d'Administration de l’Association des Elèves des INSA, afin de représenter l’INSA Strasbourg et de se tenir informé sur ce qu’il se passe à l’AEI et dans les autres INSA."},
        {t:"Aide au développement des projets inter-INSA", l:"Certains projets portés par les étudiants développent aussi la connexion inter-INSA, l’AEI propose son soutien en subventionnant ces projets."},
        {t:"Faire passer des sondages aux étudiants", l:"Je communiquerai des sondages lorsque ce sera nécessaire, à travers le mail hebdo, les réseaux sociaux et le site de l’AEI."},
      ]
    }, lore:"Le pôle AEI a pour rôle de faire le liens entre le BDE de l'insa de Strasbourg et les autres INSA. Il prend place au sein du bureau de gestion de l'Association des Elèves des INSA. Association qui a pour but de rapprocher les élèves au travers d'événements inter-INSA mais aussi de représenter les élèves du groupe INSA.",state:false},
    
    {id:3, content:1, title:"Pôle Bureau",  pole:"../assets/files/prog/Pole-Bureau.png", video:'https://www.youtube.com/embed/pjwGpx-1_Q8', prog:{
      new:[
        {t:"Mise en place d’un référent BDE dans chaque classe", l:"Dans l’optique d’un BDE plus accessible et plus transparent, ce point du programme nous permet de nous rapprocher de chaque classe en demandant à un élève d'être référent pour le BDE. Son rôle serait de faire remonter des informations au BDE ou demandes particulières venant des élèves, mais aussi de relayer certains événements du BDE en appuyant sur les activités culturelles ou ludiques au reste de la classe."},
        {t:"Proposer de la visibilité aux CE/CA lors des événements BDE", l:"Nous souhaitons aider les élus dans leur volonté de permettre aux élèves de l’école de s’investir dans les décisions prises dans l’école. Pour se faire, nous proposons de parler des élus CE/CA lors des amphis de présentation en début d’année pour qu’ils présentent aux étudiants leurs rôles et missions au sein de l’école."},
        {t:"Mettre en avant les étudiants ayant un investissement extra-scolaire (SHN, élus, engagement associatif, ...)", l:"Nous voulons donner l'opportunité aux élèves engagés ou ayant un investissement extra-scolaire important de parler de leur expérience, de leur parcours et de leurs futurs projets. Le fait d’allier études et activités extra-scolaires demande d'être organisé et rigoureux, et échanger avec eux peut être pertinent pour les élèves intéressés par l’un de ces engagements."},
        {t:"Utilisation d’une police d’écriture économe", l:"Afin de poursuivre une démarche économique, il est prévu d’utiliser une police d’écriture qui économise de l’encre pour l’impression de tous les documents du BDE. Cela permet d’économiser 30 à 50% d’encre par rapport à une police d’écriture classique."},
      ],
      reuse:[
        {t:"Cafés Brainstorming", l:"Les cafés Brainstorming sont des rencontres entre étudiants ayant pour principal but de débattre sur des sujets concernant la vie de l’école et son amélioration ou encore des sujets plus généraux tels que l’environnement et les mesures prises par les écoles."},
        {t:"Tables rondes", l:"Le principe des Tables rondes est de réunir un panel très diversifié de personnes. C’est-à-dire le personnel administratif et technique, l’équipe pédagogique, des élèves quel que soit leur passé associatif, sportif ou culturel, et de les faire débattre sur différentes questions."},
        {t:"Tenir des permanences du BDE tous les jours de 11h30 à 14h30 et le jeudi de 11h30 à 19h", l:"Une des valeurs que nous souhaitons le plus mettre en avant est l’accessibilité du BDE. Ainsi en se rendant disponibles tous les jours de 11h30 à 14h30, nous serons en mesure de répondre à toutes les questions que vous nous poserez, ou du moins vous rediriger vers la ou les personnes susceptibles de pouvoir y répondre."},
        {t:"Rendre le BDE et la campagne plus transparents", l:"Nous pensons que rendre le BDE plus accessible à tous les élèves passe tout d’abord par plus de transparence. Il est important pour nous de partager notre travail avec les élèves, afin d'avoir des retours mais également afin de mieux les représenter. C’est pourquoi nous avons choisi de poursuivre le travail des roses en proposant également des vidéos reportage et aftermovies de l'organisation de nos événements. De plus, nous mettrons également en place un dossier disponible pour tous en ligne, comportant des explications de la mise en place de certains événements."},
      ]
    }, lore:"L’objectif principal du bureau est d’assurer la cohésion et la logistique entre les différents pôles, l’administration et les organismes extérieurs à l’INSA Strasbourg.",state:false},
    
    {id:4, content:1, title:"Pôle Club", pole:"../assets/files/prog/Pole-club.png", video:'https://youtu.be/embed/B5aHnsn4zcA', prog:{
      new:[
        {t:"Soirée des clubs", l:"Une soirée organisée à l’INSA où chaque club se verra attribuer un espace, et où les participants auront la possibilité de découvrir ou de tester un échantillon des activités proposées par chaque club. Cela se déroulerait début novembre. L’objectif est de faire découvrir des passions et des activités intéressantes, diverses et variées aux étudiants de l’INSA."},
        {t:"Événements “multi-clubs”", l:"Créer des événements “multi-clubs” sous forme de projets, de jeux, d’idées qui pourraient faire travailler et s’amuser plusieurs clubs ensemble sur une soirée ou sur le long terme. L’idée serait de permettre aux membres de clubs ayant un projet d’activité collaborative avec un autre club de pouvoir la soumettre et créer un évènement autour de celle-ci."},
        {t:"La page des clubs", l:"Pour augmenter la visibilité des clubs, une page “Clubs INSA Strasbourg” dédiée à ces derniers sera créée afin d’y relayer tous les événements en plus du tour des clubs. Les stories permettront ainsi de créer un dynamisme autour des clubs."},
        {t:"Tour des clubs", l:"Le Tour des clubs est une campagne de médiatisation des clubs. L’objectif est de poster une vidéo plutôt courte (2min) qui contiendrait une interview du président et quelques événements et qui présenterait un club sur les réseaux sociaux du Pôle Clubs, et cela deux ou trois fois par semaine. Monté dans le style Konbini ou Brut, le but est d’augmenter leur visibilité en publiant les événements organisés au sein du club."},
      ],
      reuse:[
        {t:"Soirée « l’INSA a un incroyable talent »", l:"On garde toujours la forme de la soirée : en 3 parties, une première pour les Talents musicaux, une autre pour les Rediffusions et enfin une dernière pour les Shows en direct. Tout comme les précédentes, elle aura lieu en salle expo. Cela se déroulera le 11 mars 2020. Cette année, nous offrirons un petit verre de sirop à l’entracte et à la fin de la soirée."},
        {t:"Panneau des clubs et assos", l:"Afin d’accroître la visibilité des clubs, le panneau des clubs et assos serait composé d’affiches des différents clubs, des événements organisés par ces derniers ainsi que les événements “multi-clubs” pour lesquels des affiches seront spécialement créées."},
        {t:"Journée des clubs & assos", l:"La reconduite de cet événement nous tient vraiment à cœur car c’est le lieu de discussion idéal pour découvrir les clubs, les commissions et les associations, discuter avec leurs membres et rencontrer tous les acteurs organisant la vie associative de l’INSA."},
        {t:"Drive des clubs", l:"Le drive des clubs mis en place par les Teslalom et prolongé par les précédents BDE sera également reconduit. En effet, il permet au club d’avoir accès aux informations telles que les contacts du bureau, les activités mises en place ainsi que les budgets. Le guide pour le président sera également conservé."},
      ]
    }, lore:"Notre mission : promouvoir les clubs de l'INSA et faire le lien entre l'administration, les élèves et les clubs !",state:false},
    
    {id:5, content:1, title:"Pôle Com", pole:"../assets/files/prog/Pole-Com.png", video:'https://youtu.be/embed/pjwGpx-1_Q8', prog:{
      new:[
        {t:"Rubrique ‘’bon plan’’ dans le mail Hebdo", l:"Notre volonté serait de faire partager des bons plans sur des spectacles, des événements ou encore des activités extra-campus qui seraient organisés à Strasbourg. Cela donnerait l’opportunité aux Insassiens de découvrir la ville et de profiter des activités aux tarifs intéressants."},
        {t:"Mise en place d’un BOT messenger", l:"Le BOT messenger rendrait le contact avec le BDE plus facile et améliorerait son accessibilité. L’étudiant pourra facilement accéder à des informations sur le BDE, les prochains événements et pourra entrer en chat avec un membre. L’interface est simple et est à la portée de tous."},
        {t:"Réaliser Plaquette alpha", l:"La plaquette Alpha est un moyen de communication utilisé dans les forums ou les représentations de l’INSA à l'extérieur de l’école. Elle est réalisée en coopération avec l’administration a pour but d’informer les élèves sur la vie de l’école, notamment celle associative."},
      ],
      reuse:[
        {t:"Développement d’Instagram", l:"Nous pensons qu’il est intéressant de continuer à développer le compte Instagram du BDE dans le but d’informer de nouvelles personnes, de faire réagir et de recueillir des informations par la suite."},
        {t:"Gestion de la page Facebook, Instagram et du site BDE", l:"Les réseaux sociaux sont une partie importante de la communication au sein de l’école et permettent de toucher un grand nombre de personnes. Leur but est d’informer les étudiants des actualités et de mettre en valeur les activités de la vie étudiante à l’INSA."},
        {t:"PIFE", l:"Le PIFE (Plaquette d’information aux futurs étudiante.e.s) est un livret réalisé pour les nouveaux entrants à l’INSA de Strasbourg. Il leur permet de mieux comprendre le fonctionnement de l’école et de Strasbourg. Il permet aussi d’avoir un premier aperçu sur la vie associative de l’école."},
        {t:"Mail Hebdo", l:"Le Mail Hebdo est un mail qui paraît tous les dimanches et regroupe l’actualité de l’INSA pour la semaine à venir. Ce mail écrit par les élèves et pour les élèves permet de mettre en avant la vie associative de l’INSA."},
        {t:"Gérer l’affichage dans l’INSA", l:"L’affichage est libre dans l’INSA, chacun y affiche ce qu’il souhaite cependant, nous allons nous assurer que ce qui est affiché reste d’actualité et est pertinent."},
        {t:"Faire des aftermovies des événements passés + Alimenter la chaîne YouTube du BDE", l:"Les aftermovies sont l’un des meilleurs moyens pour promouvoir le déroulement d’une soirée de par leur contenu divertissant et ludique."},
      ]
    }, lore:"Cette anée tu auras le plaisir de communiquer avec Hector, qui pourra facilement t'aiguiller dans ta quête d'information. Et grâce à instagram tu pourras te tenir informé en images/vidéos sur toute l'actu de l'insa. Nous, le pôle com rouge seront la pour faciliter la communication des élèves vers ton BDE.",state:false},
    
    {id:6, content:1, title:"Pôle Culture", pole:"../assets/files/prog/Pole-culture.png", video:'https://youtu.be/embed/OxwY90T927o', prog:{
      new:[
        {t:"Spectacle au Planétarium", l:"Le planétarium est une salle de spectacle avec un écran-dôme de 8 mètres de diamètre. L’objectif est d’assister à un spectacle dans une salle hors du commun."},
        {t:"Visite de l’éco-quartier Vauban", l:"Visite de l’éco-quartier Vauban dans la ville de Fribourg en Allemagne. C’est l’un des éco-quartiers le plus connu et le plus abouti au monde…"},
        {t:"Visite des jardins de Riedoasis", l:"Le pôle culture propose une visite du maraîcher qui fournit les paniers de fruits et de légumes afin que les étudiants puissent découvrir d’où ils proviennent."},
        {t:"Bibliothèque participative", l:"Une bibliothèque participative avec des classiques de la littérature de différents genres sera exposée en libre-service. Pour prendre un livre, il suffira d’en poser un autre !"},
        {t:"Les meilleurs cuisINSA", l:"Le but est de préparer une spécialité culinaire de ta région ou de ton pays avec d’autres camarades venant de la même zone géographique que toi. Les mets seront présentés et dégustés, enfin les recettes seront récupérées et postées sur la page du pôle culture."},
        {t:"Sortie match de Hockey", l:"Le BDE propose une sortie conviviale pour aller voir un match de l’Etoile Noire, l’équipe de Hockey sur glace de Strasbourg évoluant en première Division."},
        {t:"Cours de Self-Défense", l:"Nous voulons proposer aux élèves de l’INSA l’occasion de participer à une initiation au self défense."},
        {t:"Plans Qlture", l:"Le pôle Culture propose d’organiser une rubrique bon plan dans le mail hebdo pour informer les étudiants de ce qui se passe culturellement parlant sur Strasbourg"},
      ],
      reuse:[
        {t:"Sortie au Parlement Européen", l:"C’est une visite guidée permettant de découvrir les différentes activités ainsi que les locaux du siège du parlement européen."},
        {t:"Panier fruits et légumes", l:"Le panier de légumes permet de manger des produits locaux issus de l’agriculture biologique. Cette année, des recettes seront données pour permettre aux étudiants de varier la cuisine."},
        {t:"Workshop “Archi/Ingé”", l:"Afin de revisiter les appartements étudiants à moindre coûts et de manière conviviale, le BDE propose un atelier Workshop durant lequel il est possible de concevoir ses propres meubles."},
        {t:"Théâtre de Strasbourg", l:"Le BDE propose aux élèves un pack théâtre. Les étudiants pourront assister à une représentation et le jeudi suivant, une visite des coulisses du théâtre et une rencontre avec les comédiens de la pièce seront organisées."},
        {t:"Visite du Camp de Concentration du Struthof", l:"Le Pôle Culture propose la visite d’un camp de concentration et de son musée dans les environs de Strasbourg."},
      ]
    }, lore:"Si t’as envie d’aller au théâtre, de faire une initiation au Self-défense ou d’assister à un match de hockey, le pôle Culture est fait pour toi !",state:false},
    
    {id:7, content:1, title:"Pôle FIP", pole:"../assets/files/prog/Pole-Fip.png", video:'https://youtu.be/embed/3wik3rshVLs', prog:{
      new:[
        {t:"Afterworks durant le mois d’août entre les anciens et les nouveaux entrants", l:"L’objectif premier est de permettre aux nouveaux entrants de se connaître, d’échanger avec les anciens pour ensuite se motiver mutuellement à participer aux événements avec les initiaux et de dynamiser la longue période d’entreprise pour les anciens présents sur Strasbourg."},
        {t:"Instauration d’un référent en 4e année pour les FIP de 3e année", l:"L’objectif est de choisir un 4e année, qui connaît déjà l’école, son organisation et les événements. Il pourra inciter les 3e année à participer aux événements de l’école et pourra répondre à leurs questions."},
        {t:"Banalisation d’une partie du jeudi après-midi de la journée club", l:"L’objectif est de favoriser l’intégration des FIP dans des associations de l’école (BDS et associations)."},
        {t:"Création d’un pot de départ pour les 5èmes années", l:"Le but serait de créer un nouvel événement dans l’année qui serait le pot de départ des 5èmes années. Cela permettra de créer de la cohésion supplémentaire entre les FIPs au cours de l’année."},
      ],
      reuse:[
        {t:"Distribution d’un flyer après le concours FIP", l:"Un flyer permettant de présenter l’école et le BDE de l’INSA sera distribuée à la sortie du concours FIP dans le but de pouvoir échanger avec eux et de répondre à leurs questions."},
        {t:"Prendre un contact par mail durant l'été", l:"Afin de préparer la rentrée des nouveaux entrants, des mails comportant des informations importantes telles que la pré-rentrée et les événements qui y sont liées seront envoyées pour informer les étudiants."},
        {t:"Présentation du BDE en début d’année", l:"Nous voudrions montrer aux FIPs 3 que la vie associative à l’INSA existe et qu’elle est aussi faite pour les FIPs. L’amphi a pour principal but de présenter le BDE et ses missions."},
        {t:"Visite de l’INSA par un étudiant FIP et si possible le référent de 4e année choisi", l:"La visite de l’école serait faite par un étudiant pour la rendre plus ludique et complète et si possible le référent de 4e année choisi afin de faciliter la communication."},
        {t:"Stand amicaliste durant la journée d'accueil", l:"Dès la fin de l’amphi d'accueil du matin, une permanence au BDE se tiendra jusqu’à l’amphi du BDE de l’après-midi pour inscrire les FIPs qui souhaitent posséder le titre d’amicaliste et ainsi bénéficier des avantages. Un stand amicaliste sera aussi installé durant la chaîne d'inscription le matin."},
        {t:"Pot de bienvenue pour les FIP 3/4/5", l:"Organisation d’un afterwork après les amphis de présentation le jour de la rentrée des FIPs 3 avec les FIPs 4 et 5."},
        {t:"Tenir à jour les groupes Facebook", l:"La communication des évènements se fait principalement par Facebook. Il est important d’informer les groupes et de partager régulièrement les événements organisés par le BDE, l’AS et les associations."},
        {t:"Réservation de place pour le WEB", l:"Le WEB est un événement important de la pré-rentrée et la réservation de places pour les FIP leur permettrait d’avoir une intégration équivalente aux initiaux."},
        {t:"Présentation de la section FIP aux STH lors de la semaine inter-semestrielle", l:"Les STH sont peu informés au niveau de la formation par alternance. Les amphis de présentation des sections sont le meilleur moment pour en parler et répondre à leurs éventuelles questions."},
      ]
    }, lore:"Le pôle FIP est là pour représenter les élèves en alternance. Il est aussi là pour les encourager à participer aux événements organisés par le BDE et à la vie associative de l’école.",state:false},
    
    {id:8, content:1, title:"Pôle International", pole:"../assets/files/prog/Pole-international.png", video:'https://youtu.be/embed/pjwGpx-1_Q8', prog:{
      new:[
        {t:"Randonnées dans la région", l:"Ces randonnées seront proposées à tout le monde mais prioritairement aux Incomings. Elles se dérouleraient autour de Strasbourg."},
        {t:"Séances de Cinéma étranger", l:"Nous voulons proposer des séances de cinéma étranger, venant des pays des Incomings, en amphi Dietrich, à la manière du club Ciné."},
        {t:"Drive pour les Incomings", l:"Nous souhaitons faire un drive des cours et le partager avec tous les Incomings."},
        {t:"Carte des mobilités", l:"Nous voulons créer une carte des mobilités pour les Outgoings. Ce seraient des cartes mondiales numériques (une par spécialité) avec toutes les destinations possibles où l’on peut effectuer une mobilité à l’étranger. On y ajouterait les retours d’expériences pour chaque destination"},
      ],
      reuse:[
        {t:"Jeu de piste", l:"Nous allons reconduire le jeu de piste annuel organisé avec les membres du service des relations internationales et les Incomings."},
        {t:"Parrainage", l:"Nous allons reconduire le système de parrainage qui est mis en place tous les ans entre les Incomings et les étudiants de l’INSA. Cette année, nous voulons proposer de créer des petites familles avec 3-4 binômes parrain/fillot."},
        {t:"Supports de communication", l:"Nous utiliserons les différents supports de communication, comme le groupe Facebook avec tous les Incomings afin de relayer toutes les informations et tous les événements à l’INSA en français/anglais. Nous voulons aussi mettre en place un espace public dédié aux questions sur le site du BDE."},
        {t:"Café discussion avec les Outgoings", l:"Nous voulons reprendre l’idée d’organiser un café avec les Outgoings pour qu’ils puissent rencontrer les gens qui veulent partir et pour répondre à leurs questions."},
        {t:"Repas au Flam’s", l:"On va reconduire le repas au Flam’s avec les parrains et les fillots pour entretenir des liens tout en leur faisant découvrir la culture culinaire alsacienne."},
        {t:"Dégustation de vin", l:"Organisation d’une dégustation de vin avec les élèves internationaux afin de leur faire partager notre culture viticole dans la convivialité."},
        {t:"Amphi de présentation", l:"Nous allons reconduire l’amphi de présentation en début de semestre afin d’introduire aux Incomings ce que représente le BDE, quel est le rôle du pôle international et enfin présenter l’ESN."},
        {t:"Repas International", l:"Nous allons reprendre le concept de repas international. Ce sont des ateliers cuisine organisés entre des Incomings et insassiens (idéalement leur parrains). Chaque atelier sera dans une coloc différente. Ensuite, toutes les équipes se rassembleront dans un lieu précis pour une dégustation."},
      ]
    }, lore:"Accueillir les internationnaux et encourager à la mobilité, le pôle internationnal ouvre ton esprit !",state:false},
    
    {id:9, content:1, title:"Pôle Multi", pole:"../assets/files/prog/pole-multi.png", video:'https://youtu.be/embed/WzbO_abt82s', prog:{
      new:[
        {t:"Système de vote (pour l’INSA a un Incroyable Talent)", l:"L’objectif est de créer un système de vote numérique pour l'événement l’INSA a un incroyable talent. Il est donc nécessaire de créer un dispositif de vote fiable, sécurisé et facile d’utilisation pour les votants."},
        {t:"Proposer un emplacement pour présenter les projets humanitaires sur l’application.", l:"Ajouter les différents projets humanitaires dans la rubrique Clubs&Assos / Commmission Humanitaire de l'application avant la rentrée 2020."},
        {t:"Créer une carte interactive des destinations disponibles pour les mobilités", l:"Créer la carte interactive avec l’aide du pôle International et l’ajouter dans l’application."},
        {t:"INSA CAR (Espace d’échange pour la gestion du covoiturage étudiant)", l:"Créer une interface et la rubrique INSA CAR dans l’application du BDE."},
        {t:"Pérenniser l'application du BDE", l:"L’application du BDE permet une amélioration considérable de la communication, et plus généralement de la gestion des interactions, entre BDE et étudiants. Il est donc nécessaire de continuer le développement de cette application."},
      ],
    }, lore:"Le Pôle multi sert à développer les outils nécessaire au bons fonctionnement du BDE. Les objectifs principaux sont la pérennisation de l’application du BDE, l’ajout de fonctionnalité à l’application… +- de détails comme vous voulez.",state:false},
    
    {id:10, content:1, title:"Pôle Partenariat", pole:"../assets/files/prog/pole-parteneriat.png", video:'https://youtu.be/embed/7zU4QJBFoCI', prog:{
      new:[
        {t:"Apporter des opportunités professionnelles aux étudiants grâce à nos sponsors", l:"En fonction de ce que veulent les entreprises nous finançant, nous serons en mesure d’apporter plus au étudiants que simplement des tarifs réduits. En travaillant avec INSA Entreprises, nous proposerons des sorties et activités en collaboration avec les entreprises et mettrons en place un petit groupe de travail visant à parler de partenariats, événements et d'autres sujets liés aux entreprises."},
        {t:"Élargir les profils des partenaires à partir des vœux des élèves", l:"Le but est de trouver le plus de partenaires permettant de faciliter la vie des étudiants. Cela passe par l’élargissement du profil des partenaires (bars, coiffeurs, restauration, prêt à porter…). Nous chercherons à trouver de nouveaux partenaires en fonction de la volonté des étudiants. En fonction des résultats de la campagne, nous demanderons au pôle partenariat bleus s’ils sont intéressés par une passation des partenaires et des idées du programme de la liste perdante pour rendre le pôle encore plus pertinent et professionnel."},
      ],
      reuse:[
        {t:"Organiser un pot avec les partenaires du BDE", l:"Le but de cet événement est de rassembler les partenaires dans une ambiance conviviale pour parler du BDE et de l’importance des partenariats pour les étudiants et la vie de l’école. L’échange se ferait également dans l’autre sens pour avoir un avis venant du partenaire. Cela consolide les relations et permet de faire évoluer les avantages pour le BDE ainsi que le partenaire. Cet événement se déroulerait fin janvier 2021."},
        {t:"Soutenir les pôles dans leurs recherches de partenaires et de sponsors.", l:"Le pôle partenariat a pour mission d’apporter une aide financière à la trésorerie du BDE. Les relations entre pôles et partenaires seront aussi appuyées par le pôle partenariat qui rendrait ainsi cette relation plus professionnel."},
        {t:"Entretenir et développer les relations avec les partenaires", l:"L’enjeu est de faire connaître nos partenaires auprès des étudiants pour qu’ils aillent profiter des offres issues du partenariat. Nous nous engageons à promouvoir nos partenaires sur les réseaux sociaux et sur l’application du BDE via la carte interactive. Ensuite, tout au long de l’année, nous transmettrons aux étudiants les événements organisés par les partenaires et continuerons la mise en place de jeux concours."},
      ]
    }, lore:"Le rôle majeur du pôle partenariat est d'entretenir les partenaires du BDE afin de faciliter la vie des étudiants et de soutenir le BDE par des aides financières.",state:false},
    
    {id:11, content:1, title:"Pôle Prev DD", pole:"../assets/files/prog/Pole-Sauvegarde.png", video:'https://youtu.be/embed/pnGwZ3Dbe3w', prog:{
      new:[
        {t:"Conférence Climat", l:"Organisation d’une après-midi avec une conférence réalisée par un intervenant extérieur suivi de débats et tables rondes avec des entreprises tournées sur l'environnement."},
        {t:"INSA-CAR", l:"Nous voulons proposer une nouvelle fonctionnalité à l’application du BDE : INSA-car. C’est un système de covoiturage pour l’école. Cela prendrait la forme d’une rubrique présente sur l’application du BDE comme un tableau intuitif que chaque étudiant pourrait modifier."},
        {t:"Action collaborative avec l’ONG Reforest’Action", l:"Le projet se présente comme une collecte de fond, qui va permettre de financer la plantation des arbres par Reforest'Action sur le site d'Emberménil (54)."},
        {t:"Vente de mug en bambou", l:"Afin de réduire la consommation de gobelets plastiques des machines à café, nous souhaitons donner la possibilité aux étudiants de se procurer d’un mug fait en partie de fibres de bambou et compatible avec les machines à café."},
        {t:"Aborder une bonne méthode de travail", l:"Nous proposerons une séance de présentation courte et synthétique leur permettant de prendre des notes suivie d’une partie questions et témoignages par des élèves bien classés grâce à leur travail."},
        {t:"Débat théâtral made in INSA", l:"L’objectif de cet événement serait de proposer un débat théâtral autour d’un thème entre des acteurs et les étudiants (par exemple un débat autour de l’alcool en soirée ou autour du sexisme). Les acteurs seraient les étudiants de l’électif théâtre de quatrième année. Pour cela, les étudiants joueront dans un premier temps une courte pièce (le modèle) qui pose un certain nombre de problèmes. Puis, dans un second temps, la pièce est rejouée, mais cette fois-ci, les spectateurs peuvent interrompre le déroulé de l’histoire et venir sur scène pour essayer son idée en improvisant avec les comédiens."},
      ],
      reuse:[
        {t:"Aprem-vention 2.0", l:"Cet événement est une reconduite de l’après-midi réalisée pendant la semaine inter-semestrielle du mandat 2019-2020. Il s’agit d’une après-midi avec des intervenants dans plusieurs domaines qui touchent à la prévention, tels que la relaxation, les accidents de voitures ou encore la sexualité. Cette année, la participation du Théâtre National de Strasbourg pour une scène sur les agressions sexuelles serait également proposée."},
        {t:"Amphi interactif en présence d’une juriste et d’une psychologue", l:"Cet amphi interactif sera un débat sous forme de quizz et de dialogue avec une psychologue, la juriste de l’école et nous. Pendant cet amphi, de nombreux thèmes seront abordés qui traiteront du harcèlement, du consentement, de la solitude ou encore du burn-out."},
        {t:"Dream team", l:"L’objectif est de prolonger le système de bénévolat en soirée afin de constituer une équipe attentive et réactive. La “Dream-team” aura pour rôle de prévenir les personnes responsables de la soirée en cas de problème ou de comportement inadéquat de certains étudiants. La Dream-Team sera mise en place à chaque soirée organisée par le BDE."},
        {t:"Rôle de transmission des informations", l:"La transmission d’informations est une tâche clé de ce pôle puisqu’elle permet aux étudiants de se tenir au courant d’actualités liées à la prévention mais également du point de vue environnemental sur Strasbourg. On pourrait par exemple proposer aux étudiants des sessions de formations réalisées par l'université."},
      ]
    }, lore:"Le pôle prévention permet de sensibiliser les élèves à des thématiques diverses!",state:false},
    
    {id:12, content:1, title:"Pôle Réseau", pole:"../assets/files/prog/POLE_RÉSEAU.png", video:'https://youtu.be/embed/zC0pCi2dseI', prog:{
      new:[
        {t:"“l’INSA sur le campus”", l:"Nous souhaitons mettre en évidence la place de l’INSA au sein du campus strasbourgeois grâce à une campagne de communication. L’objectif est de sensibiliser les élèves (en particulier les nouveaux entrants) aux nombreux événements, services proposés en dehors de l’INSA. Pour cela, nous proposerons un stand “INSA sur le campus” lors de la journée des clubs avec la potentielle présence de représentants du Poly ou d’autres instances. Nous tiendrons également des permanences dans le hall à la semaine de la rentrée."},
        {t:"“Conférence inter-école”", l:"Organiser des conférences sur divers sujets (Scientifiques, économiques, préventions, sociales…) avec les différentes écoles de Strasbourg suivie d’une rencontre informelle pour discuter du sujet. L’objectif est de faire participer l’INSA à la vie du campus différemment et de partager ses atouts aux autres écoles mais aussi de pouvoir apprendre de ces dernières."},
      ],
      reuse:[
        {t:"Organiser un week-end formation avec le BNEI", l:"L’objectif est de proposer une formation, le temps d’un week-end, au monde associatif de l’école (clubs, associations et commissions) en collaboration avec le BNEI. Ce WEF sera aussi ouvert aux écoles d’ingénieurs membres de BREI. Cela se déroulerait début novembre 2020."},
        {t:"Assister aux AG du BREI et BNEI", l:"Un membre du pôle réseau sera présent aux AG du BREI et BNEI. L’objectif est de s’investir dans l’actualité du BREI et BNEI, faire un compte rendu sur nos réseaux sociaux et représenter le BDE."},
        {t:"Promouvoir les événements sportifs inter écoles (TIGRE, TOSS, ...)", l:"Faire connaître et proposer aux élèves de participer au TIGRE et au TOSS."},
        {t:"S’impliquer au Poly", l:"Une communication accrue sur l’existence du Poly afin de motiver plus d’élèves, de représenter et d’intégrer l’INSA parmi les autres écoles et aussi continuer le travail des années précédentes."},
        {t:"Assister aux AG de l’AFGES", l:"Un membre du pôle réseau sera présent aux AG de l’AFGES. L’objectif est de s‘investir dans l’actualité de l’AFGES, faire un compte rendu sur nos réseaux sociaux et représenter le BDE."},
        {t:"Relayer les informations de l’UNEAP", l:"Cette année nous souhaitons relayer les informations de l’UNEAP, qui nous seront transmises par le biais des architectes de l’INSA impliqués dans l’association. Nous voulons avoir un rôle de support pour les aider s’ils en ont besoin (pour communiquer sur leurs événements par exemple), et nous serons ouverts aux propositions qu’ils nous feront dans cet objectif-là."},
      ]
    }, lore:"Le pole Réseau est là pour connecter l'INSA aux autres écoles francaises.",state:false},
    
    {id:13, content:1, title:"Pôle Soirées", pole:"../assets/files/prog/Pole-soiree.png", video:'https://youtu.be/embed/HUNDOEz_K_0', prog:{
      new:[
        {t:"Soirée Féria et BBQ au Baggersee", l:"Cet évènement sera l’occasion de se retrouver une dernière fois avant la fin des cours afin de profiter d’un barbecue et d’une fin d’après-midi en toute détente avant de finir sur la soirée post-partiel de fin d’année dans une discothèque ou une salle. L’objectif de cette soirée est d’introduire le thème de la Féria, c’est-àdire que les gens viennent vêtus de rouge et blanc. En plus du BBQ, nous souhaitons proposer des activités variées et originales de 17h30 à 21h tels que du Quidditch ou de la thèque avec vortex pour divertir les étudiants. Cet événement se déroulerait le 5 juin 2020."},
        {t:"Soirée concours d’éloquence", l:"Un concours d’éloquence a pour vocation d’encourager les étudiants à maîtriser, développer et révéler l’expression orale, l’art de convaincre, en harmonie avec leur culture générale. Le tout dans le souci de l’élégance et de la précision de la langue française. Il est pour certains, une manière de sortir de sa zone de confort et pour d’autres, un moyen de relever un défi personnel. Cet événement se déroulerait après la semaine inter-semestrielle en Amphi De Dietrich."},
      ],
      reuse:[
        {t:"Développement de la soirée FESTIVAL", l:"La soirée festival a été une grande réussite pour le pôle soirée rose, donc nous souhaitons continuer dans cette lancée. L'après-midi, nous proposerons différentes activités grâce aux clubs et au polar. Pour le soir, le concert comportera un panel d’artistes de l’INSA mais aussi un groupe de Science Po et un groupe professionnel (Storm Orchestra). Cet événement se déroulerait normalement le mercredi 21 octobre."},
        {t:"Soirée de Pré rentrée", l:"La soirée de pré-rentrée est une soirée essentielle de l’INSA qui permet aux nouveaux étudiants de rencontrer un grand nombre de personnes de l’école, notamment ceux de leur spécialité. Cet évènement se ferait au STRIDE le samedi 5 septembre."},
        {t:"Soirée parrainlympique", l:"Cette soirée a pour but de souder les différentes familles autour d’un tournoi les opposants. Ce tournoi inter-famille sera organisé en novembre dans une salle (attente de réponses de l’espace 23) durant toute une soirée. Il sonne également la fin de la période d’accueil des étudiants en troisième année."},
        {t:"Soirée post partiel-janvier", l:"Cette soirée aura pour but de renforcer la culture des post-partiels à l’INSA Strasbourg qui a été mise au goût du jour par les BDE précédents. Cette soirée se déroulera au Studio Saglio le dimanche 24 janvier 2021."},
      ]
    }, lore:"Le rôle principal du pôle soirée est d’organiser des évènements festifs et distrayants pour les élèves de l’école. De plus, il permet de mettre en avant les étudiants de l’école de manière singulière avec des évènements ayant pour vocation une ouverture musicale mais aussi culturelle.",state:false},
    
    {id:14, content:1, title:"Pôle STH", pole:"../assets/files/prog/Pole-STH.png", video:'https://youtu.be/embed/ToMrrK3Um64', prog:{
      new:[
        {t:"WESTH", l:"Du samedi midi au dimanche soir, le BDE emmène les STH pour un week-end inoubliable, rempli de nombreuses activités et marqué par une nuit en camping."},
        {t:"Spé(ed)-Dating", l:"Les STH pourront assister à des présentations et poser des questions à des I2/I3/I4 de chaque spécialité existante. Ceci dans un cadre d’échange dans le but de répondre à toutes les interrogations."},
        {t:"Sortie Patinoire", l:"Une sortie à la patinoire “L’Iceberg”. De quoi se mettre dans l’ambiance de Noël en s’amusant."},
        {t:"Sortie Trampo-park", l:"Organiser une sortie au trampo-park afin de voir plein de STH rebondir dans tous les sens."},
        {t:"Le dico du ptit nouvo", l:"Le dico du ptit nouvo n’est pas une activité mais plutôt un nouveau projet. Le but est de créer un recueil dématérialisé du jargon Insassien : certaines expressions seront expliquées avec une touche d’humour !"},
        {t:"Fil rouge : le killer", l:"Activité lancée le mardi de la semaine d’accueil : un killer géant géré via un compte messenger (un boot), ce qui permettra à la partie d’évoluer de jour comme de nuit, dans ou en dehors des activités. Le killer continue tant qu’il reste des joueurs."},
      ],
      reuse:[
        {t:"Semaine d’accueil", l:"La semaine d’accueil est destinée à créer de la cohésion entre les nouveaux entrants et de leur permettre de s’intégrer par le biais d’activités divertissantes"},
        {t:"Flams Parrain-Fillot", l:"Soirée séparée en 2 parties : la première à l’Insa où des jeux entre STH et I2 seront proposés et la deuxième au Flam’s pour manger et se désaltérer afin d’échanger avec les parrains/marraines."},
        {t:"Soirée Pimp ta famille STH", l:"Soirée à laquelle parrains et fillots se déguisent mutuellement afin de resserrer les liens entre familles."},
        {t:"Défi photo inter-TD", l:"Le but est de donner une liste d’objet à chaque groupe de TD et chaque groupe doit faire une photo avec le plus d’objets possibles de la liste. L’objectif est de créer une cohésion rapide entre groupe."},
        {t:"Banque d’annales accessible par les STH", l:"La banque d’annales déjà mise en place sera étoffée et actualisée, avec différents ajouts, notamment de corrections. Ces annales seront également ajoutées sur Moodle."},
      ]
    }, lore:"Le pôle STH est responsable de l’organisation d'événements concernants les étudiants en première année. Ses objectifs sont de faire entrer les étudiants dans l’univers de l’Insa Strasbourg, tant scolairement que extra-scolairement.",state:false},

    {id:15, content:2, title:"🔥 Partenaires"}
  ];

  static partners = [
    {src:"../assets/files/prog/biocoop.png", link:"https://www.biocoop.fr/"},
    {src:"../assets/files/prog/bomarche.png", link:"https://www.bomarche.fr/fr/"},
    {src:"../assets/files/prog/csa.jpeg", link:"http://www.csamecanique.com/"},
    {src:"../assets/files/prog/engie.png", link:"https://www.engie.com/"},
    {src:"../assets/files/prog/pumpkin.png", link:"https://pumpkin-app.co/"},
  ];
  static menus = [
    {src:"../assets/files/campaign/Menu-J1.png", spoil:new Date('2020-02-09T05:20:30Z')<new Date()},
    {src:"../assets/files/campaign/Menu-J3.png", spoil:new Date('2020-02-17T05:20:30Z')<new Date()},
  ];

  static flyers = [
    {id:0, title:"Jour 1", path:"../../assets/files/campaign/FLYER-MGTC-11.02.pdf", spoil:new Date('2020-02-11T07:50:30Z')<new Date()},
    {id:1, title:"Jour 2", path:"../../assets/files/campaign/FLYER-MGTC-13.02.pdf", spoil:new Date('2020-02-13T05:20:30Z')<new Date()},
    {id:2, title:"Jour 3", path:"../../assets/files/campaign/FLYER-MGTC-17.02.pdf", spoil:new Date('2020-02-17T05:20:30Z')<new Date()},
    {id:3, title:"Jour 4", path:"../../assets/files/campaign/FLYER-MGTC-19.02.pdf", spoil:new Date('2020-02-19T05:20:30Z')<new Date()}
  ];
  
  static songs = [
    {id:0, title:"Scooby-D’Antic", parole:["Nous c’est magell’Antic","Une liste fantastique","On va t’faire kiffer cette campagne","Parés pour rigoler","Et pour te faire bouger","Les Magell’Annnntiiiic","","Nous c’est Magell’Antic","Une liste Mythique","Des comme nous t’en verras jamais","On est prêts pour t’ambiancer","Et on va pas s’gèner","Les Magell’Annntiiic","","Ne t’y trompes pas","On sera ton unique choix","“Ta-ta-ta-ta”","Et à l’INSA, c’est du rouge que tu verras!","","Nous c’est Magell’Antic","Une liste Mythique","Des comme nous t’en verras jamais","On est prêts pour t’ambiancer","Et on va pas s’gèner","Les Magell’Annntiiic","","Nananananana, nananananaaaaa…","Les Magell’Annnnnnntiiiiiic","","Nous c’est Magell’Antic","Avec nous c’est magique","Tous unis pour te faire rêver","Alors viens avec nous","Et suis nous jusqu’au bout","Les Magell’Annntiiiiic","","Nous c’est Magell’Antic","Les seuls et les uniques","Tu votes Bordeaux pour voir plus haut","2 semaines c’est pas assez","Pour kiffer toute l’année","Les Magell’Annnntiiiic","","","Ne t’y trompes pas","On sera ton unique choix","“Ta-ta-ta-ta”","Et à l’INSA, c’est du rouge que tu verras!","","Nous c’est Magell’Antic","Les seuls et les uniques","Tu votes Bordeaux pour voir plus haut","2 semaines c’est pas assez","Pour kiffer toute l’année","Les Magell’Annnntiiiic","","Nananananana, nananananaaaaa…","Les Magell’Annnnnnntiiiiiic ","Nananananana, nananananaaaaa…","Les Magell’Annnnnnntiiiiiic","blabla\nblala"], state:false},
    {id:1, title:"Red is Life", parole:["INSA ","Lala la lala ","Insa Chante avec moi","Lala la lala ","","Les rouges sont là pour toi, ","Lala la lala ","Red is Life","Lala la lala ","","Si tu n’veux pas t’ennuyer ","Durant toute ton année,","Si tu veux que l’INSA bouge ","Alors vote pour les rouges.","","En c’moment tous les dieux grecs ","Dansent au dessus de ta tête,","Pour que ton  année soit fantastique et magnifique,","Vote Magellantic ","","Alors L’INSA ","Lala la lala ","INSA chante avec moi ","Lala la lala ","Les rouges sont là pour toi ","Lala la lalaa","Red is life","Lala la lala ","","Quand on débarque le matin","Pour t'chanter ce refrain","Le midi comme en soirée ","On s’ra là pour t'ambiancer","","Alors maintenant suis l'minotaure","Pour des souvenirs en or","Et que ton  année soit fantastique et magnifique,","Vote Magellantic ","","Alors L’INSA ","Lala la lala ","INSA chante avec moi ","Lala la lala","Les rouges sont tous là pour toi","Lala la lala","RED IS LIFE."], state:false},
    {id:2, title:"Sur l'air de Femme Libérée", parole:["A Magellopolis vous êtes les bienvenus","Les bordeaux sont ici et on est pas prêts de repartir","Pendant deux semaines de dingue on va faire la bringue","Avec vous les copains oui on va se mettre bien"]},
    {id:3, title:"Ô Magell’antic", parole: ["Magell’antic est là pour vous","La coeur ouvert un peu beaucoup","On a envie d’être présent pour n’importe qui","N’importe qui, on s’est dit toi","Alors vraiment n’hésites pas","T’as plus qu’a rejoindre la cité pour kiffer l’année","","Oooooooooo Magell’antic ! lala la lala","Oooooooooooo Magell’antic ! lala la lalala","Au grands jeux, aux soirées","A midi ou à  minuit","Vnez voir c’quils vous ont préparés les Magell’antic","x2"]},
    {id:4, title: "N’hésite pas", parole:["Non n’hésite pas, vote Bordeaux car c’est le bon choix (x4)","Oui nous c’est Magell’Antic","Et y a du bruit y a d’la zik","Du lundi au samedi","Et Nanani Nanana","Ça va être la folie","Et pour un an si tu veux","Qu’on chauffe le BDE","Prends le papier viens voter !"]},
    {id:5, title: "J’suis Rouge", parole:["J’suis rouge, ","J’y crois pas comment j’suis rouge, ","La liste parfaite, chez nous ça bouge ! ","Voici venir les rouges ","","Laisse nous nous présenter nous c’est Magell’antic !","La liste rouge, oui la seule et l’unique !","Présents ensemble matin, midi et soir pour toi,  ","Les Magell’antiques sont là,","Et la Grèce s’ouvre à toi !","Tellement chauds qu’à peine arrivés on t’offre déjà à manger, ","Pour ta pause de 10h, on est là pour t’faire rigoler ","Ce midi te régaler","Et ce soir te faire rêver ","Alors à la fin d’ta journée, franchement, t’auras kiffé !","","J’suis rouge, ","J’y crois pas comment j’suis rouge, ","La liste parfaite, chez nous ça bouge ! ","Voici venir les rouges !","J’suis rouge, ","J’y crois pas comment j’suis rouge, ","La liste parfaite, chez nous ça bouge ! ","Voici venir les rouges !"]},
    //{id:6, title:"Chorée", parole:"", state:false}
  ];
  static lyrics = "../../assets/files/campaign/Chansons.pdf"
  static partys = [
    {name:"Soft 1", date:"11/02/20 19:30", theme:"Jeux Olympique", src:"../../assets/files/party/party_soft_1.png", spoil:new Date('2020-02-11T05:20:30Z')<new Date()},
    {name:"Archery tag", date:"13/02/20", theme:"Shooter à l'arc", src:"../../assets/files/party/Archery_Tag.png", spoil:new Date('2020-02-12T05:20:30Z')<new Date()},
    {name:"Hard 1", date:"13/02/20", theme:"Anti'Kitsch", src:"../../assets/files/party/party_hard_1.png", spoil:new Date('2020-02-13T05:20:30Z')<new Date()},
    {name:"Soft 2", date:"17/02/20 19:15", theme:"", src:"../../assets/files/party/party_soft_2.png", spoil:new Date('2020-02-17T05:20:30Z')<new Date()},
    {name:"Afterwork 2", date:"19/02/20 19:00", theme:"Afterwork au Delirium", src:"../../assets/files/party/afterwork_2.png", spoil:new Date('2020-02-19T05:20:30Z')<new Date()},
    {name:"Hard 2", date:"19/02/20 23:00", theme:"FeRia Antique", src:"../../assets/files/party/party_hard_2.png", spoil:new Date('2020-02-19T05:20:30Z')<new Date()},
  
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

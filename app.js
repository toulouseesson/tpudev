  var app = angular.module('Store', []);

  app.controller('StoreController', function() {
      this.products = gems;
  });

  app.controller('TabController', function() {

    this.tab = 1;

    this.setTab = function(aTab) {
        this.tab = aTab;
    }

    this.isSet = function(toto) {
      return (this.tab === toto);
    }
  });

    app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [{
          name: 'Battlefield 1',
          description: "Dans Battlefield 1, vous découvrirez ce que nous appelons des récits de guerre. Ce sont des aventures personnelles axées sur différents protagonistes, chacun ayant son histoire et ses compétences uniques. Ces personnages participent à la guerre, mais les histoires racontées dans Battlefield 1 sont personnelles. Elles se concentrent plus sur les gens que sur l'histoire des batailles.",
          site: "images/gamekult.gif",
          site2: "images/logojvc.jpg",
          price: 60,
          price2: 35,
          price3: 30,
          avis: "Cet épisode est - sans l’ombre d’un doute - le meilleur de la série",
          avis2: "Un FPS solo et multi venu gommer les errances de la saga iconique",
          note: "images/9.png",
          note2: "images/8,5.png",
          lien: 'https://www.gamekult.com/jeux/battlefield-1-3050692319/test.html',
          lien2: "http://www.jeuxvideo.com/test/552927/battlefield-1-la-pepite-des-fps-de-fin-d-annee.htm",
          bouton: "https://jeux-video.fnac.com/a9689299/Battlefield-1-PC-Jeu-PC?ectrans=1&oref=9a4574b9-8158-cfe4-5737-06655a362de0",
          bouton2: "https://jeux-video.fnac.com/a9689297/Battlefield-1-PS4-Jeu-PlayStation-4?ectrans=1&oref=e8eb1f12-c0f1-e64b-9aa4-76d86a76af1d",
          bouton3: "https://jeux-video.fnac.com/a9689298/Battlefield-1-Xbox-One-Jeu-Xbox-One?ectrans=1&oref=35b1e1ac-5491-3af3-e1d0-0196cfeec058",
          images: [
              "images/bf1.jpg",
              "images/bf1-2.jpg",
              "images/bf1-3.jpg",
          ],
          reviews: [{
              stars: 5,
              body: "Très bon jeu ! J'ai adoré !",
              author: "joe@example.org",
              createdOn: 1397490980837
          }, {
              stars: 4,
              body: "Bon jeu dans l'ensemble, si on soustrait les quelques rares bug présent dans le jeu.",
              author: "tim@example.org",
              createdOn: 1397490980837
          }]
      },
      {
          name: 'Call of Duty : Infinite Warfare',
          description: "La campagne retourne dans l'univers militaire ultra-réaliste caractéristique des origines de la série, tout en proposant un récit d'anticipation inédit dans la saga Call of Duty. Le joueur est entraîné dans un périple au style classique dans un contexte de guerre à grande échelle, se déroulant dans un futur où le conflit humain s'est étendu dans tout le système solaire.",
          site: "images/gamekult.gif",
          site2: "images/logojvc.jpg",
          price: 22.90,
          price2: 20,
          price3: 15,
          avis: "En regardant vers les étoiles, Activision et Infinity Ward voulaient apporter un peu plus de souffle et de nouveautés à leur tête de gondole.",
          avis2: "Avec un excellent mode Zombies mais un multijoueur peu inspiré, Call of Duty Infinite Warfare est un FPS solide mais qui manque cruellement d'âme.",
          note: "images/5.png",
          note2: "images/3,5.png",
          lien: 'https://www.gamekult.com/jeux/call-of-duty-infinite-warfare-3050686225/test.html',
          lien2: "http://www.jeuxvideo.com/test/562499/call-of-duty-infinite-warfare-le-changement-c-est-presque-maintenant.htm",
          bouton: "https://jeux-video.fnac.com/a9677956/Call-of-Duty-Infinite-Warfare-PC-Jeu-PC",
          bouton2: "https://jeux-video.fnac.com/mp29802884/Call-Of-Duty-Infinite-Warfare-PS4?ectrans=1&oref=9431824f-254e-0443-f366-db0de195b35f",
          bouton3: "https://www.amazon.fr/dp/B01F2AAC3C/ref=asc_df_B01F2AAC3C46744263/",
          images: [
              "images/cod.jpg",
              "images/cod2.jpg",
              "images/cod3.jpg",
          ],
          reviews: [{
              stars: 3,
              body: "Massacre de la série call of duty encore une fois, je regrette l'époque des Modern Warfare",
              author: "JimmyDean@example.org",
              createdOn: 1397490980837
          }, {
              stars: 2,
              body: "Payé le jeu une blinde. Et devoir encore payé une fois en jeu pour du nouveau contenu. Sont-ils sèrieux aux moins ?",
              author: "gemsRock@example.org",
              createdOn: 1397490980837
          }]
      },
      {
          name: 'Rainbow Six Siege',
          description: "Tom Clancy's Rainbow Six Siege invite les joueurs à maîtriser l'art du siège. Affrontements en combat rapproché, aspect tactique, jeu en équipe et actions explosives sont au cœur de l'expérience. Le gameplay impose un nouveau standard dans la franchise en ce qui concerne les confrontations armées empreintes de stratégie, en respectant l'héritage laissé par les anciens jeux Tom Clancy's Rainbow Six.",
          site: "images/gamekult.gif",
          site2: "images/logojvc.jpg",
          price: 45,
          price2: 43.36,
          price3: 40,
          avis: "Avec Rainbow Six Siege, Ubisoft tenait une occasion de pondre un bon petit FPS tactique sans avoir à l’engluer dans l’une de ses licences mastodontes. ",
          avis2: " Rainbow Six Siege offre une expérience de jeu convaincante, en mettant en place des idées assez intéressantes pour le genre.",
          note: "images/5.png",
          note2: "images/7,5.png",
          lien: 'https://www.gamekult.com/jeux/tom-clancy-s-rainbow-six-siege-3010010109/test.html',
          lien2: "http://www.jeuxvideo.com/test/451417/rainbow-six-siege-un-fps-entre-tactique-et-arcade.htm",
          bouton: "https://jeux-video.fnac.com/a8235024/Rainbow-Six-Siege-PC-Jeu-PC?ectrans=1&oref=00000000-0000-0000-0000-000000000000",
          bouton2: "https://jeux-video.fnac.com/a8235022/Rainbow-Six-Siege-PS4-Jeu-PlayStation-4?ectrans=1&oref=465ef1c2-af12-2632-6330-2fe831b23d91",
          bouton3: "https://jeux-video.fnac.com/a8235023/Rainbow-Six-Siege-Xbox-One-Jeu-Xbox-One?ectrans=1&oref=98f827dc-2861-51a8-0b82-b1eee4f233b9",
          images: [
              "images/rss.jpg",
              "images/rss2.jpg",
              "images/rss3.jpg"
          ],
          reviews: [{
              stars: 3,
              body: "Très bon jeu mais des bugs rendant le gameplay difficile.",
              author: "turtleguyy@example.org",
              createdOn: 1397490980837
          }, {
              stars: 1,
              body: "Trop de bugs.",
              author: "LouisW407@example.org",
              createdOn: 1397490980837
          }, {
              stars: 4,
              body: "Si on oublie les bugs, la saga Tom clancy nous pond un véritable chef d'oeuvre !",
              author: "nat@example.org",
              createdOn: 1397490980837
          }]
      }

  ];

  app.controller('GalleryController', function() {
    this.current = 0;
    this.setCurrent = function(index) {
      this.current = index || 0;
    };
  });
  function envoi() {
    swal(
  'Envoie !',
  'Votre commentaire à été envoyé avec succès !',
  'success'
)
  };
function sweet() {
  swal({
  title: 'Sweet!',
  text: 'Modal with a custom image.',
  imageUrl: 'https://unsplash.it/400/200',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  animation: true
})
};
function signout() {
  swal({
  title: 'Êtes vous sûr?',
  text: "Vous êtes sur le point de vous déconnecter !",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Oui je veux me déconnecter.'
}).then(function (result) {
  if (result.value) {
      window.location = 'example.html';
  }
})
};

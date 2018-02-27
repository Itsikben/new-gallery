console.log('Starting up');

var gProjs =  [
    {
      "href":"https://geogram-coding.herokuapp.com",
      "id": "geogram",
      "name": "geogram",
      "title": "Share special moments with friends from around the world",
      "desc": "Allows you to take, edit and share your photos with all your friends, you can also see where photos were taken and view all the photos on a map",
      "publishedAt": 1448693940000,
      "labels": ["socket.io", "vue.js"],
      "img": "projs-images/geogram.png",
    },
    {
        "href":"https://itsikben.github.io/apsos/#/",
        "id": "apsos",
        "name": "apsos",
        "title": "The mother of all the appliques",
        "desc": "An application that includes 3 different services: emails ,Reminders and location based tourism app",
        "publishedAt": 1448693940000,
        "labels": ["geolocation", "sorting","responsive"],
        "img": "projs-images/apsus1.png",
    },
    {
       "href": "https://nemo369.github.io/sprint2/",
        "id": "meme generator",
        "name": "meme generator",
        "title": "Make funny memes with the best & easiest meme generator",
        "desc": "create a Funny Memo By selecting one of the templates you can  design the text according to your preferences and also download it to your computer",
        "publishedAt": 1448693940000,
        "labels": ["cnvas", "javascript"],
        "img": "projs-images/mema1.png",
    },
      {
       "href": "#book-shop",
        "id": "book-shop",
        "name": "book-shops",
        "title": "Helps you manage your store",
        "desc": "Helps you manage your store",
        "publishedAt": 1448693940000,
        "labels": ["Matrixes", "keyboard events"],
        "img": "projs-images/book.png",
    },
    {
      "href": "#book-shop",
       "id": "Travel Tip",
       "name": "Travel Tip",
       "title": "Helps you manage your trip",
       "desc": "Allows you to use maps to discover your location and search for other locationse",
       "publishedAt": 1448693940000,
       "labels": ["google api","keyboard events"],
       "img": "projs-images/travel.png",
   },
]

function initPage() {
  renderProjs();
}



function renderProjs() {
  var elPortfolioContainer = document.querySelector('#portfolio-container');
  var elModalsContainer = document.querySelector('#modals-container');

  var strHtmlPreviews = '';
  var strHtmlModals = '';

  for (var i = 0; i < gProjs.length; i++) {
    var proj = gProjs[i];
    strHtmlPreviews += `
    <div class="col-md-4 col-sm-6 portfolio-item">
          <a onclick="projClicked(${i})" class="portfolio-link" data-toggle="modal" href="#portfolioModal${i}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src=${proj.img} alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.name}</p>
          </div>
        </div>
        `;
    strHtmlModals += `
    <div class="portfolio-modal modal fade" id="portfolioModal${i}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${proj.name}</h2>
                    <p class="item-intro text-muted">${proj.title}</p>
                    <img class="img-fluid d-block mx-auto" src="${proj.img}" alt="">
                    <p>${proj.desc}</p>
                    <p><a href=${proj.href}>Visit project</a></p>
                    <ul class="list-inline">
                      <li>Date: January 2017</li>
                      <li>Client: Threads</li>
                      <li>Category: Illustration</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }



  elPortfolioContainer.innerHTML = strHtmlPreviews;
  elModalsContainer.innerHTML = strHtmlModals;

}


function projClicked(idx) {
  console.log(idx);
  var elContainer = document.querySelector('#selected-proj-container');

  elContainer
   .querySelector('h2')
   .innerHTML = gProjs[idx].name; 

   elContainer
   .querySelector('p')
   .innerHTML = `desc for proj ${idx+1}`; 
}

AOS.init({duration:1200,})

var tasks = [{
    "ebookTitle": "course 1",
    "ebookIntro": "course 1 short intro... lorem ipsum vhbvhsd gsyafg yyv ya gy vyhadu gasfu asifgasufgbujd gujfg",
    "button": 'Get Now',
    "ebookImgSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"

},
{
    "ebookTitle": "course 2",
    "ebookIntro": "course 2 short intro... lorem ipsum vhbvhsd gsyafg yyv ya gy vyhadu gasfu asifgasufgbujd gujfg",
    "button": 'Get Now',
    "ebookImgSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"

},
{
    "ebookTitle": "course 3",
    "ebookIntro": "course 3 short intro... lorem ipsum vhbvhsd gsyafg yyv ya gy vyhadu gasfu asifgasufgbujd gujfg",
    "button": 'Get Now',
    "ebookImgSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"

},
{
    "ebookTitle": "course 4",
    "ebookIntro": "course 4 short intro... lorem ipsum vhbvhsd gsyafg yyv ya gy vyhadu gasfu asifgasufgbujd gujfg",
    "button": 'Get Now',
    "ebookImgSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"

},
{
    "ebookTitle": "course 5",
    "ebookIntro": "course 5 short intro... lorem ipsum vhbvhsd gsyafg yyv ya gy vyhadu gasfu asifgasufgbujd gujfg",
    "button": 'Get Now',
    "ebookImgSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"

},
{
    "ebookTitle": "course 6",
    "ebookIntro": "course 6 short intro... lorem ipsum vhbvhsd gsyafg yyv ya gy vyhadu gasfu asifgasufgbujd gujfg",
    "button": 'Get Now',
    "ebookImgSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"

},
{
    "ebookTitle": "course 7",
    "ebookIntro": "course 7 short intro... lorem ipsum vhbvhsd gsyafg yyv ya gy vyhadu gasfu asifgasufgbujd gujfg",
    "button": 'Get Now',
    "ebookImgSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"

},
{
    "ebookTitle": "course 8",
    "ebookIntro": "course 8 short intro... lorem ipsum vhbvhsd gsyafg yyv ya gy vyhadu gasfu asifgasufgbujd gujfg",
    "button": 'Get Now',
    "ebookImgSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"

},
{
    "ebookTitle": "course 9",
    "ebookIntro": "course 9 short intro... lorem ipsum vhbvhsd gsyafg yyv ya gy vyhadu gasfu asifgasufgbujd gujfg",
    "button": 'Get Now',
    "ebookImgSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"

},
{
    "ebookTitle": "course 10",
    "ebookIntro": "course 10 short intro... lorem ipsum vhbvhsd gsyafg yyv ya gy vyhadu gasfu asifgasufgbujd gujfg",
    "button": 'Get Now',
    "ebookImgSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"

},
{
    "ebookTitle": "course 11",
    "ebookIntro": "course 11 short intro... lorem ipsum vhbvhsd gsyafg yyv ya gy vyhadu gasfu asifgasufgbujd gujfg",
    "button": 'Get Now',
    "ebookImgSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"

},

{
    "ebookTitle": "course 12",
    "ebookIntro": "course 12 short intro... lorem ipsum vhbvhsd gsyafg yyv ya gy vyhadu gasfu asifgasufgbujd gujfg",
    "button": 'Get Now',
    "ebookImgSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"

},

];

let cardContainer;

let createTaskCard = (task) => {

    let card = document.createElement('div');
    card.className = 'cards';
    card.setAttribute("data-aos", "flip-left");

    //let cardBody = document.createElement('div');
    //cardBody.className = 'card-body';

    let cardImage = document.createElement('img');
    cardImage.className = "cards-image";
    cardImage.src = task.ebookImgSrc;


    let title = document.createElement('h1');
    title.innerText = task.ebookIntro;
    title.className = 'cards-text';


    let button1 = document.createElement('a');
    button1.className = 'cards-button';
    button1.innerText = task.button;
    button1.href = task.apkLink;

    card.appendChild(cardImage);
    card.appendChild(title);
    card.appendChild(button1);
    cardContainer.appendChild(card);

}

let initListOfTasks = () => {
    if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
    }

    cardContainer = document.getElementById('card-container');
    tasks.forEach((task) => {
        createTaskCard(task);
    });
};
initListOfTasks();
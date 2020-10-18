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
    card.className = 'card col-lg-3 col-md-4 col-sm shadow-lg mr-5 ml-5 mt-5 mb-2 img-thumbnaill text-center cursor-pointer rounded';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let cardImage = document.createElement('img');
    cardImage.className = 'card-img-top img-thumbnail ';
    cardImage.src = task.ebookImgSrc;


    let title = document.createElement('h4');
    title.innerText = task.ebookTitle;
    title.className = 'card-title mt-5 text-capitalize';

    let text = document.createElement('p');
    text.innerText = task.ebookIntro;
    text.className = 'card-text text-wrap text-justify ';


    let button1 = document.createElement('a');
    button1.className = 'btn btn-own mt-4 mb-2 text-uppercase';
    button1.innerText = task.button;


    cardBody.appendChild(cardImage);
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(button1);
    card.appendChild(cardBody);
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
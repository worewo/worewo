AOS.init({duration:1200,})

var tasks = [{
    "ebookTitle": "The 5 AM Club - Robin Sharma",
    "ebookIntro": "robin' sharma's books are helping people all over the world lead great live's --PAULO COELHO.",
    "button": 'Get Now',
    "ebookLink": 'https://matix.li/c98c651da6aa',
    "ebookImgSrc": "https://images-na.ssl-images-amazon.com/images/I/81Nlt+KjHhL.jpg",

},
{
    "ebookTitle": "Atomic Habits- Tiny changes, remarkable results",
    "ebookIntro": "an easy & proven way to build good habits & break bad ones.",
    "button": 'Get Now',
    "ebookLink": 'https://matix.li/b103590506c9',
    "ebookImgSrc": "https://s3.us-east-2.amazonaws.com/ruckifylive/public_regen/aad4e2b0-9b98-11ea-8300-753f99db91c9/71ac8ae0-9c5c-11ea-abcc-a1a15078bb85/71ae4470-9c5c-11ea-ab22-5507b3c8bd57_400x400.jpg"

},
{
    "ebookTitle": "Factfulness",
    "ebookIntro": "Ten Reasons We’re WrongAbout the World and Why Things.",
    "button": 'Get Now',
    "ebookLink": 'https://matix.li/f04d4f8e2d41',
    "ebookImgSrc": "https://ebooks.gramedia.com/ebook-covers/46224/image_highres/ID_F10AD2019MTH02F10AD.jpg"

},
{
    "ebookTitle": "The Butcher s Hook-by-Janet Ellis.",
    "ebookIntro": "utterly mesmeric hannah kent.",
    "button": 'Get Now',
    "ebookLink": 'https://matix.li/5aa297c4644c',
    "ebookImgSrc": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1453385695l/28666153._SY475_.jpg"

},
{
    "ebookTitle": "The Doll-Master and Other Tales of Terror",
    "ebookIntro": "-by-Joyce Carol Oat.",
    "button": 'Get Now',
    "ebookLink": 'https://matix.li/39370aa1b969',
    "ebookImgSrc": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524650197l/39940417._SY475_.jpg"

},
{
    "ebookTitle": "The North Water",
    "ebookIntro": "-by-Ian McGuire.",
    "button": 'Get Now',
    "ebookLink": 'https://matix.li/aad7469ab962',
    "ebookImgSrc": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1456351800l/25666046._SY475_.jpg"

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
    title.innerText = task.ebookTitle;
    title.className = 'cards-text';


    let button1 = document.createElement('a');
    button1.className = 'cards-button';
    button1.innerText = task.button;
    button1.href = task.ebookLink;

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
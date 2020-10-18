var tasks = [{
    "apkTitle": "KineMaster-Pro 4.12.3.15162 Stabiron",
    "apkLink": 'https://matix.li/45828b28b7a2',
    "apkImgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjAw2ZrG_rhs_6HAUFkX8qwq8LzCar_U4-4g&usqp=CAU",
    "button": 'Get Now',
},
{
    "apkTitle": "Truecaller-Premium 11_27_8",
    "button": 'Get Now',
    "apkLink": 'https://matix.li/c245e0dc9afc',
    "apkImgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTWoZeYM2o6E6qkENDMa3sKCXoAeVM2j4LBg&usqp=CAU"

},
{
    "apkTitle": "FilmoraGo-Pro v4.0.5 build 429 Mod arm64 v8a",
    "button": 'Get Now',
    "apkLink": 'https://matix.li/ceba3c185c3e',
    "apkImgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYvHsxuTHaOIl74T2V6HKQr87KQRGRKUN2xg&usqp=CAU"

},
{
    "apkTitle": "GBWahtsApp+ 10.70 SamMods",
    "button": 'Get Now',
    "apkLink": 'https://matix.li/d516b9479908',
    "apkImgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjA-3AzUP5eDwbln_vOzrurGqGaEja3FmWbg&usqp=CAU"

},
{
    "apkTitle": "Headway v1.3.3.5 Unlocked",
    "button": 'Get Now',
    "apkLink": 'https://matix.li/e4042633f19f',
    "apkImgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1Ae2nmIEzDoBiNvcYldABX0slLfConmouwg&usqp=CAU"

},
{
    "apkTitle": "JioSaavn v7.1 (Mod)",
    "button": 'Get Now',
    "apkLink": 'https://matix.li/cc268460c47f',
    "apkImgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIFv7jHRPtLAdMMLY3YmORf1ODDm5l7ebP2g&usqp=CAU"

},


];

let cardContainer;

let createTaskCard = (task) => {

    let card = document.createElement('div');
    card.className = 'card col-lg-3 col-md-4 col-sm shadow-lg mr-5 ml-5 mt-5 mb-2 img-thumbnaill text-center cursor-pointer rounded';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let cardImage = document.createElement('img');
    cardImage.className = 'card-img-top img-thumbnail rounded';
    cardImage.src = task.apkImgSrc;


    let title = document.createElement('h4');
    title.innerText = task.apkTitle;
    title.className = 'card-title mt-5 text-capitalize';


    let button1 = document.createElement('a');
    button1.className = 'btn btn-own mt-4 mb-2 text-uppercase';
    button1.innerText = task.button;
    button1.href = task.apkLink;

    cardBody.appendChild(cardImage);
    cardBody.appendChild(title);
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
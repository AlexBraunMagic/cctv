'use strict';

//===================================================================================
//Отображение скрытого меню при нажатии
//на элементы меню header
//===================================================================================

//Получаем элементы меню которые должны отобразиться
const headerSubMenuBox = document.querySelectorAll('.header__submenu-box');

//Получаем элементы, что бы при клике на него убирался класс у элементов
const headerMenuItem = document.querySelector('.header__menu-item');
const headerMenu = document.querySelector('.header__menu');
const headerWrapper = document.querySelector('.header__wrapper');
const container = document.querySelector('.container');
const header = document.querySelector('.header');
const body = document.querySelector('body');


//Получаем элементы меню по которым будет происходить клик
const headerMenuItemLink = document.querySelectorAll('.header__menu-item-link');


//Функция для отоброжения скрытых меню
function showSubTopMenu() {
    //Перебираем полученные ссылки и навешиваем на них обработчик
    headerMenuItemLink.forEach(function (itemMenuLink) {

        itemMenuLink.addEventListener('click', function (e) {


            // e.preventDefault();

            //Получаем елемент target
            let itemTarget = e.target;

            //Получаем соседа элемента у которого было вызвано событие
            let subMenuBox = itemTarget.nextElementSibling;

            //Проверяем у какого элемента вызвано событие
            if (itemTarget.className === 'header__menu-item-link') {

                //Проверяем элемент на наличие класса
                if (subMenuBox.classList.contains('active--element') === false) {

                    //Перебираем все элементы и удаляем у них класс
                    headerSubMenuBox.forEach(function (subMenuItem) {
                        subMenuItem.classList.remove('active--element');
                    });

                    //Добавляем класс элементу соседнему с элементом
                    //у которого было вызвано событие
                    subMenuBox.classList.add('active--element');
                }
                //Проверяем есть ли у элемента у которого вызвано событие 
                //нужный класс
                else if (subMenuBox.classList.contains('active--element')) {

                    //Удаляем класс при клике на элемент
                    subMenuBox.classList.remove('active--element');
                }
            }
        });

    });
}

//Функция для удаления класса
//Принимает в себя параметром коллекцию элементов

// function removeClassActive() {
//     //принятая параметром коллекция перебирается
//     headerSubMenuBox.forEach(function(headerSubMenuBox) {
//         //Каждый элемент коллекции проверяется на наличие класса
//         //И если класс присутствует
//         if(headerSubMenuBox.classList.contains('active--element') === true) {
//             //Класс удаляется у элемента
//             headerSubMenuBox.classList.remove('active--element');
//         }
//     });
// }


//Функция принимающая в себя элемент обёртку и коллекцию элементов
//у которых нужно удалить класс
// function getWrapperElement(body, collectionElement) {

//     //Вызываем событие click у элемента
//     body.addEventListener('click',function(e) {
//         e.preventDefault();

//         //Получаем таргет
//         const headerWrapperTarget = e.target;

//         //Проверяем элемент у которого вызвано событие
//         //И если у него присутствуем нужный класс, то мы берём наши элементы меню и удаляем
//         // у них класс активности
//         if(headerWrapperTarget.className !== 'header__menu-item-link') {
//             removeClassActive(collectionElement);
//         }

//     });

// }

//вызываем функцию для отоброжения скрытых меню
showSubTopMenu();

// headerMenuItem.addEventListener('click', removeClassActive);
// headerMenu.addEventListener('click', removeClassActive);
// headerWrapper.addEventListener('click', removeClassActive);
// container.addEventListener('click', removeClassActive);
// header.addEventListener('click', removeClassActive);
// body.addEventListener('click', removeClassActive);

//Вызываем функцию для удаления класса у элементов
// getWrapperElement(headerWrapper, headerSubMenuBox);



//===================================================================================
//Отображение пустой корзины в хэдере
//===================================================================================


//Получаем элемент для клика
const headerBasketLink = document.querySelectorAll('.header__basket-box-link');

//Корзина
const headerBasketSubbox = document.querySelector('.header__basket-subbox');

// Корзина стоваром
const headerBasketProductInfo = document.querySelector('.header__basket-products-info');

//Обёртка пустой корзины

const headerBasketSubboxEmptyWrapper = document.querySelector('.header__basket-subbox-empty-wrapper');
// header__basket-subbox-empty-inner
const headerBasketSubboxEmptyInner = document.querySelector('.header__basket-subbox-empty-inner');


function showHeaderEmptyBasket() {

    headerBasketProductInfo.classList.remove('active--element');
    headerBasketSubboxEmptyWrapper.classList.add('active--element');
    headerBasketSubboxEmptyInner.classList.add('active--element');


    // if (headerBasketSubbox.classList.contains('active--element') === false) {        
    //     headerBasketProductInfo.classList.remove('active--element');
    //     headerBasketSubbox.classList.add('active--element');
    //     headerBasketSubboxEmptyWrapper.classList.add('active--element');
    //     headerBasketSubboxEmptyInner.classList.add('active--element');
    // }
    // else {
    //     headerBasketSubbox.classList.remove('active--element');
    //     headerBasketSubboxEmptyWrapper.classList.remove('active--element');
    //     headerBasketSubboxEmptyInner.classList.remove('active--element');
    // }
}

function removeHeaderBasket() {
    headerBasketSubbox.classList.remove('header__basket-right-subbox--active');
    headerBasketSubbox.classList.remove('active--element');
    headerBasketSubboxEmptyWrapper.classList.remove('active--element');
    headerBasketSubboxEmptyInner.classList.remove('active--element');
    headerBasketProductInfo.classList.remove('active--element');
    rightSideBarInner.classList.remove('right-side-bar__item--active');
    rightSideBarBasketSum.classList.remove('active--element');
    rightSideBarEmpty.classList.remove('right-side-bar__basket-box-empty-inner--active');

}

//===================================================================================
//Отображение корзины в хэдере с товаром
//===================================================================================

function showProductBasket() {
    headerBasketSubboxEmptyWrapper.classList.remove('active--element');
    headerBasketSubboxEmptyInner.classList.remove('active--element');
    headerBasketProductInfo.classList.add('active--element');
}





headerBasketLink.forEach((item) => {
    item.addEventListener('click', (e) => {
        let itemTarget = e.target;
        if ((itemTarget.className === 'header__basket-box-text') || (itemTarget.className === 'header__basket-box-img') || (itemTarget.className === 'header__basket-box-link')) {


            const headerBasketSubboxItemArr = document.querySelectorAll('.header__basket-subbox-item');

            if (headerBasketSubbox.classList.contains('active--element') === false) {
                headerBasketSubbox.classList.add('active--element');
                if (headerBasketSubboxItemArr.length > 0) {
                    showProductBasket();
                }
                else {
                    showHeaderEmptyBasket();
                }
            }
            else {
                removeHeaderBasket();
            }


        }
    });
});



//==================================
//Отображение пустой корзины справа
//==================================


//Элемент для клика
const rightSideBarItem = document.querySelectorAll('.right-side-bar__item');

const rightSideBarInner = document.querySelector('.right-side-bar__item-box-inner');


const rightSideBarEmpty = document.querySelector('.right-side-bar__basket-box-empty-inner');

// const headerBasketSubboxEmptyWrapper = document.querySelector('.header__basket-subbox-empty-wrapper');

const rightSideBarBasketSum = document.querySelector('.right-side-bar__basket-sum');


function showRightBasket() {
    headerBasketSubbox.classList.add('header__basket-right-subbox--active');
    rightSideBarEmpty.classList.add('right-side-bar__basket-box-empty-inner--active');
    rightSideBarInner.classList.add('right-side-bar__item--active');
    rightSideBarBasketSum.classList.add('active--element');
    headerBasketSubboxEmptyWrapper.classList.add('active--element');


}

// function removeRightBasket() {
//     rightSideBarEmpty.classList.remove('right-side-bar__basket-box-empty-inner--active');
//     rightSideBarInner.classList.remove('right-side-bar__item--active');
//     rightSideBarBasketSum.classList.remove('active--element');
//     headerBasketSubboxEmptyWrapper.classList.remove('active--element');
// }

for (let item of rightSideBarItem) {
    item.addEventListener('click', (e) => {
        const itemTarget = e.target;
        console.log('work');
        if ((itemTarget.className === 'right-side-bar__item') || (itemTarget.className === 'right-side-bar__basket-product') || (itemTarget.className === 'right-side-bar__basket-sum') || (itemTarget.className === 'right-side-bar__product-in-basket') || (itemTarget.className === 'right-side-bar__baskem-price-box')) {
            console.log('work');

            const headerBasketSubboxItemArr = document.querySelectorAll('.header__basket-subbox-item');
            if (headerBasketSubbox.classList.contains('active--element') === false) {
                showRightBasket();
                headerBasketSubbox.classList.add('active--element');
                if (headerBasketSubboxItemArr.length > 0) {
                    showProductBasket();
                }
            }
            else {
                if (headerBasketSubbox.classList.contains('active--element') === false) {
                    showRightBasket();
                    headerBasketSubbox.classList.add('active--element');
                    if (headerBasketSubboxItemArr.length > 0) {
                        showProductBasket();
                    }
                }
                removeHeaderBasket();
            }
            // item.classList.add('right-side-bar__item--active');
            // removeHeaderBasket();
        }
    });
}



//===================================================================================
//Переключаемся между топ меню
//===================================================================================

//Получаем элемент для клика
const topMenuItem = document.querySelectorAll('.top__menu-link');


//Получаем элементы для добавления класса
const topMenuImgWrapper = document.querySelectorAll('.top__img-wrapper');


//Функция для изменения фона и цвета картинки
function changeBgTopItem() {

    //Перебираем элементы для клика
    topMenuItem.forEach(function (topMenuLink) {

        //Вешаем на элемент событие
        topMenuLink.addEventListener('click', function (e) {

            e.preventDefault();

            //Получаем таргет
            const topMenuTarget = e.target;

            //Получаем первого потомка элемента
            //У которого нужно добавить класс
            const topMenuLinkChild = topMenuTarget.firstElementChild;



            //Проверяем таргет
            if (topMenuTarget.className === 'top__menu-link') {

                //Проверяем дочерние элемент, элемента по которому произведён клик
                //на наличие класса
                if (topMenuLinkChild.classList.contains('top__img-wrapper--active') === false) {
                    topMenuImgWrapper.forEach(function (topImgWrapper) {
                        topImgWrapper.classList.remove('top__img-wrapper--active');
                    });

                    topMenuLinkChild.classList.add('top__img-wrapper--active');
                }
            }

        });
    });
}

changeBgTopItem();


//===================================================================================
//Переключаемся между топ фильтром
//===================================================================================


//Получаем элемент для клика
const topFilterLinks = document.querySelectorAll('.top__filter-link');


function topFilterActive() {

    //Перебираем наши элементы
    topFilterLinks.forEach(function (topFilterLinksItem) {

        //Вешаем событие клика
        topFilterLinksItem.addEventListener('click', function (e) {

            // e.preventDefault();

            //Получаем таргет
            const topFilterLinksItemTarget = e.target;

            //Проверяем таргет на наличие класса
            if (topFilterLinksItemTarget.className === 'top__filter-link') {

                //Проверяемналичие класса у элемента
                //по которому произошёл клик
                if (topFilterLinksItemTarget.classList.contains('top__filter-link--active') === false) {

                    //Перебираем элементы и удаляем класс
                    topFilterLinks.forEach(function (topFilterLink) {
                        topFilterLink.classList.remove('top__filter-link--active');
                    });

                    //Элементу по которому произошёл клик добавляем класс
                    topFilterLinksItem.classList.add('top__filter-link--active');
                }
            }
        });
    });
}

topFilterActive();

//===================================================================================
//Активация левого меню с фильтрами
//===================================================================================


//Получаем элемент для клика
const filterCaseTitles = document.querySelectorAll('.filter-case__title');

//Получаем элементы для отображения
const leftFilterInfoWrapper = document.querySelectorAll('.filter-case__info-wrapper');

function leftFilterMenuActive() {


    //Перебираем массив элементов для клика
    filterCaseTitles.forEach(function (filterCaseTitlesItem) {

        //Вешаем на элемент массива событие
        filterCaseTitlesItem.addEventListener('click', function (e) {

            // e.preventDefault();

            //Получаем таргет
            const filterCaseTitlesItemTarget = e.target;

            //Получаем соседний элемент, элемента по которому был произведён клик
            const filterCaseImgArrowSibling = filterCaseTitlesItem.nextElementSibling;

            //Получаем родительский элемент
            //элемента по которому произведён клик
            const filterCaseTitlesParent = filterCaseTitlesItem.parentNode;

            //Получаем соседний элемент от родительского
            //в котором находится элемент по которому кликнули
            const filterCaseWrapper = filterCaseTitlesParent.nextElementSibling;

            //Проверяем таргет на наличие класса
            if (filterCaseTitlesItemTarget.className === 'filter-case__title') {

                //Проверяем наши элементы на наличие класса активности
                if (filterCaseWrapper.classList.contains('active--element') === false) {

                    //Вешаем класс активности
                    //Для отображения элемента
                    filterCaseWrapper.classList.add('active--element');

                    //Вешаем класс для активации переворота стрелки
                    filterCaseImgArrowSibling.classList.add('filter-case__img-active');
                }
                else {
                    //Удаляем класс активности
                    filterCaseWrapper.classList.remove('active--element');

                    //Удаляем класс активности
                    filterCaseImgArrowSibling.classList.remove('filter-case__img-active');
                }
            }
        });
    });
}

leftFilterMenuActive();




//===================================================================================
//Функция добавления фона сердечку
//===================================================================================
function addBgHeart(heart) {
    heart.classList.add('heart--active-bg');
}

//===================================================================================
//Функция удаления фона у сердечка
//===================================================================================

function removeBgHeart(heart) {
    heart.classList.remove('heart--active-bg');
}


//===================================================================================
//Функция изменения цвета фона корзины
//===================================================================================

function addBgBasket(productImgBasketWrapper) {
    productImgBasketWrapper.classList.add('product__img-wrapper--active-after');
}

//===================================================================================
//Функция изменения цвета фона корзины
//===================================================================================

function removeBgBasket(productImgBasketWrapper) {
    productImgBasketWrapper.classList.remove('product__img-wrapper--active-after');
}


//===================================================================================
//Функция для удалени товара принажатии на корзину
// в карточке товара
//===================================================================================

function delProductInBasket() {
    const productInBasket = document.querySelectorAll('.header__basket-subbox-item');

    console.log(productInBasket);

    const newArr = [];

    Array.from(productInBasket).map((itemProduct) => {
        console.log(itemProduct.id);
        for (let i = 0; i < productCardObjArr.length; i++) {
            if (itemProduct.id === productCardObjArr[i].id) {
                newArr.push(itemProduct);
            }
        }
    });


    console.log(newArr);


    // for(let item of productInBasket) {
    //     for (let i = 0; i < productInBasket.length; i++) {
    //         productInBasket.filter((itemProduct) => {
    //             if (itemProduct.id === productCardObjArr[i].id && productCardObjArr[i].id === i + 1 && item.inBasket === false) {

    //             }
    //         })

    //     }
    // }

    // const heartCard = document.querySelectorAll('.heart-card');
    // for (let item of productInBasket) {
    //     for (let i = 0; i < heartCard.length; i++) {
    //         if (item.id === productCardObjArr[i].id && productCardObjArr[i].id === i + 1 && item.cartfavorite === true) {
    //             console.log('work');
    //             heartCard[i].classList.add('heart--active-bg');
    //         }
    //     }
    // }



}




//Массив с объектами
const productCardObjArr = [];
const productInBasket = [];

let cardId = 1;


//===================================================================================
//Функции создания карточки
//===================================================================================


function createProductCards() {

    //Объект с информацией о карточке с продуктом
    const productCardObj = {
        id: cardId++,
        productCard: '',
        inBasket: false,
        cartfavorite: false,
        basketfavorite: false,
    };

    productCardObjArr.push(productCardObj);


    //Картинка фейворит
    const xmlns = "http://www.w3.org/2000/svg";
    const boxWidth = 25;
    const boxHeight = 25;

    const heart = document.createElementNS(xmlns, 'svg');
    heart.classList.add('heart-card');
    heart.setAttributeNS(null, 'viewBox', '0 0 ' + boxWidth + ' ' + boxHeight);
    heart.setAttributeNS(null, 'width', boxWidth);
    heart.setAttributeNS(null, 'height', boxHeight);

    const heartPath = document.createElementNS(xmlns, 'path');
    heartPath.setAttributeNS(null, 'd', "M11.9402 3.32855L12.2937 3.68211L12.6473 3.32855L13.6973 2.27855C14.8296 1.14625 16.3654 0.5 17.9812 0.5C19.5951 0.5 21.1244 1.14426 22.2532 2.35366L22.2591 2.35996L22.2652 2.36605C24.6949 4.79579 24.6949 8.67921 22.2652 11.1089L22.2637 11.1104L12.2937 21.1649L2.3238 11.1104L2.3223 11.1089C-0.107434 8.67921 -0.107434 4.79579 2.3223 2.36605L1.96875 2.0125L2.3223 2.36605L2.4098 2.27855C4.75103 -0.0626734 8.62979 -0.0627096 10.9718 2.36001L10.9717 2.36006L10.9777 2.36605L11.9402 3.32855Z");
    heartPath.setAttributeNS(null, 'fill', "white");
    heartPath.setAttributeNS(null, 'stroke', 'none');
    heart.appendChild(heartPath);

    // if(productCardObj.cartfavorite === true) {
    //     addBgHeart(heart);
    // }


    heartPath.addEventListener('click', (e) => {
        if (heart.classList.contains('heart--active-bg') === false) {
            addBgHeart(heart);
            productCardObj.cartfavorite = true;
        }
        else {
            removeBgHeart(heart);
            productCardObj.cartfavorite = false;
            productCardObj.basketfavorite = false;
        }
    });

    //Обёртка картинки фейворит
    const productImgBoxFavorites = document.createElement('div');
    productImgBoxFavorites.classList.add('product__img-box-favorites');

    //Вставляем картинку фейворит в обёртку
    productImgBoxFavorites.appendChild(heart);

    //Картинка фона
    const productImgBoxBg = document.createElement('img');
    productImgBoxBg.classList.add('product__img-box-bg');
    productImgBoxBg.src = "../images/bg/bg-01-item.png";

    //Картинка товара
    const productImg = document.createElement('img');
    productImg.classList.add('product__img');
    productImg.src = "../images/products/product-01.png";

    //Обёртка картинки продукта
    const productImgBox = document.createElement('div');
    productImgBox.classList.add('product__img-box');

    //Добавляем в обёртку картинки товара картинку и фона
    productImgBox.appendChild(productImgBoxBg);
    productImgBox.appendChild(productImg);

    productImgBox.addEventListener('click', (e) => {
        showPopup();
    });

    //Ссылка для перехода
    const productItemTitle = document.createElement('a');
    productItemTitle.classList.add('product__item-title');
    productItemTitle.href = '../product.html';
    productItemTitle.textContent = 'Поворотная Wi-Fi камера';

    //Артикул товара
    const productVenderCode = document.createElement('p');
    productVenderCode.classList.add('product__vendor-code');
    productVenderCode.textContent = 'Арт.: RV-3416';

    //Описание товара
    const productDiscription = document.createElement('p');
    productDiscription.classList.add('product__description');
    productDiscription.textContent = 'W-Fi поворотная видеокамера 355°, Full HD 1080p, 2 МП, microSD до 128 GB';

    //Обёртка для названия, артикула и ссылки
    const productItemBody = document.createElement('div');
    productItemBody.classList.add('product__item-body');

    //Добавляем описание, артикул и ссылку в обёртку
    productItemBody.appendChild(productItemTitle);
    productItemBody.appendChild(productVenderCode);
    productItemBody.appendChild(productDiscription);

    //Старая цена товара
    const productOldPrice = document.createElement('p');
    productOldPrice.classList.add('product__old-price');
    productOldPrice.textContent = '5 990 ₽';

    //Новая цена товара
    const productNewPrice = document.createElement('p');
    productNewPrice.classList.add('product__new-price');
    productNewPrice.classList.add('product__new-price-link--active');
    productNewPrice.textContent = '4 990';

    //Картика валюты рубль
    const productRubImg = document.createElement('img');
    productRubImg.classList.add('product__rub-img');
    productRubImg.src = "../images/icon/rub-img.svg";

    //Разделительная полоса
    const dividingLine = document.createElement('span');
    dividingLine.classList.add('dividing-line');
    dividingLine.textContent = '/';

    //Общая сумма одного товара
    const productNewPriceSum = document.createElement('p');
    productNewPriceSum.classList.add('product__new-price-sum');
    productNewPriceSum.textContent = '4 990';

    //Картика валюты рубль
    const productRubSumImg = document.createElement('img');
    productRubSumImg.classList.add('product__rub-sum-img-net');
    productRubSumImg.src = "../images/icon/rub-img.svg";

    //Обёртка новой цены товара
    const productNewPriceBox = document.createElement('div');
    productNewPriceBox.classList.add('product__new-price-box');

    productNewPriceBox.appendChild(productNewPrice);
    productNewPriceBox.appendChild(productRubImg);
    productNewPriceBox.appendChild(dividingLine);
    productNewPriceBox.appendChild(productNewPriceSum);
    productNewPriceBox.appendChild(productRubSumImg);

    //Обёртка информации о цене
    const productItemPriceBoxList = document.createElement('div');
    productItemPriceBoxList.classList.add('product__item-price-box-list');

    productItemPriceBoxList.appendChild(productOldPrice);
    productItemPriceBoxList.appendChild(productNewPriceBox);

    //Продукт в архиве
    const productItemArchive = document.createElement('p');
    productItemArchive.classList.add('product__item-archive');
    productItemArchive.textContent = 'Товар в архиве';

    //Продукт под заказ
    const productOnOrder = document.createElement('p');
    productOnOrder.classList.add('product__on-order');
    productOnOrder.textContent = 'Под заказ';

    //Продукт в наличии
    const productInStockInfoText = document.createElement('p');
    productInStockInfoText.classList.add('product__in-stock-info-text');
    productInStockInfoText.classList.add('active--element');
    productInStockInfoText.textContent = 'В наличии';

    //Текст корзину
    const productImgWrapperTextList = document.createElement('p');
    productImgWrapperTextList.classList.add('product__img-wrapper-text-list');
    productImgWrapperTextList.textContent = 'В корзину';

    //Картинка корзины
    const productImgBasket = document.createElement('img');
    productImgBasket.classList.add('product__img-basket');
    productImgBasket.src = '../images/icon/product-basket.svg';

    //Обёртка кнопки добавить в корзину
    const productImgBasketWrapper = document.createElement('div');
    productImgBasketWrapper.classList.add('product__img-basket-wrapper');

    //Добавляем элементы в обёртку корзины
    productImgBasketWrapper.appendChild(productImgWrapperTextList);
    productImgBasketWrapper.appendChild(productImgBasket);

    // const obj = createproductCardObj();


    productImgBasketWrapper.addEventListener('click', () => {

        if (productImgBasketWrapper.classList.contains('product__img-wrapper--active-after') === false) {
            productCardObj.inBasket = true;
            productInBasket.push(productCardObj);
            addBgBasket(productImgBasketWrapper);
            addBasketProduct(productCardObj);
            addCardSum();
            showPlusQuantityProduct();
            console.log(productCardObjArr);
            console.log(productInBasket);
        }
        else {
            removeBgBasket(productImgBasketWrapper);
            delProductInBasket();
            productCardObj.inBasket = false;
        }



        // changeBgBasket(productImgBasketWrapper);
        //     addBasketProduct();
        //     addCardSum();
        //     showPlusQuantityProduct();
        //     console.log(productCardObjArr);

    });

    //Основная обёртка информации о цене
    const productItemBottomList = document.createElement('div');
    productItemBottomList.classList.add('product__item-botton-list');

    productItemBottomList.appendChild(productItemPriceBoxList);
    productItemBottomList.appendChild(productItemArchive);
    productItemBottomList.appendChild(productOnOrder);
    productItemBottomList.appendChild(productInStockInfoText);
    productItemBottomList.appendChild(productImgBasketWrapper);


    //Обёртка информации и товаре
    const box = document.createElement('div');
    box.classList.add('box');

    //Добавляем обёртку с описанием в основную обёртку описания товара
    box.appendChild(productItemBody);
    box.appendChild(productItemBottomList);

    //Обёртка товара
    const productItemBox = document.createElement('div');
    productItemBox.classList.add('product__item-box');

    //Добавляем обёртку с картинкой фейворит в основную обёртку
    productItemBox.appendChild(productImgBoxFavorites);

    //Добавляем обёртку картинки товара в основную обёртку
    productItemBox.appendChild(productImgBox);
    productItemBox.appendChild(box);




    // productCardObjArr.push(createproductCardObj(productItemBox));
    console.log(productCardObjArr);

    return productItemBox;


}

//Обёртка для карточек с товаром
const productNetBoxWarpper = document.querySelector('.product-net');

//Получаем значение элемента для колличества карточек для добавления
const topFilterPositionQuantity = document.querySelector('.top__filter-position-quantity');



//===================================================================================
//Функция добавления карточек на страницу
//===================================================================================

function addProductCard() {
    for (let i = 0; i < topFilterPositionQuantity.value; i++) {
        productNetBoxWarpper.appendChild(createProductCards());
    }
}


//===================================================================================
//Вызываем функцию добавления карточек при загрузке страницы
//===================================================================================
addProductCard();



//===================================================================================
//Добавляем новые карточки товара принажатии на кнопку
//===================================================================================

//Получаем кнопку "Показать ещё" для клика по ней
const showMoreBtn = document.querySelector('.pagination__show-more-btn');

//Функция для добавления элементов
function addItemBoxNet() {

    let productItemsBox = document.getElementsByClassName('product__item-box');

    //Вставляем новые карточки с товаром
    addProductCard();

    //Проверяем элементы на наличие класса
    if (topFilterPositionList.classList.contains('top__filter-position-img-list--active')) {

        for (let itemBox of productItemsBox) {

            //Проверяем элементы на наличие класса
            if (itemBox.classList.contains('product__item-box-list--active') === false) {

                //Добавляем элементам сетки класс активности
                //для отображения карточек списком
                itemBox.classList.add('product__item-box-list--active');
            }
        }
    }
    else {

        for (let itemBox of productItemsBox) {
            itemBox.classList.remove('product__item-box-list--active');
        }
    }

}





//===================================================================================
//Активируем изменение цвета иконки позиционирования элементов
//Отображаем товары выбранным способом
//===================================================================================


//Получаем родителя элемента по которому будет производится клик
//и добавления класса для изменения цвета у дочернего элемента
const topFilterPositionNet = document.querySelector('.top__filter-position-img-net');

//Получаем дочерний элемент родителя
//для навешивания события
const topfilterPositionNetChild = topFilterPositionNet.firstElementChild;

//Получаем родителя элемента по которому будет производится клик
//и добавления класса для изменения цвета у дочернего элемента
const topFilterPositionList = document.querySelector('.top__filter-position-img-list');

//Получаем дочерний элемент родителя
//для навешивания события
const topfilterPositionListChild = topFilterPositionList.firstElementChild;

function showPositionNet() {

    let productItemsBox = document.getElementsByClassName('product__item-box');

    //Проверяем элемент клика на наличие класса
    if (topFilterPositionNet.classList.contains('top__filter-position-img-net--active') === false) {

        //У элемента убираем класс для изменения цвета
        topFilterPositionList.classList.remove('top__filter-position-img-list--active');

        //У элемента меняем цвет при клике
        topFilterPositionNet.classList.add('top__filter-position-img-net--active');

        //Перебираем элементы
        for (let itemBox of productItemsBox) {

            //Проверяем элементы на наличие класса
            if (itemBox.classList.contains('product__item-box-list--active')) {

                //Убираем у списка класс активности
                //для отображения карточек сеткой
                itemBox.classList.remove('product__item-box-list--active');
            }
        }
    }

}

function showPositionList() {

    let productItemsBox = document.getElementsByClassName('product__item-box');

    //Проверяем элемент клика на наличие класса
    if (topFilterPositionList.classList.contains('top__filter-position-img-list--active') === false) {

        //У элемента меняем цвет при клике
        topFilterPositionList.classList.add('top__filter-position-img-list--active');

        //У элемента убираем класс для изменения цвета
        topFilterPositionNet.classList.remove('top__filter-position-img-net--active');

        //Перебираем элементы
        for (let itemBox of productItemsBox) {

            //Проверяем элементы на наличие класса
            if (itemBox.classList.contains('product__item-box-list--active') === false) {

                //Добавляем элементам сетки класс активности
                //для отображения карточек списком
                itemBox.classList.add('product__item-box-list--active');
            }
        }
    }
}

//Вешаем событие на дочерний элемент
topfilterPositionListChild.addEventListener('click', function (e) {
    // e.preventDefault();

    showPositionList();
});

//Вешаем событие на дочерний элемент    
topfilterPositionNetChild.addEventListener('click', function (e) {
    // e.preventDefault();

    showPositionNet();
});

//Навешиваем событие клика на кнопку
//Добавить ещё
showMoreBtn.addEventListener('click', function (e) {
    e.preventDefault();

    //Вызываем функцию
    addItemBoxNet();
});

//===================================================================================
//Pagination
//===================================================================================


// selecting required element
const element = document.querySelector(".pagination ul");
let totalPages = 20;
let page = 1;

//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page) {
    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;
    if (page > 1) { //show the next button if the page value is greater than 1
        liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i>Предыдущая</span></li>`;
    }

    if (page > 2) { //if page value is less than 2 then add 1 after the previous button
        liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
        if (page > 3) { //if page value is greater than 3 then add this (...) after the first li or page
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    }

    // how many pages or li show before the current li
    if (page == totalPages) {
        beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
        beforePage = beforePage - 1;
    }
    // how many pages or li show after the current li
    if (page == 1) {
        afterPage = afterPage + 2;
    } else if (page == 2) {
        afterPage = afterPage + 1;
    }

    for (var plength = beforePage; plength <= afterPage; plength++) {
        if (plength > totalPages) { //if plength is greater than totalPage length then continue
            continue;
        }
        if (plength == 0) { //if plength is 0 than add +1 in plength value
            plength = plength + 1;
        }
        if (page == plength) { //if page is equal to plength than assign active string in the active variable
            active = "active";
        } else { //else leave empty to the active variable
            active = "";
        }
        liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
    }

    if (page < totalPages - 1) { //if page value is less than totalPage value by -1 then show the last li or page
        if (page < totalPages - 2) { //if page value is less than totalPage value by -2 then add this (...) before the last li or page
            liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }

    if (page < totalPages) { //show the next button if the page value is less than totalPage(20)
        liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Следующая <i class="fas fa-angle-right"></i></span></li>`;
    }
    element.innerHTML = liTag; //add li tag inside ul tag
    return liTag; //reurn the li tag
}


//===================================================================================
//Активация pop-up элемента
//===================================================================================

// //Получаем обёртку всех карточек для реализации делегирования
// const productNetBox = document.querySelector('.product-net');

//Получаем кнопку закрытия pop-up
const popupCloseBtn = document.querySelector('.pop-up__close-btn');

//Получаем сам pop-up 
const popupElement = document.querySelector('.pop-up');

//Функция отображения pop-up
function showPopup() {
    //Отключаем прокрутку страницы когда отображается pop-up
    document.body.style.overflow = 'hidden';
    //Добавляем элементу pop-up класс активности
    popupElement.classList.add('active--element');
    //Получаем положение страницы при прокрутке,
    //для отображения pop-up
    window.onscroll = function () {
        //Передаём в переменную значение положения окна
        const Y = window.scrollY;
        //Добавляем полученное значение в стили для pop-up
        popupElement.style.top = Y + 'px';
    };
}

//Функция скрытия pop-up
function closePopup() {
    //Возвращаем странице возможность прокручиваться
    document.body.style.overflow = '';
    //Удаляем класс для отображения у элемента pop-up
    popupElement.classList.remove('active--element');
}

//Вешаем событие на кнопку закрытия pop-up
popupCloseBtn.addEventListener('click', (e) => {
    //Убираем стандартное поведение
    // e.preventDefault();
    //Вызываем функцию скрытия pop-up
    closePopup();
});

//Убираем pop-up
//при нажатии на ESC
document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape') {
        closePopup();
    }
});


//===================================================================================
//Функции добавления фона сердечка у карточки товара
// принажатии на сердечко товара в корзине
//===================================================================================

function addBgCardFaivorite() {
    const heartCard = document.querySelectorAll('.heart-card');
    for (let item of productInBasket) {
        for (let i = 0; i < heartCard.length; i++) {
            if (item.id === productCardObjArr[i].id && productCardObjArr[i].id === i + 1 && item.cartfavorite === true) {
                console.log('work');
                heartCard[i].classList.add('heart--active-bg');
            }
        }
    }
}


//===================================================================================
//Функции удаления фона сердечка у карточки товара
// принажатии на сердечко товара в корзине
//===================================================================================

function removeBgCardFaivorite() {
    const heartCard = document.querySelectorAll('.heart-card');
    for (let item of productInBasket) {
        for (let i = 0; i < heartCard.length; i++) {
            if (item.id === productCardObjArr[i].id && productCardObjArr[i].id === i + 1 && item.cartfavorite === false) {
                console.log('work');
                heartCard[i].classList.remove('heart--active-bg');
            }
        }
    }
}

//===================================================================================
//Функции создания карточки для корзины
//===================================================================================

// Основная обёртка карточки
function headerBasketSubboxItem(obj) {

    //Функция создания фоновой картинки
    const productImgBoxBg = document.createElement('img');
    productImgBoxBg.classList.add('product__img-box-bg');
    productImgBoxBg.src = '../images/bg/bg-01-item.png';

    //Функция создания картинки товара
    const productImg = document.createElement('img');
    productImg.classList.add('product__img');
    productImg.src = '../images/products/product-013.png';

    //Функция создания обёртки для картинки и фона
    const headerBasketProductImgBox = document.createElement('div');
    headerBasketProductImgBox.classList.add('header__basket-product-img-box');

    headerBasketProductImgBox.appendChild(productImgBoxBg);
    headerBasketProductImgBox.appendChild(productImg);

    //Функция создания тайтла ссылки
    const headerBasketSubboxProductName = document.createElement('a');
    headerBasketSubboxProductName.classList.add('header__basket-subbox-product-name');
    headerBasketSubboxProductName.src = '../product.html';
    headerBasketSubboxProductName.textContent = 'Поворотная Wi-Fi камера';

    // Создание Артикула товара
    const headerBasketSubboxProductArticle = document.createElement('p');
    headerBasketSubboxProductArticle.classList.add('header__basket-subbox-product-article');
    headerBasketSubboxProductArticle.textContent = 'Арт.: RV-3489';

    //Функция содания внутренней обёртки топа 
    const headerBasketSubboxProductInfo = document.createElement('div');
    headerBasketSubboxProductInfo.classList.add('header__basket-subbox-product-info');

    headerBasketSubboxProductInfo.appendChild(headerBasketSubboxProductName);
    headerBasketSubboxProductInfo.appendChild(headerBasketSubboxProductArticle);

    // Создаём картинки для элементов li
    // Картинка копировать
    const headerBasketSubboxListLinkImgCopy = document.createElement('img');
    headerBasketSubboxListLinkImgCopy.classList.add('header__basket-subbox-link-img');
    headerBasketSubboxListLinkImgCopy.src = 'images/icon/basket-subbox-copy.svg';

    // Картинка для кнопки в избранное для товара в корзине
    //Картинка фейворит
    const xmlns = "http://www.w3.org/2000/svg";
    const boxWidth = 25;
    const boxHeight = 25;

    const heart = document.createElementNS(xmlns, 'svg');
    heart.classList.add('heart');
    heart.setAttributeNS(null, 'viewBox', '0 0 ' + boxWidth + ' ' + boxHeight);
    heart.setAttributeNS(null, 'width', boxWidth);
    heart.setAttributeNS(null, 'height', boxHeight);

    const heartPath = document.createElementNS(xmlns, 'path');
    heartPath.setAttributeNS(null, 'd', "M11.9402 3.32855L12.2937 3.68211L12.6473 3.32855L13.6973 2.27855C14.8296 1.14625 16.3654 0.5 17.9812 0.5C19.5951 0.5 21.1244 1.14426 22.2532 2.35366L22.2591 2.35996L22.2652 2.36605C24.6949 4.79579 24.6949 8.67921 22.2652 11.1089L22.2637 11.1104L12.2937 21.1649L2.3238 11.1104L2.3223 11.1089C-0.107434 8.67921 -0.107434 4.79579 2.3223 2.36605L1.96875 2.0125L2.3223 2.36605L2.4098 2.27855C4.75103 -0.0626734 8.62979 -0.0627096 10.9718 2.36001L10.9717 2.36006L10.9777 2.36605L11.9402 3.32855Z");
    heartPath.setAttributeNS(null, 'fill', "white");
    heartPath.setAttributeNS(null, 'stroke', '#007ABE');
    heart.appendChild(heartPath);

    if (obj.cartfavorite === true) {
        obj.basketfavorite = true;
        addBgHeart(heart);
    }

    heartPath.addEventListener('click', (e) => {



        if (heart.classList.contains('heart--active-bg') === false) {
            addBgHeart(heart);
            obj.cartfavorite = true;
            obj.basketfavorite = true;
            addBgCardFaivorite();
        }
        else {
            removeBgHeart(heart);
            obj.cartfavorite = false;
            obj.basketfavorite = false;
            removeBgCardFaivorite();
        }
    });

    //Картинка удалить
    const headerBasketSubboxListLinkImgDelete = document.createElement('img');
    headerBasketSubboxListLinkImgDelete.classList.add('header__basket-subbox-link-img');
    headerBasketSubboxListLinkImgDelete.src = 'images/icon/basket-subbox-delete.svg';

    // Создаём обёртку для картинок которые помещаем в элементы li
    const headerBasketSubboxListLink = document.createElement('div');
    headerBasketSubboxListLink.classList.add('.header__basket-subbox-list-link');

    //Создаём элементы кнопок li 
    const createHeaderBasketSubboxListItemCopy = document.createElement('li');
    createHeaderBasketSubboxListItemCopy.classList.add('header__basket-subbox-list-item');
    createHeaderBasketSubboxListItemCopy.appendChild(headerBasketSubboxListLinkImgCopy);

    const createHeaderBasketSubboxListItemFavoryte = document.createElement('li');
    createHeaderBasketSubboxListItemFavoryte.classList.add('header__basket-subbox-list-item');
    createHeaderBasketSubboxListItemFavoryte.appendChild(heart);

    const createHeaderBasketSubboxListLinkImgDelete = document.createElement('li');
    createHeaderBasketSubboxListLinkImgDelete.classList.add('header__basket-subbox-list-item');
    createHeaderBasketSubboxListLinkImgDelete.appendChild(headerBasketSubboxListLinkImgDelete);

    //Создание ul элемента для кнопок
    const headerBasketSubboxList = document.createElement('ul');
    headerBasketSubboxList.classList.add('header__basket-subbox-list');

    headerBasketSubboxList.appendChild(createHeaderBasketSubboxListItemCopy);
    headerBasketSubboxList.appendChild(createHeaderBasketSubboxListItemFavoryte);
    headerBasketSubboxList.appendChild(createHeaderBasketSubboxListLinkImgDelete);

    //Обёртка топ продукта
    const headerBasketSubboxTop = document.createElement('div');
    headerBasketSubboxTop.classList.add('header__basket-subbox-top');

    headerBasketSubboxTop.appendChild(headerBasketSubboxProductInfo);
    headerBasketSubboxTop.appendChild(headerBasketSubboxList);

    // Цена товара
    const headerBasketSubboxPrice = document.createElement('p');
    headerBasketSubboxPrice.classList.add('header__basket-subbox-price');
    headerBasketSubboxPrice.textContent = '4 990';

    //Картика валюты рубль
    const productRubImg = document.createElement('img');
    productRubImg.classList.add('product__rub-img');
    productRubImg.src = "../images/icon/rub-img.svg";


    // Черта для разделение цены от суммы
    const headreBasketSubboxDividingLine = document.createElement('span');
    headreBasketSubboxDividingLine.classList.add('header__basket-subbox-dividing-line');
    headreBasketSubboxDividingLine.textContent = '/';

    // Создание элемента для суммы одного товара
    const headerBasketSubboxPriceSum = document.createElement('p');
    // headerBasketSubboxPriceSum.classList.add('header__basket-subbox-price');
    headerBasketSubboxPriceSum.classList.add('header__basket-subbox-sum-price');
    headerBasketSubboxPriceSum.textContent = '0';

    //Картика валюты рубль
    const productRubSumImg = document.createElement('img');
    productRubSumImg.classList.add('product__rub-sum-img');
    productRubSumImg.src = "../images/icon/rub-img.svg";

    // Обёртка для цены
    const headerBasketSubboxPriceBox = document.createElement('diV');
    headerBasketSubboxPriceBox.classList.add('header__basket-subbox-price-box');

    headerBasketSubboxPriceBox.appendChild(headerBasketSubboxPrice);
    headerBasketSubboxPriceBox.appendChild(productRubImg);
    headerBasketSubboxPriceBox.appendChild(headreBasketSubboxDividingLine);
    headerBasketSubboxPriceBox.appendChild(headerBasketSubboxPriceSum);
    headerBasketSubboxPriceBox.appendChild(productRubSumImg);

    // Текст "колличество"
    const headerBasketSubboxBottomQuantityText = document.createElement('p');
    headerBasketSubboxBottomQuantityText.classList.add('header__basket-subbox-bottom-quantity-text');
    headerBasketSubboxBottomQuantityText.textContent = 'Кол-во:';

    // Картинка минус
    const headerBasketSubboxMinusImg = document.createElement('img');
    headerBasketSubboxMinusImg.classList.add('header__basket-subbox-bottom-minus__img');
    headerBasketSubboxMinusImg.src = 'images/icon/quantity-minus.svg';

    // Кнопка минус

    const headerBasketSubboxBottomMinusBtn = document.createElement('span');
    headerBasketSubboxBottomMinusBtn.classList.add('header__basket-subbox-bottom-minus-btn');

    headerBasketSubboxBottomMinusBtn.appendChild(headerBasketSubboxMinusImg);

    headerBasketSubboxBottomMinusBtn.addEventListener('click', () => {

        const headerBasketSubboxAllSumNumber = document.querySelector('.header__basket-subbox-all-sum-number');
        const rightSideBarBasketSum = document.querySelector('.right-side-bar__basket-sum');


        if (Number(headerBasketSubboxBottomQuantityInput.value) > 0) {
            headerBasketSubboxBottomQuantityInput.value = (+headerBasketSubboxBottomQuantityInput.value) - 1;
            headerBasketSubboxPriceSum.textContent = (+stringToNumber(headerBasketSubboxPriceSum)) - (+stringToNumber(headerBasketSubboxPrice));
            headerBasketSubboxPriceSum.textContent = numberToString(headerBasketSubboxPriceSum);


            headerBasketSubboxAllSumNumber.textContent = (+stringToNumber(headerBasketSubboxAllSumNumber)) - (+stringToNumber(headerBasketSubboxPrice));
            headerBasketSubboxAllSumNumber.textContent = numberToString(headerBasketSubboxAllSumNumber);
            rightSideBarBasketSum.textContent = headerBasketSubboxAllSumNumber.textContent + ' руб.';
        }
        showMinusQuantityProduct();
        if (Number(headerBasketSubboxBottomQuantityInput.value) === 1) {
            headerBasketSubboxPriceSum.classList.remove('header__basket-sum-one-product--active');
            headreBasketSubboxDividingLine.classList.remove('header__basket-sum-one-product--active');
            productRubSumImg.classList.remove('header__basket-sum-one-product--active');
        }




        // const rightSideBarBasketSum = document.querySelector('.right-side-bar__basket-sum');
        // headerBasketSubboxAllSumNumber.textContent = numberToString(headerBasketSubboxAllSumNumber);
        // rightSideBarBasketSum.textContent = headerBasketSubboxAllSumNumber.textContent + ' руб.';



    });

    // Инпут с количеством товаров
    const headerBasketSubboxBottomQuantityInput = document.createElement('input');
    headerBasketSubboxBottomQuantityInput.classList.add('header__basket-subbox-bottom-quantity-input');
    headerBasketSubboxBottomQuantityInput.type = 'text';
    headerBasketSubboxBottomQuantityInput.value = '1';

    // Картинка плюс картинка
    const headerBasketSubboxPlusImg = document.createElement('img');
    headerBasketSubboxPlusImg.classList.add('header__basket-subbox-bottom-plus__img');
    headerBasketSubboxPlusImg.src = 'images/icon/quantity-plus.svg';


    //Кнопка плюс
    const headerBasketSubboxBottomPlusBtn = document.createElement('span');
    headerBasketSubboxBottomPlusBtn.classList.add('header__basket-subbox-bottom-plus-btn');

    headerBasketSubboxBottomPlusBtn.appendChild(headerBasketSubboxPlusImg);

    headerBasketSubboxBottomPlusBtn.addEventListener('click', () => {

        const headerBasketSubboxAllSumNumber = document.querySelector('.header__basket-subbox-all-sum-number');
        const rightSideBarBasketSum = document.querySelector('.right-side-bar__basket-sum');

        headerBasketSubboxBottomQuantityInput.value = (+headerBasketSubboxBottomQuantityInput.value) + 1;
        showPlusQuantityProduct();

        headerBasketSubboxPriceSum.textContent = (+stringToNumber(headerBasketSubboxPrice)) * (+headerBasketSubboxBottomQuantityInput.value);
        headerBasketSubboxPriceSum.textContent = numberToString(headerBasketSubboxPriceSum);

        if (Number(headerBasketSubboxBottomQuantityInput.value) > 1) {
            headerBasketSubboxPriceSum.classList.add('header__basket-sum-one-product--active');
            headreBasketSubboxDividingLine.classList.add('header__basket-sum-one-product--active');
            productRubSumImg.classList.add('header__basket-sum-one-product--active');
        }



        headerBasketSubboxAllSumNumber.textContent = (+stringToNumber(headerBasketSubboxAllSumNumber)) + (+stringToNumber(headerBasketSubboxPrice));
        headerBasketSubboxAllSumNumber.textContent = numberToString(headerBasketSubboxAllSumNumber);
        rightSideBarBasketSum.textContent = headerBasketSubboxAllSumNumber.textContent + ' руб.';



    });

    // Обёртка для добавления колличества товара
    const headerBasketSubboxBottomQuantity = document.createElement('div');
    headerBasketSubboxBottomQuantity.classList.add('header__basket-subbox-bottom-quantity');

    headerBasketSubboxBottomQuantity.appendChild(headerBasketSubboxBottomQuantityText);
    headerBasketSubboxBottomQuantity.appendChild(headerBasketSubboxBottomMinusBtn);
    headerBasketSubboxBottomQuantity.appendChild(headerBasketSubboxBottomQuantityInput);
    headerBasketSubboxBottomQuantity.appendChild(headerBasketSubboxBottomPlusBtn);

    // Товар в архиве для корзины
    const headerBasketSubboxInArchive = document.createElement('p');
    headerBasketSubboxInArchive.classList.add('product__item-archive');
    headerBasketSubboxInArchive.textContent = 'Товар в архиве';

    // Товар под заказ для корзины
    const headerBasketSubboxOnOrder = document.createElement('p');
    headerBasketSubboxOnOrder.classList.add('product__on-order');
    headerBasketSubboxOnOrder.textContent = 'Под заказ';

    // Товар в наличии для корзины
    const headerBasketSubboxInStok = document.createElement('p');
    headerBasketSubboxInStok.classList.add('product__in-stock-info-text');
    headerBasketSubboxInStok.classList.add('active--element');
    headerBasketSubboxInStok.textContent = 'В наличии';

    // Обёртка для информации о товаре и о цене
    const headerBasketSubboxBottom = document.createElement('div');
    headerBasketSubboxBottom.classList.add('header__basket-subbox-bottom');

    headerBasketSubboxBottom.appendChild(headerBasketSubboxPriceBox);
    headerBasketSubboxBottom.appendChild(headerBasketSubboxInArchive);
    headerBasketSubboxBottom.appendChild(headerBasketSubboxOnOrder);
    headerBasketSubboxBottom.appendChild(headerBasketSubboxInStok);
    headerBasketSubboxBottom.appendChild(headerBasketSubboxBottomQuantity);

    //Внешняя обёртка продукта
    const headerProductBasketBox = document.createElement('div');
    headerProductBasketBox.classList.add('header__product-basket-box');

    headerProductBasketBox.appendChild(headerBasketSubboxTop);
    headerProductBasketBox.appendChild(headerBasketSubboxBottom);

    // Основная обёртка карточки
    const headerBasketSubboxItem = document.createElement('div');
    headerBasketSubboxItem.id = obj.id;
    headerBasketSubboxItem.classList.add('header__basket-subbox-item');


    headerBasketSubboxItem.appendChild(headerBasketProductImgBox);
    headerBasketSubboxItem.appendChild(headerProductBasketBox);

    return headerBasketSubboxItem;
}

//=================================================================================
//Функция добавления карточки в карзину
//=================================================================================
const rightSideBarBasket = document.querySelector('.header__basket-subbox-items');

function addBasketProduct(obj) {
    rightSideBarBasket.appendChild(headerBasketSubboxItem(obj));
    if (headerBasketSubbox.classList.contains('active--element')) {
        showProductBasket();
    }
}

//=================================================================================
//Функция подсчёта общей суммы
// при добавлении товара в корзину
//=================================================================================

function addCardSum() {
    const headerBasketSubboxAllSumNumber = document.querySelector('.header__basket-subbox-all-sum-number');
    const priceProductElement = document.querySelector('.product__new-price');
    const headerBasketSubboxAllSumNumberArr = stringToNumber(headerBasketSubboxAllSumNumber);
    const rightSideBarBasketSum = document.querySelector('.right-side-bar__basket-sum');
    // let sumProductValue = '';



    if (headerBasketSubboxAllSumNumberArr.length === 1 || headerBasketSubboxAllSumNumberArr[0] === '0') {
        // sumProductValue = '0';
        headerBasketSubboxAllSumNumber.textContent = '0';
    }



    headerBasketSubboxAllSumNumber.textContent = (+stringToNumber(headerBasketSubboxAllSumNumber)) + (+stringToNumber(priceProductElement));


    headerBasketSubboxAllSumNumber.textContent = numberToString(headerBasketSubboxAllSumNumber);
    rightSideBarBasketSum.textContent = headerBasketSubboxAllSumNumber.textContent + ' руб.';
}


//=================================================================================
//Функция преобразования числа в строку, добавление пробела
//=================================================================================

function numberToString(item) {

    let firstNumSum = '';

    if (Number(item.textContent) < 10000) {
        firstNumSum = item.textContent.substring(0, 1);
        firstNumSum += " " + item.textContent.slice(1);
        return firstNumSum;
    }
    if (Number(item.textContent) < 100000) {
        firstNumSum = item.textContent.substring(0, 2);
        firstNumSum += " " + item.textContent.slice(2);
        return firstNumSum;
    }
}

//=================================================================================
//Функция преобразования строки в число, удаление пробела
//=================================================================================

function stringToNumber(element) {
    const strNum = element.textContent.split('');
    let newNum = '';

    for (let item of strNum) {
        if (item === ' ') {
            continue;
        }
        else {
            newNum += item;
        }
    }
    return newNum;
}

//=================================================================================
//Функция добавления количества одного товара
//=================================================================================

function sumQuantityOneProduct(inputProductValue) {

    inputProductValue.value = (+inputProductValue.value) + 1;
}


//=================================================================================
//Функция уменьшения количества одного товара
//=================================================================================

function subQuantityOneProduct(inputProductValue) {

    if (inputProductValue.value > 0) {
        inputProductValue.value = (+inputProductValue.value) - 1;
    }

}

//=================================================================================
//Увеличение количества товаров
//=================================================================================

function showPlusQuantityProduct() {
    const quantityProductBox = document.querySelector('.quantity-product__box');
    let quantityProductRightSideBar = document.querySelector('.quantity-product');
    const headerBasketSubboxItemArr = document.querySelectorAll('.header__basket-subbox-item');

    if (headerBasketSubboxItemArr.length > 0) {
        quantityProductBox.classList.add('active--element');
        quantityProductRightSideBar.textContent = (+quantityProductRightSideBar.textContent) + 1;
    }
}


//=================================================================================
//Уменьшение количества товаров
//=================================================================================

function showMinusQuantityProduct() {
    const quantityProductBox = document.querySelector('.quantity-product__box');
    let quantityProductRightSideBar = document.querySelector('.quantity-product');
    const headerBasketSubboxItemArr = document.querySelectorAll('.header__basket-subbox-item');

    if (headerBasketSubboxItemArr.length > 0) {
        quantityProductBox.classList.add('active--element');
        if (quantityProductRightSideBar.textContent > 0) {
            quantityProductRightSideBar.textContent = (+quantityProductRightSideBar.textContent) - 1;
        }

    }
    if (Number(quantityProductRightSideBar.textContent) <= 0) {
        quantityProductBox.classList.remove('active--element');
    }
}





// //Функция удаления карточки из корзины
// function removeProductCardInBasket() {
//     rightSideBarBasket.forEach((item) => {
//         item.removeChild(item.firstElementChild);

//         if (document.getElementsByClassName('header__basket-subbox-item').length === 0) {
//             // objTargetSibling.lastElementChild.classList.remove('active--element');
//             // objTargetSibling.firstElementChild.classList.add('active--element');
//         }
//     });
// }



// //===================================================================================
// //Активируем кнопку удалить карточку
// //===================================================================================


// for (let itemBasketCardWrapper of rightSideBarBasket) {
//     itemBasketCardWrapper.addEventListener('click', (e) => {
//         let itemBasketCardWrapperTarget = e.target;

//         if ((itemBasketCardWrapperTarget.className === 'header__basket-subbox-link-img delete-card-img') || (itemBasketCardWrapperTarget.className === 'header__basket-subbox-list-link delete-card-img-wrapper')) {
//             removeProductCardInBasket();
//         }
//     });
// }


//===================================================================================
//Удаляем классы активности с элементов
//===================================================================================

const bodyBox = document.querySelector('body');

bodyBox.addEventListener('click', (e) => {
    let bodyBoxTarget = e.target;
    console.log(bodyBoxTarget);
    if ((bodyBoxTarget.className === 'basic') || (bodyBoxTarget.className === 'container') || (bodyBoxTarget.className === 'main') || (bodyBoxTarget.className === 'body') || (bodyBoxTarget.className === 'product-net') || (bodyBoxTarget.className === 'top-wraper') || (bodyBoxTarget.className === 'header') || (bodyBoxTarget.className === 'header__wrapper')) {
        // removeRigthBasket();
    }

});



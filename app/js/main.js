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
    headerBasketProductInfo.classList.remove('active--element');
    headerBasketSubbox.classList.add('header__basket-right-subbox--active');
    rightSideBarEmpty.classList.add('right-side-bar__basket-box-empty-inner--active');
    rightSideBarBasketSum.classList.add('active--element');
    headerBasketSubboxEmptyWrapper.classList.add('active--element');


}

for (let item of rightSideBarItem) {
    item.addEventListener('click', (e) => {
        const itemTarget = e.target;
        if ((itemTarget.className === 'right-side-bar__item') || (itemTarget.className === 'right-side-bar__basket-product') || (itemTarget.className === 'right-side-bar__basket-sum') || (itemTarget.className === 'right-side-bar__product-in-basket') || (itemTarget.className === 'right-side-bar__baskem-price-box')) {

            rightSideBarInner.classList.add('right-side-bar__item--active');

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
//Функция для полного очищения корзины
//===================================================================================
const delAllProductBtn = document.querySelector('.header__basket-subbox-title');



function delAllProductInBasket() {
    //Получаем массив элементов из корзины
    const productInBasket = document.querySelectorAll('.header__basket-subbox-item');
    //Получаем обёртку всех товаров находящихся в корзине
    const productInBasketWrapper = document.querySelector('.header__basket-subbox-items');
    for (let item of productInBasket) {
        productInBasketWrapper.removeChild(item);
    }


    const productOneInputQuantityValue = document.querySelector('.product-one__input-quantity-value');
    if (productOneInputQuantityValue) {
        productOneInputQuantityValue.value = 1;
    }


    //Получаем все обёртки корзины у карточек
    const basketProductWrapper = document.querySelectorAll('.product__img-basket-wrapper');
    for (let i = 0; i < productCardObjArr.length; i++) {
        productCardObjArr[i].inBasket = false;
        productCardObjArr[i].sumOneProduct = productCardObjArr[i].newPriceProduct;
        productCardObjArr[i].quantityProduct = 1;
        removeBgBasket(basketProductWrapper[i]);
    }

    //Получаем элемент для подсчёта общего колличества продуктов
    const quantityProduct = document.querySelector('.quantity-product');
    quantityProduct.textContent = 0;

    //Получаем обёртку элемента подсчёта общего количества товаров
    const quantityProductWrapper = document.querySelector('.quantity-product__box');
    quantityProductWrapper.classList.remove('active--element');


    //Получаем общую сумму всех товаров и обнуляем
    const allProductSum = document.querySelector('.header__basket-subbox-all-sum-number');
    allProductSum.textContent = 0;

    //Получаем общую сумму всех товаров в правом меню и обнуляем
    const allProductSumRightSideBar = document.querySelector('.right-side-bar__basket-sum');
    allProductSumRightSideBar.textContent = 0 + ' руб';


    if (rightSideBarInner.classList.contains('right-side-bar__item--active')) {
        showRightBasket();
    }
    else {
        showHeaderEmptyBasket();
    }
}

delAllProductBtn.addEventListener('click', () => {
    delAllProductInBasket();
});




//Массив со объектами
const productCardObjArr = [];

let cardId = 1;

const cloneProductCardObj = {
    id: cardId,
    productCard: '',
    inBasket: false,
    cartfavorite: false,
    basketfavorite: false,
    quantityProduct: 1,
    sumOneProduct: 4990,
    newPriceProduct: 4990,
};


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
        quantityProduct: 1,
        sumOneProduct: 4990,
        newPriceProduct: 4990,
    };

    // productCardObj.id += 1;

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


    heartPath.addEventListener('click', (e) => {
        console.log(e.target);
        if (heart.classList.contains('heart--active-bg') === false) {
            productCardObj.cartfavorite = true;
            productCardObj.basketfavorite = true; //YFgbcfn
            addBgHeart(heart);
            addBgBasketFaivorite();
        }
        else {
            productCardObj.cartfavorite = false;
            productCardObj.basketfavorite = false;
            removeBgHeart(heart);
            removeBgBasketFaivorite();
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
        console.log('popup id ' + productCardObj.id);
        showPopup(productCardObj);
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
    productNewPrice.textContent = numberToString(productCardObj.newPriceProduct);

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
    productNewPriceSum.textContent = numberToString(productCardObj.sumOneProduct);



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


    productImgBasketWrapper.addEventListener('click', () => {

        if (productImgBasketWrapper.classList.contains('product__img-wrapper--active-after') === false) {
            productCardObj.inBasket = true;
            addBgBasket(productImgBasketWrapper);
            addBasketProduct(productCardObj);
            addCardSum(productNewPriceSum, productCardObj);
            showPlusQuantityProduct();
        }
        else {
            productCardObj.inBasket = false;
            removeBgBasket(productImgBasketWrapper);
            delProductInBasket(productCardObj);
            productCardObj.quantityProduct = 1;
        }
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
    productItemBox.id = productCardObj.id;

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

if (productNetBoxWarpper) {

    addProductCard();
}




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

if (showMoreBtn) {
    //Навешиваем событие клика на кнопку
    //Добавить ещё
    showMoreBtn.addEventListener('click', function (e) {
        e.preventDefault();

        //Вызываем функцию
        addItemBoxNet();
    });
}







//===================================================================================
//Активируем изменение цвета иконки позиционирования элементов
//Отображаем товары выбранным способом
//===================================================================================


//Получаем родителя элемента по которому будет производится клик
//и добавления класса для изменения цвета у дочернего элемента
const topFilterPositionNet = document.querySelector('.top__filter-position-img-net');

//Получаем родителя элемента по которому будет производится клик
//и добавления класса для изменения цвета у дочернего элемента
const topFilterPositionList = document.querySelector('.top__filter-position-img-list');


if (topFilterPositionNet && topFilterPositionList) {
    //Получаем дочерний элемент родителя
    //для навешивания события
    const topfilterPositionNetChild = topFilterPositionNet.firstElementChild;



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
        showPositionList();
    });

    //Вешаем событие на дочерний элемент    
    topfilterPositionNetChild.addEventListener('click', function (e) {
        // e.preventDefault();
        showPositionNet();
    });
}





//===================================================================================
//Pagination
//===================================================================================


// selecting required element
const element = document.querySelector(".pagination ul");
let totalPages = 20;
let page = 1;

if (element) {
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
}




//===================================================================================
//Функции добавления фона сердечка у карточки товара
// принажатии на сердечко товара в корзине
//===================================================================================

function addBgCardFaivorite() {
    const heartCard = document.querySelectorAll('.heart-card');

    for (let item of productCardObjArr) {
        for (let i = 0; i < heartCard.length; i++) {
            if (item.id === i + 1 && item.basketfavorite === true) {
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


    for (let item of productCardObjArr) {
        for (let i = 0; i < heartCard.length; i++) {
            if (item.id === i + 1 && item.basketfavorite === false) {
                heartCard[i].classList.remove('heart--active-bg');
            }
        }
    }
}

//===================================================================================
//Функции добавления фона сердечка у карточки в корзине
// принажатии на сердечко карточки товара
//===================================================================================

function addBgBasketFaivorite() {
    const heartBasketCard = document.querySelectorAll('.heart');
    const basketCard = document.querySelectorAll('.header__basket-subbox-item');



    for (let j = 0; j < basketCard.length; j++) {
        for (let i = 0; i < productCardObjArr.length; i++) {
            if (basketCard[j].id == productCardObjArr[i].id && productCardObjArr[i].cartfavorite === true) {
                heartBasketCard[j].classList.add('heart--active-bg');
                console.log(i);
                console.log('work');
            }
        }
    }

}


//===================================================================================
//Функции удаления фона сердечка у карточки в корзине
// принажатии на сердечко в карточке товара
//===================================================================================

function removeBgBasketFaivorite() {
    const heartBasketCard = document.querySelectorAll('.heart');
    const basketCard = document.querySelectorAll('.header__basket-subbox-item');



    for (let j = 0; j < basketCard.length; j++) {
        for (let i = 0; i < productCardObjArr.length; i++) {
            if (basketCard[j].id == productCardObjArr[i].id && productCardObjArr[i].cartfavorite === false) {
                heartBasketCard[j].classList.remove('heart--active-bg');
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
        addBgHeart(heart);
    }

    heartPath.addEventListener('click', (e) => {



        if (heart.classList.contains('heart--active-bg') === false) {
            obj.cartfavorite = true;
            obj.basketfavorite = true;
            addBgHeart(heart);
            addBgCardFaivorite();
        }
        else {
            obj.cartfavorite = false;
            obj.basketfavorite = false;
            removeBgHeart(heart);
            removeBgCardFaivorite();
        }
    });

    //Картинка удалить
    const headerBasketSubboxListLinkImgDelete = document.createElement('img');
    headerBasketSubboxListLinkImgDelete.classList.add('header__basket-subbox-link-img');
    headerBasketSubboxListLinkImgDelete.src = 'images/icon/basket-subbox-delete.svg';


    headerBasketSubboxListLinkImgDelete.addEventListener('click', (e) => {
        obj.inBasket = false;
        delProductInBasket(obj);
        removeBgBasketWhenDelProduct(obj);
        obj.quantityProduct = 1;
        obj.oneProductSum = obj.newPriceProduct;
        const productOneInputQuantityValue = document.querySelector('.product-one__input-quantity-value');
        if (productOneInputQuantityValue) {
            productOneInputQuantityValue.value = 1;
        }
    });



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
    headerBasketSubboxPrice.textContent = numberToString(obj.newPriceProduct);


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
    headerBasketSubboxPriceSum.textContent = numberToString(obj.sumOneProduct);

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

        const productOneInputQuantityValue = document.querySelector('.product-one__input-quantity-value');



        obj.quantityProduct -= 1;
        headerBasketSubboxBottomQuantityInput.value = obj.quantityProduct;

        subCardSum(headerBasketSubboxPriceSum, obj);
        showMinusQuantityProduct();

        if (productOneInputQuantityValue) {
            productOneInputQuantityValue.value = headerBasketSubboxBottomQuantityInput.value;
        }


        if (Number(headerBasketSubboxBottomQuantityInput.value) === 1) {
            obj.quantityProduct = 1;
            obj.sumOneProduct = obj.newPriceProduct;
            headerBasketSubboxPriceSum.classList.remove('header__basket-sum-one-product--active');
            headreBasketSubboxDividingLine.classList.remove('header__basket-sum-one-product--active');
            productRubSumImg.classList.remove('header__basket-sum-one-product--active');
        }
        if (Number(headerBasketSubboxBottomQuantityInput.value) < 1) {
            obj.inBasket = false;
            obj.sumOneProduct = obj.newPriceProduct;
            delOneZeroProduct(obj);
            removeBgBasketWhenDelProduct(obj);
            obj.quantityProduct = 1;
        }
        if (productOneInputQuantityValue) {
            productOneInputQuantityValue.value = obj.quantityProduct;
        }
    });

    // Инпут с количеством товаров
    const headerBasketSubboxBottomQuantityInput = document.createElement('input');
    headerBasketSubboxBottomQuantityInput.classList.add('header__basket-subbox-bottom-quantity-input');
    headerBasketSubboxBottomQuantityInput.type = 'text';
    headerBasketSubboxBottomQuantityInput.value = obj.quantityProduct;

    // Картинка плюс картинка
    const headerBasketSubboxPlusImg = document.createElement('img');
    headerBasketSubboxPlusImg.classList.add('header__basket-subbox-bottom-plus__img');
    headerBasketSubboxPlusImg.src = 'images/icon/quantity-plus.svg';


    //Кнопка плюс
    const headerBasketSubboxBottomPlusBtn = document.createElement('span');
    headerBasketSubboxBottomPlusBtn.classList.add('header__basket-subbox-bottom-plus-btn');

    headerBasketSubboxBottomPlusBtn.appendChild(headerBasketSubboxPlusImg);

    headerBasketSubboxBottomPlusBtn.addEventListener('click', () => {

        const productOneInputQuantityValue = document.querySelector('.product-one__input-quantity-value');



        obj.quantityProduct += 1;
        headerBasketSubboxBottomQuantityInput.value = obj.quantityProduct;
        if (productOneInputQuantityValue) {
            productOneInputQuantityValue.value = obj.quantityProduct;
        }
        showPlusQuantityProduct();


        if (productOneInputQuantityValue) {
            productOneInputQuantityValue.value = headerBasketSubboxBottomQuantityInput.value;
        }


        addCardSum(headerBasketSubboxPriceSum, obj);

        if (Number(headerBasketSubboxBottomQuantityInput.value) > 1) {
            headerBasketSubboxPriceSum.classList.add('header__basket-sum-one-product--active');
            headreBasketSubboxDividingLine.classList.add('header__basket-sum-one-product--active');
            productRubSumImg.classList.add('header__basket-sum-one-product--active');
        }

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

function addCardSum(element, productCardObj) {
    const headerBasketSubboxAllSumNumber = document.querySelector('.header__basket-subbox-all-sum-number');
    const headerBasketSubboxAllSumNumberArr = stringToNumber(headerBasketSubboxAllSumNumber);
    const rightSideBarBasketSum = document.querySelector('.right-side-bar__basket-sum');


    if (headerBasketSubboxAllSumNumberArr.length === 1 || headerBasketSubboxAllSumNumberArr[0] === '0') {
        headerBasketSubboxAllSumNumber.textContent = '0';
    }



    productCardObj.sumOneProduct = productCardObj.quantityProduct * productCardObj.newPriceProduct;
    headerBasketSubboxAllSumNumber.textContent = numberToString((+stringToNumber(headerBasketSubboxAllSumNumber)) + productCardObj.newPriceProduct);
    rightSideBarBasketSum.textContent = headerBasketSubboxAllSumNumber.textContent + ' руб.';
    element.textContent = numberToString(productCardObj.sumOneProduct);
}

//=================================================================================
//Функция вычетания из общей суммы
// при удалении товара в корзину
//=================================================================================

function subCardSum(element, productCardObj) {
    const headerBasketSubboxAllSumNumber = document.querySelector('.header__basket-subbox-all-sum-number');
    const headerBasketSubboxAllSumNumberArr = stringToNumber(headerBasketSubboxAllSumNumber);
    const rightSideBarBasketSum = document.querySelector('.right-side-bar__basket-sum');


    if (headerBasketSubboxAllSumNumberArr.length === 1 || headerBasketSubboxAllSumNumberArr[0] === '0') {
        headerBasketSubboxAllSumNumber.textContent = '0';
    }

    productCardObj.sumOneProduct -= productCardObj.newPriceProduct;
    headerBasketSubboxAllSumNumber.textContent = numberToString((+stringToNumber(headerBasketSubboxAllSumNumber)) - productCardObj.newPriceProduct);
    rightSideBarBasketSum.textContent = headerBasketSubboxAllSumNumber.textContent + ' руб.';
    element.textContent = numberToString(productCardObj.sumOneProduct);
}


//===================================================================================
//Функция для удалени товара принажатии 
// на кнопку удаления и на кнопку добавить в корзину на карточке
//===================================================================================

function delProductInBasket(productCardObj) {
    let productInBasket = document.querySelectorAll('.header__basket-subbox-item');
    const productInBasketWrapper = document.querySelector('.header__basket-subbox-items');

    //Общая сумма корзины
    const headerBasketSubboxAllSumNumber = document.querySelector('.header__basket-subbox-all-sum-number');

    //Отображение общей суммы корзины в правом окне
    const rightSideBarBasketSum = document.querySelector('.right-side-bar__basket-sum');

    const headerBasketSubboxAllSumNumberArr = stringToNumber(headerBasketSubboxAllSumNumber);
    if (headerBasketSubboxAllSumNumberArr.length === 1 || headerBasketSubboxAllSumNumberArr[0] === '0') {
        headerBasketSubboxAllSumNumber.textContent = '0';
    }

    for (let item of productInBasket) {
        if ((productCardObj.id == item.id) && (productCardObj.inBasket === false)) {
            if (productCardObj.sumOneProduct > 0) {
                headerBasketSubboxAllSumNumber.textContent = numberToString((+stringToNumber(headerBasketSubboxAllSumNumber)) - productCardObj.sumOneProduct);
                productCardObj.sumOneProduct = productCardObj.newPriceProduct;
                rightSideBarBasketSum.textContent = headerBasketSubboxAllSumNumber.textContent + ' руб.';
                changeQuantityProduct(productCardObj);
            }
            else {
                headerBasketSubboxAllSumNumber.textContent = numberToString((+stringToNumber(headerBasketSubboxAllSumNumber)) - productCardObj.newPriceProduct);
                rightSideBarBasketSum.textContent = headerBasketSubboxAllSumNumber.textContent + ' руб.';
                changeQuantityProduct(productCardObj);
            }
            productInBasketWrapper.removeChild(item);
        }
    }

    if (productInBasket.length === 1) {

        const rightSideBarInner = document.querySelector('.right-side-bar__item-box-inner');

        if (rightSideBarInner.classList.contains('right-side-bar__item--active')) {
            showRightBasket();
        }
        else {
            showHeaderEmptyBasket();
        }
    }
}

//===================================================================================
//Функция для удалени товара принажатии 
// условии если количестко равно 0
//===================================================================================


function delOneZeroProduct(productCardObj) {
    let productInBasket = document.querySelectorAll('.header__basket-subbox-item');
    const productInBasketWrapper = document.querySelector('.header__basket-subbox-items');

    //Общая сумма корзины
    const headerBasketSubboxAllSumNumber = document.querySelector('.header__basket-subbox-all-sum-number');

    //Отображение общей суммы корзины в правом окне
    const rightSideBarBasketSum = document.querySelector('.right-side-bar__basket-sum');

    const headerBasketSubboxAllSumNumberArr = stringToNumber(headerBasketSubboxAllSumNumber);
    if (headerBasketSubboxAllSumNumberArr.length === 1 || headerBasketSubboxAllSumNumberArr[0] === '0') {
        headerBasketSubboxAllSumNumber.textContent = '0';
    }

    for (let item of productInBasket) {
        if ((productCardObj.id == item.id) && (productCardObj.inBasket === false)) {
            productInBasketWrapper.removeChild(item);
        }
    }

    if (productInBasket.length === 1) {

        const rightSideBarInner = document.querySelector('.right-side-bar__item-box-inner');

        if (rightSideBarInner.classList.contains('right-side-bar__item--active')) {
            showRightBasket();
        }
        else {
            showHeaderEmptyBasket();
        }
    }
}


//===================================================================================
//Функции удаления фона у корзины карточки
// при удалении товара из корзины
//===================================================================================

function removeBgBasketWhenDelProduct(productCardObj) {
    const allProductCard = document.querySelectorAll('.product__item-box');
    const productCardBtnBasketWrapper = document.querySelectorAll('.product__img-basket-wrapper');

    for (let i = 0; i < allProductCard.length; i++) {


        if ((allProductCard[i].id == productCardObj.id) && (productCardObj.inBasket === false)) {
            removeBgBasket(productCardBtnBasketWrapper[i]);
        }
    }

}



//=================================================================================
//Функция преобразования числа в строку, добавление пробела
//=================================================================================

function numberToString(item) {

    let firstNumSum = '';

    if (item < 10000) {
        firstNumSum = String(item).substring(0, 1);
        firstNumSum += " " + String(item).slice(1);
        return firstNumSum;
    }
    if (item < 100000) {
        firstNumSum = String(item).substring(0, 2);
        firstNumSum += " " + String(item).slice(2);
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
//Увеличение количества товаров в кружочке оранжевом
//=================================================================================

function showPlusQuantityProduct() {
    console.log('work');
    const quantityProductBox = document.querySelector('.quantity-product__box');
    let quantityProductRightSideBar = document.querySelector('.quantity-product');
    const headerBasketSubboxItemArr = document.querySelectorAll('.header__basket-subbox-item');

    if (headerBasketSubboxItemArr.length > 0) {
        quantityProductBox.classList.add('active--element');
        quantityProductRightSideBar.textContent = (+quantityProductRightSideBar.textContent) + 1;
    }
}


//=================================================================================
//Уменьшение количества товаров в кружочке оранжевом
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


//=================================================================================
//Функция обновления количества товара
// при удалении из корзины
//=================================================================================

function changeQuantityProduct(obj) {
    const quantityProductBox = document.querySelector('.quantity-product__box');
    let quantityProductRightSideBar = document.querySelector('.quantity-product');
    const headerBasketSubboxItemArr = document.querySelectorAll('.header__basket-subbox-item');



    if (headerBasketSubboxItemArr.length > 0) {
        quantityProductBox.classList.add('active--element');
        if (quantityProductRightSideBar.textContent > 0) {
            quantityProductRightSideBar.textContent = (+quantityProductRightSideBar.textContent) - obj.quantityProduct;
        }

    }
    if (Number(quantityProductRightSideBar.textContent) <= 0) {
        quantityProductBox.classList.remove('active--element');
    }
}


//===================================================================================
//Удаляем классы активности с элементов
//===================================================================================

const bodyBox = document.querySelector('body');

bodyBox.addEventListener('click', (e) => {
    let bodyBoxTarget = e.target;
    if ((bodyBoxTarget.className === 'basic') || (bodyBoxTarget.className === 'container') || (bodyBoxTarget.className === 'main') || (bodyBoxTarget.className === 'body') || (bodyBoxTarget.className === 'product-net') || (bodyBoxTarget.className === 'top-wraper') || (bodyBoxTarget.className === 'header') || (bodyBoxTarget.className === 'header__wrapper')) {
        // removeRigthBasket();
    }

});

//===================================================================================
//Создание pop-up элемента
//===================================================================================

function createPopUp(productCardObj) {

    //title шапки pop-up
    const popUpTitle = document.createElement('h2');
    popUpTitle.classList.add('pop-up__title');
    popUpTitle.textContent = 'Быстрый просмотр';

    //Кнопка закрытия pop-up__title
    const popUpCloseBtn = document.createElement('button');
    popUpCloseBtn.classList.add('pop-up__close-btn');

    //Вызываем закрытие pop-up при клике
    popUpCloseBtn.addEventListener('click', () => {
        closePopup(popUp);
    });

    //Шапка  pop-upэлемента
    const popUpTitleBox = document.createElement('div');
    popUpTitleBox.classList.add('pop-up__title-box');
    popUpTitleBox.appendChild(popUpTitle);
    popUpTitleBox.appendChild(popUpCloseBtn);

    //Картинка фона для большого слайдера
    const popUpBigBg1 = document.createElement('img');
    popUpBigBg1.classList.add('pop-up__big-bg');
    popUpBigBg1.src = '../images/bg/bg-02-item.png';
    popUpBigBg1.alt = 'Фон';

    //Картинка продукта для большого слайдера
    const popUpBigImg1 = document.createElement('img');
    popUpBigImg1.classList.add('pop-up__big-img');
    popUpBigImg1.src = '../images/products/product-02.png';
    popUpBigImg1.alt = 'Камера';

    //Обёртка для картинок большого слайдера
    const popUpSliderBigItem1 = document.createElement('div');
    popUpSliderBigItem1.classList.add('pop-up__slider-big-item');
    popUpSliderBigItem1.appendChild(popUpBigBg1);
    popUpSliderBigItem1.appendChild(popUpBigImg1);

    //Картинка фона для большого слайдера
    const popUpBigBg2 = document.createElement('img');
    popUpBigBg2.classList.add('pop-up__big-bg');
    popUpBigBg2.src = '../images/bg/bg-03-item.png';
    popUpBigBg2.alt = 'Фон';

    //Картинка продукта для большого слайдера
    const popUpBigImg2 = document.createElement('img');
    popUpBigImg2.classList.add('pop-up__big-img');
    popUpBigImg2.src = '../images/products/product-03.png';
    popUpBigImg2.alt = 'Камера';

    //Обёртка для картинок большого слайдера
    const popUpSliderBigItem2 = document.createElement('div');
    popUpSliderBigItem2.classList.add('pop-up__slider-big-item');
    popUpSliderBigItem2.appendChild(popUpBigBg2);
    popUpSliderBigItem2.appendChild(popUpBigImg2);

    //Картинка фона для большого слайдера
    const popUpBigBg3 = document.createElement('img');
    popUpBigBg3.classList.add('pop-up__big-bg');
    popUpBigBg3.src = '../images/bg/bg-04-item.png';
    popUpBigBg3.alt = 'Фон';

    //Картинка продукта для большого слайдера
    const popUpBigImg3 = document.createElement('img');
    popUpBigImg3.classList.add('pop-up__big-img');
    popUpBigImg3.src = '../images/products/product-04.png';
    popUpBigImg3.alt = 'Камера';

    //Обёртка для картинок большого слайдера
    const popUpSliderBigItem3 = document.createElement('div');
    popUpSliderBigItem3.classList.add('pop-up__slider-big-item');
    popUpSliderBigItem3.appendChild(popUpBigBg3);
    popUpSliderBigItem3.appendChild(popUpBigImg3);

    //Картинка фона для большого слайдера
    const popUpBigBg4 = document.createElement('img');
    popUpBigBg4.classList.add('pop-up__big-bg');
    popUpBigBg4.src = '../images/bg/bg-02-item.png';
    popUpBigBg4.alt = 'Фон';

    //Картинка продукта для большого слайдера
    const popUpBigImg4 = document.createElement('img');
    popUpBigImg4.classList.add('pop-up__big-img');
    popUpBigImg4.src = '../images/products/product-02.png';
    popUpBigImg4.alt = 'Камера';

    //Обёртка для картинок большого слайдера
    const popUpSliderBigItem4 = document.createElement('div');
    popUpSliderBigItem4.classList.add('pop-up__slider-big-item');
    popUpSliderBigItem4.appendChild(popUpBigBg4);
    popUpSliderBigItem4.appendChild(popUpBigImg4);

    //Обёртка большой картинки слайдера
    const popUpSliderBig = document.createElement('div');
    popUpSliderBig.classList.add('pop-up__slider-big');
    popUpSliderBig.appendChild(popUpSliderBigItem1);
    popUpSliderBig.appendChild(popUpSliderBigItem2);
    popUpSliderBig.appendChild(popUpSliderBigItem3);
    popUpSliderBig.appendChild(popUpSliderBigItem4);

    //Картинки фона для маленького слайдера
    const popUpSliderBg1 = document.createElement('img');
    popUpSliderBg1.classList.add('pop-up__slider-bg');
    popUpSliderBg1.src = '../images/bg/bg-02-item.png';
    popUpSliderBg1.alt = 'Фон';

    //Картинка товара для маленького слайдера
    const popUpSliderImg1 = document.createElement('img');
    popUpSliderImg1.classList.add('pop-up__slider-img');
    popUpSliderImg1.src = '../images/products/product-02.png';
    popUpSliderImg1.alt = 'Камера';



    //Обёртка картинок для маленького слайдера
    const popUpSliderThumbItem1 = document.createElement('div');
    popUpSliderThumbItem1.classList.add('pop-up__slider-thumb-item');
    popUpSliderThumbItem1.appendChild(popUpSliderBg1);
    popUpSliderThumbItem1.appendChild(popUpSliderImg1);

    //Картинки фона для маленького слайдера
    const popUpSliderBg2 = document.createElement('img');
    popUpSliderBg2.classList.add('pop-up__slider-bg');
    popUpSliderBg2.src = '../images/bg/bg-03-item.png';
    popUpSliderBg2.alt = 'Фон';

    //Картинка товара для маленького слайдера
    const popUpSliderImg2 = document.createElement('img');
    popUpSliderImg2.classList.add('pop-up__slider-img');
    popUpSliderImg2.src = '../images/products/product-03.png';
    popUpSliderImg2.alt = 'Камера';



    //Обёртка картинок для маленького слайдера
    const popUpSliderThumbItem2 = document.createElement('div');
    popUpSliderThumbItem2.classList.add('pop-up__slider-thumb-item');
    popUpSliderThumbItem2.appendChild(popUpSliderBg2);
    popUpSliderThumbItem2.appendChild(popUpSliderImg2);

    //Картинки фона для маленького слайдера
    const popUpSliderBg3 = document.createElement('img');
    popUpSliderBg3.classList.add('pop-up__slider-bg');
    popUpSliderBg3.src = '../images/bg/bg-04-item.png';
    popUpSliderBg3.alt = 'Фон';

    //Картинка товара для маленького слайдера
    const popUpSliderImg3 = document.createElement('img');
    popUpSliderImg3.classList.add('pop-up__slider-img');
    popUpSliderImg3.src = '../images/products/product-04.png';
    popUpSliderImg3.alt = 'Камера';



    //Обёртка картинок для маленького слайдера
    const popUpSliderThumbItem3 = document.createElement('div');
    popUpSliderThumbItem3.classList.add('pop-up__slider-thumb-item');
    popUpSliderThumbItem3.appendChild(popUpSliderBg3);
    popUpSliderThumbItem3.appendChild(popUpSliderImg3);

    //Картинки фона для маленького слайдера
    const popUpSliderBg4 = document.createElement('img');
    popUpSliderBg4.classList.add('pop-up__slider-bg');
    popUpSliderBg4.src = '../images/bg/bg-05-item.png';
    popUpSliderBg4.alt = 'Фон';

    //Картинка товара для маленького слайдера
    const popUpSliderImg4 = document.createElement('img');
    popUpSliderImg4.classList.add('pop-up__slider-img');
    popUpSliderImg4.src = '../images/products/product-05.png';
    popUpSliderImg4.alt = 'Камера';



    //Обёртка картинок для маленького слайдера
    const popUpSliderThumbItem4 = document.createElement('div');
    popUpSliderThumbItem4.classList.add('pop-up__slider-thumb-item');
    popUpSliderThumbItem4.appendChild(popUpSliderBg4);
    popUpSliderThumbItem4.appendChild(popUpSliderImg4);

    //Обёртка маленького слайдера
    const popUpSliderThumb = document.createElement('div');
    popUpSliderThumb.classList.add('pop-up__slider-thumb');
    popUpSliderThumb.appendChild(popUpSliderThumbItem1);
    popUpSliderThumb.appendChild(popUpSliderThumbItem2);
    popUpSliderThumb.appendChild(popUpSliderThumbItem3);
    popUpSliderThumb.appendChild(popUpSliderThumbItem4);

    //Слайдер в pop-up
    $(popUpSliderBig).slick({
        asNavFor: '.pop-up__slider-thumb',
        draggable: false,
        arrows: false,
        fade: true
    });

    $(popUpSliderThumb).slick({
        asNavFor: '.pop-up__slider-big',
        focusOnSelect: true,
        slidesToShow: 3,
        draggable: false,
        prevArrow: '<button type="button" class="slick-prev"><svg width="17" height="29" viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2437 0.365723L17.6758 2.79785L5.20131 15.2723L17.6758 27.7468L15.2437 30.1789L0.415501 15.2723L15.2437 0.365723Z" fill="#EAEAEA"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="17" height="29" viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75537 0.365723L0.323242 2.79785L12.7977 15.2723L0.323242 27.7468L2.75537 30.1789L17.5835 15.2723L2.75537 0.365723Z" fill="#EAEAEA"/></svg></button>'
    });

    //Основная обёртка слайдера
    const popUpSliderBox = document.createElement('div');
    popUpSliderBox.classList.add('pop-up__slider-box');
    popUpSliderBox.appendChild(popUpSliderBig);
    popUpSliderBox.appendChild(popUpSliderThumb);

    //Товар в архиве
    const productItemArchive = document.createElement('p');
    productItemArchive.classList.add('product__item-archive');
    productItemArchive.textContent = 'Товар в архиве';

    //Товар под заказ
    const productOnOrder = document.createElement('p');
    productOnOrder.classList.add('product__on-order');
    productOnOrder.textContent = 'Под заказ';

    //Товар в наличии
    const productInStok = document.createElement('p');
    productInStok.classList.add('product__in-stock-info-text');
    productInStok.textContent = 'В наличии';

    //Обёртка доступности товара
    const popUpInfoInner = document.createElement('div');
    popUpInfoInner.classList.add('pop-up__info-inner');
    popUpInfoInner.appendChild(productItemArchive);
    popUpInfoInner.appendChild(productOnOrder);
    popUpInfoInner.appendChild(productInStok);

    //Старая цена товара
    const popUpOldPrice = document.createElement('p');
    popUpOldPrice.classList.add('pop-up__old-price');
    popUpOldPrice.textContent = '2 190';

    //Картинка валюты рубль
    const popUpOldPriceRub = document.createElement('img');
    popUpOldPriceRub.classList.add('pop-up__old-price-rub');
    popUpOldPriceRub.src = '../images/icon/pop-up-old-price-rub.svg';
    popUpOldPriceRub.alt = 'Рубль';

    //Обёртка старой цены
    const popUpOldPriceBox = document.createElement('div');
    popUpOldPriceBox.classList.add('pop-up__price-box');
    popUpOldPriceBox.appendChild(popUpOldPrice);
    popUpOldPriceBox.appendChild(popUpOldPriceRub);

    //Новая цена товара
    const popUpNewPrice = document.createElement('p');
    popUpNewPrice.classList.add('pop-up__new-price');
    popUpNewPrice.textContent = '3 190';

    //Картинка валюты рубль для новой цены
    const popUpNewPriceRub = document.createElement('img');
    popUpNewPriceRub.classList.add('pop-up__new-price-rub');
    popUpNewPriceRub.src = '../images/icon/rub-img.svg';
    popUpNewPriceRub.alt = 'Рубль';

    //Обёртка новой цены
    const popUpNewPriceBox = document.createElement('div');
    popUpNewPriceBox.classList.add('pop-up__price-box');
    popUpNewPriceBox.appendChild(popUpNewPrice);
    popUpNewPriceBox.appendChild(popUpNewPriceRub);



    //Обёртка цены
    const popUpPriceWrapper = document.createElement('div');
    popUpPriceWrapper.classList.add('pop-up__price-wrapper');
    popUpPriceWrapper.appendChild(popUpOldPriceBox);
    popUpPriceWrapper.appendChild(popUpNewPriceBox);

    //Текст "количество"
    const headerBasketSubboxBottomQuantityText = document.createElement('p');
    headerBasketSubboxBottomQuantityText.classList.add('header__basket-subbox-bottom-quantity-text');
    headerBasketSubboxBottomQuantityText.textContent = 'Кол-во:';

    //Картинка кнопки минус
    const headerBasketSubboxBottomMinusImg = document.createElement('img');
    headerBasketSubboxBottomMinusImg.classList.add('header__basket-subbox-bottom-minus__img');
    headerBasketSubboxBottomMinusImg.src = '../images/icon/quantity-minus.svg';
    headerBasketSubboxBottomMinusImg.alt = 'Кнопка минус';

    //Кнопка минус
    const headerBasketSubboxMinusBtn = document.createElement('span');
    headerBasketSubboxMinusBtn.classList.add('header__basket-subbox-bottom-minus-btn');
    headerBasketSubboxMinusBtn.appendChild(headerBasketSubboxBottomMinusImg);

    headerBasketSubboxMinusBtn.addEventListener('click', () => {



        productCardObj.quantityProduct -= 1;
        headerBasketSubboxBottomQuantityInput.value = productCardObj.quantityProduct;
        removeQuantityProductFromPopup(productCardObj);
        subSumAndSubQuantityFromPopupForOneProduct(productCardObj);

        if (headerBasketSubboxBottomQuantityInput.value < 1) {
            productCardObj.inBasket = false;
            productCardObj.sumOneProduct = productCardObj.newPriceProduct;
            delOneZeroProduct(productCardObj);
            removeBgBasketWhenDelProduct(productCardObj);
            productCardObj.quantityProduct = 1;
            headerBasketSubboxBottomQuantityInput.value = 1;
        }



        // if(productCardObj.quantityProduct > 0) {

        // }
        // else {
        //     headerBasketSubboxBottomQuantityInput.value = 1;
        //     productCardObj.quantityProduct = 1;
        // }


        // removeQuantityProductFromPopup(productCardObj);







    });

    //Инпут для отображения количества товара
    const headerBasketSubboxBottomQuantityInput = document.createElement('input');
    headerBasketSubboxBottomQuantityInput.classList.add('header__basket-subbox-bottom-quantity-input');
    headerBasketSubboxBottomQuantityInput.type = 'text';
    headerBasketSubboxBottomQuantityInput.value = productCardObj.quantityProduct;






    //Картинка кнопки плюс
    const headerBasketSubboxBottomMinusPlus = document.createElement('img');
    headerBasketSubboxBottomMinusPlus.classList.add('header__basket-subbox-bottom-minus-plus');
    headerBasketSubboxBottomMinusPlus.src = '../images/icon/quantity-plus.svg';
    headerBasketSubboxBottomMinusPlus.alt = 'Кнопка плюс';

    //Кнопка плюс
    const headerBasketSubboxBottomPlusBtn = document.createElement('span');
    headerBasketSubboxBottomPlusBtn.classList.add('header__basket-subbox-bottom-plus-btn');
    headerBasketSubboxBottomPlusBtn.appendChild(headerBasketSubboxBottomMinusPlus);

    headerBasketSubboxBottomPlusBtn.addEventListener('click', () => {


        productCardObj.quantityProduct += 1;
        headerBasketSubboxBottomQuantityInput.value = productCardObj.quantityProduct;
        if (productCardObj.inBasket) {
            addQuantityProductFromPopup(productCardObj);
        }
        addSumAndQuantityFromPopupForOneProduct(productCardObj);
    });


    //Обёртка посчёта товара
    const popUpBottomQuantity = document.createElement('div');
    popUpBottomQuantity.classList.add('pop-up__bottom-quantity');
    popUpBottomQuantity.appendChild(headerBasketSubboxBottomQuantityText);
    popUpBottomQuantity.appendChild(headerBasketSubboxMinusBtn);
    popUpBottomQuantity.appendChild(headerBasketSubboxBottomQuantityInput);
    popUpBottomQuantity.appendChild(headerBasketSubboxBottomPlusBtn);

    //Картинка для кнопки добавить в корзину
    const popUpInBasketBtnImg = document.createElement('img');
    popUpInBasketBtnImg.classList.add('pop-up__in-basket-btn-img');
    popUpInBasketBtnImg.src = '../images/icon/product-basket.svg';
    popUpInBasketBtnImg.alt = 'Корзина';

    //Кнопка добавить в корзину
    const popUpInBasketBtn = document.createElement('button');
    popUpInBasketBtn.classList.add('pop-up__in-basket-btn');
    popUpInBasketBtn.textContent = 'В Корзину';
    popUpInBasketBtn.appendChild(popUpInBasketBtnImg);

    popUpInBasketBtn.addEventListener('click', () => {
        productCardObj.inBasket = true;
        addBasketProduct(productCardObj);
        addBgBasketInPopup(productCardObj);
        showPlusQuantityProductPopup(productCardObj);
        addSumFromPopupForOneProduct(productCardObj);
    });

    //Основная обёртка подсчёта количестват товара
    const popUpQuantityWrapper = document.createElement('div');
    popUpQuantityWrapper.classList.add('pop-up__quantity-wrapper');
    popUpQuantityWrapper.appendChild(popUpBottomQuantity);
    popUpQuantityWrapper.appendChild(popUpInBasketBtn);


    //Оновная обёртка прайса
    const popUpPriceBoxInfo = document.createElement('div');
    popUpPriceBoxInfo.classList.add('pop-up__price-box-info');
    popUpPriceBoxInfo.appendChild(popUpPriceWrapper);
    popUpPriceBoxInfo.appendChild(popUpQuantityWrapper);

    //Обёртка подсчёта и добавления товара в корзину
    const popUpQuantityBox = document.createElement('div');
    popUpQuantityBox.classList.add('pop-up__quantity-box');
    popUpQuantityBox.appendChild(popUpInfoInner);
    popUpQuantityBox.appendChild(popUpPriceBoxInfo);

    //Левый блок с информацией
    const popUpInfoLeftBox = document.createElement('div');
    popUpInfoLeftBox.classList.add('pop-up__info-left-box');
    popUpInfoLeftBox.appendChild(popUpSliderBox);
    popUpInfoLeftBox.appendChild(popUpQuantityBox);

    //Заголовок товара
    const popUpInfoRightTitle = document.createElement('h3');
    popUpInfoRightTitle.classList.add('pop-up__info-right-title');
    popUpInfoRightTitle.textContent = 'Поворотная Wi-Fi камера';

    //Аритикул товара
    const popUpInfoRightArticle = document.createElement('p');
    popUpInfoRightArticle.classList.add('pop-up__info-right-article');
    popUpInfoRightArticle.textContent = 'Арт.: RV-3441';

    //Заголовок описания
    const popUpRightDescriptionTitle1 = document.createElement('h3');
    popUpRightDescriptionTitle1.classList.add('pop-up__right-description-title');
    popUpRightDescriptionTitle1.textContent = 'Описание';

    //Описание товара
    const popUpRightDescriptionText = document.createElement('p');
    popUpRightDescriptionText.classList.add('pop-up__right-description-text');
    popUpRightDescriptionText.textContent = 'W-Fi поворотная видеокамера 355°, Full HD 1080p, 2 МП, microSD до 128 GB Компактная поворотная видеокамера подходит для видеонаблюдения за домом, дачей и офисом. Видеонаблюдение со смартфона из любой точки мира Просматривать видео в реальном времени можно 24 часа в сутки с помощью мобильного приложения Rubetek.';

    //Обёртка описания товара
    const popUpRightDescriptionBox = document.createElement('div');
    popUpRightDescriptionBox.classList.add('pop-up__right-description-box');
    popUpRightDescriptionBox.appendChild(popUpRightDescriptionTitle1);
    popUpRightDescriptionBox.appendChild(popUpRightDescriptionText);

    //Заголовок характеристик
    const popUpRightDescriptionTitle2 = document.createElement('h3');
    popUpRightDescriptionTitle2.classList.add('pop-up__right-description-title');
    popUpRightDescriptionTitle2.textContent = 'Характеристики';

    //Заголовок модели
    const popUpRightSpecificationsText1 = document.createElement('div');
    popUpRightSpecificationsText1.classList.add('pop-up__right-specifications-text');
    popUpRightSpecificationsText1.textContent = 'Модель';

    //Называние модели
    const popUpRightSpecificationsText2 = document.createElement('div');
    popUpRightSpecificationsText2.classList.add('pop-up__right-specifications-text');
    popUpRightSpecificationsText2.textContent = 'RV-3416';

    //Блок модели товара
    const popUpRightSpecificationsOddBox1 = document.createElement('div');
    popUpRightSpecificationsOddBox1.classList.add('pop-up__right-specifications-odd-box');
    popUpRightSpecificationsOddBox1.appendChild(popUpRightSpecificationsText1);
    popUpRightSpecificationsOddBox1.appendChild(popUpRightSpecificationsText2);

    //Заголовок типа камеры
    const popUpRightTypeText1 = document.createElement('div');
    popUpRightTypeText1.classList.add('pop-up__right-specifications-text');
    popUpRightTypeText1.textContent = 'Тип камеры';

    //Называние типа камеры
    const popUpRightTypeText2 = document.createElement('div');
    popUpRightTypeText2.classList.add('pop-up__right-specifications-text');
    popUpRightTypeText2.textContent = 'IP/поворотная';

    //Блок типа товара
    const popUpRightSpecificationsEvenBox2 = document.createElement('div');
    popUpRightSpecificationsEvenBox2.classList.add('pop-up__right-specifications-even-box');
    popUpRightSpecificationsEvenBox2.appendChild(popUpRightTypeText1);
    popUpRightSpecificationsEvenBox2.appendChild(popUpRightTypeText2);

    //Заголовок качества съёмки
    const popUpRightQualityText1 = document.createElement('div');
    popUpRightQualityText1.classList.add('pop-up__right-specifications-text');
    popUpRightQualityText1.textContent = 'Качество съемки';

    //Качества съёмки
    const popUpRightQualityText2 = document.createElement('div');
    popUpRightQualityText2.classList.add('pop-up__right-specifications-text');
    popUpRightQualityText2.textContent = 'Full HD 1080p';

    //Блок качества товара
    const popUpRightSpecificationsOddBox3 = document.createElement('div');
    popUpRightSpecificationsOddBox3.classList.add('pop-up__right-specifications-odd-box');
    popUpRightSpecificationsOddBox3.appendChild(popUpRightQualityText1);
    popUpRightSpecificationsOddBox3.appendChild(popUpRightQualityText2);

    //Заголовок разрешения съёмки
    const popUpRightPermissionText1 = document.createElement('div');
    popUpRightPermissionText1.classList.add('pop-up__right-specifications-text');
    popUpRightPermissionText1.textContent = 'Разрешение';

    //Разрешения съёмки
    const popUpRightPermissionText2 = document.createElement('div');
    popUpRightPermissionText2.classList.add('pop-up__right-specifications-text');
    popUpRightPermissionText2.textContent = '1920х1080 пикселей';

    //Блок разрешения съёмки
    const popUpRightSpecificationsEvenBox4 = document.createElement('div');
    popUpRightSpecificationsEvenBox4.classList.add('pop-up__right-specifications-even-box');
    popUpRightSpecificationsEvenBox4.appendChild(popUpRightPermissionText1);
    popUpRightSpecificationsEvenBox4.appendChild(popUpRightPermissionText2);

    //Заголовок 1-й матрицы
    const popUpRightMatrix1Text1 = document.createElement('div');
    popUpRightMatrix1Text1.classList.add('pop-up__right-specifications-text');
    popUpRightMatrix1Text1.textContent = 'Матрица';

    //Марица 1
    const popUpRightMatrix1Text2 = document.createElement('div');
    popUpRightMatrix1Text2.classList.add('pop-up__right-specifications-text');
    popUpRightMatrix1Text2.textContent = '2 Мпикс';

    //Блок матрицы 1
    const popUpRightSpecificationsOddBox5 = document.createElement('div');
    popUpRightSpecificationsOddBox5.classList.add('pop-up__right-specifications-odd-box');
    popUpRightSpecificationsOddBox5.appendChild(popUpRightMatrix1Text1);
    popUpRightSpecificationsOddBox5.appendChild(popUpRightMatrix1Text2);

    //Заголовок угла обзора 1
    const popUpRightViewingAngel1Text1 = document.createElement('div');
    popUpRightViewingAngel1Text1.classList.add('pop-up__right-specifications-text');
    popUpRightViewingAngel1Text1.textContent = 'Горизонтальный угол обзора';

    //Элемент градуса 1
    const degressBox1 = document.createElement('sup');
    degressBox1.textContent = 'o';

    //Угол обзора 1
    const popUpRightViewingAngel1Text2 = document.createElement('div');
    popUpRightViewingAngel1Text2.classList.add('pop-up__right-specifications-text');
    popUpRightViewingAngel1Text2.textContent = '80';
    popUpRightViewingAngel1Text2.appendChild(degressBox1);

    //Блок угла обзора 1
    const popUpRightSpecificationsEvenBox6 = document.createElement('div');
    popUpRightSpecificationsEvenBox6.classList.add('pop-up__right-specifications-even-box');
    popUpRightSpecificationsEvenBox6.appendChild(popUpRightViewingAngel1Text1);
    popUpRightSpecificationsEvenBox6.appendChild(popUpRightViewingAngel1Text2);

    //Заголовок 2-й матрицы
    const popUpRightMatrix2Text1 = document.createElement('div');
    popUpRightMatrix2Text1.classList.add('pop-up__right-specifications-text');
    popUpRightMatrix2Text1.textContent = 'Матрица';

    //Марица 2
    const popUpRightMatrix2Text2 = document.createElement('div');
    popUpRightMatrix2Text2.classList.add('pop-up__right-specifications-text');
    popUpRightMatrix2Text2.textContent = '2 Мпикс';

    //Блок матрицы 2
    const popUpRightSpecificationsOddBox7 = document.createElement('div');
    popUpRightSpecificationsOddBox7.classList.add('pop-up__right-specifications-odd-box');
    popUpRightSpecificationsOddBox7.appendChild(popUpRightMatrix2Text1);
    popUpRightSpecificationsOddBox7.appendChild(popUpRightMatrix2Text2);

    //Заголовок угла обзора 2
    const popUpRightViewingAngel2Text1 = document.createElement('div');
    popUpRightViewingAngel2Text1.classList.add('pop-up__right-specifications-text');
    popUpRightViewingAngel2Text1.textContent = 'Горизонтальный угол обзора';

    //Элемент градуса 2
    const degressBox2 = document.createElement('sup');
    degressBox2.textContent = 'o';

    //Угол обзора 2
    const popUpRightViewingAngel2Text2 = document.createElement('div');
    popUpRightViewingAngel2Text2.classList.add('pop-up__right-specifications-text');
    popUpRightViewingAngel2Text2.textContent = '80';
    popUpRightViewingAngel2Text2.appendChild(degressBox2);

    //Блок угла обзора 2
    const popUpRightSpecificationsEvenBox8 = document.createElement('div');
    popUpRightSpecificationsEvenBox8.classList.add('pop-up__right-specifications-even-box');
    popUpRightSpecificationsEvenBox8.appendChild(popUpRightViewingAngel2Text1);
    popUpRightSpecificationsEvenBox8.appendChild(popUpRightViewingAngel2Text2);

    //Заголовок 3-й матрицы
    const popUpRightMatrix3Text1 = document.createElement('div');
    popUpRightMatrix3Text1.classList.add('pop-up__right-specifications-text');
    popUpRightMatrix3Text1.textContent = 'Матрица';

    //Марица 3
    const popUpRightMatrix3Text2 = document.createElement('div');
    popUpRightMatrix3Text2.classList.add('pop-up__right-specifications-text');
    popUpRightMatrix3Text2.textContent = '2 Мпикс';

    //Блок матрицы 3
    const popUpRightSpecificationsOddBox9 = document.createElement('div');
    popUpRightSpecificationsOddBox9.classList.add('pop-up__right-specifications-odd-box');
    popUpRightSpecificationsOddBox9.appendChild(popUpRightMatrix2Text1);
    popUpRightSpecificationsOddBox9.appendChild(popUpRightMatrix2Text2);

    //Заголовок угла обзора 3
    const popUpRightViewingAngel3Text1 = document.createElement('div');
    popUpRightViewingAngel3Text1.classList.add('pop-up__right-specifications-text');
    popUpRightViewingAngel3Text1.textContent = 'Горизонтальный угол обзора';

    //Элемент градуса 3
    const degressBox3 = document.createElement('sup');
    degressBox3.textContent = 'o';

    //Угол обзора 3
    const popUpRightViewingAngel3Text2 = document.createElement('div');
    popUpRightViewingAngel3Text2.classList.add('pop-up__right-specifications-text');
    popUpRightViewingAngel3Text2.textContent = '80';
    popUpRightViewingAngel3Text2.appendChild(degressBox3);

    //Блок угла обзора 3
    const popUpRightSpecificationsEvenBox10 = document.createElement('div');
    popUpRightSpecificationsEvenBox10.classList.add('pop-up__right-specifications-even-box');
    popUpRightSpecificationsEvenBox10.appendChild(popUpRightViewingAngel3Text1);
    popUpRightSpecificationsEvenBox10.appendChild(popUpRightViewingAngel3Text2);






    //Обёртка характеристик
    const popUpRightSpecificationsInfo = document.createElement('div');
    popUpRightSpecificationsInfo.classList.add('pop-up__right-specifications-info');
    popUpRightSpecificationsInfo.appendChild(popUpRightSpecificationsOddBox1);
    popUpRightSpecificationsInfo.appendChild(popUpRightSpecificationsEvenBox2);
    popUpRightSpecificationsInfo.appendChild(popUpRightSpecificationsOddBox3);
    popUpRightSpecificationsInfo.appendChild(popUpRightSpecificationsEvenBox4);
    popUpRightSpecificationsInfo.appendChild(popUpRightSpecificationsOddBox5);
    popUpRightSpecificationsInfo.appendChild(popUpRightSpecificationsEvenBox6);
    popUpRightSpecificationsInfo.appendChild(popUpRightSpecificationsOddBox7);
    popUpRightSpecificationsInfo.appendChild(popUpRightSpecificationsEvenBox8);
    popUpRightSpecificationsInfo.appendChild(popUpRightSpecificationsOddBox9);
    popUpRightSpecificationsInfo.appendChild(popUpRightSpecificationsEvenBox10);

    //Основная обёртка характеристик товара
    const popUpRightSpecificationsBox = document.createElement('div');
    popUpRightSpecificationsBox.classList.add('pop-up__right-specifications-box');
    popUpRightSpecificationsBox.appendChild(popUpRightDescriptionTitle2);
    popUpRightSpecificationsBox.appendChild(popUpRightSpecificationsInfo);

    //Основная обёртка информации о товаре
    const popUpInfoRightBoxWrapper = document.createElement('div');
    popUpInfoRightBoxWrapper.classList.add('pop-up__info-right-box-wrapper');
    popUpInfoRightBoxWrapper.appendChild(popUpInfoRightTitle);
    popUpInfoRightBoxWrapper.appendChild(popUpInfoRightArticle);
    popUpInfoRightBoxWrapper.appendChild(popUpRightDescriptionBox);
    popUpInfoRightBoxWrapper.appendChild(popUpRightSpecificationsBox);

    //Правый блок с информацией
    const popUpInfoRightBox = document.createElement('div');
    popUpInfoRightBox.classList.add('pop-up__info-right-box');
    popUpInfoRightBox.appendChild(popUpInfoRightBoxWrapper);



    //Основная обёртка информации
    const popUpInfoBox = document.createElement('div');
    popUpInfoBox.classList.add('pop-up__info-box');
    popUpInfoBox.appendChild(popUpInfoLeftBox);
    popUpInfoBox.appendChild(popUpInfoRightBox);

    //pop-up box
    const popUpBox = document.createElement('div');
    popUpBox.classList.add('pop-up__box');
    popUpBox.appendChild(popUpTitleBox);
    popUpBox.appendChild(popUpInfoBox);
    popUpBox.id = productCardObj.id;


    //Wrapper pop-up
    const popUpWrapper = document.createElement('div');
    popUpWrapper.classList.add('pop-up__wrapper');
    popUpWrapper.appendChild(popUpBox);


    //Основная обёртка pop-up элемента
    const popUp = document.createElement('div');
    popUp.classList.add('pop-up');
    popUp.appendChild(popUpWrapper);
    return popUp;
}


//===================================================================================
//Получаем координаты для отображения pop-up элемента
//===================================================================================


let windowY = 0;
//Получаем положение страницы при прокрутке,
//для отображения pop-up
window.onscroll = function () {
    //Передаём в переменную значение положения окна
    windowY = window.scrollY;

};


//===================================================================================
//Функция отображения pop-up элемента
//===================================================================================

function showPopup(productCardObj) {
    //Отключаем прокрутку страницы когда отображается pop-up
    document.body.style.overflow = 'hidden';
    //Добавляем элементу pop-up класс активности
    const popupElemen = createPopUp(productCardObj);
    //Добавляем полученное значение в стили для pop-up
    popupElemen.style.top = windowY + 'px';
    //Добавляем pop-up нас траницу
    document.body.appendChild(popupElemen);
}

//===================================================================================
//Функция закрытия pop-up элемента
//===================================================================================
function closePopup(popupElement) {
    //Возвращаем странице возможность прокручиваться
    document.body.style.overflow = '';
    //Удаляем класс для отображения у элемента pop-up
    document.body.removeChild(popupElement);
}


//===================================================================================
//Функция закрытия pop-up элемента  при нажатии на ESC
//===================================================================================
document.addEventListener('keydown', (e) => {
    const popupEl = document.querySelector('.pop-up');
    if (e.code == 'Escape') {
        closePopup(popupEl);
    }
});

//===================================================================================
//Функции добавления фона у корзины карточки
// при нажатии на кнопку в pop-up элементе
//===================================================================================

function addBgBasketInPopup(productCardObj) {
    const allProductCard = document.querySelectorAll('.product__item-box');
    const productCardBtnBasketWrapper = document.querySelectorAll('.product__img-basket-wrapper');

    for (let i = 0; i < allProductCard.length; i++) {

        console.log("work cicl");

        if ((allProductCard[i].id == productCardObj.id) && (productCardObj.inBasket === true)) {
            console.log("work bg");
            addBgBasket(productCardBtnBasketWrapper[i]);
        }
    }

}


//=================================================================================
//Увеличение количества товаров в кружочке оранжевом при добавлении количества
//товара в pop-up элементе
//=================================================================================

function showPlusQuantityProductPopup(productCardObj) {
    const quantityProductBox = document.querySelector('.quantity-product__box');
    const quantityProductRightSideBar = document.querySelector('.quantity-product');
    const headerBasketSubboxItemArr = document.querySelectorAll('.header__basket-subbox-item');
    const productInputInBasket = document.querySelectorAll('.header__basket-subbox-bottom-quantity-input');
    const popupBox = document.querySelector('.pop-up__box');


    for (let i = 0; i < headerBasketSubboxItemArr.length; i++) {
        if (productCardObj.inBasket && (headerBasketSubboxItemArr[i].id === popupBox.id)) {
            productInputInBasket[i].value = productCardObj.quantityProduct;
        }
    }

    quantityProductRightSideBar.textContent = Number(quantityProductRightSideBar.textContent) + productCardObj.quantityProduct;
    quantityProductBox.classList.add('active--element');
}


//=================================================================================
//Увеличение количества товаров в popup элементе, в корзине
//и в оранжевом кружочке
//=================================================================================

function addQuantityProductFromPopup(productCardObj) {
    const quantityProductRightSideBar = document.querySelector('.quantity-product');
    const headerBasketSubboxItemArr = document.querySelectorAll('.header__basket-subbox-item');
    const productInputInBasket = document.querySelectorAll('.header__basket-subbox-bottom-quantity-input');
    const popupBox = document.querySelector('.pop-up__box');

    for (let i = 0; i < headerBasketSubboxItemArr.length; i++) {
        if (productCardObj.inBasket && (headerBasketSubboxItemArr[i].id === popupBox.id)) {
            productInputInBasket[i].value = Number(productInputInBasket[i].value) + 1;
        }
    }

    quantityProductRightSideBar.textContent = Number(quantityProductRightSideBar.textContent) + 1;
}


//=================================================================================
//Уменьшение количества товаров в popup элементе, в корзине
//и в оранжевом кружочке
//=================================================================================

function removeQuantityProductFromPopup(productCardObj) {
    const quantityProductRightSideBar = document.querySelector('.quantity-product');
    const quantityProductBox = document.querySelector('.quantity-product__box');
    const headerBasketSubboxItemArr = document.querySelectorAll('.header__basket-subbox-item');
    const productInputInBasket = document.querySelectorAll('.header__basket-subbox-bottom-quantity-input');
    const popupBox = document.querySelector('.pop-up__box');

    for (let i = 0; i < headerBasketSubboxItemArr.length; i++) {
        if (productCardObj.inBasket && (headerBasketSubboxItemArr[i].id === popupBox.id)) {
            productInputInBasket[i].value = Number(productInputInBasket[i].value) - 1;
        }
    }

    if (Number(quantityProductRightSideBar.textContent) > 0) {
        quantityProductRightSideBar.textContent = Number(quantityProductRightSideBar.textContent) - 1;
    }



    if (Number(quantityProductRightSideBar.textContent) <= 0) {
        quantityProductBox.classList.remove('active--element');
    }
}



//=================================================================================
//Добавление суммы товаров при увеличении количества товара из pop-up
//=================================================================================

function addSumAndQuantityFromPopupForOneProduct(productCardObj) {
    const sumOneProduct = document.querySelectorAll('.header__basket-subbox-sum-price');
    const productInBasketArray = document.querySelectorAll('.header__basket-subbox-item');
    const oneProductPopup = document.querySelector('.pop-up__box');
    const allSum = document.querySelector('.header__basket-subbox-all-sum-number');
    const basketAllSum = document.querySelector('.right-side-bar__basket-sum');

    const dividingLine = document.querySelectorAll('.header__basket-subbox-dividing-line');
    const rubImgOneProductSum = document.querySelectorAll('.product__rub-sum-img');



    productCardObj.sumOneProduct += productCardObj.newPriceProduct;


    for (let i = 0; i < productInBasketArray.length; i++) {
        if (productCardObj.id == productInBasketArray[i].id && productInBasketArray[i].id == oneProductPopup.id && productCardObj.inBasket === true) {
            sumOneProduct[i].textContent = numberToString(productCardObj.sumOneProduct);
            allSum.textContent = numberToString(Number(stringToNumber(allSum)) + productCardObj.newPriceProduct);
            basketAllSum.textContent = allSum.textContent + ' руб';

            sumOneProduct[i].classList.add('header__basket-sum-one-product--active');
            dividingLine[i].classList.add('header__basket-sum-one-product--active');
            rubImgOneProductSum[i].classList.add('header__basket-sum-one-product--active');
        }
    }
}


//=================================================================================
//Отображение суммы одного товаров при добавлении товара из pop-up
//=================================================================================

function addSumFromPopupForOneProduct(productCardObj) {
    const productInBasketArray = document.querySelectorAll('.header__basket-subbox-item');
    const dividingLine = document.querySelectorAll('.header__basket-subbox-dividing-line');
    const sumOneProduct = document.querySelectorAll('.header__basket-subbox-sum-price');
    const rubImgOneProductSum = document.querySelectorAll('.product__rub-sum-img');
    const oneProductPopup = document.querySelector('.pop-up__box');
    const allSum = document.querySelector('.header__basket-subbox-all-sum-number');
    const basketAllSum = document.querySelector('.right-side-bar__basket-sum');





    for (let i = 0; i < productInBasketArray.length; i++) {

        if ((productCardObj.id == productInBasketArray[i].id) && (productInBasketArray[i].id == oneProductPopup.id)) {


            allSum.textContent = numberToString(Number(stringToNumber(allSum)) + productCardObj.sumOneProduct);
            sumOneProduct[i].textContent = numberToString(productCardObj.sumOneProduct);
            basketAllSum.textContent = allSum.textContent + ' руб';
            allSum.classList.add('header__basket-subbox-all-sum-number');
            // basketAllSum.classList.add('active--element');
            sumOneProduct[i].classList.add('header__basket-sum-one-product--active');
            dividingLine[i].classList.add('header__basket-sum-one-product--active');
            rubImgOneProductSum[i].classList.add('header__basket-sum-one-product--active');

        }
    }
}



//=================================================================================
//Уменьшение суммы товаров при увеличении количества товара из pop-up
//=================================================================================

function subSumAndSubQuantityFromPopupForOneProduct(productCardObj) {
    const sumOneProduct = document.querySelectorAll('.header__basket-subbox-sum-price');
    const productInBasketArray = document.querySelectorAll('.header__basket-subbox-item');
    const oneProductPopup = document.querySelector('.pop-up__box');
    const allSum = document.querySelector('.header__basket-subbox-all-sum-number');
    const basketAllSum = document.querySelector('.right-side-bar__basket-sum');

    const dividingLine = document.querySelectorAll('.header__basket-subbox-dividing-line');
    const rubImgOneProductSum = document.querySelectorAll('.product__rub-sum-img');



    productCardObj.sumOneProduct -= productCardObj.newPriceProduct;


    for (let i = 0; i < productInBasketArray.length; i++) {
        if (productCardObj.id == productInBasketArray[i].id && productInBasketArray[i].id == oneProductPopup.id && productCardObj.inBasket === true) {
            sumOneProduct[i].textContent = numberToString(productCardObj.sumOneProduct);
            allSum.textContent = numberToString(Number(stringToNumber(allSum)) - productCardObj.newPriceProduct);
            basketAllSum.textContent = allSum.textContent + ' руб';
        }
        if (productCardObj.quantityProduct === 1) {
            sumOneProduct[i].classList.remove('header__basket-sum-one-product--active');
            dividingLine[i].classList.remove('header__basket-sum-one-product--active');
            rubImgOneProductSum[i].classList.remove('header__basket-sum-one-product--active');
        }
    }
}




// productCardObj
// id: cardId++,
//     productCard: '',
//     inBasket: false,
//     cartfavorite: false,
//     basketfavorite: false,
//     quantityProduct: 1,
//     newPriceProduct: 4990,
//     sumOneProduct: 4990,



// const popupInBasketBtn = document.querySelector('.pop-up__in-basket-btn');


// popupInBasketBtn.addEventListener('click', () => {

// });




//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Скрипты для страницы с одим товаром
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



//=================================================================================
//Добавлене общей суммы придобавлении товара
//со страницы одного товара
//=================================================================================


function addSumOneProductPage(productCardObj) {
    const headerBasketSubboxAllSumNumber = document.querySelector('.header__basket-subbox-all-sum-number');
    const headerBasketSubboxAllSumNumberArr = stringToNumber(headerBasketSubboxAllSumNumber);
    const rightSideBarBasketSum = document.querySelector('.right-side-bar__basket-sum');


    const productInBasketArray = document.querySelectorAll('.header__basket-subbox-item');
    const dividingLine = document.querySelectorAll('.header__basket-subbox-dividing-line');
    const sumOneProduct = document.querySelectorAll('.header__basket-subbox-sum-price');
    const rubImgOneProductSum = document.querySelectorAll('.product__rub-sum-img');


    if (headerBasketSubboxAllSumNumberArr.length === 1 || headerBasketSubboxAllSumNumberArr[0] === '0') {
        headerBasketSubboxAllSumNumber.textContent = '0';
    }



    productCardObj.sumOneProduct = productCardObj.quantityProduct * productCardObj.newPriceProduct;

    headerBasketSubboxAllSumNumber.textContent = numberToString((+stringToNumber(headerBasketSubboxAllSumNumber)) + productCardObj.sumOneProduct);
    rightSideBarBasketSum.textContent = headerBasketSubboxAllSumNumber.textContent + ' руб.';

    if (productCardObj.sumOneProduct > productCardObj.newPriceProduct) {
        for (let i = 0; i < productInBasketArray.length; i++) {
            sumOneProduct[i].textContent = numberToString(productCardObj.sumOneProduct);
            // basketAllSum.classList.add('active--element');
            sumOneProduct[i].classList.add('header__basket-sum-one-product--active');
            dividingLine[i].classList.add('header__basket-sum-one-product--active');
            rubImgOneProductSum[i].classList.add('header__basket-sum-one-product--active');
        }
    }
}




//=================================================================================
//Добавлене товара принажатии на кнопку
//=================================================================================

const productOnePriceBtn = document.querySelector('.product-one__price-btn');

if (productOnePriceBtn) {
    productOnePriceBtn.addEventListener('click', () => {
        cloneProductCardObj.inBasket = true;
        addBasketProduct(cloneProductCardObj);
        console.log(cloneProductCardObj.sumOneProduct);
        addSumOneProductPage(cloneProductCardObj);
        showPlusQuantityProduct();
    });
}





//=================================================================================
//Уменьшение количества товара в карточке в корзине
// через страницу одного товара
//=================================================================================

function removeQuantityProductOneProductPage(productCardObj) {
    const quantityProductRightSideBar = document.querySelector('.quantity-product');
    const quantityProductBox = document.querySelector('.quantity-product__box');
    const headerBasketSubboxItemArr = document.querySelectorAll('.header__basket-subbox-item');
    const productInputInBasket = document.querySelectorAll('.header__basket-subbox-bottom-quantity-input');
    // const popupBox = document.querySelector('.pop-up__box');

    // for (let i = 0; i < headerBasketSubboxItemArr.length; i++) {
    //     if (productCardObj.inBasket && (headerBasketSubboxItemArr[i].id === popupBox.id)) {
    //         productInputInBasket[i].value = Number(productInputInBasket[i].value) - 1;
    //     }
    // }

    for (let i = 0; i < headerBasketSubboxItemArr.length; i++) {
        if (productCardObj.inBasket) {
            productInputInBasket[i].value = Number(productInputInBasket[i].value) - 1;
        }
    }

    if (Number(quantityProductRightSideBar.textContent) > 0) {
        quantityProductRightSideBar.textContent = Number(quantityProductRightSideBar.textContent) - 1;
    }

    if (Number(quantityProductRightSideBar.textContent) <= 0) {
        quantityProductBox.classList.remove('active--element');
    }
}




//=================================================================================
//Уменьшение суммы
// через страницу одного товара
//=================================================================================



function subSumAndSubQuantityFromOneProductPage(productCardObj) {
    const sumOneProduct = document.querySelectorAll('.header__basket-subbox-sum-price');
    const productInBasketArray = document.querySelectorAll('.header__basket-subbox-item');
    // const oneProductPopup = document.querySelector('.pop-up__box');
    const allSum = document.querySelector('.header__basket-subbox-all-sum-number');
    const basketAllSum = document.querySelector('.right-side-bar__basket-sum');

    const dividingLine = document.querySelectorAll('.header__basket-subbox-dividing-line');
    const rubImgOneProductSum = document.querySelectorAll('.product__rub-sum-img');



    productCardObj.sumOneProduct -= productCardObj.newPriceProduct;


    // for (let i = 0; i < productInBasketArray.length; i++) {
    //     if (productCardObj.id == productInBasketArray[i].id && productInBasketArray[i].id == oneProductPopup.id && productCardObj.inBasket === true) {
    //         sumOneProduct[i].textContent = numberToString(productCardObj.sumOneProduct);
    //         allSum.textContent = numberToString(Number(stringToNumber(allSum)) - productCardObj.newPriceProduct);
    //         basketAllSum.textContent = allSum.textContent + ' руб';
    //     }
    //     if (productCardObj.quantityProduct === 1) {
    //         sumOneProduct[i].classList.remove('header__basket-sum-one-product--active');
    //         dividingLine[i].classList.remove('header__basket-sum-one-product--active');
    //         rubImgOneProductSum[i].classList.remove('header__basket-sum-one-product--active');
    //     }
    // }

    for (let i = 0; i < productInBasketArray.length; i++) {
        if (productCardObj.inBasket === true) {
            sumOneProduct[i].textContent = numberToString(productCardObj.sumOneProduct);
            allSum.textContent = numberToString(Number(stringToNumber(allSum)) - productCardObj.newPriceProduct);
            basketAllSum.textContent = allSum.textContent + ' руб';
        }
        if (productCardObj.quantityProduct === 1) {
            sumOneProduct[i].classList.remove('header__basket-sum-one-product--active');
            dividingLine[i].classList.remove('header__basket-sum-one-product--active');
            rubImgOneProductSum[i].classList.remove('header__basket-sum-one-product--active');
        }
    }
}




//=================================================================================
//Увеличение количества товара в карточке в корзине
// через страницу одного товара
//=================================================================================



function addQuantityProductFromOnePageProduct(productCardObj) {
    const quantityProductRightSideBar = document.querySelector('.quantity-product');
    const headerBasketSubboxItemArr = document.querySelectorAll('.header__basket-subbox-item');
    const productInputInBasket = document.querySelectorAll('.header__basket-subbox-bottom-quantity-input');
    // const popupBox = document.querySelector('.pop-up__box');

    // for (let i = 0; i < headerBasketSubboxItemArr.length; i++) {
    //     if (productCardObj.inBasket && (headerBasketSubboxItemArr[i].id === popupBox.id)) {
    //         productInputInBasket[i].value = Number(productInputInBasket[i].value) + 1;
    //     }
    // }

    for (let i = 0; i < headerBasketSubboxItemArr.length; i++) {
        if (productCardObj.inBasket) {
            productInputInBasket[i].value = Number(productInputInBasket[i].value) + 1;
        }
    }

    quantityProductRightSideBar.textContent = Number(quantityProductRightSideBar.textContent) + 1;
}


//=================================================================================
//Увеличение суммы
// через страницу одного товара
//=================================================================================


function addSumAndQuantityFromPopupForOneProductPage(productCardObj) {
    const sumOneProduct = document.querySelectorAll('.header__basket-subbox-sum-price');
    const productInBasketArray = document.querySelectorAll('.header__basket-subbox-item');
    // const oneProductPopup = document.querySelector('.pop-up__box');
    const allSum = document.querySelector('.header__basket-subbox-all-sum-number');
    const basketAllSum = document.querySelector('.right-side-bar__basket-sum');

    const dividingLine = document.querySelectorAll('.header__basket-subbox-dividing-line');
    const rubImgOneProductSum = document.querySelectorAll('.product__rub-sum-img');



    productCardObj.sumOneProduct += productCardObj.newPriceProduct;

    console.log(productCardObj.sumOneProduct);

    // for (let i = 0; i < productInBasketArray.length; i++) {
    //     if (productCardObj.id == productInBasketArray[i].id && productInBasketArray[i].id == oneProductPopup.id && productCardObj.inBasket === true) {
    //         sumOneProduct[i].textContent = numberToString(productCardObj.sumOneProduct);
    //         allSum.textContent = numberToString(Number(stringToNumber(allSum)) + productCardObj.newPriceProduct);
    //         basketAllSum.textContent = allSum.textContent + ' руб';

    //         sumOneProduct[i].classList.add('header__basket-sum-one-product--active');
    //         dividingLine[i].classList.add('header__basket-sum-one-product--active');
    //         rubImgOneProductSum[i].classList.add('header__basket-sum-one-product--active');
    //     }
    // }

    for (let i = 0; i < productInBasketArray.length; i++) {
        if (productCardObj.inBasket === true) {
            sumOneProduct[i].textContent = numberToString(productCardObj.sumOneProduct);
            allSum.textContent = numberToString(Number(stringToNumber(allSum)) + productCardObj.newPriceProduct);
            basketAllSum.textContent = allSum.textContent + ' руб';

            sumOneProduct[i].classList.add('header__basket-sum-one-product--active');
            dividingLine[i].classList.add('header__basket-sum-one-product--active');
            rubImgOneProductSum[i].classList.add('header__basket-sum-one-product--active');
        }
    }
}



//=================================================================================
//Увеличение и уменьшение количества в элементе input
// на странице одного товара
//=================================================================================


const productOneMinusBtn = document.querySelector('.product-one__minus-btn');
const productOnePlusBtn = document.querySelector('.product-one__plus-btn');

if (productOneMinusBtn) {
    productOneMinusBtn.addEventListener('click', () => {
        const productOneInputQuantityValue = document.querySelector('.product-one__input-quantity-value');

        cloneProductCardObj.quantityProduct -= 1;
        productOneInputQuantityValue.value = cloneProductCardObj.quantityProduct;
        removeQuantityProductOneProductPage(cloneProductCardObj);
        subSumAndSubQuantityFromOneProductPage(cloneProductCardObj);

        if (Number(productOneInputQuantityValue.value) < 1) {
            cloneProductCardObj.inBasket = false;
            cloneProductCardObj.sumOneProduct = cloneProductCardObj.newPriceProduct;
            delOneZeroProduct(cloneProductCardObj);
            cloneProductCardObj.quantityProduct = 1;
            productOneInputQuantityValue.value = 1;
        }
    });
}




if (productOnePlusBtn) {
    productOnePlusBtn.addEventListener('click', () => {
        cloneProductCardObj.quantityProduct += 1;
        const productOneInputQuantityValue = document.querySelector('.product-one__input-quantity-value');
        productOneInputQuantityValue.value = cloneProductCardObj.quantityProduct;
        addQuantityProductFromOnePageProduct(cloneProductCardObj);
        addSumAndQuantityFromPopupForOneProductPage(cloneProductCardObj);
    });
}





//=================================================================================
//Переключение между табами
//=================================================================================

const linksListItem = document.querySelectorAll('.links__list-item');

const tabsBoxItem = document.querySelectorAll('.tabs-box__item');


if(linksListItem && tabsBoxItem) {


    linksListItem.forEach((tabBtn) => {
        tabBtn.addEventListener('click', () => {
            linksListItem.forEach((item) => {
                item.classList.remove('links__list-item--active');
            });
            tabsBoxItem.forEach((item) => {
                item.classList.remove('active--element');
            });
            const currentTab = document.querySelector(tabBtn.getAttribute('data-tab'));
            currentTab.classList.add('active--element');
            tabBtn.classList.add('links__list-item--active');
        });
    });
}




//=================================================================================
//Показать больше характеристик
//=================================================================================

const showMoreSpecificationsBtn = document.querySelector('.tabs-box__specifications-list-all');



if(showMoreSpecificationsBtn) {
    showMoreSpecificationsBtn.addEventListener('click', () => {
        console.log('work');
        const specificationWrapper = document.querySelector('.tabs-box__specifications-wrapper');

        if(specificationWrapper.classList.contains('tabs-box__specifications-wrapper--active') === false) {
            specificationWrapper.classList.add('tabs-box__specifications-wrapper--active');
            showMoreSpecificationsBtn.textContent = 'скрыть';
        }
        else {
            specificationWrapper.classList.remove('tabs-box__specifications-wrapper--active');
            showMoreSpecificationsBtn.textContent = 'показать больше';
        }
        
    });
}



// tabs-box__specifications-wrapper--active

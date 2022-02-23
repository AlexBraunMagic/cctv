//Карточка товара для добавления в корзину

// <div class="header__basket-subbox-item">
//                                             <div class="header__basket-product-img-box">
//                                                 <img class="product__img-box-bg" src="images/bg/bg-01-item.png"
//                                                     alt="Фон">
//                                                 <img class="product__img" src="images/products/product-013.png"
//                                                     alt="Камера">
//                                             </div>
//                                             <div class="header__product-basket-box">
//                                                 <div class="header__basket-subbox-top">
//                                                     <div class="header__basket-subbox-product-info">
//                                                         <h3 class="header__basket-subbox-product-name">
//                                                             Поворотная Wi-Fi камера
//                                                         </h3>
//                                                         <p class="header__basket-subbox-product-article">
//                                                             Арт.: RV-3489
//                                                         </p>
//                                                     </div>
//                                                     <ul class="header__basket-subbox-list">
//                                                         <li class="header__basket-subbox-list-item">
//                                                             <a class="header__basket-subbox-list-link" href="#">
//                                                                 <img class="header__basket-subbox-link-img"
//                                                                     src="images/icon/basket-subbox-copy.svg"
//                                                                     alt="Копировать">
//                                                             </a>
//                                                         </li>
//                                                         <li class="header__basket-subbox-list-item">
//                                                             <a class="header__basket-subbox-list-link" href="#">
//                                                                 <svg width="25" height="22" viewBox="0 0 25 22"
//                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                                     <path
//                                                                         d="M11.9402 3.32855L12.2937 3.68211L12.6473 3.32855L13.6973 2.27855C14.8296 1.14625 16.3654 0.5 17.9812 0.5C19.5951 0.5 21.1244 1.14426 22.2532 2.35366L22.2591 2.35996L22.2652 2.36605C24.6949 4.79579 24.6949 8.67921 22.2652 11.1089L22.2637 11.1104L12.2937 21.1649L2.3238 11.1104L2.3223 11.1089C-0.107434 8.67921 -0.107434 4.79579 2.3223 2.36605L1.96875 2.0125L2.3223 2.36605L2.4098 2.27855C4.75103 -0.0626734 8.62979 -0.0627096 10.9718 2.36001L10.9717 2.36006L10.9777 2.36605L11.9402 3.32855Z"
//                                                                         fill="white" stroke="#007ABE" />
//                                                                 </svg>
//                                                             </a>
//                                                         </li>
//                                                         <li class="header__basket-subbox-list-item">
//                                                             <a class="header__basket-subbox-list-link" href="#">
//                                                                 <img class="header__basket-subbox-link-img"
//                                                                     src="images/icon/basket-subbox-delete.svg"
//                                                                     alt="Удалить">
//                                                             </a>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                                 <div class="header__basket-subbox-bottom">
//                                                     <div class="header__basket-subbox-price-box">
//                                                         <p class="header__basket-subbox-price">
//                                                             4 990
//                                                         </p>
//                                                         <img class="header__basket-subbox-rub-img"
//                                                             src="images/icon/rub-img.svg" alt="Рубль">
//                                                         <span class="header__basket-subbox-dividing-line">/</span>
//                                                         <p
//                                                             class="header__basket-subbox-price header__basket-subbox-sum-price">
//                                                             4 990
//                                                         </p>
//                                                         <img class="header__basket-subbox-rub-img"
//                                                             src="images/icon/rub-img.svg" alt="Рубль">
//                                                     </div>
//                                                     <p class="product__item-archive active-item-element">
//                                                         Товар в архиве
//                                                     </p>
//                                                     <p class="product__on-order active-item-element">
//                                                         Под заказ
//                                                     </p>
//                                                     <div class="product__in-stock-box">
//                                                         <p class="product__in-stock-info-text">
//                                                             В наличии
//                                                         </p>
//                                                     </div>
//                                                     <div class="header__basket-subbox-bottom-quantity">
//                                                         <p class="header__basket-subbox-bottom-quantity-text">
//                                                             Кол-во:
//                                                         </p>
//                                                         <span class="header__basket-subbox-bottom-minus-btn">
//                                                             <img class="header__basket-subbox-bottom-minus__img"
//                                                                 src="images/icon/quantity-minus.svg" alt="Кнопка минус">
//                                                         </span>
//                                                         <input class="header__basket-subbox-bottom-quantity-input"
//                                                             type="text" value="1">
//                                                         <span class="header__basket-subbox-bottom-plus-btn">
//                                                             <img class="header__basket-subbox-bottom-minus-plus"
//                                                                 src="images/icon/quantity-plus.svg" alt="Кнопка плюс">
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>






//Карточка для корзины
//Функция создания фоновой картинки

// function createProductImgBoxBg() {
//     const productImgBoxBg = document.createElement('img');
//     productImgBoxBg.classList.add('product__img-box-bg');
//     productImgBoxBg.src = '../images/bg/bg-01-item.png';

//     return productImgBoxBg;
// } есть

// //Функция создания картинки товара
// function createProductImg() {
//     const productImg = document.createElement('img');
//     productImg.classList.add('product__img');
//     productImg.src = '../images/products/product-013.png';

//     return productImg;
// } есть

// //Функция создания обёртки для картинки и фона
// function createHeaderBasketProductImgBox() {
//     const headerBasketProductImgBox = document.createElement('div');
//     headerBasketProductImgBox.classList.add('header__basket-product-img-box');

//     headerBasketProductImgBox.appendChild(createProductImgBoxBg());
//     headerBasketProductImgBox.appendChild(createProductImg());

//     return headerBasketProductImgBox;
// }есть

// //Функция создания тайтла ссылки
// function createHeaderBasketSubboxProductName() {
//     const headerBasketSubboxProductName = document.createElement('a');
//     headerBasketSubboxProductName.classList.add('header__basket-subbox-product-name');
//     headerBasketSubboxProductName.src = '../product.html';
//     headerBasketSubboxProductName.textContent = 'Поворотная Wi-Fi камера';

//     return headerBasketSubboxProductName;
// } есть


// // Создание Артикула товара
// function createHeaderBasketSubboxProductArticle() {
//     const headerBasketSubboxProductArticle = document.createElement('p');
//     headerBasketSubboxProductArticle.classList.add('header__basket-subbox-product-article');
//     headerBasketSubboxProductArticle.textContent = 'Арт.: RV-3489';

//     return headerBasketSubboxProductArticle;
// }есть

// //Функция содания внутренней обёртки топа 
// function createHeaderBasketSubboxProductInfo() {
//     const headerBasketSubboxProductInfo = document.createElement('div');
//     headerBasketSubboxProductInfo.classList.add('header__basket-subbox-product-info');

//     headerBasketSubboxProductInfo.appendChild(createHeaderBasketSubboxProductName());
//     headerBasketSubboxProductInfo.appendChild(createHeaderBasketSubboxProductArticle());

//     return headerBasketSubboxProductInfo;
// }есть

// // Создаём картинки для элементов li
// // Картинка копировать
// function createheaderBasketSubboxListLinkImgCopy() {
//     const headerBasketSubboxListLinkImgCopy = document.createElement('img');
//     headerBasketSubboxListLinkImgCopy.classList.add('header__basket-subbox-link-img');
//     headerBasketSubboxListLinkImgCopy.src = 'images/icon/basket-subbox-copy.svg';

//     return headerBasketSubboxListLinkImgCopy;
// }есть


// // Картинка для кнопки в избранное для товара в корзине
// function createHeaderBasketSubboxListLinkImgFavorite() {
//     //Картинка фейворит
//     const xmlns = "http://www.w3.org/2000/svg";
//     const boxWidth = 25;
//     const boxHeight = 25;

//     const heart = document.createElementNS(xmlns, 'svg');
//     heart.classList.add('heart');
//     heart.setAttributeNS(null, 'viewBox', '0 0 ' + boxWidth + ' ' + boxHeight);
//     heart.setAttributeNS(null, 'width', boxWidth);
//     heart.setAttributeNS(null, 'height', boxHeight);

//     const heartPath = document.createElementNS(xmlns, 'path');
//     heartPath.setAttributeNS(null, 'd', "M11.9402 3.32855L12.2937 3.68211L12.6473 3.32855L13.6973 2.27855C14.8296 1.14625 16.3654 0.5 17.9812 0.5C19.5951 0.5 21.1244 1.14426 22.2532 2.35366L22.2591 2.35996L22.2652 2.36605C24.6949 4.79579 24.6949 8.67921 22.2652 11.1089L22.2637 11.1104L12.2937 21.1649L2.3238 11.1104L2.3223 11.1089C-0.107434 8.67921 -0.107434 4.79579 2.3223 2.36605L1.96875 2.0125L2.3223 2.36605L2.4098 2.27855C4.75103 -0.0626734 8.62979 -0.0627096 10.9718 2.36001L10.9717 2.36006L10.9777 2.36605L11.9402 3.32855Z");
//     heartPath.setAttributeNS(null, 'fill', "white");
//     heartPath.setAttributeNS(null, 'stroke', '#007ABE');
//     heart.appendChild(heartPath);

//     heartPath.addEventListener('click', (e) => {
//         changeBgHeart(heart);
//     });

//     return heart;
// }есть

// // Картинка фейворит
// // createFavoriteIcon()

// //Картинка удалить
// function createHeaderBasketSubboxListLinkImgDelete() {
//     const headerBasketSubboxListLinkImgDelete = document.createElement('img');
//     headerBasketSubboxListLinkImgDelete.classList.add('header__basket-subbox-link-img');
//     headerBasketSubboxListLinkImgDelete.src = 'images/icon/basket-subbox-delete.svg';

//     return headerBasketSubboxListLinkImgDelete;
// }есть

// // 
// // Создаём обёртку для картинок которыепомещаем в элементы li
// function createheaderBasketSubboxListLink() {
//     const headerBasketSubboxListLink = document.createElement('div');
//     headerBasketSubboxListLink.classList.add('.header__basket-subbox-list-link');

//     return headerBasketSubboxListLink;
// }есть

// //
// //Создаём элементы кнопок li 
// function createHeaderBasketSubboxListItemCopy() {
//     const createHeaderBasketSubboxListItemCopy = document.createElement('li');
//     createHeaderBasketSubboxListItemCopy.classList.add('header__basket-subbox-list-item');

//     const copyImg = createheaderBasketSubboxListLink();
//     copyImg.appendChild(createheaderBasketSubboxListLinkImgCopy());

//     createHeaderBasketSubboxListItemCopy.appendChild(copyImg);

//     return createHeaderBasketSubboxListItemCopy;
// }есть

// function createHeaderBasketSubboxListItemFavorite() {
//     const createHeaderBasketSubboxListItemFavoryte = document.createElement('li');
//     createHeaderBasketSubboxListItemFavoryte.classList.add('header__basket-subbox-list-item');

//     const favoryteImg = createheaderBasketSubboxListLink();
//     favoryteImg.appendChild(createHeaderBasketSubboxListLinkImgFavorite());

//     createHeaderBasketSubboxListItemFavoryte.appendChild(favoryteImg);

//     return createHeaderBasketSubboxListItemFavoryte;
// }есть 




// function createHeaderBasketSubboxListItemDelete() {
//     const createHeaderBasketSubboxListItemDelete = document.createElement('li');
//     createHeaderBasketSubboxListItemDelete.classList.add('header__basket-subbox-list-item');

//     const deleteImg = createheaderBasketSubboxListLink();
//     deleteImg.appendChild(createHeaderBasketSubboxListLinkImgDelete());

//     createHeaderBasketSubboxListItemDelete.appendChild(deleteImg);

//     return createHeaderBasketSubboxListItemDelete;
// }есть


// //Создание ul элемента для кнопок
// function createHeaderBasketSubboxList() {
//     const headerBasketSubboxList = document.createElement('ul');
//     headerBasketSubboxList.classList.add('header__basket-subbox-list');

//     headerBasketSubboxList.appendChild(createHeaderBasketSubboxListItemCopy());
//     headerBasketSubboxList.appendChild(createHeaderBasketSubboxListItemFavorite());
//     headerBasketSubboxList.appendChild(createHeaderBasketSubboxListItemDelete());



//     return headerBasketSubboxList;
// }есть


// //Обёртка топ продукта
// function createHeaderBasketSubboxTop() {
//     const headerBasketSubboxTop = document.createElement('div');
//     headerBasketSubboxTop.classList.add('header__basket-subbox-top');

//     headerBasketSubboxTop.appendChild(createHeaderBasketSubboxProductInfo());
//     headerBasketSubboxTop.appendChild(createHeaderBasketSubboxList());

//     return headerBasketSubboxTop;
// }есть


// // Цена товара
// function createHeaderBasketSubboxPrice() {
//     const headerBasketSubboxPrice = document.createElement('p');
//     headerBasketSubboxPrice.classList.add('header__basket-subbox-price');
//     headerBasketSubboxPrice.textContent = '4 990';

//     return headerBasketSubboxPrice;
// }есть

// // Черта для разделение цены от суммы
// function createHeadreBasketSubboxDividingLine() {
//     const headreBasketSubboxDividingLine = document.createElement('span');
//     headreBasketSubboxDividingLine.classList.add('header__basket-subbox-dividing-line');
//     headreBasketSubboxDividingLine.textContent = '/';

//     return headreBasketSubboxDividingLine;
// }есть


// // Создание элемента для суммы одного товара
// function createHeaderBasketSubboxPriceSum() {
//     const headerBasketSubboxPriceSum = document.createElement('p');
//     headerBasketSubboxPriceSum.classList.add('header__basket-subbox-price');
//     headerBasketSubboxPriceSum.classList.add('header__basket-subbox-sum-price');
//     headerBasketSubboxPriceSum.textContent = '0';

//     return headerBasketSubboxPriceSum;
// }есть


// // Обёртка для цены
// function createHeaderBasketSubboxPriceBox() {
//     const headerBasketSubboxPriceBox = document.createElement('diV');
//     headerBasketSubboxPriceBox.classList.add('header__basket-subbox-price-box');

//     headerBasketSubboxPriceBox.appendChild(createHeaderBasketSubboxPrice());
//     headerBasketSubboxPriceBox.appendChild(createRubImg());
//     headerBasketSubboxPriceBox.appendChild(createHeadreBasketSubboxDividingLine());
//     headerBasketSubboxPriceBox.appendChild(createHeaderBasketSubboxPriceSum());
//     const rubSumImg = createRubImg();
//     rubSumImg.classList.add('product__rub-sum-img');
//     headerBasketSubboxPriceBox.appendChild(rubSumImg);

//     return headerBasketSubboxPriceBox;
// }есть

// // Текст "колличество"
// function createHeaderBasketSubboxBottomQuantityText() {
//     const headerBasketSubboxBottomQuantityText = document.createElement('p');
//     headerBasketSubboxBottomQuantityText.classList.add('header__basket-subbox-bottom-quantity-text');
//     headerBasketSubboxBottomQuantityText.textContent = 'Кол-во:';

//     return headerBasketSubboxBottomQuantityText;
// }есть

// // Картинка минус
// function createHeaderBasketSubboxMinusImg() {
//     const headerBasketSubboxMinusImg = document.createElement('img');
//     headerBasketSubboxMinusImg.classList.add('header__basket-subbox-bottom-minus__img');
//     headerBasketSubboxMinusImg.src = 'images/icon/quantity-minus.svg';

//     return headerBasketSubboxMinusImg;
// }есть


// //ДАта аттрибут для кнопки минус
// let dataSubBtn = 1;
// // Кнопка минус
// function createHeaderBasketSubboxBottomMinusBtn() {
//     const headerBasketSubboxBottomMinusBtn = document.createElement('span');
//     headerBasketSubboxBottomMinusBtn.classList.add('header__basket-subbox-bottom-minus-btn');

//     headerBasketSubboxBottomMinusBtn.appendChild(createHeaderBasketSubboxMinusImg());

//     headerBasketSubboxBottomMinusBtn.setAttribute("data-minus-btn-id", dataSubBtn++);

//     headerBasketSubboxBottomMinusBtn.addEventListener('click', () => {

//         const inputProductValue = document.querySelectorAll('.header__basket-subbox-bottom-quantity-input');

//         for (let item of inputProductValue) {
//             if (item.getAttribute("data-input-id") === headerBasketSubboxBottomMinusBtn.getAttribute("data-minus-btn-id")) {
//                 subQuantityOneProduct(item);
//                 showMinusQuantityProduct();
//             }

//         }

//     });есть



//     return headerBasketSubboxBottomMinusBtn;
// }

// //Дата аттрибут для инпута
// let dataAttrInput = 1;
// // Инпут с количеством товаров
// function createHeaderBasketSubboxBottomQuantityInput() {
//     // dataAttrInput++;
//     const headerBasketSubboxBottomQuantityInput = document.createElement('input');
//     headerBasketSubboxBottomQuantityInput.classList.add('header__basket-subbox-bottom-quantity-input');
//     headerBasketSubboxBottomQuantityInput.type = 'text';
//     headerBasketSubboxBottomQuantityInput.value = '1';
//     headerBasketSubboxBottomQuantityInput.setAttribute("data-input-id", dataAttrInput++);

//     return headerBasketSubboxBottomQuantityInput;
// }есть

// // Картинка плюс
// function createHeaderBasketSubboxPlusImg() {
//     const headerBasketSubboxPlusImg = document.createElement('img');
//     headerBasketSubboxPlusImg.classList.add('header__basket-subbox-bottom-plus__img');
//     headerBasketSubboxPlusImg.src = 'images/icon/quantity-plus.svg';

//     return headerBasketSubboxPlusImg;
// }есть

// //Дата аттрибут для кнопки плюс
// let dataPlusBtn = 1;
// // Кнопка плюс
// function createHeaderBasketSubboxBottomPlusBtn() {
//     const headerBasketSubboxBottomPlusBtn = document.createElement('span');
//     headerBasketSubboxBottomPlusBtn.classList.add('header__basket-subbox-bottom-plus-btn');

//     headerBasketSubboxBottomPlusBtn.appendChild(createHeaderBasketSubboxPlusImg());

//     headerBasketSubboxBottomPlusBtn.setAttribute("data-plus-btn-id", dataPlusBtn++);

//     headerBasketSubboxBottomPlusBtn.addEventListener('click', () => {
//         const inputProductValue = document.querySelectorAll('.header__basket-subbox-bottom-quantity-input');

//         for (let item of inputProductValue) {
//             if (item.getAttribute("data-input-id") === headerBasketSubboxBottomPlusBtn.getAttribute("data-plus-btn-id")) {
//                 sumQuantityOneProduct(item);
//                 showPlusQuantityProduct();
//                 sumOneProduct(item);
//             }

//         }
//     });

//     return headerBasketSubboxBottomPlusBtn;
// }есть




// // Обёртка для добавления колличества товара
// function createHeaderBasketSubboxBottomQuantity() {
//     const headerBasketSubboxBottomQuantity = document.createElement('div');
//     headerBasketSubboxBottomQuantity.classList.add('header__basket-subbox-bottom-quantity');

//     headerBasketSubboxBottomQuantity.appendChild(createHeaderBasketSubboxBottomQuantityText());
//     headerBasketSubboxBottomQuantity.appendChild(createHeaderBasketSubboxBottomMinusBtn());
//     headerBasketSubboxBottomQuantity.appendChild(createHeaderBasketSubboxBottomQuantityInput());
//     headerBasketSubboxBottomQuantity.appendChild(createHeaderBasketSubboxBottomPlusBtn());

//     return headerBasketSubboxBottomQuantity;
// }есть

// // Товар в архиве для корзины
// function createHeaderBasketSubboxInArchive() {
//     const headerBasketSubboxInArchive = document.createElement('p');
//     headerBasketSubboxInArchive.classList.add('product__item-archive');
//     headerBasketSubboxInArchive.textContent = 'Товар в архиве';

//     return headerBasketSubboxInArchive;
// }есть

// // Товар под заказ для корзины
// function createHeaderBasketSubboxOnOrder() {
//     const headerBasketSubboxOnOrder = document.createElement('p');
//     headerBasketSubboxOnOrder.classList.add('product__on-order');
//     headerBasketSubboxOnOrder.textContent = 'Под заказ';

//     return headerBasketSubboxOnOrder;
// }есть

// // Товар в наличии для корзины
// function createHeaderBasketSubboxInStok() {
//     const headerBasketSubboxInStok = document.createElement('p');
//     headerBasketSubboxInStok.classList.add('product__in-stock-info-text');
//     headerBasketSubboxInStok.classList.add('active--element');
//     headerBasketSubboxInStok.textContent = 'В наличии';

//     return headerBasketSubboxInStok;
// }есть




// // Обёртка для информации о товаре и о цене
// function createBasketSubboxBottom() {
//     const headerBasketSubboxBottom = document.createElement('div');
//     headerBasketSubboxBottom.classList.add('header__basket-subbox-bottom');

//     headerBasketSubboxBottom.appendChild(createHeaderBasketSubboxPriceBox());
//     headerBasketSubboxBottom.appendChild(createHeaderBasketSubboxInArchive());
//     headerBasketSubboxBottom.appendChild(createHeaderBasketSubboxOnOrder());
//     headerBasketSubboxBottom.appendChild(createHeaderBasketSubboxInStok());
//     headerBasketSubboxBottom.appendChild(createHeaderBasketSubboxBottomQuantity());

//     return headerBasketSubboxBottom;
// }есть



// //Внешняя обёртка продукта
// function createHeaderProductBasketBox() {
//     const headerProductBasketBox = document.createElement('div');
//     headerProductBasketBox.classList.add('header__product-basket-box');

//     headerProductBasketBox.appendChild(createHeaderBasketSubboxTop());
//     headerProductBasketBox.appendChild(createBasketSubboxBottom());

//     return headerProductBasketBox;
// }

// // Основная обёртка карточки
// function headerBasketSubboxItem() {
//     const headerBasketSubboxItem = document.createElement('div');
//     headerBasketSubboxItem.classList.add('header__basket-subbox-item');


//     headerBasketSubboxItem.appendChild(createHeaderBasketProductImgBox());
//     headerBasketSubboxItem.appendChild(createHeaderProductBasketBox());

//     return headerBasketSubboxItem;
// }






//Карточка товара
// function createFavoriteIcon() {
//     //Картинка фейворит
//     const xmlns = "http://www.w3.org/2000/svg";
//     const boxWidth = 25;
//     const boxHeight = 25;

//     const heart = document.createElementNS(xmlns, 'svg');
//     heart.classList.add('heart');
//     heart.setAttributeNS(null, 'viewBox', '0 0 ' + boxWidth + ' ' + boxHeight);
//     heart.setAttributeNS(null, 'width', boxWidth);
//     heart.setAttributeNS(null, 'height', boxHeight);

//     const heartPath = document.createElementNS(xmlns, 'path');
//     heartPath.setAttributeNS(null, 'd', "M11.9402 3.32855L12.2937 3.68211L12.6473 3.32855L13.6973 2.27855C14.8296 1.14625 16.3654 0.5 17.9812 0.5C19.5951 0.5 21.1244 1.14426 22.2532 2.35366L22.2591 2.35996L22.2652 2.36605C24.6949 4.79579 24.6949 8.67921 22.2652 11.1089L22.2637 11.1104L12.2937 21.1649L2.3238 11.1104L2.3223 11.1089C-0.107434 8.67921 -0.107434 4.79579 2.3223 2.36605L1.96875 2.0125L2.3223 2.36605L2.4098 2.27855C4.75103 -0.0626734 8.62979 -0.0627096 10.9718 2.36001L10.9717 2.36006L10.9777 2.36605L11.9402 3.32855Z");
//     heartPath.setAttributeNS(null, 'fill', "white");
//     heartPath.setAttributeNS(null, 'stroke', 'none');
//     heart.appendChild(heartPath);

//     heartPath.addEventListener('click', (e) => {
//         changeBgHeart(heart);
//     });

//     return heart;
// }


// function createFavoriteIconBox() {
//     //Обёртка картинки фейворит
//     const productImgBoxFavorites = document.createElement('div');
//     productImgBoxFavorites.classList.add('product__img-box-favorites');

//     //Вставляем картинку фейворит в обёртку
//     productImgBoxFavorites.appendChild(createFavoriteIcon());

//     return productImgBoxFavorites;
// }

// function createBgProduct() {
//     //Картинка фона
//     const productImgBoxBg = document.createElement('img');
//     productImgBoxBg.classList.add('product__img-box-bg');
//     productImgBoxBg.src = "../images/bg/bg-01-item.png";

//     return productImgBoxBg;
// }

// function createProductIgm() {
//     //Картинка товара
//     const productImg = document.createElement('img');
//     productImg.classList.add('product__img');
//     productImg.src = "../images/products/product-01.png";

//     return productImg;
// }

// function createProductImgBox() {
//     //Обёртка картинки продукта
//     const productImgBox = document.createElement('div');
//     productImgBox.classList.add('product__img-box');

//     //Добавляем в обёртку картинки товара картинку и фона
//     productImgBox.appendChild(createBgProduct());
//     productImgBox.appendChild(createProductIgm());

//     productImgBox.addEventListener('click', (e) => {
//         showPopup();
//     });

//     return productImgBox;
// }

// function createProductLink() {
//     //Ссылка для перехода
//     const productItemTitle = document.createElement('a');
//     productItemTitle.classList.add('product__item-title');
//     productItemTitle.href = '../product.html';
//     productItemTitle.textContent = 'Поворотная Wi-Fi камера';

//     return productItemTitle;
// }

// function createVenderCode() {
//     //Артикул товара
//     const productVenderCode = document.createElement('p');
//     productVenderCode.classList.add('product__vendor-code');
//     productVenderCode.textContent = 'Арт.: RV-3416';

//     return productVenderCode;
// }

// function createProductDiscription() {
//     //Описание товара
//     const productDiscription = document.createElement('p');
//     productDiscription.classList.add('product__description');
//     productDiscription.textContent = 'W-Fi поворотная видеокамера 355°, Full HD 1080p, 2 МП, microSD до 128 GB';

//     return productDiscription;
// }


// function createProductInfoWrapper() {
//     //Обёртка для названия, артикула и ссылки
//     const productItemBody = document.createElement('div');
//     productItemBody.classList.add('product__item-body');

//     //Добавляем описание, артикул и ссылку в обёртку
//     productItemBody.appendChild(createProductLink());
//     productItemBody.appendChild(createVenderCode());
//     productItemBody.appendChild(createProductDiscription());

//     return productItemBody;
// }

// function createOldPrice() {
//     //Старая цена товара
//     const productOldPrice = document.createElement('p');
//     productOldPrice.classList.add('product__old-price');
//     productOldPrice.textContent = '5 990 ₽';

//     return productOldPrice;
// }

// function createNewPrice() {
//     //Новая цена товара
//     const productNewPrice = document.createElement('p');
//     productNewPrice.classList.add('product__new-price');
//     productNewPrice.classList.add('product__new-price-link--active');
//     productNewPrice.textContent = '4 990';

//     return productNewPrice;
// }

// function createRubImg() {
//     //Картика валюты рубль
//     const productRubImg = document.createElement('img');
//     productRubImg.classList.add('product__rub-img');
//     productRubImg.src = "../images/icon/rub-img.svg";

//     return productRubImg;
// }

// function createDividingLine() {
//     //Разделительная полоса
//     const dividingLine = document.createElement('span');
//     dividingLine.classList.add('dividing-line');
//     dividingLine.textContent = '/';

//     return dividingLine;
// }

// function createNewPriceSum() {
//     //Общая сумма одного товара
//     const productNewPriceSum = document.createElement('p');
//     productNewPriceSum.classList.add('product__new-price-sum');
//     productNewPriceSum.textContent = '4 990';

//     return productNewPriceSum;
// }

// function createRubSumImg() {
//     //Картика валюты рубль
//     const productRubImg = document.createElement('img');
//     productRubImg.classList.add('product__rub-sum-img');
//     productRubImg.src = "../images/icon/rub-img.svg";

//     return productRubImg;
// }

// function createNewPriceBox() {
//     //Обёртка новой цены товара
//     const productNewPriceBox = document.createElement('div');
//     productNewPriceBox.classList.add('product__new-price-box');

//     productNewPriceBox.appendChild(createNewPrice());
//     productNewPriceBox.appendChild(createRubImg());
//     productNewPriceBox.appendChild(createDividingLine());
//     productNewPriceBox.appendChild(createNewPriceSum());
//     productNewPriceBox.appendChild(createRubSumImg());

//     return productNewPriceBox;
// }

// function createProductPriceInfoBox() {
//     //Обёртка информации о цене
//     const productItemPriceBoxList = document.createElement('div');
//     productItemPriceBoxList.classList.add('product__item-price-box-list');

//     productItemPriceBoxList.appendChild(createOldPrice());
//     productItemPriceBoxList.appendChild(createNewPriceBox());

//     return productItemPriceBoxList;
// }

// function createProductItemArchive() {
//     //Продукт в архиве
//     const productItemArchive = document.createElement('p');
//     productItemArchive.classList.add('product__item-archive');
//     productItemArchive.textContent = 'Товар в архиве';

//     return productItemArchive;
// }

// function createProductOnOrder() {
//     //Продукт под заказ
//     const productOnOrder = document.createElement('p');
//     productOnOrder.classList.add('product__on-order');
//     productOnOrder.textContent = 'Под заказ';

//     return productOnOrder;
// }

// function createProductInStock() {
//     //Продукт в наличии
//     const productInStockInfoText = document.createElement('p');
//     productInStockInfoText.classList.add('product__in-stock-info-text');
//     productInStockInfoText.classList.add('active--element');
//     productInStockInfoText.textContent = 'В наличии';

//     return productInStockInfoText;
// }

// function createBasketBtnText() {
//     //Текст корзину
//     const productImgWrapperTextList = document.createElement('p');
//     productImgWrapperTextList.classList.add('product__img-wrapper-text-list');
//     productImgWrapperTextList.textContent = 'В корзину';

//     return productImgWrapperTextList;
// }

// function createBasketBtnImg() {
//     //Картинка корзины
//     const productImgBasket = document.createElement('img');
//     productImgBasket.classList.add('product__img-basket');
//     productImgBasket.src = '../images/icon/product-basket.svg';

//     return productImgBasket;
// }

// function createBasketBtnWrapper() {
//     //Обёртка кнопки добавить в корзину
//     const productImgBasketWrapper = document.createElement('div');
//     productImgBasketWrapper.classList.add('product__img-basket-wrapper');

//     //Добавляем элементы в обёртку корзины
//     productImgBasketWrapper.appendChild(createBasketBtnText());
//     productImgBasketWrapper.appendChild(createBasketBtnImg());

//     // const obj = createproductCardObj();


//     productImgBasketWrapper.addEventListener('click', () => {
//         for(let item of productCardObjArr) {
//             if (item.inBasket === false) {
//                 item.inBasket = true;
//                 changeBgBasket(productImgBasketWrapper);
//                 addBasketProduct();
//                 addCardSum();
//                 showPlusQuantityProduct();
//                 console.log(productCardObjArr);
//             }
//         }
        
//         // changeBgBasket(productImgBasketWrapper);
//         //     addBasketProduct();
//         //     addCardSum();
//         //     showPlusQuantityProduct();
//         //     console.log(productCardObjArr);

//     });

//     return productImgBasketWrapper;
// }

// function createProductPriceBox() {
//     //Основная обёртка информации о цене
//     const productItemBottomList = document.createElement('div');
//     productItemBottomList.classList.add('product__item-botton-list');

//     productItemBottomList.appendChild(createProductPriceInfoBox());
//     productItemBottomList.appendChild(createProductItemArchive());
//     productItemBottomList.appendChild(createProductOnOrder());
//     productItemBottomList.appendChild(createProductInStock());
//     productItemBottomList.appendChild(createBasketBtnWrapper());

//     return productItemBottomList;
// }

// function createProductInfoBox() {
//     //Обёртка информации и товаре
//     const box = document.createElement('div');
//     box.classList.add('box');

//     //Добавляем обёртку с описанием в основную обёртку описания товара
//     box.appendChild(createProductInfoWrapper());
//     box.appendChild(createProductPriceBox());

//     return box;
// }

// function createProductCards() {

//     //Обёртка товара
//     const productItemBox = document.createElement('div');
//     productItemBox.classList.add('product__item-box');

//     //Добавляем обёртку с картинкой фейворит в основную обёртку
//     productItemBox.appendChild(createFavoriteIconBox());

//     //Добавляем обёртку картинки товара в основную обёртку
//     productItemBox.appendChild(createProductImgBox());
//     productItemBox.appendChild(createProductInfoBox());
//     // createproductCardObj();
//     // productItemBox.id = createproductCardObj.id;

//     // productCardObjArr.push(createproductCardObj(productItemBox));
//     console.log(productCardObjArr);

//     return productItemBox;


// }





//Карточка товара

{/* <div class="product__item-box">
                                    <div class="product__img-box-favorites">
                                        <svg class="heart" width="25" height="22" viewBox="0 0 25 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.9402 3.32855L12.2937 3.68211L12.6473 3.32855L13.6973 2.27855C14.8296 1.14625 16.3654 0.5 17.9812 0.5C19.5951 0.5 21.1244 1.14426 22.2532 2.35366L22.2591 2.35996L22.2652 2.36605C24.6949 4.79579 24.6949 8.67921 22.2652 11.1089L22.2637 11.1104L12.2937 21.1649L2.3238 11.1104L2.3223 11.1089C-0.107434 8.67921 -0.107434 4.79579 2.3223 2.36605L1.96875 2.0125L2.3223 2.36605L2.4098 2.27855C4.75103 -0.0626734 8.62979 -0.0627096 10.9718 2.36001L10.9717 2.36006L10.9777 2.36605L11.9402 3.32855Z"
                                                fill="white" stroke="#007ABE" />
                                        </svg>
                                    </div>
                                    <div class="product__img-box">
                                        <img class="product__img-box-bg" src="images/bg/bg-01-item.png" alt="Фон">
                                        <img class="product__img" src="images/products/product-01.png" alt="Камера">
                                    </div>
                                    <div class="box">
                                        <div class="product__item-body">
                                            <a class="product__item-title" href="product.html">
                                                Поворотная Wi-Fi камера
                                            </a>
                                            <p class="product__vendor-code">
                                                Арт.: RV-3416
                                            </p>
                                            <p class="product__description">
                                                W-Fi поворотная видеокамера 355°, Full HD 1080p, 2 МП, microSD до 128 GB
                                            </p>
                                        </div>
                                        <div class="product__item-botton-list">
                                            <div class="product__item-price-box-list">
                                                <p class="product__old-price">
                                                    5 990 ₽
                                                </p>
                                                <div class="product__new-price-box">
                                                    <p class="product__new-price product__new-price-link--active">
                                                        4 990
                                                    </p>
                                                    <img class="product__rub-img" src="images/icon/rub-img.svg"
                                                        alt="Рубль">
                                                    <span class="dividing-line">/</span>
                                                    <p class="product__new-price-sum">
                                                        4 990
                                                    </p>
                                                    <img class="product__rub-sum-img" src="images/icon/rub-img.svg"
                                                        alt="Рубль">
                                                </div>
                                            </div>
                                            <p class="product__item-archive">
                                                Товар в архиве
                                            </p>
                                            <p class="product__on-order">
                                                Под заказ
                                            </p>
                                            <p class="product__in-stock-info-text active--element">
                                                В наличии
                                            </p>
                                            <div class="product__img-basket-wrapper">
                                                <p class="product__img-wrapper-text-list">
                                                    В корзину
                                                </p>
                                                <img class="product__img-basket" src="images/icon/product-basket.svg"
                                                    alt="Корзина">
                                            </div>
                                        </div>
                                    </div>
                                // </div> */}













                                // const newProductRightSideBarBasket = document.createElement('div');



// newProductRightSideBarBasket.innerHTML = `  
// <div class="header__basket-subbox-item">
// // <div class="header__basket-product-img-box">
// //     <img class="product__img-box-bg" src="images/bg/bg-01-item.png"
// //         alt="Фон">
// //     <img class="product__img" src="images/products/product-013.png"
// //         alt="Камера">
// // </div>
// // <div class="header__product-basket-box">
//     // <div class="header__basket-subbox-top">
//         // <div class="header__basket-subbox-product-info">
//             // <h3 class="header__basket-subbox-product-name">
//             //     Поворотная Wi-Fi камера
//             // </h3>
//         //     <p class="header__basket-subbox-product-article">
//         //         Арт.: RV-3489
//         //     </p>
//         // </div>
//         <ul class="header__basket-subbox-list">
//             <li class="header__basket-subbox-list-item">
//                 <div class="header__basket-subbox-list-link" href="#">
//                     <img class="header__basket-subbox-link-img"
//                         src="images/icon/basket-subbox-copy.svg"
//                         alt="Копировать">
//                 </div>
//             </li>
//             <li class="header__basket-subbox-list-item">
//                 <div class="header__basket-subbox-list-link" href="#">
//                     <svg width="25" height="22" viewBox="0 0 25 22"
//                         fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             d="M11.9402 3.32855L12.2937 3.68211L12.6473 3.32855L13.6973 2.27855C14.8296 1.14625 16.3654 0.5 17.9812 0.5C19.5951 0.5 21.1244 1.14426 22.2532 2.35366L22.2591 2.35996L22.2652 2.36605C24.6949 4.79579 24.6949 8.67921 22.2652 11.1089L22.2637 11.1104L12.2937 21.1649L2.3238 11.1104L2.3223 11.1089C-0.107434 8.67921 -0.107434 4.79579 2.3223 2.36605L1.96875 2.0125L2.3223 2.36605L2.4098 2.27855C4.75103 -0.0626734 8.62979 -0.0627096 10.9718 2.36001L10.9717 2.36006L10.9777 2.36605L11.9402 3.32855Z"
//                             fill="white" stroke="#007ABE" />
//                     </svg>
//                 </div>
//             </li>
//             <li class="header__basket-subbox-list-item">
//                 <div class="header__basket-subbox-list-link delete-card-img-wrapper" href="#">
//                     <img class="header__basket-subbox-link-img delete-card-img"
//                         src="images/icon/basket-subbox-delete.svg"
//                         alt="Удалить">
//                 </div>
//             </li>
//         </ul>
//     </div>
//     <div class="header__basket-subbox-bottom">
//         <div class="header__basket-subbox-price-box">
//             <p class="header__basket-subbox-price">
//                 4 990
//             </p>
//             <img class="header__basket-subbox-rub-img"
//                 src="images/icon/rub-img.svg" alt="Рубль">
//             <span class="header__basket-subbox-dividing-line">/</span>
//             <p
//                 class="header__basket-subbox-price header__basket-subbox-sum-price">
//                 4 990
//             </p>
//             <img class="header__basket-subbox-rub-img"
//                 src="images/icon/rub-img.svg" alt="Рубль">
//         </div>
//         <p class="product__item-archive active-item-element">
//             Товар в архиве
//         </p>
//         <p class="product__on-order active-item-element">
//             Под заказ
//         </p>
//         <div class="product__in-stock-box">
//             <p class="product__in-stock-info-text">
//                 В наличии
//             </p>
//         </div>
//         <div class="header__basket-subbox-bottom-quantity">
//             <p class="header__basket-subbox-bottom-quantity-text">
//                 Кол-во:
//             </p>
//             <span class="header__basket-subbox-bottom-minus-btn">
//                 <img class="header__basket-subbox-bottom-minus__img"
//                     src="images/icon/quantity-minus.svg" alt="Кнопка минус">
//             </span>
//             <input class="header__basket-subbox-bottom-quantity-input"
//                 type="text" value="1">
//             <span class="header__basket-subbox-bottom-plus-btn">
//                 <img class="header__basket-subbox-bottom-minus-plus"
//                     src="images/icon/quantity-plus.svg" alt="Кнопка плюс">
//             </span>
//         </div>
//     </div>
// </div>
// </div>`;

// const cardTest = newProductRightSideBarBasket.innerHTML;














//===================================================================================
//Функции создания карточки для корзины
//===================================================================================

//Функция создания фоновой картинки

// function createProductImgBoxBg() {
//     const productImgBoxBg = document.createElement('img');
//     productImgBoxBg.classList.add('product__img-box-bg');
//     productImgBoxBg.src = '../images/bg/bg-01-item.png';

//     return productImgBoxBg;
// }

// //Функция создания картинки товара
// function createProductImg() {
//     const productImg = document.createElement('img');
//     productImg.classList.add('product__img');
//     productImg.src = '../images/products/product-013.png';

//     return productImg;
// }

// //Функция создания обёртки для картинки и фона
// function createHeaderBasketProductImgBox() {
//     const headerBasketProductImgBox = document.createElement('div');
//     headerBasketProductImgBox.classList.add('header__basket-product-img-box');

//     headerBasketProductImgBox.appendChild(createProductImgBoxBg());
//     headerBasketProductImgBox.appendChild(createProductImg());

//     return headerBasketProductImgBox;
// }

// //Функция создания тайтла ссылки
// function createHeaderBasketSubboxProductName() {
//     const headerBasketSubboxProductName = document.createElement('a');
//     headerBasketSubboxProductName.classList.add('header__basket-subbox-product-name');
//     headerBasketSubboxProductName.src = '../product.html';
//     headerBasketSubboxProductName.textContent = 'Поворотная Wi-Fi камера';

//     return headerBasketSubboxProductName;
// }


// // Создание Артикула товара
// function createHeaderBasketSubboxProductArticle() {
//     const headerBasketSubboxProductArticle = document.createElement('p');
//     headerBasketSubboxProductArticle.classList.add('header__basket-subbox-product-article');
//     headerBasketSubboxProductArticle.textContent = 'Арт.: RV-3489';

//     return headerBasketSubboxProductArticle;
// }

// //Функция содания внутренней обёртки топа 
// function createHeaderBasketSubboxProductInfo() {
//     const headerBasketSubboxProductInfo = document.createElement('div');
//     headerBasketSubboxProductInfo.classList.add('header__basket-subbox-product-info');

//     headerBasketSubboxProductInfo.appendChild(createHeaderBasketSubboxProductName());
//     headerBasketSubboxProductInfo.appendChild(createHeaderBasketSubboxProductArticle());

//     return headerBasketSubboxProductInfo;
// }

// // Создаём картинки для элементов li
// // Картинка копировать
// function createheaderBasketSubboxListLinkImgCopy() {
//     const headerBasketSubboxListLinkImgCopy = document.createElement('img');
//     headerBasketSubboxListLinkImgCopy.classList.add('header__basket-subbox-link-img');
//     headerBasketSubboxListLinkImgCopy.src = 'images/icon/basket-subbox-copy.svg';

//     return headerBasketSubboxListLinkImgCopy;
// }


// // Картинка для кнопки в избранное для товара в корзине
// function createHeaderBasketSubboxListLinkImgFavorite() {
//     //Картинка фейворит
//     const xmlns = "http://www.w3.org/2000/svg";
//     const boxWidth = 25;
//     const boxHeight = 25;

//     const heart = document.createElementNS(xmlns, 'svg');
//     heart.classList.add('heart');
//     heart.setAttributeNS(null, 'viewBox', '0 0 ' + boxWidth + ' ' + boxHeight);
//     heart.setAttributeNS(null, 'width', boxWidth);
//     heart.setAttributeNS(null, 'height', boxHeight);

//     const heartPath = document.createElementNS(xmlns, 'path');
//     heartPath.setAttributeNS(null, 'd', "M11.9402 3.32855L12.2937 3.68211L12.6473 3.32855L13.6973 2.27855C14.8296 1.14625 16.3654 0.5 17.9812 0.5C19.5951 0.5 21.1244 1.14426 22.2532 2.35366L22.2591 2.35996L22.2652 2.36605C24.6949 4.79579 24.6949 8.67921 22.2652 11.1089L22.2637 11.1104L12.2937 21.1649L2.3238 11.1104L2.3223 11.1089C-0.107434 8.67921 -0.107434 4.79579 2.3223 2.36605L1.96875 2.0125L2.3223 2.36605L2.4098 2.27855C4.75103 -0.0626734 8.62979 -0.0627096 10.9718 2.36001L10.9717 2.36006L10.9777 2.36605L11.9402 3.32855Z");
//     heartPath.setAttributeNS(null, 'fill', "white");
//     heartPath.setAttributeNS(null, 'stroke', '#007ABE');
//     heart.appendChild(heartPath);

//     heartPath.addEventListener('click', (e) => {
//         changeBgHeart(heart);
//     });

//     return heart;
// }

// // Картинка фейворит
// // createFavoriteIcon()

// function createHeaderBasketSubboxListLinkImgDelete() {
//     const headerBasketSubboxListLinkImgDelete = document.createElement('img');
//     headerBasketSubboxListLinkImgDelete.classList.add('header__basket-subbox-link-img');
//     headerBasketSubboxListLinkImgDelete.src = 'images/icon/basket-subbox-delete.svg';

//     return headerBasketSubboxListLinkImgDelete;
// }

// // 
// // Создаём обёртку для картинок которыепомещаем в элементы li
// function createheaderBasketSubboxListLink() {
//     const headerBasketSubboxListLink = document.createElement('div');
//     headerBasketSubboxListLink.classList.add('.header__basket-subbox-list-link');

//     return headerBasketSubboxListLink;
// }

// //
// //Создаём элементы кнопок li 
// function createHeaderBasketSubboxListItemCopy() {
//     const createHeaderBasketSubboxListItemCopy = document.createElement('li');
//     createHeaderBasketSubboxListItemCopy.classList.add('header__basket-subbox-list-item');

//     const copyImg = createheaderBasketSubboxListLink();
//     copyImg.appendChild(createheaderBasketSubboxListLinkImgCopy());

//     createHeaderBasketSubboxListItemCopy.appendChild(copyImg);

//     return createHeaderBasketSubboxListItemCopy;
// }

// function createHeaderBasketSubboxListItemFavorite() {
//     const createHeaderBasketSubboxListItemFavoryte = document.createElement('li');
//     createHeaderBasketSubboxListItemFavoryte.classList.add('header__basket-subbox-list-item');

//     const favoryteImg = createheaderBasketSubboxListLink();
//     favoryteImg.appendChild(createHeaderBasketSubboxListLinkImgFavorite());

//     createHeaderBasketSubboxListItemFavoryte.appendChild(favoryteImg);

//     return createHeaderBasketSubboxListItemFavoryte;
// }




// function createHeaderBasketSubboxListItemDelete() {
//     const createHeaderBasketSubboxListItemDelete = document.createElement('li');
//     createHeaderBasketSubboxListItemDelete.classList.add('header__basket-subbox-list-item');

//     const deleteImg = createheaderBasketSubboxListLink();
//     deleteImg.appendChild(createHeaderBasketSubboxListLinkImgDelete());

//     createHeaderBasketSubboxListItemDelete.appendChild(deleteImg);

//     return createHeaderBasketSubboxListItemDelete;
// }


// //Создание ul элемента для кнопок
// function createHeaderBasketSubboxList() {
//     const headerBasketSubboxList = document.createElement('ul');
//     headerBasketSubboxList.classList.add('header__basket-subbox-list');

//     headerBasketSubboxList.appendChild(createHeaderBasketSubboxListItemCopy());
//     headerBasketSubboxList.appendChild(createHeaderBasketSubboxListItemFavorite());
//     headerBasketSubboxList.appendChild(createHeaderBasketSubboxListItemDelete());



//     return headerBasketSubboxList;
// }


// //Обёртка топ продукта
// function createHeaderBasketSubboxTop() {
//     const headerBasketSubboxTop = document.createElement('div');
//     headerBasketSubboxTop.classList.add('header__basket-subbox-top');

//     headerBasketSubboxTop.appendChild(createHeaderBasketSubboxProductInfo());
//     headerBasketSubboxTop.appendChild(createHeaderBasketSubboxList());

//     return headerBasketSubboxTop;
// }


// // Цена товара
// function createHeaderBasketSubboxPrice() {
//     const headerBasketSubboxPrice = document.createElement('p');
//     headerBasketSubboxPrice.classList.add('header__basket-subbox-price');
//     headerBasketSubboxPrice.textContent = '4 990';

//     return headerBasketSubboxPrice;
// }

// // Черта для разделение цены от суммы
// function createHeadreBasketSubboxDividingLine() {
//     const headreBasketSubboxDividingLine = document.createElement('span');
//     headreBasketSubboxDividingLine.classList.add('header__basket-subbox-dividing-line');
//     headreBasketSubboxDividingLine.textContent = '/';

//     return headreBasketSubboxDividingLine;
// }


// // Создание элемента для суммы одного товара
// function createHeaderBasketSubboxPriceSum() {
//     const headerBasketSubboxPriceSum = document.createElement('p');
//     headerBasketSubboxPriceSum.classList.add('header__basket-subbox-price');
//     headerBasketSubboxPriceSum.classList.add('header__basket-subbox-sum-price');
//     headerBasketSubboxPriceSum.textContent = '0';

//     return headerBasketSubboxPriceSum;
// }


// // Обёртка для цены
// function createHeaderBasketSubboxPriceBox() {
//     const headerBasketSubboxPriceBox = document.createElement('diV');
//     headerBasketSubboxPriceBox.classList.add('header__basket-subbox-price-box');

//     headerBasketSubboxPriceBox.appendChild(createHeaderBasketSubboxPrice());
//     headerBasketSubboxPriceBox.appendChild(createRubImg());
//     headerBasketSubboxPriceBox.appendChild(createHeadreBasketSubboxDividingLine());
//     headerBasketSubboxPriceBox.appendChild(createHeaderBasketSubboxPriceSum());
//     const rubSumImg = createRubImg();
//     rubSumImg.classList.add('product__rub-sum-img');
//     headerBasketSubboxPriceBox.appendChild(rubSumImg);

//     return headerBasketSubboxPriceBox;
// }

// // Текст "колличество"
// function createHeaderBasketSubboxBottomQuantityText() {
//     const headerBasketSubboxBottomQuantityText = document.createElement('p');
//     headerBasketSubboxBottomQuantityText.classList.add('header__basket-subbox-bottom-quantity-text');
//     headerBasketSubboxBottomQuantityText.textContent = 'Кол-во:';

//     return headerBasketSubboxBottomQuantityText;
// }

// // Картинка минус
// function createHeaderBasketSubboxMinusImg() {
//     const headerBasketSubboxMinusImg = document.createElement('img');
//     headerBasketSubboxMinusImg.classList.add('header__basket-subbox-bottom-minus__img');
//     headerBasketSubboxMinusImg.src = 'images/icon/quantity-minus.svg';

//     return headerBasketSubboxMinusImg;
// }


// //ДАта аттрибут для кнопки минус
// let dataSubBtn = 1;
// // Кнопка минус
// function createHeaderBasketSubboxBottomMinusBtn() {
//     const headerBasketSubboxBottomMinusBtn = document.createElement('span');
//     headerBasketSubboxBottomMinusBtn.classList.add('header__basket-subbox-bottom-minus-btn');

//     headerBasketSubboxBottomMinusBtn.appendChild(createHeaderBasketSubboxMinusImg());

//     headerBasketSubboxBottomMinusBtn.setAttribute("data-minus-btn-id", dataSubBtn++);

//     headerBasketSubboxBottomMinusBtn.addEventListener('click', () => {

//         const inputProductValue = document.querySelectorAll('.header__basket-subbox-bottom-quantity-input');

//         for (let item of inputProductValue) {
//             if (item.getAttribute("data-input-id") === headerBasketSubboxBottomMinusBtn.getAttribute("data-minus-btn-id")) {
//                 subQuantityOneProduct(item);
//                 showMinusQuantityProduct();
//             }

//         }

//     });



//     return headerBasketSubboxBottomMinusBtn;
// }

// //Дата аттрибут для инпута
// let dataAttrInput = 1;
// // Инпут с количеством товаров
// function createHeaderBasketSubboxBottomQuantityInput() {
//     // dataAttrInput++;
//     const headerBasketSubboxBottomQuantityInput = document.createElement('input');
//     headerBasketSubboxBottomQuantityInput.classList.add('header__basket-subbox-bottom-quantity-input');
//     headerBasketSubboxBottomQuantityInput.type = 'text';
//     headerBasketSubboxBottomQuantityInput.value = '1';
//     headerBasketSubboxBottomQuantityInput.setAttribute("data-input-id", dataAttrInput++);

//     return headerBasketSubboxBottomQuantityInput;
// }

// // Картинка плюс
// function createHeaderBasketSubboxPlusImg() {
//     const headerBasketSubboxPlusImg = document.createElement('img');
//     headerBasketSubboxPlusImg.classList.add('header__basket-subbox-bottom-plus__img');
//     headerBasketSubboxPlusImg.src = 'images/icon/quantity-plus.svg';

//     return headerBasketSubboxPlusImg;
// }

// //Дата аттрибут для кнопки плюс
// let dataPlusBtn = 1;
// // Кнопка плюс
// function createHeaderBasketSubboxBottomPlusBtn() {
//     const headerBasketSubboxBottomPlusBtn = document.createElement('span');
//     headerBasketSubboxBottomPlusBtn.classList.add('header__basket-subbox-bottom-plus-btn');

//     headerBasketSubboxBottomPlusBtn.appendChild(createHeaderBasketSubboxPlusImg());

//     headerBasketSubboxBottomPlusBtn.setAttribute("data-plus-btn-id", dataPlusBtn++);

//     headerBasketSubboxBottomPlusBtn.addEventListener('click', () => {
//         const inputProductValue = document.querySelectorAll('.header__basket-subbox-bottom-quantity-input');

//         for (let item of inputProductValue) {
//             if (item.getAttribute("data-input-id") === headerBasketSubboxBottomPlusBtn.getAttribute("data-plus-btn-id")) {
//                 sumQuantityOneProduct(item);
//                 showPlusQuantityProduct();
//                 sumOneProduct(item);
//             }

//         }
//     });

//     return headerBasketSubboxBottomPlusBtn;
// }




// // Обёртка для добавления колличества товара
// function createHeaderBasketSubboxBottomQuantity() {
//     const headerBasketSubboxBottomQuantity = document.createElement('div');
//     headerBasketSubboxBottomQuantity.classList.add('header__basket-subbox-bottom-quantity');

//     headerBasketSubboxBottomQuantity.appendChild(createHeaderBasketSubboxBottomQuantityText());
//     headerBasketSubboxBottomQuantity.appendChild(createHeaderBasketSubboxBottomMinusBtn());
//     headerBasketSubboxBottomQuantity.appendChild(createHeaderBasketSubboxBottomQuantityInput());
//     headerBasketSubboxBottomQuantity.appendChild(createHeaderBasketSubboxBottomPlusBtn());

//     return headerBasketSubboxBottomQuantity;
// }

// // Товар в архиве для корзины
// function createHeaderBasketSubboxInArchive() {
//     const headerBasketSubboxInArchive = document.createElement('p');
//     headerBasketSubboxInArchive.classList.add('product__item-archive');
//     headerBasketSubboxInArchive.textContent = 'Товар в архиве';

//     return headerBasketSubboxInArchive;
// }

// // Товар под заказ для корзины
// function createHeaderBasketSubboxOnOrder() {
//     const headerBasketSubboxOnOrder = document.createElement('p');
//     headerBasketSubboxOnOrder.classList.add('product__on-order');
//     headerBasketSubboxOnOrder.textContent = 'Под заказ';

//     return headerBasketSubboxOnOrder;
// }

// // Товар в наличии для корзины
// function createHeaderBasketSubboxInStok() {
//     const headerBasketSubboxInStok = document.createElement('p');
//     headerBasketSubboxInStok.classList.add('product__in-stock-info-text');
//     headerBasketSubboxInStok.classList.add('active--element');
//     headerBasketSubboxInStok.textContent = 'В наличии';

//     return headerBasketSubboxInStok;
// }




// // Обёртка для информации о товаре и о цене
// function createBasketSubboxBottom() {
//     const headerBasketSubboxBottom = document.createElement('div');
//     headerBasketSubboxBottom.classList.add('header__basket-subbox-bottom');

//     headerBasketSubboxBottom.appendChild(createHeaderBasketSubboxPriceBox());
//     headerBasketSubboxBottom.appendChild(createHeaderBasketSubboxInArchive());
//     headerBasketSubboxBottom.appendChild(createHeaderBasketSubboxOnOrder());
//     headerBasketSubboxBottom.appendChild(createHeaderBasketSubboxInStok());
//     headerBasketSubboxBottom.appendChild(createHeaderBasketSubboxBottomQuantity());

//     return headerBasketSubboxBottom;
// }



// //Внешняя обёртка продукта
// function createHeaderProductBasketBox() {
//     const headerProductBasketBox = document.createElement('div');
//     headerProductBasketBox.classList.add('header__product-basket-box');

//     headerProductBasketBox.appendChild(createHeaderBasketSubboxTop());
//     headerProductBasketBox.appendChild(createBasketSubboxBottom());

//     return headerProductBasketBox;
// }

// // Основная обёртка карточки
// function headerBasketSubboxItem() {
//     const headerBasketSubboxItem = document.createElement('div');
//     headerBasketSubboxItem.classList.add('header__basket-subbox-item');


//     headerBasketSubboxItem.appendChild(createHeaderBasketProductImgBox());
//     headerBasketSubboxItem.appendChild(createHeaderProductBasketBox());

//     return headerBasketSubboxItem;
// }






















//pop-up element


{/* <div class="pop-up">
<div class="pop-up__wrapper">
    <div class="pop-up__box">
        <div class="pop-up__title-box">
            <h2 class="pop-up__title">
                Быстрый просмотр
            </h2>
            <button class="pop-up__close-btn">

            </button>
        </div>
        <div class="pop-up__info-box">
            <div class="pop-up__info-left-box">
                <div class="pop-up__slider-box">
                    <div class="pop-up__slider-big">
                        <div class="pop-up__slider-big-item">
                            <img class="pop-up__big-bg" src="images/bg/bg-02-item.png" alt="Фон">
                            <img class="pop-up__big-img" src="images/products/product-02.png" alt="Камера">
                            <img class="pop-up__favorite-product-img" src="images/icon/product-favorites.svg"
                                alt="Понравившееся">
                        </div>
                        <div class="pop-up__slider-big-item">
                            <img class="pop-up__big-bg" src="images/bg/bg-03-item.png" alt="Фон">
                            <img class="pop-up__big-img" src="images/products/product-03.png" alt="Камера">
                            <img class="pop-up__favorite-product-img" src="images/icon/product-favorites.svg"
                                alt="Понравившееся">
                        </div>
                        <div class="pop-up__slider-big-item">
                            <img class="pop-up__big-bg" src="images/bg/bg-04-item.png" alt="Фон">
                            <img class="pop-up__big-img" src="images/products/product-04.png" alt="Камера">
                            <img class="pop-up__favorite-product-img" src="images/icon/product-favorites.svg"
                                alt="Понравившееся">
                        </div>
                        <div class="pop-up__slider-big-item">
                            <img class="pop-up__big-bg" src="images/bg/bg-05-item.png" alt="Фон">
                            <img class="pop-up__big-img" src="images/products/product-05.png" alt="Камера">
                            <img class="pop-up__favorite-product-img" src="images/icon/product-favorites.svg"
                                alt="Понравившееся">
                        </div>
                    </div>
                    <div class="pop-up__slider-thumb">
                        <div class="pop-up__slider-thumb-item">
                            <img class="pop-up__slider-bg" src="images/bg/bg-02-item.png" alt="Фон">
                            <img class="pop-up__slider-img" src="images/products/product-02.png" alt="Камера">
                        </div>
                        <div class="pop-up__slider-thumb-item">
                            <img class="pop-up__slider-bg" src="images/bg/bg-03-item.png" alt="Фон">
                            <img class="pop-up__slider-img" src="images/products/product-03.png" alt="Камера">
                        </div>
                        <div class="pop-up__slider-thumb-item">
                            <img class="pop-up__slider-bg" src="images/bg/bg-04-item.png" alt="Фон">
                            <img class="pop-up__slider-img" src="images/products/product-04.png" alt="Камера">
                        </div>
                        <div class="pop-up__slider-thumb-item">
                            <img class="pop-up__slider-bg" src="images/bg/bg-05-item.png" alt="Фон">
                            <img class="pop-up__slider-img" src="images/products/product-05.png" alt="Камера">
                        </div>
                    </div>
                </div>
                <div class="pop-up__quantity-box">
                    <div class="pop-up__info-inner">
                        <p class="product__item-archive active-item-element">
                            Товар в архиве
                        </p>
                        <p class="product__on-order active-item-element">
                            Под заказ
                        </p>
                        <div class="product__in-stock-box">
                            <p class="product__in-stock-info-text">
                                В наличии
                            </p>
                        </div>
                    </div>
                    <div class="pop-up__price-box-info">
                        <div class="pop-up__price-wrapper">
                            <div class="pop-up__price-box">
                                <p class="pop-up__old-price">
                                    2 190
                                </p>
                                <img class="pop-up__old-price-rub" src="images/icon/pop-up-old-price-rub.svg"
                                    alt="Рубль">
                            </div>
                            <div class="pop-up__price-box">
                                <p class="pop-up__new-price">
                                    3 190
                                </p>
                                <img class="pop-up__new-price-rub" src="images/icon/rub-img.svg" alt="Рубль">
                            </div>
                        </div>
                        <div class="pop-up__quantity-wrapper">
                            <div class="pop-up__bottom-quantity">
                                <p class="header__basket-subbox-bottom-quantity-text">
                                    Кол-во:
                                </p>
                                <span class="header__basket-subbox-bottom-minus-btn">
                                    <img class="header__basket-subbox-bottom-minus__img"
                                        src="images/icon/quantity-minus.svg" alt="Кнопка минус">
                                </span>
                                <input class="header__basket-subbox-bottom-quantity-input" type="text"
                                    value="1">
                                <span class="header__basket-subbox-bottom-plus-btn">
                                    <img class="header__basket-subbox-bottom-minus-plus"
                                        src="images/icon/quantity-plus.svg" alt="Кнопка плюс">
                                </span>
                            </div>
                            <button class="pop-up__in-basket-btn">
                                В Корзину
                                <img class="pop-up__in-basket-btn-img" src="images/icon/product-basket.svg"
                                    alt="Корзина">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pop-up__info-right-box">
                <div class="pop-up__info-right-box-wrapper">
                    <h3 class="pop-up__info-right-title">
                        Поворотная Wi-Fi камера
                    </h3>
                    <p class="pop-up__info-right-article">
                        Арт.: RV-3441
                    </p>
                    <div class="pop-up__right-description-box">
                        <h3 class="pop-up__right-description-title">
                            Описание
                        </h3>
                        <p class="pop-up__right-description-text">
                            W-Fi поворотная видеокамера 355°,
                            Full HD 1080p, 2 МП, microSD до 128 GB
                            Компактная поворотная видеокамера подходит для видеонаблюдения за домом, дачей и
                            офисом.
                            Видеонаблюдение со смартфона из любой точки мира
                            Просматривать видео в реальном времени можно 24 часа в сутки с помощью мобильного
                            приложения Rubetek.
                        </p>
                    </div>
                    <div class="pop-up__right-specifications-box">
                        <h3 class="pop-up__right-description-title">
                            Характеристики
                        </h3>
                        <div class="pop-up__right-specifications-info">
                            <div class="pop-up__right-specifications-odd-box">
                                <p class="pop-up__right-specifications-text">
                                    Модель
                                </p>
                                <p class="pop-up__right-specifications-text">
                                    RV-3416
                                </p>
                            </div>
                            <div class="pop-up__right-specifications-even-box">
                                <p class="pop-up__right-specifications-text">
                                    Тип камеры
                                </p>
                                <p class="pop-up__right-specifications-text">
                                    IP/поворотная
                                </p>
                            </div>
                            <div class="pop-up__right-specifications-odd-box">
                                <p class="pop-up__right-specifications-text">
                                    Качество съемки
                                </p>
                                <p class="pop-up__right-specifications-text">
                                    Full HD 1080p
                                </p>
                            </div>
                            <div class="pop-up__right-specifications-even-box">
                                <p class="pop-up__right-specifications-text">
                                    Разрешение
                                </p>
                                <p class="pop-up__right-specifications-text">
                                    1920х1080 пикселей
                                </p>
                            </div>
                            <div class="pop-up__right-specifications-odd-box">
                                <p class="pop-up__right-specifications-text">
                                    Матрица
                                </p>
                                <p class="pop-up__right-specifications-text">
                                    2 Мпикс
                                </p>
                            </div>
                            <div class="pop-up__right-specifications-even-box">
                                <p class="pop-up__right-specifications-text">
                                    Горизонтальный угол обзора
                                </p>
                                <p class="pop-up__right-specifications-text">
                                    80
                                    <sup class="degress-box">o</sup>
                                </p>
                            </div>
                            <div class="pop-up__right-specifications-odd-box">
                                <p class="pop-up__right-specifications-text">
                                    Матрица
                                </p>
                                <p class="pop-up__right-specifications-text">
                                    2 Мпикс
                                </p>
                            </div>
                            <div class="pop-up__right-specifications-even-box">
                                <p class="pop-up__right-specifications-text">
                                    Горизонтальный угол обзора
                                </p>
                                <p class="pop-up__right-specifications-text">
                                    80
                                    <sup class="degress-box">o</sup>
                                </p>
                            </div>
                            <div class="pop-up__right-specifications-odd-box">
                                <p class="pop-up__right-specifications-text">
                                    Матрица
                                </p>
                                <p class="pop-up__right-specifications-text">
                                    2 Мпикс
                                </p>
                            </div>
                            <div class="pop-up__right-specifications-even-box">
                                <p class="pop-up__right-specifications-text">
                                    Горизонтальный угол обзора
                                </p>
                                <p class="pop-up__right-specifications-text">
                                    80
                                    <sup class="degress-box">o</sup>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div> */}
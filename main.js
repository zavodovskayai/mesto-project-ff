(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-33",headers:{authorization:"8a49312d-7cbe-4345-b3c7-5ce0d17ffcb2","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function n(){return fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t)}function r(n,r,o){r.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)}(n).then((function(e){r.classList.remove("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){return console.error("Ошибка при удалении лайка: ".concat(e))})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}(n).then((function(e){r.classList.add("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){return console.error("Ошибка при добавлении лайка: ".concat(e))}))}function o(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)})(n).then((function(){r.remove()})).catch((function(e){return console.error("Ошибка при удалении карточки: ".concat(e))}))}function c(e,t){var n=t.handleDeleteClick,r=t.handleLikeClick,o=t.handleImageClick,c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),a=c.querySelector(".card__image"),i=c.querySelector(".card__title"),u=c.querySelector(".card__like-button"),l=c.querySelector(".card__delete-button"),s=c.querySelector(".card__like-count");return a.src=e.link,a.alt=e.name,i.textContent=e.name,s.textContent=e.likes.length,e.likes.some((function(e){return e._id===userId}))&&u.classList.add("card__like-button_is-active"),u.addEventListener("click",(function(){r(e._id,u,s)})),l.addEventListener("click",(function(){n(e._id,c)})),a.addEventListener("click",(function(){o(e)})),c}function a(e){e.classList.add("popup_is-animated"),document.addEventListener("keydown",u),setTimeout((function(){e.classList.add("popup_is-opened")}),0)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u),e.addEventListener("transitionend",(function t(){e.classList.remove("popup_is-animated"),e.removeEventListener("transitionend",t)}))}function u(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&i(t)}}function l(e){e.addEventListener("mousedown",(function(t){t.target===e&&i(e)}))}function s(e){e.querySelector(".popup__close").addEventListener("click",(function(){return i(e)}))}var d={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function p(e,t,n,r){var o=e.querySelector(".popup__error_type_".concat(t.name));o&&(t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass))}function f(e,t,n){var r=e.querySelector(".popup__error_type_".concat(t.name));r&&(t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass))}function _(e,t,n){e.some((function(e){return!e.validity.valid}))?(t.classList.add(n.inactiveButtonClass),t.disabled=!0):(t.classList.remove(n.inactiveButtonClass),t.disabled=!1)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var h=document.querySelector(".places__list"),y=document.querySelector(".profile__edit-button"),v=document.querySelector(".popup_type_edit"),S=v.querySelector(".popup__form"),b=S.querySelector(".popup__input_type_name"),k=S.querySelector(".popup__input_type_description"),L=document.querySelector(".profile__title"),C=document.querySelector(".profile__description"),q=document.querySelector(".profile__add-button"),g=document.querySelector(".popup_type_new-card"),E=g.querySelector(".popup__form"),x=E.querySelector(".popup__input_type_card-name"),A=E.querySelector(".popup__input_type_url"),U=document.querySelector(".popup_type_image"),w=U.querySelector(".popup__image"),I=U.querySelector(".popup__caption"),T=document.querySelector(".profile__image");function j(e){w.src=e.link,w.alt=e.name,I.textContent=e.name,a(U)}function D(e){e.forEach((function(e){var t=c(e,{handleImageClick:j,handleLikeClick:r,handleDeleteClick:o});h.append(t)}))}y.addEventListener("click",(function(){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){f(e,n,t)})),_(n,r,t)}(S,d),b.value=L.textContent,k.value=C.textContent,a(v)})),l(v),l(g),l(U),s(v),s(g),s(U),S.addEventListener("submit",(function(n){var r,o;n.preventDefault(),(r=b.value,o=k.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then(t)).then((function(e){L.textContent=e.name,C.textContent=e.about,i(document.querySelector(".popup_type_edit"))})).catch((function(e){return console.error("Ошибка при обновлении профиля: ".concat(e))}))})),q.addEventListener("click",(function(){a(g)})),E.addEventListener("submit",(function(n){var a,u;n.preventDefault(),(a=x.value,u=A.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:a,link:u})}).then(t)).then((function(e){var t=c(e,{handleImageClick:j,handleLikeClick:r,handleDeleteClick:o});h.prepend(t),i(document.querySelector(".popup_type_new-card")),E.reset()})).catch((function(e){return console.error("Ошибка при добавлении карточки: ".concat(e))}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);_(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){var r=n[t.name];r?t.validity.valid?f(e,t,n):0===t.value.length?p(e,t,"Вы пропустили это поле",n):t.value.length<r.minLength?p(e,t,"Минимальное число символов: ".concat(r.minLength,". Длина текста: ").concat(t.value.length),n):t.value.length>r.maxLength?p(e,t,"Максимальное число символов: ".concat(r.maxLength,". Длина текста: ").concat(t.value.length),n):"url"!==t.type||t.validity.valid?p(e,t,t.validationMessage,n):p(e,t,"Введите адрес сайта",n):t.validity.valid?f(e,t,n):"url"===t.type?p(e,t,"Введите адрес сайта",n):p(e,t,t.validationMessage,n)}(e,o,t),_(n,r,t)}))}))}(t,e)}))}(d),n().then((function(e){e._id,L.textContent=e.name,C.textContent=e.about,T.style.backgroundImage="url(".concat(e.avatar,")"),D(cards)})).catch((function(e){console.error("Ошибка при загрузке данных пользователя: ".concat(e))})),Promise.all([n(),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];o._id,L.textContent=o.name,C.textContent=o.about,T.style.backgroundImage="url(".concat(o.avatar,")"),D(c)})).catch((function(e){return console.error("Ошибка при загрузке данных: ".concat(e))})),D()})();
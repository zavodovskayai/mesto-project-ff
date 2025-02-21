(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-33",headers:{authorization:"8a49312d-7cbe-4345-b3c7-5ce0d17ffcb2","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function n(n,r,o){r.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)}(n).then((function(e){r.classList.remove("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){return console.error("Ошибка при удалении лайка: ".concat(e))})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}(n).then((function(e){r.classList.add("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){return console.error("Ошибка при добавлении лайка: ".concat(e))}))}function r(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)})(n).then((function(){r.remove()})).catch((function(e){return console.error("Ошибка при удалении карточки: ".concat(e))}))}function o(e,t,n){var r=n.handleDeleteClick,o=n.handleLikeClick,c=n.handleImageClick,a=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__like-button"),s=a.querySelector(".card__delete-button"),d=a.querySelector(".card__like-count");return u.src=e.link,u.alt=e.name,i.textContent=e.name,d.textContent=e.likes.length,l.addEventListener("click",(function(){o(e._id,l,d)})),e.likes.some((function(e){return e._id===t}))&&l.classList.add("card__like-button_is-active"),e.owner._id===t?s.addEventListener("click",(function(){r(e._id,a)})):s.remove(),u.addEventListener("click",(function(){c(e)})),a}function c(e){e.classList.add("popup_is-animated"),document.addEventListener("keydown",u),setTimeout((function(){e.classList.add("popup_is-opened")}),0)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u),e.addEventListener("transitionend",(function t(){e.classList.remove("popup_is-animated"),e.removeEventListener("transitionend",t)}))}function u(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&a(t)}}function i(e){e.addEventListener("mousedown",(function(t){t.target===e&&a(e)}))}function l(e){e.querySelector(".popup__close").addEventListener("click",(function(){return a(e)}))}var s={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function d(e,t,n,r){var o=e.querySelector(".popup__error_type_".concat(t.name));o&&(t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass))}function p(e,t,n){var r=e.querySelector(".popup__error_type_".concat(t.name));r&&(t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass))}function f(e,t,n){e.some((function(e){return!e.validity.valid}))?(t.classList.add(n.inactiveButtonClass),t.disabled=!0):(t.classList.remove(n.inactiveButtonClass),t.disabled=!1)}function _(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){p(e,n,t)})),f(n,r,t)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var y,h=document.querySelector(".places__list"),v=document.querySelector(".profile__edit-button"),S=document.querySelector(".popup_type_edit"),b=S.querySelector(".popup__form"),q=b.querySelector(".popup__button"),C=b.querySelector(".popup__input_type_name"),k=b.querySelector(".popup__input_type_description"),L=document.querySelector(".profile__title"),g=document.querySelector(".profile__description"),E=document.querySelector(".profile__add-button"),x=document.querySelector(".popup_type_new-card"),A=x.querySelector(".popup__form"),U=A.querySelector(".popup__button"),w=A.querySelector(".popup__input_type_card-name"),T=A.querySelector(".popup__input_type_url"),D=document.querySelector(".popup_type_image"),I=D.querySelector(".popup__image"),j=D.querySelector(".popup__caption"),O=document.querySelector(".profile__image"),B=document.querySelector(".popup_type_update-avatar"),P=B.querySelector(".popup__form"),N=P.querySelector(".popup__input_type_avatar-url"),J=P.querySelector(".popup__button");function M(e){I.src=e.link,I.alt=e.name,j.textContent=e.name,c(D)}function H(e){e.forEach((function(e){var t=o(e,y,{handleDeleteClick:r,handleLikeClick:n,handleImageClick:M});h.append(t)}))}v.addEventListener("click",(function(){_(b,s),C.value=L.textContent,k.value=g.textContent,c(S)})),i(S),i(x),i(D),i(B),l(S),l(x),l(D),l(B),b.addEventListener("submit",(function(n){var r,o;n.preventDefault(),q.textContent="Сохранение...",(r=C.value,o=k.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then(t)).then((function(e){L.textContent=e.name,g.textContent=e.about,a(document.querySelector(".popup_type_edit"))})).catch((function(e){return console.error("Ошибка при обновлении профиля: ".concat(e))})).finally((function(){q.textContent="Сохранить"}))})),E.addEventListener("click",(function(){c(x)})),A.addEventListener("submit",(function(c){var u,i;c.preventDefault(),U.textContent="Сохранение...",(u=w.value,i=T.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:u,link:i})}).then(t)).then((function(e){var t=o(e,y,{handleDeleteClick:r,handleLikeClick:n,handleImageClick:M});h.prepend(t),a(document.querySelector(".popup_type_new-card")),A.reset()})).catch((function(e){return console.error("Ошибка при добавлении карточки: ".concat(e))})).finally((function(){U.textContent="Сохранить"}))})),O.addEventListener("click",(function(){_(P,s),c(B)})),P.addEventListener("submit",(function(n){var r;n.preventDefault(),J.textContent="Сохранение...",(r=N.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){O.style.backgroundImage="url(".concat(e.avatar,")"),a(B),P.reset()})).catch((function(e){return console.error("Ошибка при обновлении аватара: ".concat(e))})).finally((function(){J.textContent="Сохранить"}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);f(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){var r=n[t.name];r?t.validity.valid?p(e,t,n):0===t.value.length?d(e,t,"Вы пропустили это поле",n):t.value.length<r.minLength?d(e,t,"Минимальное число символов: ".concat(r.minLength,". Длина текста: ").concat(t.value.length),n):t.value.length>r.maxLength?d(e,t,"Максимальное число символов: ".concat(r.maxLength,". Длина текста: ").concat(t.value.length),n):"url"!==t.type||t.validity.valid?d(e,t,t.validationMessage,n):d(e,t,"Введите адрес сайта",n):t.validity.valid?p(e,t,n):"url"===t.type?d(e,t,"Введите адрес сайта",n):d(e,t,t.validationMessage,n)}(e,o,t),f(n,r,t)}))}))}(t,e)}))}(s),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];y=o._id,L.textContent=o.name,g.textContent=o.about,O.style.backgroundImage="url(".concat(o.avatar,")"),H(c)})).catch((function(e){return console.error("Ошибка при загрузке данных: ".concat(e))})),H()})();
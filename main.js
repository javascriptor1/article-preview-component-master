"use strict";

const shareArrow = document.querySelector("#share");
const activeMobileState = document.querySelector("#share-social-media");
const mechielProfile = document.querySelector('#profile-name');
const shareActiveStateArrow = document.querySelector('#active-arrow');


shareArrow.addEventListener("click", function () {
  mechielProfile.classList.toggle('hidden');
  activeMobileState.classList.remove('hidden');
});


shareActiveStateArrow.addEventListener('click',function(){
  mechielProfile.classList.toggle('hidden');
  activeMobileState.classList.add('hidden');
})
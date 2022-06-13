<script setup>
import { ref, onMounted } from "vue";
let textDisplay = null;
const phrases = [
  "Wake up, Neo... ",
  "The Matrix has you... ",
  "Follow the white rabbit. ",
  "Knock, knock, Neo. ",
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    console.log(phrases[i]);

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i == phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (150 - 100) + 100;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;

  setTimeout(loop, time);
}
onMounted(() => {
  textDisplay = document.getElementById("text");
  loop();
});
</script>

<template>
  <div class="p-20">
    <h1 id="text" class="text text-4xl"></h1>
  </div>
</template>
<style>
.text {
  font-family: "VT323";
  color: rgb(177, 253, 0);
  text-shadow: 1px 1px 2px rgb(226, 255, 183), 0 0 1em rgb(226, 255, 183), 0 0 0.2em green;
}
</style>

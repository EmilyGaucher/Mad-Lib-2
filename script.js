document.getElementById("btn1").addEventListener("click", sentence1);

function sentence1() {
  let pluralNoun = document.getElementById("pluralnoun-in").value;
  let adjective = document.getElementById("adjective-in").value;
  let presentTense = document.getElementById("presentverb-in").value;
  let noun = document.getElementById("noun-in").value;

  let msg = 
}

document.getElementById("btn2").addEventListener("click", sentence2);

function sentence2() {
  let pluralNoun = document.getElementById("pluralnoun-in").value;
  let adjective = document.getElementById("adjective-in").value;
  let presentTense = document.getElementById("presentverb-in").value;
  let noun = document.getElementById("noun-in").value;

  let msg = `Today I went to the zoo. I saw a(n). ${adjective} (adjective). ${noun}
   (Noun) jumping up and down in its tree.`
}

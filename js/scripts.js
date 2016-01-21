var wordChanger = function(sentence){
  var newsentence = sentence.replace(/[aeiou]/g, '-');
  return newsentence;

};


$(document).ready(function() {
  $("form#question").submit(function(event){

    var sentence = $("#userInput").val();
    var final = wordChanger(sentence);

    $("#newsentence").text(final);

    event.preventDefault();
  });
});

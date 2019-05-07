(() => {
  window.currentLetterIndex = 0;

  function getNextChar() {
   return $("span.highlight").text().split("")[window.currentLetterIndex];
  }

  function currentWord() {
    return $("span.highlight").text();
  }
  window.currentWord = currentWord;

  function addChar(nextChar) {
    $inputfield.val($inputfield.val() + nextChar);
  }
  window.addChar = addChar;

  function triggerSpace() {
    e = $.Event("keyup");
    e.which = 32;
    $inputfield.trigger(e);
  }

  window.triggerSpace = triggerSpace;

  function addNextChar() {
    if (!currentWord()[window.currentLetterIndex]) {
      triggerSpace();
      window.currentLetterIndex = 0;
    } else {
      addChar(getNextChar());
      window.currentLetterIndex++;
    }
  }
  window.addNextChar = addNextChar;

  $("body").keydown(function(event){
    event.preventDefault();
    addNextChar();
  });

})();
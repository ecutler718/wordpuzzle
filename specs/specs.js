describe ('wordChanger', function() {
  it ("replaces vowels with dashes in single word", function() {
    expect(wordChanger("butter")).to.equal("b-tt-r");
  });
});

describe ('wordChanger', function() {
  it ("replaces vowels with dashes in a string of words", function() {
    expect(wordChanger("nutter butter")).to.equal("n-tt-r b-tt-r");
  });
});

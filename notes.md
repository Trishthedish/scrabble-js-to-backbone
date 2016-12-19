1. import Backbone from 'Backbone';
2. add backbone.extend
```JavaScript
const Scrabble = Backbone.Model.extend({
});
```
3.
```JavaScript
scoreLetter: function(letter) {
  letter = letter.toUpperCase();
  var letters = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'D', 'G', 'B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z'];
  var scores = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 8, 8, 10, 10];
  for (var i = 0; i < letters.length; i++){
    if (letters[i] == letter){
      return scores[i];
    }
  }
  return 0;
}
```
Changed from original: prototype language. Originally class methods.

instance variables dealing with things over time.

params given and forgetting everything else.

if something you want to save and keep track of... it should be a model.

4. what do constructors have instead  of initialize? Answer: see video for clarity of quote.
5. .get attribute
6. .set attribute when you want to change.

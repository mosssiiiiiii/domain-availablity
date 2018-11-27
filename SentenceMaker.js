

exports.makeSentence = function () {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (j = 0; j < 10; j++) {
        for (var i = 0; i < 3; i++)
            text = text + possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

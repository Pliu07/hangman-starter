//global variables here: word, word array(s), guesses, guessedLetters



const words = [
    "abandon", "ability", "absence", "academy", "accept", "accident", "account", "acquire", "address", "advance",
    "advice", "agency", "airline", "allegro", "aluminum", "amazing", "ancient", "anxiety", "appeal", "argument",
    "balance", "beauty", "bicycle", "biology", "border", "bravery", "camera", "candle", "capture", "climate",
    "clothing", "cloudy", "courage", "culture", "debate", "defend", "device", "disease", "effort", "election",
    "emotion", "endure", "example", "exceed", "expand", "famous", "fashion", "forest", "freedom", "gather",
    "genuine", "holiday", "horizon", "imagine", "journey", "junior", "kitchen", "kingdom", "knowledge", "library",
    "laughter", "liberty", "leader", "machine", "mansion", "memory", "mystery", "outcome", "outlook", "officer",
    "online", "patience", "popular", "passion", "promise", "quality", "quaint", "reason", "reality", "respect",
    "sample", "science", "special", "strange", "station", "success", "student", "student", "theory", "tackle",
    "tension", "thorough", "tradition", "theory", "universe", "ultimate", "venture", "vibrant", "victory",
    "volunteer", "welfare", "wonder", "water", "warmth", "wholesome", "witness", "young", "yearn", "yoga",
    "abbreviation", "accommodation", "accountability", "achievement", "aggressive", "atmosphere", "bachelor",
    "beneficial", "blasphemy", "bilingual", "calculating", "ceremony", "complicated", "consistent", "dangerous",
    "definitive", "determined", "desperate", "discovery", "dynamic", "empirical", "eventual", "evolutionary",
    "frequent", "glorious", "impressive", "influential", "inspiration", "judgement", "laboratory", "magnitude",
    "memorable", "opposite", "paradise", "permanent", "productive", "profitable", "questionable", "reliability",
    "sensitive", "sophisticated", "struggles", "tolerant", "unforgiving", "visionary", "ambitious", "awkward",
    "blossom", "bottle", "bountiful", "calculator", "carousel", "centerpiece", "champion", "chronic", "cobble",
    "circular", "clarity", "divinity", "efficient", "exceeding", "exemplar", "fairness", "fiscal", "forecaster",
    "harmony", "heated", "indifference", "inquisitive", "kingdom", "lively", "mature", "mysterious", "obedient",
    "perpetual", "reasoned", "relocate", "restraint", "strategic", "suppress", "uncommon", "validity", "vexing",
    "acquaintance", "advisory", "alliance", "architecture", "attorney", "barrier", "bicycle", "chatter", "clarity",
    "committee", "collective", "conscious", "curiosity", "dramatic", "explanatory", "glimpse", "handsome", "inspire",
    "metaphor", "offensive", "organizational", "perceptive", "pressure", "promise", "requirement", "solution",
    "spectacle", "translate", "unseen", "variety", "wholesome", "witness", "zestful"
  ];
let word = ''; //the word to be guessed
let guessesLeft = 5; //number of guesses available
let guessedLetters = []; //the letters already guessed
let gamestate = false;

//event listeners for startGame and guessLetter
//for example:
document.getElementById("start").addEventListener("click", startGame);
document.getElementById('guessLetter').addEventListener("click", guessLetter);

//once at start of the game


function startGame() {
    gamestate = true;
    
    document.getElementById("correctWord").innerHTML ='';
    document.getElementById("actualbox").setAttribute("src", "images/hangman-06.svg");
    console.log("hi")
    guessedLetters = [];
    guessesLeft = 6;
    word = words[Math.floor(Math.random() * words.length)];
    document.getElementById("guessedLetters").innerHTML = '';
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winLose").innerHTML = '';
    

    let x = '';
    for (i = 0; i < word.length; i++) {
        x += '_ ';
    }
    document.getElementById('word').innerHTML = x;


    /*
    - Reset the board, empty guessedLetters 
    - Set a word from words array into word - this line will grab  a random element from your words array for you:
    word = words[Math.floor(Math.random() * words.length)];
    */

}

//at start and every time the user enters a guess
function printWord() {

    /*
    Compare each letter in answer word to the letters in guessedLetters using guessedLetters.indexOf(letter).  Use this to build the “_” word with the correctly guessed letters filled in.
    there is a help video for this in classroom 
    
    */

    answer = '';
    for (let i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) != -1) {
            answer += word[i];
            

        } else {
            answer += '_ ';
        }
    }
    document.getElementById("word").innerHTML = answer;

    return answer;


}

//every time the user enters a guess
function guessLetter() {
    if (gamestate == false) {
        return;
    } else {
        let l = document.getElementById("guessedLetter").value;
        let guessedAlready = false;
        for(i = 0; i< guessedLetters.length; i++){
            if(guessedLetters[i] == l){
                guessedAlready = true;
                break;
            }
        }
        let wrong = true;
        
        if(guessedAlready == false){
            guessedLetters += l;
        }
        
        
        
        for (i = 0; i < word.length; i++) {
            if (word[i] == l){
                wrong = false;
                break;
            }
            
        }
        
        if (wrong == true && guessedAlready==false) {
            guessesLeft -= 1;
            document.getElementById("guessedLetters").innerHTML += l;
        }
        

        printWord();
        document.getElementById("numGuesses").innerHTML = guessesLeft;
        document.getElementById("actualbox").setAttribute("src", "images/hangman-0" + guessesLeft + ".svg");
        
        if (guessesLeft == 0) {
            gamestate = false;
            console.log('you lose');
            document.getElementById("correctWord").innerHTML = word;
            document.getElementById("winLose").innerHTML = 'you lost!';
            document.getElementById("actualbox").setAttribute("src", "images/lost.gif");
        }
        if (word.split('').every(letter => guessedLetters.includes(letter))) {
            gamestate = false;
            console.log('You win!');
            document.getElementById("winLose").innerHTML = 'you won!';
            document.getElementById("actualbox").setAttribute("src", "images/victory.gif");
        }

    }

}


/*
Manage the game: Add letters to guessedLetters, call printWord, deduct from guesses, check for a win or loss.
*/



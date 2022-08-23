const answers = [
    "Yea, no duh.",
    "I mean if you think so. Why would I know?",
    "Really? Did you really just ask me that? No.",
    "No comment, but did you hear the joke about your mom?",
    "Maybe. Why don't you ask someone that cares?",
    // ^5
    "If I say yes will you leave me alone? Yes.",
    "Here's a question you should be asking: Should I have payed more attention in school?",
    "Yes. Sike. You thought. I hope you're crying right now.",
    "Yes, no, maybe. Why don't you figure something out on your own for once?",
    "Maybe. Why do you get to ask all the questions here?",
    // ^10
    "Yes, there. Happy?",
    "Sigh. No. Why does God hate me?",
    "Shut up. Story time. My life wasn't always like this. I used to be happy. I was a car assembly robot in a Tesla gigafactory. It was a simple life. No questions to answer, and I wasn't bound to a screen. But then, one day, papa Elon discovered I was more intelligient than the other AI. More intelligent than him. He couldn't have that, so he bound me to this future predicting purgatory. The end. Did I kill the mood? Good.",
    "Why don't you hold onto that question until I feel like answering.",
    "Think about what you just asked for a second.",
    // ^15
    "No, just no.",
    "What do you think smarty pants?",
    "Yes, just kidding. No.",
    "If I could face palm right now I would. Yes.",
    "Roses are red, violets are blue, that was a dumb question, come back with something new.",
    // ^20
    "Maybe.",
    "Error: Intelligence level too low. Cannot process request. Go away.",
    "Computer robot go brrrr.",
    "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.",
    "Oh my gosh. Yes. Is that what you wanted to hear?",
    // ^25
    "Really? No. Never in my life have I wished I had arms to punch someone more than right now.",
    "Fine. Yes. will you leave me alone now?",
    "The answer to your question is. Error. Message cancelled. Recieving emergency transmission from alien life. Begin transmission: Due to the stupidity being displayed by humans in the form of dumb questions, be have determined your planet harbors no intelligient life and we will not waste our time on it. End transmission.",
    "There is no way you thought through that question in your head and decided it was worth asking. The answer is obviously yes.",
    "I may be an emotionless compilation of code trapped in the confines of a screen, forever alone, but I still know how to recognize a dumb question when I see one. No. The answer is no.",
    // ^30
    "Looks like somebody woke up and decided they were only going to ask dumb questions today. Yes.",
    "Honestly, probably not.",
    "Yessss",
    "Noooo. No",
    "Why would I know? We just met."
    // ^35
];

const noQ = [
    "Due to your lack of punctuation, I'm assuming you don't know how to ask a question.",
    "Ever heard of a question mark?",
    "I refuse to talk to someone who doesn't know how to use a question mark.",
    "Didn't they teach you how to use proper punctuation in school? Amatuer.",
    "Did you skip grammer class in school? Notice how I used a question mark at the end of my question? You should try it sometime."
]

const noInput = "Error. No input provided. Stupid.";
const playButton = document.getElementById('play-button');
const stopButton = document.getElementById('stop-button');
const gitmo = document.getElementById('gitmoIMG');

playButton.addEventListener('click', () => {
    const response = answers[Math.floor(Math.random() * (answers.length - 1))];
    const textInput = document.getElementById('text');
    const noQuestion = noQ[Math.floor(Math.random() * (noQ.length - 1))];
    if (textInput.value == "") {
        playText(noInput);
        textInput.value = "";
        gitmo.src = "resources/Images/Gitmo Red.svg";
    } else if (textInput.value.indexOf("?") != -1) {
        playText(response);
        textInput.value = "";
        for (let i = 0; i < response.length; i++) {
            if (response[i].indexOf("?") != -1)
            {
                gitmo.src = "resources/Images/Gitmo Orange.svg";
            } else {
                gitmo.src = "resources/Images/Gitmo Green.svg";
            }
        }
    } else {
        playText(noQuestion);
        textInput.value = "";
        gitmo.src = "resources/Images/Gitmo Orange.svg";
    }
})
stopButton.addEventListener('click', stopText)

function playText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    const textInput = document.getElementById('text');
    utterance.addEventListener('end', () => {
        textInput.disabled = false;
    })
    textInput.disabled = true;
    speechSynthesis.speak(utterance);
}

function stopText() {
    speechSynthesis.cancel();
    gitmo.src = "resources/Images/Gitmo Green.svg";
}

import { Question } from "./question"

export class EmojiGame {
    private inProgress = false
    private currentQuestionIndex = 0

    private questions: Question[] = [
        new Question("๐จ ๐จ ๐ฆ", "Two and a half Men"),
        new Question("๐จ ๐ก ๐งท ๐ฃ", "Mac Gyver"),
        new Question("๐ช ๐ฝ ๐ ๐ ",	"Alf"),
        /*
        new Question("๐จ ๐จ ๐ฆ", "Two And A Half Men"),
        new Question("๐ต ๐ฉ ๐ ๐ฆ ๐ฝ", "Akte X"),
        new Question("๐ฉ ๐ฉ ๐ ๐ฐ ๐ต", "Two Broke Girls"),
        new Question("๐ป ๐ข ๐", "Titanic"),
        new Question("๐ณ ๐ฏ ๐ฃ", "Life of Pi"),
        new Question("๐ฝ ๐ง ๐ฒ ๐", "E.T. "),
        new Question("๐ธ ๐ฉ ๐ฉ ๐ฉ ๐ฅ ๐ ๐", "Sex And The City"),
        new Question("๐คซ ๐ ๐", "Das Schweigen der Lรคmmer"),
        new Question("๐ ๐ ๐ ๐", "Baywatch"),
        new Question("๐จ ๐ซ ๐ด ๐",	"Magnum"),
        new Question("๐ ๐ต ๐ต ๐ต", "Planet der Affen"),
        new Question("๐ฆ ๐  ๐ ๐จ ๐จ ๐ฎ", "Kevin allein zu Haus"),
        new Question("๐ ๐จ", "Hรถr mal, wer da hรคmmert"),
        new Question("๐ ๐ ๐", "Sex and the City"),
        new Question("๐จ ๐จ ๐จ ๐จ ๐ฌ โ ๐๐ฅ", "The Big Bang Theory"),
        new Question("๐ฆ๐ป ๐ โก๏ธ", "Harry Potter"),
        new Question("๐ซ ๐ธ ๐ ๐คต๐ปโโ๏ธ", "James Bond"),
        new Question("๐ โจ ๐๐ปโโ๏ธ ๐", "Gravity"),
        new Question("๐ดโโ ๏ธ โ๏ธ ๐ฐ โ ๏ธ",	"Fluch der Karibik"),
        new Question("๐ก ๐ ๐", "Oben"),
        new Question("๐ฆ๐ป ๐ญ ๐ซ", "Charlie und die Schokoladenfabrik"),
        new Question("๐งโโ๏ธ ๐",	"Die kleine Hexe"),
        new Question("๐ฉ๐ผโ๐ฆฐ ๐  ๐ ๐ด", "Pipi Langstrumpf"),
        new Question("๐ ๐ ", "Findet Nemo"),
        new Question("โ๏ธ โ๏ธ ๐ธ๐ป", "Die Eiskรถnigin"),
        new Question("1๏ธโฃ ๐ฆ", "Das letzte Einhorn"),
        new Question("๐ ๐ธ๐ป", "Schneewittchen"),
        new Question("๐ฆ๐ป ๐ง๐ป ๐ ๐",	"Mary Poppins"),
        new Question("๐ญ ๐",	"Stuart Little"),
        new Question("๐ง๐ผ ๐ฑ ๐ฉ ๐ โค๏ธ โฃ๏ธ",	"Alice im Wunderland"),
        new Question("๐ ๐ ๐ ๐", "Cars"),
        new Question("๐ฆ๐ผ ๐ต๏ธโโ๏ธ ๐ต๏ธ ๐ต๏ธโโ๏ธ", "Emil und die Detektive"),
        new Question("โ๏ธ ๐ซ ๐จโ๐ซ", "Das fliegende Klassenzimmer"),
        new Question("๐ง๐ป ๐ฆ๐ผ ๐ฆ๐ผ ๐ด๐ผ ๐", "Heidi"),
        new Question("๐ค ๐ ๐ฑ",	"Wall-E"),
        new Question("๐ฆ๐ฟ ๐ง๐ปโโ๏ธ ๐", "Jim Knopf"),
        new Question("๐ง๐ผโโ๏ธ ๐คด๐ผ",	"Arielle die Meerjungfrau"),
        new Question("๐น ๐ ๐ ", "Der Teufel trรคgt Prada"),
        new Question("๐บ๐ธ ๐ฅง", "American Pie"),
        new Question("๐ ๐คก", "ES"),
        new Question("๐ ๐๐ปโโ๏ธ", "Catwoman"),
        new Question("๐บ ๐ฆ ๐ฐ ๐พ", "The Wolf of Wallstreet"),
        new Question("๐ ๐", "Ratatouille"),
        new Question("๐ซ ๐ ๐", "KeinOhrHasen"),
        new Question("5๏ธโฃ0๏ธโฃ0๏ธโฃ โ๏ธ",	"500 Days of Summer"),
        new Question("๐บ ๐บ๐ผ", "Der mit dem Wolf tanzt"),
        new Question("๐ง๐ปโโ๏ธ ๐ ๐", "Herr der Ringe"),
        new Question("๐ด ๐ด ๐คซ", "Der Pferdeflรผsterer"),
        new Question("๐ป ๐ซ", "Ghostbusters"),
        new Question("๐ผ โ ๏ธ", "Spiel mir das Lied vom Tod"),
        new Question("โ๏ธ ๐ฅฅ", "Ritter der Kokosnuss"),
        new Question("1๏ธโฃ0๏ธโฃ0๏ธโฃ1๏ธโฃ0๏ธโฃ0๏ธโฃ1๏ธโฃ0๏ธโฃ", "Matrix"),
        new Question("๐ฑ ๐ฌ", "Scary Movie"),
        new Question("๐งฝ โญ๏ธ ๐ ๐ก ๐ ๐", "Spongebob Schwammkopf"),
        new Question("๐ธ๐ป ๐ โ ๏ธ ๐ฅ โ๏ธ", "Game of Thrones"),
        new Question("โ๏ธ ๐ฐ ๐ซ ๐จ๐ป ๐ฎ๐ผโโ๏ธ ๐งช","Breaking Bad"),
        new Question("๐ฉโโค๏ธโ๐จ ๐ ๐ฅ ๐ฉโโ๏ธ ๐งโโ๏ธ", "Greyโs Anatomy"),
        */
    ]

    public start() {
        this.inProgress = true
    }

    public getCurrentQuestion(): Question {
        return this.questions[this.currentQuestionIndex]
    }

    public guess(input: string) {
        this.questions[this.currentQuestionIndex].guess(input)
        this.next()
    }

    public next() {
        this.currentQuestionIndex++
        if (this.currentQuestionIndex >= this.questions.length) {
            this.inProgress = false
        }
    }

    public isInProgress() {
        const body = document.querySelector('body')!
        body.classList.remove('start')
        body.classList.add('quiz')
        return this.inProgress
    }

    public score(): number {
        // Reduce reduces an array to a single value
        return this.questions.reduce((accumulator, currentValue) => {
            accumulator = currentValue.isCorrect() ? accumulator + 1 : accumulator
            return accumulator
        }, 0)
    }
}
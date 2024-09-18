/**
 * Information for the story.
 * Game explanation and question cards
 *
 * @author Marlon Schrader
 * @version 0.5.0
 */

// text for the game explaination in story
export const SPEECHBUBBLE = [
  { index: 0, text: "Hallo, schön dich zu sehen!" },
  { index: 1, text: "Lass uns zusammen etwas spielen." },
  { index: 2, text: "Sagt dir virtuelles Wasser etwas?" },
  {
    index: 3,
    text: "Es ist die Wasser Menge die benötigt wird um etwas herzustellen",
  },

  {
    index: 4,
    text: "Für Nahrungsmittel wird viel Wasser verbraucht, eshalb sollst du ein Wassereffizientes Gericht zubereiten.",
  },
  {
    index: 5,
    text: "Vorher musst dur dir aber erst Coins erspielen durch das beantworten einiger Fragen!",
  },
  {
    index: 6,
    text: "Für jede richtig beantwortete Frage erhälst du 500 Coins. Durch sie kannst du danach das Essen bezahlen.",
  },
  {
    index: 7,
    text: "Klicke die Fragezeichen auf der Karte an um sie zu beantworten",
  },
  {
    index: 8,
    text: "Wenn du eine Frage nicht beantworten kannst, solltest du dich in Lemgo nach den Trinkwasserstellen umschauen",
  },
  {
    index: 9,
    text: "Die Stadt Lemgo wünscht dir viel Spaß",
  },
];

// Quiz data
/* questionnumber, place img, question, answer options and 
correct answere for the story game questions*/
import LangenbrückerTor from "/images/LangenbrückerTor.jpg";
import Leopoldstraße from "/images/Leopoldstraße.jpg";
import Marktplatz from "/images/Marktplatz.jpg";

export const QUIZ = [
  {
    index: 1,
    img: LangenbrückerTor, // Add image source when available
    question: "Wo befindet sich diese Trinkwasserstelle?",
    options: ["Langenbrücker Tor", "Regenstorplatz", "Ostertor"],
    correctAnswer: "Langenbrücker Tor",
  },
  {
    index: 2,
    img: Marktplatz, // Add image source when available
    question: "Wo befindet sich diese Trinkwasserstelle?",
    options: ["Waisenhausplatz", "Treffpunkt", "Marktplatz"],
    correctAnswer: "Marktplatz",
  },
  {
    index: 3,
    img: Leopoldstraße, // Add image source when available
    question: "Wo befindet sich diese Station?",
    options: [
      "Ostertor-Wall an der Leopoldapotheke",
      "Slaventor-Wall an der Teichanlage",
      "Johannistorwall am Spielplatz",
    ],
    correctAnswer: "Ostertor-Wall an der Leopoldapotheke",
  },
];

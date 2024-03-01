// Import pustaka natural untuk pemrosesan bahasa alami
const natural = require('natural');
// Memuat stemmer Bahasa Inggris dari natural
const stemmer = natural.PorterStemmer;

// Contoh data pertanyaan dan jawaban
const qaPairs = [
    { question: "Apa warna langit?", answer: "Biru." },
    { question: "Siapa presiden Amerika Serikat saat ini?", answer: "Joe Biden." },
    { question: "Berapa hasil dari 2 + 2?", answer: "4." }
];

// Fungsi untuk mencari jawaban berdasarkan pertanyaan
function findAnswer(question) {
    // Stem pertanyaan
    const stemmedQuestion = stemmer.stem(question);
    
    // Mencari jawaban yang paling cocok dengan pertanyaan yang di-stem
    for (let pair of qaPairs) {
        const stemmedPairQuestion = stemmer.stem(pair.question);
        if (stemmedQuestion === stemmedPairQuestion) {
            return pair.answer;
        }
    }
    return "Maaf, saya tidak tahu jawabannya.";
}

// Contoh penggunaan
const question = "Apa warna langit?";
const answer = findAnswer(question);
console.log("Pertanyaan:", question);
console.log("Jawaban:", answer);

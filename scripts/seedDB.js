const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongo://localhost/googeIt"

);

const bookSeed = [
    {
        authors: "Tom Clancy" ,
        description: "At its heart is John Clark, the ex-Navy SEAL of Without Remorse and well-known from several of Clancy's novels as "the dark side of Jack Ryan," the man who conducts the secret operational missions Ryan can have no part of. Whether hunting warlords in Japan, druglords in Colombia, or nuclear terrorists in the United States, Clark is efficient and deadly, but even he has ghosts in his past, demons that must be exorcised. And nothing is more demonic than the peril he must face in Rainbow Six; a group of terrorists like none the world has ever encountered before, a band of men and women so extreme that their success could literally mean the end of life on this earth as we know it. It is Tom Clancy's most shocking story ever--and closer to reality than any government would care to admit.",
        image: "",
        link: "https://www.google.com/books/edition/Rainbow_Six/_7jR_ifoeQoC?hl=en&gbpv=0",
        title: "Rainbow Six",
    },
    {
        authors: "Dr. Seuss",
        description: "Are you smarter than Ziggy and Zizzy Zozzfozzel? Get quizzed by the Cat in the Hat in this classic Beginner Book by Dr. Seuss! Do fish sleep with one eye open? What do they call one-eyed eyeglasses? Are snails faster than turtles? How many will you get right? (The Zozzfozzels got them ALL wrong!) Featuring a mixture of picture puzzles, logic tricks, and silly questions, The Cat's Quizzer will keep readers fascinated with a wide array of facts and fun! Originally created by Dr. Seuss, Beginner Books encourage children to read all by themselves, with simple words and illustrations that give clues to their meaning.",
        image: "",
        link: "https://www.google.com/books/edition/The_Cat_s_Quizzer/sy1CtBeDuh0C?hl=en&gbpv=0",
        title: "The Cat's Quizzer",
    },
    {
        authors: "Anne-Sophie Baumann",
        description: "A fun book to ignite curiosity about the solar system. --School Library JournalLearn all about rocket ships, astronauts, and the fascinating world of space exploration: The rover Curiosity lands on the surface of Mars, astronauts prepare for takeoff... Best of all, lots of flaps, popups, pull-tabs, and rotating wheels bring space shuttles, satellites, and planets to life. Readers will learn about the Milky Way and the universe, explore the International Space Station, and help astronauts complete their NASA training. Any child who has ever dreamed of space exploration will adore this extraordinary look at outer space.",
        image: "",
        link: "https://www.google.com/books/edition/The_Ultimate_Book_of_Space/RhctjwEACAAJ?hl=en",
        title: "The Ultimate Book of Space",
    }
];

db.Book
.remove({})
.then(() => db.Book.collection.insertMany(bookSeed))
.then(data => {
    console.log(data.result.n + "records inserted");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1)
});
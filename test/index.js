const canvacard = require("../index");
const img = "https://cdn.discordapp.com/embed/avatars/0.png";
const img2 = "https://cdn.discordapp.com/embed/avatars/4.png";

// console.log(canvacard)

// const rank = new canvacard.Rank()
//     .setAvatar(img)
//     .setCurrentXP(50)
//     .setRequiredXP(360)
//     .setStatus("dnd")
//     .setProgressBar("#FFFFFF", "COLOR")
//     .setUsername("SrGobi")
//     .setDiscriminator("5100");

// rank.build()
//     .then(data => {
//         // canvacard.write(data, "RankCard.png");
//     });

canvacard.Canvas.reply({
    avatar1: img,
    avatar2: img2,
    user1: "Maximus",
    user2: "SrGobi",
    hex1: "#ff00ff",
    hex2: "#7289da",
    mainText: "kok 😋",
    replyText: "Pog 😋"
})
.then(img => canvacard.write(img, "reply.png"));
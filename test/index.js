const canvacard = require("../index");
const img = "https://cdn.discordapp.com/embed/avatars/0.png";

const userData = {
    xp: 500,
    requiredXP: 845
};

const rank = new canvacard.Rank()
    .setAvatar(img)
    .setCurrentXP(userData.xp)
    .setRequiredXP(userData.requiredXP)
    .setStatus("dnd", true, 8)
    .setProgressBar(["#14C49E", "#FF0000"], "GRADIENT", true)
    .setProgressBarTrack("#FFFFFF")
    .setUsername("SrGobi")
    .setDiscriminator("6966")

rank.build()
    .then(data => {
        canvacard.write(data, "./card.png");
    });
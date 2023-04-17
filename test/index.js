const canvacard = require("../index");
const img = "https://cdn.discordapp.com/embed/avatars/0.png";

const userData = {
    xp: 100500,
    requiredXP: 100845
};

const rank = new canvacard.Rank()
    .setAvatar(img)
    .setCurrentXP(userData.xp)
    .setRequiredXP(userData.requiredXP)
    .setRank(100, "RANK", true)
    .setLevel(100, "LEVEL", true)
    .setStatus("dnd", true, 8)
    .setProgressBar(["#14C49E", "#FF0000"], "GRADIENT", true)
    .setProgressBarTrack("#FFFFFF")
    .setUsername("SrGobi")
    .setDiscriminator("6966")

rank.build(ops = { fontX: "PTSans-Bold", fontY: "PTSans-Bold" })
    .then(data => {
        canvacard.write(data, "./card.png");
    });
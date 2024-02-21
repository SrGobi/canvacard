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
    .setRank(1, "RANK", true)
    .setLevel(1, "LEVEL", true)
    .setStatus("dnd", true, 8)
    .setProgressBar(["#14C49E", "#FF0000"], "GRADIENT", true)
    .setProgressBarTrack("#FFFFFF")
    .setOverlay("#000000", 1, true)
    .setUsername("SrGobi")

rank.build(ops = { fontX: "Lobster", fontY: "Lobster" })
    .then(data => {
        canvacard.write(data, "./card.png");
    });

const welcome = new canvacard.Welcomer()
    .setAvatar(img)
    .setBackground('IMAGE', 'https://i.imgur.com/aClDVjh.jpg')
    .setTitulo("Titulo de la Tarjeta👋")
    .setSubtitulo("Subtitulo de la Tarjeta 👋")
    .setOpacityOverlay("0.5")
    .setColorTitulo('#FFFFFF')
    .setColorSubtitulo('#FFFFFF')
    .setColorCircle('#FFFFFF')
    .setColorOverlay('#5865F2')
    .setTypeOverlay('ROUNDED')

welcome.build(ops = { fontX: "My Font", fontY: "My Font" })
    .then(data => {
        canvacard.write(data, "./welcomer.png");
    });
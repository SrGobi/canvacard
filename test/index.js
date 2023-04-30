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

welcome.build(ops = { fontX: "PTSans-Bold", fontY: "PTSans-Bold" })
    .then(data => {
        canvacard.write(data, "./welcomer.png");
    });
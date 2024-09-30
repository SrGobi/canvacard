const canvacard = require("../index");
const img = "https://cdn.discordapp.com/embed/avatars/0.png";

// Datos de usuario para la tarjeta de Rank
const userData = {
	xp: 100500,
	requiredXP: 100845
};

// Función para generar la tarjeta de Rank
async function generateRankCard() {
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
		.setUsername("SrGobi");

	const rankImage = await rank.build({ fontX: "Lobster", fontY: "Lobster" });
	canvacard.write(rankImage, "./card.png");
}

// Función para generar la tarjeta de Welcome
async function generateWelcomeCard() {
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
		.setTypeOverlay('ROUNDED');

	const welcomeImage = await welcome.build("Suravaram");
	canvacard.write(welcomeImage, "./welcomer.png");
}

// Función para generar la tarjeta de Perfil
async function generateProfileCard() {
	const profile = new canvacard.ProfileImage("939986359697956874", {
		badgesFrame: true,
		moreBackgroundBlur: true,
		presenceStatus: 'online',
		rankData: {
			currentXp: 2100,
			requiredXp: 3000,
			rank: 1,
			level: 20,
			barColor: '#fcdce1',
			levelColor: '#ada8c6',
			autoColorRank: true
		}
	});
	await profile.fetchData();

	const profileImage = await profile.build("Cascadia Code PL");
	canvacard.write(profileImage, "./profile.png");
}

// Función principal para ejecutar todas las generaciones
async function main() {
	await generateRankCard();
	await generateWelcomeCard();
	await generateProfileCard();
}

main().catch(console.error);
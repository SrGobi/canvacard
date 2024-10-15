const canvacard = require("../main/index");

// Datos de usuario para la tarjeta de Rank
const userData = {
	xp: 2100,
	requiredXP: 3000
};

const data = {
	id: '939986359697956874',
	username: 'srgobi',
	avatar: '73a9931eb6a7e430f394c513ade959e4',
	discriminator: '0',
	bot: true,
	flags: 4194432,
	banner:null,
	accent_color: 3046143,
	global_name: 'SrGobiawdawdawd',
	avatar_decoration_data: {
		asset: 'a_fed43ab12698df65902ba06727e20c0e',
		sku_id: '1144058844004233369',
		expires_at: null
	},
	banner_color: '#00ffbb',
	clan: null,
	createdTimestamp: 1572183145164,
	defaultAvatarURL: 'https://cdn.discordapp.com/embed/avatars/0.png',
	avatarURL: 'https://cdn.discordapp.com/avatars/360881334647914506/73a9931eb6a7e430f394c513ade959e4.png',
	bannerURL: 'https://i.imgur.com/Z2g5IMl.gif'
};

// Función para generar la tarjeta de Rank
async function generateRankCard() {
	const rank = new canvacard.Rank(data.id)
		.setAvatar(data.avatarURL, data.avatar_decoration_data.asset, false)
		.setBanner(data.bannerURL, true)
		.setBadges(data.flags, data.bot, true)
		.setCurrentXP(userData.xp)
		.setRequiredXP(userData.requiredXP)
		.setRank(1, "RANK", true)
		.setLevel(20, "LEVEL")
		.setStatus("online")
		.setProgressBar(["#14C49E", "#FF0000"], "GRADIENT", true)
		.setUsername(data.global_name, data.discriminator, "#FFFFFF")
		.setCreatedTimestamp(data.createdTimestamp, "IMPRESIONANTE")
		.setBorder(["#14C49E", "#FF0000"], "vertical");

	const rankImage = await rank.build("Cascadia Code PL");
	canvacard.write(rankImage, "./card_1.png");
}

// Función para generar la tarjeta de Welcome
async function generateWelcomeCard() {
	const welcome = new canvacard.Welcomer()
		.setAvatar(data.defaultAvatarURL)
		.setBackground('IMAGE', 'https://i.imgur.com/aClDVjh.jpg')
		.setTitulo("Titulo de la Tarjeta👋")
		.setSubtitulo("Subtitulo de la Tarjeta 👋")
		.setOpacityOverlay("0.5")
		.setColorTitulo('#FFFFFF')
		.setColorSubtitulo('#FFFFFF')
		.setColorCircle('#FFFFFF')
		.setColorOverlay('#5865F2')
		.setTypeOverlay('ROUNDED');

	const welcomeImage = await welcome.build("Cascadia Code PL");
	canvacard.write(welcomeImage, "./welcomer.png");
}

// Función para generar la tarjeta de Spotify
async function generateSpotifyCard() {
	const spotify = new canvacard.Spotify()
		.setAuthor("SAIKO")
		.setAlbum("SAKURA")
		.setStartTimestamp(Date.now() - 10000)
		.setEndTimestamp(Date.now() + 50000)
		.setImage("https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60")
		.setTitle("YO LO SOÑÉ");

	const spotifyImage = await spotify.build("Cascadia Code PL");
	canvacard.write(spotifyImage, "./spotify.png");
}

// Función principal para ejecutar todas las generaciones
async function main() {
	await generateRankCard();
	await generateWelcomeCard();
	await generateSpotifyCard();
}

main().catch(console.error);
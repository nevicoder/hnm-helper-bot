require("dotenv").config();
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(() => console.log("Welcome"));

bot.command("cat", async (ctx) => {
  try {
    ctx.sendMessage("Dang tim anh meo, vui long doi...");
    const imgLink = await fetch(
      "https://api.thecatapi.com/v1/images/search?api_key=live_CohK1aDS9jZcQYPohOozym3AU86AV1tvB5vdHr49dpugm59SaJzrJHS0TahY04GV"
    )
      .then((response) => response.json())
      .then((result) => result[0].url)
      .catch((error) => console.log("error", error));
    await ctx.sendPhoto(imgLink);
    ctx.sendMessage("Enjoy <3");
  } catch (error) {}
});
bot.launch();

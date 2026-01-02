import { Bot } from "grammy";

const bot = new Bot(process.env.BOT_TOKEN);

const roasts = [
  "You are proof that God has a sense of humor 😂",
  "Even Google can't find your talent 🤡",
  "You are not useless, you can always be a bad example 😆",
  "If laziness was a sport, you’d win gold 🥇"
];

function randomUser(ctx) {
  const users = ctx.chat?.members || [];
  return users[Math.floor(Math.random() * users.length)];
}

bot.command("start", ctx => {
  ctx.reply(
    "🔥 Welcome to *GroupFun Bot*\n\nI bring fun to your group with games:\n\n/roast\n/match\n/bomb\n/marry\n/truth\n/dare\n\nAdd me to a group and start playing 😈",
    { parse_mode: "Markdown" }
  );
});

bot.command("roast", ctx => {
  const r = roasts[Math.floor(Math.random() * roasts.length)];
  ctx.reply(r);
});

bot.command("truth", ctx => {
  ctx.reply("😏 Truth: Who in this group do you like the most?");
});

bot.command("dare", ctx => {
  ctx.reply("🔥 Dare: Send your last emoji 5 times!");
});

bot.command("match", ctx => {
  ctx.reply("💘 Match: Two people in this group are secretly in love 😏");
});

bot.command("marry", ctx => {
  ctx.reply("💍 Wedding: A random couple got married in this group 😂");
});

bot.command("bomb", ctx => {
  ctx.reply("💣 Bomb activated! Type PASS in 10 seconds or explode!");
});

bot.on("message:text", ctx => {
  if (ctx.message.text.toLowerCase() === "pass") {
    ctx.reply("😎 Bomb defused!");
  }
});

bot.start();

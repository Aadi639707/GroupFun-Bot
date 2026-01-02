const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

// /start
bot.start(async (ctx) => {
  const text =
🔥 *Welcome to GroupFun Bot* 🔥

I bring *crazy fun* to Telegram groups 😈

🎮 Games:
• /roast
• /match
• /bomb
• /marry
• /truth
• /dare

👇 Tap buttons below;

  await ctx.replyWithMarkdown(
    text,
    Markup.inlineKeyboard([
      [
        Markup.button.callback("🎮 Games", "GAMES"),
        Markup.button.callback("📖 Help", "HELP"),
      ],
      [
        Markup.button.url("💬 Support", "https://t.me/SANATANI_GOJO"),
      ],
    ])
  );
});

// Buttons
bot.action("GAMES", async (ctx) => {
  await ctx.editMessageText(
🎮 *Games List*

/roast 🔥
/match ❤️
/bomb 💣
/marry 💍
/truth 😳
/dare 😈,
    { parse_mode: "Markdown" }
  );
});

bot.action("HELP", async (ctx) => {
  await ctx.editMessageText(
📖 *Help*

✅ Add me to a group
✅ Make me Admin (optional but best)
✅ Use commands:

/roast @user
/match
/bomb
/truth
/dare
/marry

Need help? Tap Support button.,
    { parse_mode: "Markdown" }
  );
});

// /help command too
bot.command("help", (ctx) => ctx.reply("Type /start and use buttons."));

bot.launch();
console.log("Bot running...");

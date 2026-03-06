const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "Welcome 👋\nPlease choose an option:",
    Markup.inlineKeyboard([
      [Markup.button.callback("🛒 Buy UC", "buy")],
      [Markup.button.callback("📦 My Orders", "orders")],
      [Markup.button.callback("🆘 Support", "support")]
    ])
  );
});

bot.action("buy", (ctx) => {
  ctx.reply(
    "Choose UC package:",
    Markup.inlineKeyboard([
      [Markup.button.callback("60 UC", "60")],
      [Markup.button.callback("325 UC", "325")],
      [Markup.button.callback("660 UC", "660")],
      [Markup.button.callback("1800 UC", "1800")]
    ])
  );
});

bot.action("orders", (ctx) => {
  ctx.reply("You don't have any orders yet.");
});

bot.action("support", (ctx) => {
  ctx.reply("Contact support: @YourUsername");
});

bot.launch();

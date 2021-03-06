const env = require('../.env') //para pegar o env
const Telegraf = require('telegraf') //para pegar o modulo telegraf
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token) //passando o env.token

const tecladoAnimais = Markup.keyboard([
    ['๐ถ cachorro','๐ฑ gato','๐ญ rato'],
    ['๐ฅ pintinho','๐ galo','๐ galinha'],
    ['๐ lula','๐ก baiacu','๐ peixe'],
    ['๐ ovelha','๐ porco','๐ macaco']
]).resize().extra()

bot.start(async ctx => {
    await ctx.reply(`Seja Bem Vindo!, ${ctx.update.message.from.first_name} ${ctx.update.message.from.last_name}!` )
    await ctx.reply(`Qual Bebida vocรช prefere? `, Markup.keyboard(['Coca Cola', 'Pepsi', 'Fanta', 'Cerveja']).resize().oneTime().extra())
})

bot.hears(['Coca Cola', 'Pepsi', 'Fanta', 'Cerveja'], async ctx => {
    await ctx.reply(`Nossa eu sรณ gosto de ${ctx.match}`)
    await ctx.reply(`Qual o seu animal favorito? `, tecladoAnimais)
})

bot.hears('๐ถ cachorro', ctx => ctx.reply(`O meu favorito รฉ: ๐ฑ gato`))
bot.hears('๐ฅ pintinho', ctx => ctx.reply(`O meu favorito รฉ: ๐ galinha`))
bot.hears('๐ก baiacu', ctx => ctx.reply(`A nรฃo! O ๐ก baiacu รฉ a cara do Bruno quando faz BARBA KKKKKKKK`))

bot.on('text', ctx => ctx.reply('Legal! Mais possuo outro animal favorito!'))

bot.startPolling()
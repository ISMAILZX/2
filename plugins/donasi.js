let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *XL:* [6288227606701]
┣➥ *Dana:* 6288227606701
┣➥ *Gopay:* 6288227606701
┣➥ *Ovo:* 6288227606701
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6288227606701*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

let handler = function (m) {
  // this.fakeReply(m.chat, 'This is my owner', '6281390658325@s.whatsapp.net', 'Owner')
  this.sendContact(m.chat, '6288227606701', 'Owner 1', m)
  this.sendContact(m.chat, '62895421438653', 'Owner Rifky', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler

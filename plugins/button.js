let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HALO KAK\nSaya RIFKY\nPilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam = Banned\nTelp = Blok\n\n\nJoin Group WhatsApp\nhttps://chat.whatsapp.com/EQ2PWiQXdW4GfRtqZUtr9n\nThanks",
                        "description": "*©NIGHTBOT_BY_RIFKY*\n*JANGAN HUJAT AKU BANG MASI PEMULA KOK*",
                        "buttonText": "PILIH SALAH SATU",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Download Menu`,
                                        "description": "\nMelihat Download Menu",
                                        "rowId": ".downloadmenu"
                                       
                                    },{
                                    	"title": "Semua Menu",
                                        "description": "\nMelihat Semua Menu",
                                        "rowId": ".allmenu"  
                                                       
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "\nMelihat Jadibot Menu",
                                        "rowId": ".jadibotmenu"  
                                                       
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\nMelihat Owner Menu",
                                        "rowId": ".ownermenu"                 
                                                                                                 
                                    },{
                                        "title": "Setting Grup Menu",
                                        "description": "\nMelihat Group Setting",
                                        "rowId": ".groupset"
                                                                        
                                    },{        
                                        "title": "Edukasi Menu",
                                        "description": "\nMelihat Edukasi Menu",
                                        "rowId": ".educationmenu"
                                        
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu','help']
handler.register = true
module.exports = handler
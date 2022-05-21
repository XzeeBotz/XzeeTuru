let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085707234413]
│ • Telkomsel [081381685954]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/MrclNotWibu
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

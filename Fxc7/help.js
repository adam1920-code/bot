
const help = (prefix, ig, name, uptime, pushname2, user, tanggal, jam) => { 
	return `
	
\`\`\`Follow My Instagram\`\`\`
${ig}

*INI ADALAH MENU SIMPLE YEONGSILL BOT
✘ ▬▬▬▬ ஜ۩۞۩ஜ ▬▬▬▬ ✘
        𝙇𝙞𝙨𝙩 𝘾𝙤𝙢𝙢𝙖𝙣𝙙
✘ ▬▬▬▬ ஜ۩۞۩ஜ ▬▬▬▬ ✘

● *#sticker*
● *_#gifstiker_*
● *_#music [judul]_*
● *_#lirik [judul]_*
● *_#ytmp3 [link yt]_*
● *_#hidetag_*
● *_#toimg_*
● *_#tagall_*
● *_#pinterest_*
● *_#ocr_*
● *_#wiki_*
● *_#spamcall [62831555555]_*
● *_#ytmp3 [link]_*
● *_#ytmp4 [link]_*
вσт ιηι ∂ιвυαт σℓєн:
A.D.A.M ✔
}
exports.help = help
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

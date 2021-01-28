
const help = (prefix, ig, name, uptime, pushname2, user, tanggal, jam) => { 
	return `
	
\`\`\`Follow My Instagram\`\`\`
${ig}

\`\`\`BLOG OFFICIAL\`\`\`
https://peoplepower107.blogspot.com


\`\`\`HARAP BACA NOTE DIBAWAH SEBELUM\`\`\`
\`\`\`MENGGUNAKAN BOT\`\`\`

┏━━━━━❬ *USER ${name}* ❭━━━━━━━⊱
┃╭───────────────────────
┃├➲ \`\`\`Hai\`\`\`👋 *${pushname2}*
┣━━━━━━━━━━━━━━━━━
┃├➲ \`\`\`I am\`\`\` *${name}*
┃╰───────────────────────
┃
┃╭───────────────────────
┃├➲ \`\`\`Total Pengguna:\`\`\` *${user.length} User*
┣━━━━━━━━━━━━━━━━━
┃├➲ \`\`\`Total Donasi:\`\`\` *0%* 🙂
┃╰───────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━❬ *REGULATION ${name}* ❭━━━━━━━⊱
┃
┣⊱❥ \`\`\`AKTIF\`\`\`: ${kyun(uptime)}
┣⊱❥ \`\`\`JAM\`\`\`: *${jam} WIB*
┣⊱❥ \`\`\`TANGGAL\`\`\`: *${tanggal}*
┣⊱❥ \`\`\`VERSION\`\`\`: *5.5 TERMUX*
┃
┣⊱❥ ❌ *SPAM*
┣⊱❥ ❌ *CALL & VC*
┃ \`\`\`Melanggar??\`\`\` *Banned*
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛

⟣━━━━━❬ *ABOUT ${name}* ❭━━━━━━⟢
╭────────────────────────
├⊱❥ *${prefix}music (judul lagu)
╰────────────────────────



⟣━━━━━━❬ *OWNER ONLY* ❭━━━━━━━⟢
╭────────────────────────
├⊱❥ *${prefix}addprem [mentioned]*
├⊱❥ *${prefix}removeprem [mention]*
├⊱❥ *${prefix}setppbot*
├⊱❥ *${prefix}bc*
├⊱❥ *${prefix}bcgc*
├⊱❥ *${prefix}ban*
├⊱❥ *${prefix}unban*
├⊱❥ *${prefix}block*
├⊱❥ *${prefix}unblock*
├⊱❥ *${prefix}clearall*
├⊱❥ *${prefix}delete*
├⊱❥ *${prefix}clone*
├⊱❥ *${prefix}getses*
├⊱❥ *${prefix}leave*
╰────────────────────────
╰────────────────────────


⟣━━━━━━❬ *SUPPORT ${name}* ❭━━━━━━⟢
╭────────────────────────
│
├➲ *ADAM OEY19*
├➲ *KEDUA ORANG TUA*
├➲ *MY DEVICE*
├➲ *WHATSAPP*
╰────────────────────────


┏━━━━━━━━❬ *NOTE ${name}* ❭━━━━━━━━━⊱
┃
┣⊱❥ \`\`\`Bot ini belum selesai sepenuhnya\`\`\`
┃ \`\`\`Masih dalam proses pengerjaan\`\`\`
┃ \`\`\`Jadi masih jarang aktif, dan\`\`\`
┃ \`\`\`Maaf Jika Ada Menu Yang Error\`\`\`
┃
┣⊱❥ \`\`\`Jika Lama Harap Ulangi Command\`\`\`
┃
┣⊱❥ *Gunakan Command Tanpa [ ]*
┃
┣⊱❥ \`\`\`Dan Jika Mengalami Error\`\`\`
┃ \`\`\`Harap Lapor Owner Dengan Cara\`\`\`
┃ *${prefix}report* \`\`\`apa pesan errornya\`\`\`
┃
┣⊱❥ \`\`\`Mau Invit Bot??lempar link,\`\`\`
┃ \`\`\`Kalo Gamau Donasi Follow Ig\`\`\`
┃ \`\`\`@adam_oey107\`\`\`
┃
┣⊱❥ \`\`\`Kalian Bisa Mempublish Quotes Kalian\`\`\`
┃ \`\`\`Jika Minat Hubungi Aja Owner Buat\`\`\`
┃ \`\`\`Mempublish\`\`\`
┃ \`\`\`Quotes Kalian,\`\`\`
┃ \`\`\`Dan Makasih Buat Temen" Yg Mau Di Public\`\`\`
┃ \`\`\`Quotesnya:)\`\`\`
┃
┣⊱❥ \`\`\`Kenapa Saya Tambahkan Fitur Premium\`\`\`
┃ \`\`\`You Know Lah Karna Fitur Tersebut Membutuhkan\`\`\`
┃ \`\`\` Kuota Banyak Untuk Mendownload Dan Mengirimkan\`\`\`
┃ \`\`\` Audio/ Video Yang Anda Minta\`\`\`
┃ \`\`\` Mohon Pengertiannya🙂\`\`\`
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`
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

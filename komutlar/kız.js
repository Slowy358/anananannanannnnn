const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "789006348695502848"); // KIZ RÖLÜ
  const kayıtlı3 = message.guild.roles.find(r => r.id === "789006348888965131"); // KIZ RÖLÜ
  const kayıtlı2 = message.guild.roles.find(r => r.id === "789006349924827156"); // KIZ RÖLÜ
  const misafir = message.guild.roles.find(r => r.id === "789006352425025537"); // KAYITSIZ RÖLÜ
  const log = message.guild.channels.find(c => c.id === "789006370354888724"); // LOG İD
  const tag = "✧";
  if(!message.member.roles.array().filter(r => r.id === "789006353897095189")[0]) { // KAYIT YETKİLİSİ
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    c.addRole(kayıtlı)
    c.addRole(kayıtlı3)
    c.addRole(kayıtlı2)
    c.removeRole(misafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
    const embed = new Discord.RichEmbed()
    .setAuthor("Kayıt Yapıldı")
    .addField(`Kaydı yapılan\n`, `${c.user.tag}`)
    .addField(`Kaydı yapan\n`, `${message.author.tag}`)
    .addField(`Yeni isim\n`, `${tag} ${nick} , ${yas}`)
    .setFooter("StarLite | Kayıt sistemi")
    .setColor("BLECK")
    log.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "kız",
  description: "gacı rolü verir",
  usage: "female"
};
   

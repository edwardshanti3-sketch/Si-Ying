import fs from 'fs'

const DB = './database/register.json'

let handler = async (m, { args }) => {
  let users = JSON.parse(fs.readFileSync(DB))
  let sender = m.sender

  if (users[sender]?.registered) {
    return m.reply('✅ Ya estás registrado.')
  }

  if (!args[0] || !args[0].includes('.')) {
    return m.reply(
`❌ Formato incorrecto

Usa:
.register Nombre.Edad

Ejemplo:
.register Dionebi-sama.18`
    )
  }

  let [name, age] = args[0].split('.')

  age = parseInt(age)
  if (!name || isNaN(age) || age < 5 || age > 100) {
    return m.reply('❌ Edad inválida.')
  }

  users[sender] = {
    name,
    age,
    registered: true,
    time: Date.now()
  }

  fs.writeFileSync(DB, JSON.stringify(users, null, 2))

  m.reply(
`✅ 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗢 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢

👤 Nombre: ${name}
🎂 Edad: ${age}
🤖 Bot: 𝗦𝗶 𝗬𝗶𝗻𝗴

¡Ya puedes usar todos los comandos! ⚡`
  )
}

handler.command = ['register', 'registrar']
export default handler
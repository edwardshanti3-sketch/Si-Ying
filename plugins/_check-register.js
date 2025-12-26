import fs from 'fs'

const DB = './database/register.json'

let handler = async (m, { isCommand }) => {
  if (!isCommand) return

  // comandos libres
  let free = ['register', 'help', 'menu']
  let command = m.text.slice(1).split(' ')[0]

  if (free.includes(command)) return

  let users = JSON.parse(fs.readFileSync(DB))
  let id = m.sender

  if (!users[id]) {
    throw `
⛔ NO ESTÁS REGISTRADO

📌 Usa:
.register Dionebi-sama.18

🤖 Bot: Si Ying
`
  }
}

export default handler
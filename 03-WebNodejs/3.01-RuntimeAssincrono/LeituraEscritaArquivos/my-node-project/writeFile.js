const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'anyTexto');
    console.log('Sucesso');
  } catch (error) {
      console.error(`errou; ${error.message}`)
  }

}

main()
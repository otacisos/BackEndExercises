const fs = require('fs').promises;

async function  main () {
  try {
    const data = await fs.readFile('./meu-arquivo', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Erro no sistema ${err.message}`);
  }
}

main()
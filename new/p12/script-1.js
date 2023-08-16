try {                             // Executa o código
    console.log('Executando...');
} catch (err) {                   // Executa quando houver erros no código
    console.log('Ops! Ocorreu um erro...');
} finally {                       // Sempre será executado
    console.log('O programa foi executado.');
}
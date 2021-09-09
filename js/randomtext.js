let frases = [
      "O mundo está nas mãos daqueles que têm a coragem de sonhar e correr o risco de viver seus sonhos.",
      "Perdi meu arco-íris agora está tudo preto e branco.",
      "Nada machuca mais do que lembranças de um sempre...",
      "Tudo na vida tem um começo um meio e um Foda-se!",
      "Bem vindo ao meu delirio de felicidade.",
      "Preferia não conhecer certas coisas da vida.",
      "Tava bom demais pra ser verdade.",
      "Algums chamam de \"drama\" eu digo de \"Inferno pessoal\"", 
      "É claro que a vida é boa ... tenho tudo para ser feliz Mas acontece que eu sou triste…",
      "Você sabe o que sente\nmas finge não sentir nada\npara tentar não sentir."
]

function getText() {
      var frase = frases[Math.floor(Math.random()*frases.length)];

      return frase
}
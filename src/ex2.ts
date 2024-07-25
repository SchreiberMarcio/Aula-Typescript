type NotaPeso = {
    nota: number;
    peso: number;
  };
  
  type ResultadoSimples = {
    media: number;
    aprovado: boolean;
  };
  
  type ResultadoMediaPonderada = {
    mediaPonderada: number;
    aprovado: boolean;
  };
  
  function calcularMediaSimples(nota1: number, nota2: number): ResultadoSimples {
    const media = (nota1 + nota2) / 2;
    const aprovado = media >= 6;
    
    return {
      media,
      aprovado
    };
  }
  
  function calcularMediaPonderada(notasPesos: NotaPeso[]): ResultadoMediaPonderada {
    let somaNotasPesos = 0;
    let somaPesos = 0;
  
    for (const np of notasPesos) {
      somaNotasPesos += np.nota * np.peso;
      somaPesos += np.peso;
    }
  
    const mediaPonderada = somaNotasPesos / somaPesos;
    const aprovado = mediaPonderada >= 6;
  
    return {
      mediaPonderada,
      aprovado
    };
  }
  
  
  const resultadoSimples = calcularMediaSimples(7, 5);
  console.log('Resultado Simples:', resultadoSimples.media.toFixed(2));
  const notasPesos: NotaPeso[] = [
    { nota: 7, peso: 2 },
    { nota: 5, peso: 3 },
    { nota: 8, peso: 1 }
  ];
  
  const resultadoPonderado = calcularMediaPonderada(notasPesos);
  console.log('Resultado Ponderado:', resultadoPonderado.mediaPonderada.toFixed(2)); 
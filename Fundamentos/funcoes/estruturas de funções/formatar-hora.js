function formataHora (hora, formatador) {
//   return `${hora}:00`;
  if (!formatador) {
    return `${hora}:00h`;
  }
  if (formatador.formato === 12) {
    const horaformatada = hora <= 12 ? hora : hora - 12;
    return `${horaformatada}:00${formatador.h ? 'h' : ''}  `;
  }
}

console.log(formataHora(20, { formato: 12, h: false }));
console.log(formataHora(20, { formato: 12, h: true }));
console.log(formataHora(20));

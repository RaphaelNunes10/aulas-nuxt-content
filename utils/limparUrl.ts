export default (texto: string) => {
  // Retorna o texto com espaço no lugar do "-"
  return texto.replace(/-/g, ' ');
}

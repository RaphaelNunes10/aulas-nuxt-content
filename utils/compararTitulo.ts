export default (lista: {title: string, [key: string]: any }[] | null, rotaUrl: string) => {
  // Retorna o item da lista cuja propriedade "title" equivale à string "rotaUrl"
  return lista?.find(({ title }) => title.toUpperCase() === rotaUrl.toUpperCase());
}

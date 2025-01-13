
export const useConteudo = (rotaMateria: string | string [] = '', rotaModulo: string | string [] = '', rotaAula: string | string [] = '') => {
  
  /**
  * As funções utilitárias "limparUrl" e "CompararTitulo" se senocontram dentro da pasta "utils", são nomeadas de acordo com o nome do arquivo e são automaticamente importadas pelo Nuxt 
  * Funções também podem ser definidas dentro da composable e exportadas assim como as variáveis, se necessário
  * 
  * Ex.:
  * const limparUrl = (texto: string) => texto.replace(/-/g, ' ');
  * const compararTitulo = (objeto: NavItem[] | null, tituloRota: string) => objeto?.find(({ title }) => title.toUpperCase() === tituloRota.toUpperCase());
  */
  
  // Titulo das páginas extraidos da URL através das rotas dinâmicas [rotaMateria], [rotaModulo] e [rotaAula] passados como parâmetro da composable
  const tituloMateria = computed(() => limparUrl(rotaMateria as string));
  const tituloAula = computed(() => limparUrl(rotaAula as string));
  const tituloModulo = computed(() => limparUrl(rotaModulo as string));
  
  /**
  * useAsyncData: Captura dados no servidor, antes de enviar para o navegador do cliente (com SSR ativo nas configurações do Nuxt)
  * fetchContentNavigation: Retorna objeto contendo informações dos item dentro da pasta "content" em "data", no caso renomeado para "conteudo"
  */
  const { data: materias } = useAsyncData('materias', () => fetchContentNavigation());

  // Array de objetos reativos da matéria atual encontrada dentro de um dos filhos de "materias" cujo titulo é comparado à variavel "tituloMateria"
  const materiaAtual = computed(() => compararTitulo(materias.value, tituloMateria.value));

  // Objeto reativo contendo todos os módulos, filhos de "materiaAtual"
  const modulos = computed(() => materiaAtual.value?.children!);

  // Array de objetos reativos do módulo atual encontrado dentro de um dos filhos de "modulos" cujo titulo é comparado à variavel "tituloModulo"
  const moduloAtual = computed(() => compararTitulo(modulos.value, tituloModulo.value));

  // Objeto reativo contendo todos as aulas, filhas de "moduloAtual"
  const aulas = computed(() => moduloAtual.value?.children!);
  
  return { tituloMateria, tituloAula, tituloModulo, materias, materiaAtual, modulos, moduloAtual, aulas };
}

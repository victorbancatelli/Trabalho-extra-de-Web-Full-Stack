
//Banco de dados em memória   
let tarefas = [];
let id = 1; 

export async function getTarefa(req, res) {
  const { id } = req.params;
  const tarefa = tarefas.find(t => t.id == id); // Encontra a tarefa

  if (!tarefa) {
      // Se não encontrar, retorna 400
      return res.status(400).json({ erro: "Tarefa não encontrada" });
  }
  
  // CORRIGIDO: Se encontrar, retorna APENAS a variável 'tarefa'
  res.json(tarefa); 
}

export async function getTarefas(req, res) {
  // Retorna a lista inteira de tarefas
  res.json(tarefas);
}


export async function createTarefa(req, res) {
  const { titulo, feito } = req.body;
    if (!titulo || !feito) {
      return res.status(400).json({ erro: "Título e feito obrigatório" });
    }

  const feitoSimNao = feito.toLowerCase();
  if (feitoSimNao !== "sim" && feitoSimNao !== "não") {
      return res.status(400).json({ erro: "O campo 'feito' deve ser 'sim' ou 'não'" });
  }
  const tarefaExistente = tarefas.find(t => t.titulo.toLowerCase() === titulo.toLowerCase());
  
  if (tarefaExistente) {
    return res.status(409).json({ erro: "Já existe uma tarefa com este título" });
  }
     const nova = { id: id++, titulo, feito: feitoSimNao };
      tarefas.push(nova);
      res.status(201).json(nova);
};

export async function updateTarefa(req, res) {
  const { id } = req.params;
  const { titulo, feito } = req.body;
  
  // Tenta encontrar a tarefa.
  let tarefa = tarefas.find(t => t.id == id);
  // Se a tarefa não for encontrada, retorna 404.
  if (!tarefa) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
  }
  // 2. Verifica se o usuário mudou algo
  if (!titulo && !feito) {
      // Usa 500 conforme sua solicitação (embora 400 Bad Request seja mais adequado).
      return res.status(500).json({ erro: "É necessário fornecer um novo título ou feito para a atualização" });
  }
  // 3. Validação e preparação do campo 'feito', se ele foi enviado.
  let feitoParaAtualizar;
  if (feito) {
      feitoParaAtualizar = feito.toLowerCase();
      
      // Verifica se o valor é 'sim' ou 'não'.
      if (feitoParaAtualizar !== "sim" && feitoParaAtualizar !== "não") {
          return res.status(400).json({ erro: "O campo 'feito' deve ser 'sim' ou 'não'" });
      }
  }
  
  // Atualiza o título se um novo foi fornecido no corpo da requisição.
  if (titulo) {
      tarefa.titulo = titulo;
  }
  // Atualiza o 'feito' se um novo valor válido foi preparado.
  if (feitoParaAtualizar) {
      tarefa.feito = feitoParaAtualizar;
  }

  // 5. Retorna a tarefa atualizada.
  res.json(tarefa);
}

export async function deleteTarefa(req, res) {
  const { id } = req.params;
  tarefas = tarefas.filter(t => t.id != id);
  res.json({ msg: "Tarefa removida" });
};
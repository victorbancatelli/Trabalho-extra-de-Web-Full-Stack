
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
  res.json(tarefa); 
}

export async function getTarefas(req, res) {
  // Retorna a lista inteira de tarefas
  res.json(tarefas);
}


export async function createTarefa(req, res) {
  const { titulo, feito } = req.body;
//verifica se o usuário colocou os campos obrigatórios
    if (!titulo || !feito) {
      return res.status(400).json({ erro: "Título e feito obrigatório" });
    }
//feito para o usuário colocar sim ou não e verifica se o usuário colocou algo diferente
  const feitoSimNao = feito.toLowerCase();
  if (feitoSimNao !== "sim" && feitoSimNao !== "não") {
      return res.status(400).json({ erro: "O campo 'feito' deve ser 'sim' ou 'não'" });
  }
  const tarefaExistente = tarefas.find(t => t.titulo.toLowerCase() === titulo.toLowerCase());
  //verifica se o usuário colocou o nome de uma tarefa que já existe
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
  //Verifica se o usuário deixou de atualizar o título ou o feito.
  if (!titulo && !feito) {

      return res.status(500).json({ erro: "É necessário fornecer um novo título ou feito para a atualização" });
  }
  //Guarda a atualização do feito
  let feitoParaAtualizar;
  if (feito) {
      feitoParaAtualizar = feito.toLowerCase();
      
//Verifica se o usuário colocou sim ou não.
      if (feitoParaAtualizar !== "sim" && feitoParaAtualizar !== "não") {
          return res.status(400).json({ erro: "O campo 'feito' deve ser 'sim' ou 'não'" });
      }
  }
  
  // Atualiza o título 
  if (titulo) {
      tarefa.titulo = titulo;
  }
  // Atualiza o feito
  if (feitoParaAtualizar) {
      tarefa.feito = feitoParaAtualizar;
  }

  //Retorna a tarefa atualizada.
  res.json(tarefa);
}

export async function deleteTarefa(req, res) {
  const { id } = req.params;
//deleta a tarefa
  tarefas = tarefas.filter(t => t.id != id);
  res.json({ msg: "Tarefa removida" });
};
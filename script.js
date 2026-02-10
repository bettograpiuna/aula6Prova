let tarefas = ["Estudar JavaScript", "Praticar Funções", "Revisar Callbacks"];

const adicionarTarefa = function(novaTarefa) {
    if (novaTarefa && novaTarefa.trim() !== "") {
        tarefas.push(novaTarefa);
        console.log(`✅ Sucesso: "${novaTarefa}" foi adicionada à lista.`);
    } else {
        console.log("⚠️ Erro: Não é possível adicionar uma tarefa vazia.");
    }
};


const listarTarefas = () => {
    console.log("\n--- LISTA ATUAL DE TAREFAS ---");
    if (tarefas.length === 0) {
        console.log("A lista está vazia.");
    } else {
        tarefas.forEach((tarefa, index) => {
            console.log(`[${index}] ${tarefa}`);
        });
    }
    console.log("------------------------------\n");
};

const gerenciarLista = (callback) => {
    callback(); 
    listarTarefas();
};

document.getElementById('btnIniciar').addEventListener('click', () => {
    console.clear();
    console.log("🚀 Sistema de Tarefas Iniciado!");
    listarTarefas();

    const opcao = prompt(
        "Escolha uma operação:\n" +
        "1 - Adicionar Tarefa\n" +
        "2 - Remover Tarefa (por índice)\n" +
        "3 - Atualizar Tarefa\n" +
        "4 - Listar no Console"
    );

    switch (opcao) {
        case "1":
            const novoNome = prompt("Digite o nome da nova tarefa:");
            adicionarTarefa(novoNome);
            listarTarefas();
            break;

        case "2":
            const idxRemover = parseInt(prompt("Digite o índice da tarefa que deseja remover:"));
            gerenciarLista(() => {
                if (tarefas[idxRemover] !== undefined) {
                    const removida = tarefas.splice(idxRemover, 1);
                    console.log(`🗑️ Removida com sucesso: ${removida}`);
                } else {
                    alert("Erro: Índice não encontrado!");
                }
            });
            break;

        case "3":
            const idxAtualizar = parseInt(prompt("Digite o índice da tarefa que deseja alterar:"));
            if (tarefas[idxAtualizar] !== undefined) {
                const textoAtualizado = prompt("Digite o novo texto para esta tarefa:");
                gerenciarLista(() => {
                    tarefas[idxAtualizar] = textoAtualizado;
                    console.log("🔄 Tarefa atualizada!");
                });
            } else {
                alert("Erro: Índice não encontrado!");
            }
            break;

        case "4":
            listarTarefas();
            break;

        default:
            alert("Operação cancelada ou inválida.");
            break;
    }
});
const prompt = require('prompt-sync')({sigint: true});

let consultas = [];

while (true) {
    console.log(`
    1. Adicionar uma nova consulta
    2. Listar todas as consultas
    3. Atualizar uma consulta
    4. Cancelar uma consulta
    0. Sair
    `);

    let opcao = prompt('Escolha uma opção: ');

    if(opcao === '1') {
        let paciente = prompt('Nome do paciente: ');
        let medico = prompt('Nome do médico: ');
        let data = prompt('Data da consulta: ');
        let horario = prompt('Horario da consulta: ')

        consultas.push({ paciente, medico, data, horario });
        console.log('Consulta adicionada com sucesso!', consultas);
    } else if (opcao === '2') {
        if (consultas.length === 0) {
            console.log('Nenhuma consulta agendada.');
            break;
        } else {
            consultas.forEach((consultas, index) => {
                console.log(
                    `${index + 1}. Paciente: ${consultas.paciente} - Médico: ${consultas.medico} - Data: ${consultas.data} - Horário: ${consultas.horario}`
                );
            });
        }
    } else if (opcao === '0') {
        console.log('Saindo do sistema. Até logo!');
        break;

    } else if (opcao === '3') {
        if (consultas.lenght === 0) {
            console.log('Nenhuma consulta agendada.');
        } else {
        consultas.forEach((consultas, index) => {
            console.log(
                `${index + 1}. Paciente: ${consultas.paciente} - Médico: ${consultas.medico} - Data: ${consultas.data} - Horário: ${consultas.horario}`
            );
        });
        let editar = prompt('Qual numero de consulta deseja editar? ');
        index = editar-1;
        let dados = prompt('Você deseja editar algum dado? ');
            if(dados == 'sim'){
            console.log(`
            Qual dado você deseja editar?
            1 - Paciente.
            2 - Médico.
            3 - Data.
            4 - Horário.
            0 - Sair.
            `);

            let edit_dados = prompt('Opção: ');

            if(edit_dados === '1') {
                let novo_paciente = prompt('Qual é o nome do paciente? ');
                consultas[index].paciente = novo_paciente;
            } else if (edit_dados === '2') {
                let novo_medico = prompt('Qual é o nome do médico? ');
                consultas[index].medico = novo_medico;
            } else if (edit_dados === '3') {
                let nova_data = prompt('Qual é a data? ')
                consultas[index].data = nova_data;
            } else if (edit_dados === '4') {
                let novo_horario = prompt('Qual é o horário? ');
                consultas[index].horario = novo_horario;
            } else if ( edit_dados === '0'){
                console.log('Até logo!')
                break;
            }
            }else if (dados == 'nao') {
                console.log('Até logo!');
                break;
            }
        }
    } else if (opcao === '4') {
        if (consultas.length === 0) {
            console.log('Nenhuma consulta agendada.');
            break;
        } else {
            consultas.forEach((consultas, index) => {
                console.log(
                    `${index + 1}. Paciente: ${consultas.paciente} - Médico: ${consultas.medico} - Data: ${consultas.data} - Horário: ${consultas.horario}`
                );
            });
        } 
        
        let cancelar = prompt('Qual numero de consulta deseja cancelar? ');
        if(cancelar === '0'){
            console.log('\n Não existe consulta n.0');
        } else if (cancelar > consultas.length){
            console.log('\n Digite um consulta valida!');
        } else {
        index = cancelar - 1;
        consultas.splice(index, 1);
        console.log('\n Consulta cancelada!');
        }
    } else if (opcao === '0') {
        console.log('Até logo!');
        break;
    } else {
        console.log('Opção invalida, digite uma opção valida!');
    }
}
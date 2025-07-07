import mensagens from '../../fixtures/mensagens.json';

class DeleteItems {

	go(){
		cy.visit('/tarefas');
	}

    clickFirstTask(){
	    cy.get('li').first().contains('Excluir').click();
    }

	submit(){	
		cy.contains('button', 'Excluir').click();
	}

    mensagemExcluir(){
        cy.contains(mensagens.mensagemTarefaExcluida).should('be.visible');
    }

}

export default new DeleteItems()
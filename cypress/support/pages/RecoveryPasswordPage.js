import mensagens from '../../fixtures/mensagens.json';

class RecoveryPasswordPage {

	go(){
		cy.visit('/recuperar-senha');
	}

    clickPasswordRecovery(){
        cy.contains('Esqueci minha senha').click();
    }

	fill(email){
		cy.get('[data-cy=botao-recuperar]').clear({force: true}).type(email);
	}
	submit(){	
		cy.contains('button', 'Recuperar').click();
	}

    mensagemRecuperacao(){
        cy.contains(mensagens.mensagemRecuperacao).should('be.visible');
    }

}

export default new RecoveryPasswordPage()
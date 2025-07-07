import mensagens from '../../fixtures/mensagens.json';

class NewUserPage {

	constructor() {
		this.usuario = {
			nome: faker.person.fullName(),
			email: faker.internet.email(),
			senha: "123123",
		}
	}

	go(){
		cy.visit('/cadastro');
	}

	fill(){
		cy.get('#nome').type(this.usuario.nome);
		cy.get('#email').type(this.usuario.email);
		cy.get('#senha').type(this.usuario.senha);

	}
	submit(){	
		cy.contains('button', 'Cadastrar').click();
	}

    mensagemSucesso(){
        cy.contains(mensagens.mensagemCadastro).should('be.visible');
    }
	

}

export default new NewUserPage()
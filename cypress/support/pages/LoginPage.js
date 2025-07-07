import usuario from '../../fixtures/usuario.json';

class LoginPage {
	go(){
		cy.visit('/')
	}

	fill(email, password){
		cy.get('input[name=email]').clear({force: true}).type('email')
		cy.get('input[name=password]').clear({force: true}).type('password')

	}
	submit(){	
		cy.contains('button', 'Entrar').click()
	}

	doLogin(email, password){
		this.fill(email, password)
		this.submit()
	}

}

export default new LoginPage()
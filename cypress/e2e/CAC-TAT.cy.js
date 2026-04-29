describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.visit('./src/index.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios', () => {
    cy.get('input[name="firstName"]')
      .as('firstNameField')
      .should('be.visible')
      .type('Homer')

    cy.get('input[name="lastName"]')
      .as('lastNameField')
      .should('be.visible')
      .type('Sampsen')

    cy.get('input[id="email"]')
      .as('emailField')
      .should('be.visible')
      .type('sampsen@gmail.com')

    cy.get('textarea[id="open-text-area"]')
      .as('descriptionField')
      .should('be.visible')
      .type('blalbllablablabalalblaablbalablbllabablbalalalbbalbalblalalblballalbalallablaaaaaaaaaaaaaaablablalblalllaallbalalblalballalbalblabllbalabllbllaallaalbalbalbalblaabllbalbalablabl', {delay: 125})
  })
  it('clica no botão enviar', () => {
    cy.get('button[type="submit"]')
      .as('botaoEnviar')
      .should('be.visible')
      .click()
  })

  it('verificar se a mensagem foi enviada com sucesso', () => {

    cy.get('span[class="success"]')
      .should('be.visible')

  })
}) 
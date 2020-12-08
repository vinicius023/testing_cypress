Cypress.Screenshot.defaults({
  screenshotOnRunFailure: false
})

describe('Pokemon API', () => {
  it('should return status 200', () => {
    const pokemon0 = cy.request('POST', 'http://pokeapi.co/api/v2/pokemon/1/')
    
    pokemon0.its('status')
      .should('be.eql', 200)

    const pokemon = cy.request('POST', 'http://pokeapi.co/api/v2/pokemon/1/')

    pokemon.its('body.forms')
      .each(value =>
        expect(value.name).to.eq('bulbasaur')
      )
      const pokemon2 = cy.request('POST', 'http://pokeapi.co/api/v2/pokemon/13/')

    pokemon2.its('body.forms')
      .each(value =>
        expect(value.name).to.eq('weedle')
      )
      const pokemon3 = cy.request('POST', 'http://pokeapi.co/api/v2/pokemon/3/')

    pokemon3.its('body.forms')
      .each(value =>
        expect(value.name).to.eq('asdasd')
      )
  })

  it('should not return any', () => {
    const pokemon = cy.request('POST', 'http://pokeapi.co/api/v2/pokemon/20/')

    pokemon.its('body.forms')
      .each(value =>
        expect(value.name).to.eq('any')
      )
  })
})

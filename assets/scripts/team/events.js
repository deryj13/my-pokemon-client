'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetPokemon = (event) => {
  // event.preventDefault()
  api.getPokemon()
    .then(ui.getPokemonSuccess)
    .catch(ui.getPokemonFailure)
}

const onAddPokemon = (event) => {
  // event.preventDefault()
  const pokemonId = $(event.target).data('id')
  api.addPokemon(pokemonId)
    .then(ui.addPokemonSuccess(pokemonId))
    .catch(ui.addPokemonFailure)
}

const onGetTeam = (event) => {
  // event.preventDefault()
  api.getTeam()
    .then(ui.getTeamSuccess)
    .catch(ui.getTeamFailure)
}

const onRemovePokemon = (event) => {
  const teamId = $(event.target).data('id')
  console.log(teamId)
  api.removePokemon(teamId)
    .then(ui.removePokemonSuccess)
    .catch(ui.removePokemonFailure)
}

const addHandlers = () => {
  $('#view-pokemon').on('click', onGetPokemon)
  $('#view-team').on('click', onGetTeam)
  $('body').on('click', '.add-pokemon', onAddPokemon)
  $('body').on('click', '.remove-pokemon', onRemovePokemon)
}

module.exports = {
  addHandlers
}

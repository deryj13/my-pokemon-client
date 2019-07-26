'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

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

const onAddNickname = (event) => {
  event.preventDefault()
  const form = event.target
  const teamData = getFormFields(form)
  const teamId = $(event.target).data('team')
  const pokemonId = $(event.target).data('pokemon')
  const pokemonName = $(event.target).data('name')
  api.addNickname(teamData, teamId, pokemonId)
    .then(ui.addNicknameSuccess(teamData, pokemonName))
    .catch(ui.addNicknameFailure)
}

const onRemovePokemon = (event) => {
  const teamId = $(event.target).data('team')
  console.log(teamId)
  api.removePokemon(teamId)
    .then(ui.removePokemonSuccess)
    .catch(ui.removePokemonFailure)
}

const addHandlers = () => {
  $('#view-pokemon').on('click', onGetPokemon)
  $('#view-team').on('click', onGetTeam)
  $('body').on('click', '.add-pokemon', onAddPokemon)
  $('body').on('submit', '.nickname-pokemon', onAddNickname)
  $('body').on('click', '.remove-pokemon', onRemovePokemon)
}

module.exports = {
  addHandlers
}

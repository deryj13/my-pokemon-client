'use strict'

const showPokemonTemplate = require('../templates/pokemon-index.handlebars')
const showTeamTemplate = require('../templates/team-index.handlebars')

const success = message => {
  $('#teamMessage').text(message)
  $('#teamMessage').removeClass('failure')
  $('#teamMessage').addClass('success')
}

const failure = message => {
  $('#teamMessage').text(message)
  $('#teamMessage').removeClass('success')
  $('#teamMessage').addClass('failure')
}

const getPokemonSuccess = (data) => {
  const showPokemonHtml = showPokemonTemplate({ pokemons: data.pokemons })
  $('.content').removeClass('hide')
  $('.content').html(showPokemonHtml)
  success('Available Pokemon')
}

const getPokemonFailure = () => {
  failure('Unable to retrieve Pokemon')
}

const addPokemonSuccess = () => {
  $('#teamMessage').text(`successfully added pokemon to team!`)
}

const addPokemonFailure = () => {
  $('#teamMessage').text(`unable to add pokemon to team!`)
}

const getTeamSuccess = (data) => {
  const showTeamHtml = showTeamTemplate({ teams: data.teams })
  $('.content').html(showTeamHtml)
  $('.content').removeClass('hide')
  success('Current Team!')
}

const getTeamFailure = () => {
  failure('Team Not Available!')
}

const addNicknameSuccess = (teamData, pokemonName) => {
  $('.content').addClass('hide')
  success(`you've changed ${pokemonName}'s name to ${teamData.team.nickname} `)
}

const addNicknameFailure = () => {
  failure('unable to nickname pokemon')
}

const removePokemonSuccess = () => {
  success('successfully removed pokemon from the team!')
}

const removePokemonFailure = () => {
  failure('not able to remove pokemon from the team!')
}

module.exports = {
  getPokemonSuccess,
  getPokemonFailure,
  addPokemonSuccess,
  addPokemonFailure,
  getTeamSuccess,
  getTeamFailure,
  addNicknameSuccess,
  addNicknameFailure,
  removePokemonSuccess,
  removePokemonFailure
}

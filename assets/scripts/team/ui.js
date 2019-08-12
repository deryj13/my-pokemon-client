'use strict'

const showPokemonTemplate = require('../templates/pokemon-index.handlebars')
const showTeamTemplate = require('../templates/team-index.handlebars')

const clearMessaging = function () {
  setTimeout(function () {
    $('#teamMessage').text('')
  }, 3000)
}

const success = message => {
  $('#teamMessage').text(message)
  $('#teamMessage').removeClass('failure')
  $('#teamMessage').addClass('success')
  clearMessaging()
}

const failure = message => {
  $('#teamMessage').text(message)
  $('#teamMessage').removeClass('success')
  $('#teamMessage').addClass('failure')
  clearMessaging()
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
  $('.content').addClass('hide')
  $('#teamMessage').text(`you already have 6 pokemon! remove a pokemon!`)
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

'use strict'

const config = require('../config')
const store = require('../store')

const getPokemon = function () {
  return $.ajax({
    url: config.apiUrl + '/pokemons'
  })
}

const addPokemon = function (pokemonId) {
  return $.ajax({
    url: config.apiUrl + '/teams',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'team': {
        'user_id': store.user.id,
        'pokemon_id': pokemonId
      }
    }
  })
}

const getTeam = function () {
  return $.ajax({
    url: config.apiUrl + '/teams',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addNickname = function (teamData, teamId, pokemonId) {
  return $.ajax({
    url: config.apiUrl + '/teams/' + teamId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'team': {
        'user_id': store.user.id,
        'pokemon_id': pokemonId,
        'nickname': teamData.team.nickname
      }
    }
  })
}

const removePokemon = function (teamId) {
  return $.ajax({
    url: config.apiUrl + '/teams/' + teamId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getPokemon,
  addPokemon,
  getTeam,
  removePokemon,
  addNickname
}

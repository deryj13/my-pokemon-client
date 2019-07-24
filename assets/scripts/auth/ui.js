'use strict'

const store = require('../store')

const successMessage = message => {
  $('#authMessage').text(message)
  $('#authMessage').removeClass('failure')
  $('#authMessage').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#authMessage').text(message)
  $('#authMessage').removeClass('success')
  $('#authMessage').addClass('failure')
  $('form').trigger('reset')
}

const signUpSuccessful = () => {
  successMessage('You signed up successfully!')
}

const signUpFailure = () => {
  failureMessage('Something went wrong, try another email :(')
}

const signInSuccessful = responseData => {
  $('#change-password').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#sign-in').addClass('hide')
  $('#sign-up').addClass('hide')
  successMessage(`You're logged in :)`)
  store.user = responseData.user
}

const signInFailure = () => {
  failureMessage(`failed login attempt, check credentials!`)
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure
}

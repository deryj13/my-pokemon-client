'use strict'

const store = require('../store')

const clearMessaging = function () {
  setTimeout(function () {
    $('#authMessage').text('')
  }, 3000)
}

const successMessage = message => {
  $('#authMessage').text(message)
  $('#authMessage').removeClass('failure')
  $('#authMessage').addClass('success')
  $('form').trigger('reset')
  clearMessaging()
}

const failureMessage = message => {
  $('#authMessage').text(message)
  $('#authMessage').removeClass('success')
  $('#authMessage').addClass('failure')
  $('form').trigger('reset')
  clearMessaging()
}

const signUpSuccessful = () => {
  successMessage('you have signed up successfully!')
}

const signUpFailure = () => {
  failureMessage('sign up failure, try another email')
}

const signInSuccessful = responseData => {
  $('#change-password').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#view-pokemon').removeClass('hide')
  $('#view-team').removeClass('hide')
  $('#sign-in').addClass('hide')
  $('#sign-up').addClass('hide')
  successMessage(`you're currently logged in`)
  store.user = responseData.user
}

const signInFailure = () => {
  failureMessage(`failed login attempt, check credentials!`)
}

const changePassSuccessful = responseData => {
  successMessage('password successfully changed')
}

const changePassFailure = () => {
  failureMessage('unable to update password')
}

const signOutSuccessful = () => {
  $('#change-password').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#view-pokemon').addClass('hide')
  $('#view-team').addClass('hide')
  $('.content').addClass('hide')
  $('#teamMessage').addClass('hide')
  $('#sign-in').removeClass('hide')
  $('#sign-up').removeClass('hide')
  successMessage(`sign out successful, see you again trainer!`)
}

const signOutFailure = () => {
  failureMessage(`unable to sign out`)
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePassSuccessful,
  changePassFailure,
  signOutSuccessful,
  signOutFailure
}

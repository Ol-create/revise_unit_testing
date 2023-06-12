
module.exports.send = function(email, subject) {
  console.log('Sending an email...');

  return {email, subject}
}
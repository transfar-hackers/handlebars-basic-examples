const handlebars = require('handlebars')

module.exports = function(people, options) {
  return new handlebars.SafeString(`
  <span>${people.greeting} from helper!</span>
                                   `)

}

/**
 * A simple class to generate greetings.
 */
class Greeter {
  /**
   * Generates a greeting for the given name.
   *
   * @param {string} name - The name of the person to greet.
   * @returns {string} A full greeting message.
   */
  greet (name) {
    if (!name) {
      return 'Please provide a name.'
    }
    const timeOfDay = this._getGreetingTime() // Calls the private method
    return `Good ${timeOfDay}, ${name}!`
  }

  /**
   * @private
   *
   * Determines the time of day for a more personalized greeting.
   * In modern JavaScript (and Node.js), the '#' prefix denotes a private class field or method.
   * VRPC however, currently only supports the '_' prefix.
   *
   * @returns {string} 'morning', 'afternoon', or 'evening'.
   */
  _getGreetingTime () {
    const hour = new Date().getHours()
    if (hour < 12) {
      return 'morning'
    } else if (hour < 18) {
      return 'afternoon'
    } else {
      return 'evening'
    }
  }
}
module.exports = Greeter

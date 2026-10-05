#  Currency Converter

A dynamic and responsive Currency Converter web application that provides real-time exchange rates. Built with vanilla JavaScript, it fetches live data from an external API and updates country flags dynamically based on the selected currency.

**Key Features**
* **Live Exchange Rates:** Fetches accurate, real-time conversion rates using the Frankfurter API.
* **Dynamic Flags:** Automatically updates country flags using FlagsAPI whenever a user selects a new currency.
* **Swap Functionality:** Instantly swap the "From" and "To" currencies (including their flag images) with a single click on the double-arrowed icon.
* **Smart Reset:** Clear button resets the form and returns the UI to default states (USD to INR).
* **Responsive Design:** Clean, user-friendly interface.

**Tech Stack**
* HTML5
* CSS3
* JavaScript (ES6+, async/await, fetch API, DOM manipulation)

**APIs Used**
* [Frankfurter API](https://www.frankfurter.app/) - For live currency exchange rates.
* [Flags API](https://flagsapi.com/) - For rendering country flag images.

**How to Run This Project**
1. Clone this repository to your local machine: `git clone https://github.com/piyushmathur153/Currency-Converter.git`
2. Open the project folder in VS Code.
3. Open `main.html` in your web browser (or use the VS Code Live Server extension).
4. Enter an amount, select your currencies, and click "Get Conversion Rate".

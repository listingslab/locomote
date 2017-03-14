/**
 * Created by Chris Dorward on 12/03/2017
 * src/InputControls
 */

class InputControls {
  constructor(app) {
    this.app = app;
    this.setupTypeaheads();
    this.setupDatepicker();
    this.setupFormSubmit();
    $('#input-airport-from').focus();
  }

  setupTypeaheads() {
    // Setup the Airport selector typeaheads
    $('#input-airport-from').typeahead({
      onSelect() {
        $('#input-airport-to').focus();
      },
      ajax: {
        url: `/airports?q=${$('#input-airport-from').val()}`,
        timeout: 500,
        displayField: 'displayField',
        valueField: 'airportCode',
        triggerLength: 3,
        items: 25,
        method: 'GET'
      }
    });
    $('#input-airport-from').change(function () {
      this.validateFromAirport();
    }.bind(this));

    $('#input-airport-to').typeahead({
      onSelect() {
        $('#flight-date').focus();
      },
      ajax: {
        url: `/airports?q=${$('#input-airport-from').val()}`,
        timeout: 500,
        displayField: 'displayField',
        valueField: 'airportCode',
        triggerLength: 2,
        method: 'GET'
      }
    });
    $('#input-airport-to').change(function () {
      this.validateToAirport();
    }.bind(this));
  }

  setupDatepicker() {
    // Setup the date picker for the flight
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    // const minDate = moment(today).add(2, 'days')
    // MMMM Do YYYY
    $('#flight-date').datetimepicker({
      format: 'YYYY-MM-DD',
      minDate: today
    });
    $('#flight-date').on('dp.hide', function () {
      $('#btn-search-flight').focus();
    });
  }

  setupFormSubmit() {
    // Setup form submission on enter key press and form submit
    document.onkeydown = function pressEnter() {
      if (window.event.keyCode === '13') {
        this.submitForm();
        return false;
      }
      return true;
    }.bind(this);
    $('#flight-search-form').on('submit', function () {
      this.submitForm();
      return false;
    }.bind(this));
  }

  validateFromAirport() {
    let fromAirportValid = true;
    if ($('#input-airport-from').val()[0] === '(' && $('#input-airport-from').val()[4] === ')') {
      $('#input-airport-from').removeClass('input-error');
    } else {
      fromAirportValid = false;
      $('#input-airport-from').addClass('input-error');
    }
    return fromAirportValid;
  }

  validateToAirport() {
    let toAirportValid = true;
    if ($('#input-airport-to').val()[0] === '(' && $('#input-airport-to').val()[4] === ')') {
      $('#input-airport-to').removeClass('input-error');
    } else {
      toAirportValid = false;
      $('#input-airport-to').addClass('input-error');
    }
    return toAirportValid;
  }

  validateDate() {
    let dateValid = true;
    if ($('#flight-date').val() === '') {
      dateValid = false;
      $('#flight-date').addClass('input-error');
    } else {
      $('#flight-date').removeClass('input-error');
    }
    return dateValid;
  }

  submitForm() {
    // Validate form and then start the search
    if (this.validateFromAirport() && this.validateToAirport()) {
      if (this.validateDate()) {
        this.app.api.searchFlights();
      }
    }
    return false;
  }
}

export default InputControls;

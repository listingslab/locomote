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
      onSelect(item) {
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
      this.validateForm(false);
    }.bind(this));

    $('#input-airport-to').typeahead({
      onSelect(item) {
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
      this.validateForm(false);
    }.bind(this));
  }

  setupDatepicker() {
    // Setup the date picker for the flight
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    $('#flight-date').datetimepicker({
      format: 'YYYY-MM-DD',
      minDate: today
    });
    $('#flight-date').on('dp.change', function (e) {
      this.validateForm(false);
      $('#btn-search-flight').focus();
    }.bind(this));
  }

  setupFormSubmit() {
    // Setup form submission on enter key press and form submit
    document.onkeydown = function pressEnter() {
      if (window.event.keyCode === '13') {
        this.validateForm(true);
        return false;
      }
      return true;
    }.bind(this);
    $('#flight-search-form').on('submit', function () {
      this.validateForm(true);
      return false;
    }.bind(this));
  }

  validateForm(searchIfValid) {
    // Validate form and set or remove error classes then start the search if searchIfValid
    let isValid = true;

    const dateVal = $('#flight-date').val();
    if (dateVal === '') {
      isValid = false;
      $('#flight-date').addClass('input-error');
    } else {
      $('#flight-date').removeClass('input-error');
    }

    const toVal = $('#input-airport-to').val();
    if (toVal[0] === '(' && toVal[4] === ')') {
      $('#input-airport-to').removeClass('input-error');
    } else {
      isValid = false;
      $('#input-airport-to').addClass('input-error');
    }

    const fromVal = $('#input-airport-from').val();
    if (fromVal[0] === '(' && fromVal[4] === ')') {
      $('#input-airport-from').removeClass('input-error');
    } else {
      isValid = false;
      $('#input-airport-from').addClass('input-error');
    }

    if (isValid) {
      if (searchIfValid) {
        this.app.flights.startSearch();
      }
    }
  }
}

export default InputControls;

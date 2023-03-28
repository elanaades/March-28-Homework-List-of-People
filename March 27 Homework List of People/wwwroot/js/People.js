$(() => {
    let index = 0;
    const isValidNum = value => !Number.isNaN(Number(value));

    $("form").on('input', function () {
        ensureFormValidity();
    });

    $("#add-rows").on('click', function () {

        index++;
        let newPersonRow = 
            `<div class="row person-row" style="margin-bottom: 10px;">
        <div class="col-md-4">
          <input class="form-control firstname-field" type="text" name="people[${index}].firstname" placeholder="First Name" />
        </div>
        <div class="col-md-4">
          <input class="form-control lastname-field" type="text" name="people[${index}].lastname" placeholder="Last Name" />
        </div>
        <div class="col-md-4">
          <input class="form-control age-field" type="text" name="people[${index}].age" placeholder="Age" />
        </div>
      </div>`;
        $("#ppl-rows").append(newPersonRow);
        ensureFormValidity();
    });

    function ensureFormValidity() {
        const firstName = $('.firstname-field').val();
        const lastName = $('.lastname-field').val();
        const age = $('.age-field').val();

        const isValid = firstName && lastName && age && isValidNum(age);

        $(".btn-primary").prop('disabled', !isValid);
    }
});
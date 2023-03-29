$(() => {
    let index = 0;

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
        <div class="col-md-3">
          <input class="form-control age-field" type="text" name="people[${index}].age" placeholder="Age" />
        </div>
        <button type="button" class="btn-close" aria-label="Close"></button>
         </div>`;

        $("#ppl-rows").append(newPersonRow);
        ensureFormValidity();
    });

    $("#ppl-rows").on('click', '.btn-close', function () {
        console.log("delete clicked");
        $(this).closest('.person-row').remove();

        renameRows();
    });

    function renameRows() {
        let newIndex = 0;
        $(".person-row").each(function () {
            const firstName = $(this).find('.firstname-field');
            const lastName = $(this).find('.lastname-field');
            const age = $(this).find('.age-field');

            firstName.attr('name', `people[${newIndex}].firstname`);
            lastName.attr('name', `people[${newIndex}].lastname`);
            age.attr('name', `people[${newIndex}].age`);

            newIndex++;
        });
    }
    

    const isValidNum = value => !Number.isNaN(Number(value));

    function ensureFormValidity() {

        $(".person-row").each(function () {
            const firstName = $(this).find('.firstname-field').val();
            const lastName = $(this).find('.lastname-field').val();
            const age = $(this).find('.age-field').val();

            const isValid = firstName && lastName && age && isValidNum(age);
            $(".btn-primary").prop('disabled', !isValid);
        });
    }
});


        //$(".person-row").each(function () {
        //    const firstName = $(this).find('.firstname-field').val();
        //    const lastName = $(this).find('.lastname-field').val();
        //    const age = $(this).find('.age-field').val();


        //});
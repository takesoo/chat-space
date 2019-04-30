$(function () {
  $(".chat-group-form__input").on("keyup", function () {
    var input = $(this).val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function (users) {
      console.log(users);
    })
    .fail(function () {
      alert("error");
    })
  });
})
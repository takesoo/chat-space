$(function () {
  function buildResultHTML(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>
              `
    $("#user-search-result").append(html);
  }

  function resultReset() {
    $("#user-search-result").empty();
  }

  $("#user-search-field").on('keyup', function () {
    var input = $(this).val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function (users) {
      resultReset()
      if (users.length !== 0 && input.length !== 0) {
        users.forEach(function (user) {
          buildResultHTML(user)
        });
      } else {
        resultReset()
      }
    })
    .fail(function () {
      alert("ユーザー検索に失敗しました");
    })
  });

  $(document).on('click', '.chat-group-user__btn--add', function () {
    console.log("ボタンクリック")
  });
})

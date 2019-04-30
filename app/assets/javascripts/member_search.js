$(function () {
  function buildResultHTML(user) {
    var searchedHTML = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
    $("#user-search-result").append(searchedHTML);
  }

  function resultReset() {
    $("#user-search-result").empty();
  }

  function buildAddHTML(user_data) {
    var addMemberHTML = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${user_data.userId}'>
                          <input name='group[user_ids][]' type='hidden' value='${user_data.userId}'>
                          <p class='chat-group-user__name'>${user_data.userName}</p>
                          <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                        </div>`
    $("#chat-group-users").append(addMemberHTML);
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
    var user_data = $(this).data()
    $(this).parent().remove()
    buildAddHTML(user_data)
  });

})

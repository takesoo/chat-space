$(function () {
  function buildMessageHTML(message) {
    if (message.body !== null) {var text = `<p class="lower-message__content">${message.body}</p>`} else {var text = ""}
    if (message.image.url !== null) {var image = `<img class="lower-message__image" src=${message.image.url}></img>`} else {var image = ""}
    var html = `<div class="message">
                  <div class="message__header">
                    <div class="message__user-name">
                      <h2>
                        ${ message.user_name }
                      </h2>
                    </div>
                    <div class="message__date">
                      <p>
                        ${ message.created_at }
                      </p>
                    </div>
                  </div>
                  <div class="message__text">
                    ${ text }
                    ${ image }
                  </div>
                </div>`
    return html
  }
  $("#new_message").on("submit", function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function (messageData) {
      var html = buildMessageHTML(messageData)
      $(".messages").append(html);
      var position = $(".messages")[0].scrollHeight;
      $(".messages").animate({scrollTop:position});
    })
    .fail(function () {
      alert("メッセージの送信に失敗しました");
    })
    .always(function () {
      $(".form__submit").removeAttr("disabled");
    })
  })
})
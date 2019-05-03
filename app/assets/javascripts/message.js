$(function () {
  function buildMessageHTML(message) {
    var text = message.body !== null ?  `<p class="lower-message__content">${message.body}</p>` : ""
    var image = message.image.url !== null ? `<img class="lower-message__image" src=${message.image.url}></img>` :  ""
    var html = `<div class="message" data-id=${message.id}>
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

  var reloadMessages = function() {
    last_message_id = $(".message:last-child").data('id');
    $.ajax({
      url: location.href,
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages){
      console.log(messages)
      var insertHTML = '';
      messages.forEach(function (message) {
        insertHTML = buildMessageHTML(message)
        $(".messages").append(insertHTML);
        var position = $(".messages")[0].scrollHeight;
        $(".messages").animate({scrollTop:position});
      });
    })
    .fail(function(messages){
      console.log('error')
      console.log(messages)
    })
  }
  setInterval(reloadMessages, 5000);
})

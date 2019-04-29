# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,|

### Association
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many :messages


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,unique: true, index: true|
|email|text|null: false,|

### Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :massages


## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: true|
|image|string|null: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


2019/4/20  
メッセージ送信機能実装ブランチ作成

2019/4/26  
testブランチ作成  

2019/4/28
非同期通信実装ブランチ作成

新しいブランチを作成する
jsファイルを作成する
フォームが送信されたら、イベントが発火するようにする
2のイベントが発火したときにAjaxを使用して、messages#createが動くようにする
messages#createでメッセージを保存し、respond_toを使用してHTMLとJSONの場合で処理を分ける
jbuilderを使用して、作成したメッセージをJSON形式で返す
返ってきたJSONをdoneメソッドで受取り、HTMLを作成する
6で作成したHTMLをメッセージ画面の一番下に追加する
HTMLを追加した分、メッセージ画面を下にスクロールする
連続で送信ボタンを押せるようにする
非同期に失敗した場合の処理も準備する

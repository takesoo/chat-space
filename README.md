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
メッセージ非同期通信投稿実装ブランチ作成

2019/4/30
ユーザーインクリメンタルサーチ実装ブランチ作成

2019/5/2
自動更新実装ブランチ作成

class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user
end

mount_uploader :image, ImagesUploader
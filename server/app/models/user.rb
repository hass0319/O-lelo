  class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true, length: { minimum: 4 }
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true ,length: { minimum: 3 }
    validates :password_confirmation, presence: true, length: { minimum: 3 }
end

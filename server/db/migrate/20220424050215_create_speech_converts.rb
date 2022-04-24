class CreateSpeechConverts < ActiveRecord::Migration[7.0]
  def change
    create_table :speech_converts do |t|
      t.string :title
      t.string :text
      t.string :user_id

      t.timestamps
    end
  end
end

class AddScoreToEntries < ActiveRecord::Migration[7.0]
  def change
    add_column :entries, :score, :integer, default: 0
  end
end

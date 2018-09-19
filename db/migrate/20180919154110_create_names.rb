class CreateNames < ActiveRecord::Migration[5.2]
  def change
    create_table :names do |t|
      t.text :description
      t.string :category
      t.float :price
      t.string :version
      t.string :author
      t.string :logo
      t.boolean :featured

      t.timestamps
    end
  end
end

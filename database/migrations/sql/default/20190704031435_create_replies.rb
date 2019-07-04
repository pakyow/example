Pakyow.migration do
  change do
    create_table :replies do
      primary_key :id, type: :bignum
      column :created_at, :datetime
      column :updated_at, :datetime
      column :content, :string
    end
  end
end

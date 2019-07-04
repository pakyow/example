Pakyow.migration do
  change do
    alter_table :replies do
      add_foreign_key :message_id, :messages, type: :bignum
    end
  end
end

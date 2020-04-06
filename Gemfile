source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.6.5"

gem "pakyow", "~> 1.0.0", require: "pakyow/all"

# Easily manage environment variables.
#
gem "dotenv"

group :development do
  # Speed up project boot time.
  #
  gem "bootsnap", require: false

  # Use SQLite3 as the default data source in development.
  #
  gem "sqlite3"
end

group :production do
  gem "pg"
end

release: bundle exec pakyow db:migrate -e production
web: bundle exec pakyow assets:precompile -e production; bundle exec pakyow boot -e production --port=$PORT --host=0.0.0.0

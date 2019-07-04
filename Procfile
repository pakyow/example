release: pakyow db:migrate -e production
web: pakyow assets:precompile -e production; pakyow boot -e production --port=$PORT --host=0.0.0.0

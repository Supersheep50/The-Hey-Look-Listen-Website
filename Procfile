release: python manage.py makemigrations && python manage.py migrate
web: gunicorn hll_api.wsgi
web: serve -s build
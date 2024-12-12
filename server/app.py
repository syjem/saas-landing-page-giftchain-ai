from flask import Flask
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask_cors import CORS

from models import db
from models.schema import Tasks
from configs import Config
from resources.tasks import Task, TasksLists

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)

CORS(app)
migrate = Migrate(app, db)
api = Api(app)


@api.resource('/')
class Sample(Resource):
    def get(self):
        return {
            'endpoints': {
                'task': '/api/task/<int:task_id>',
                'tasks': '/api/tasks'
            }
        }


api.add_resource(TasksLists, '/api/tasks')
api.add_resource(Task, '/api/task/<int:task_id>')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)

from flask import jsonify, request
from flask_restful import Resource, abort
from marshmallow import ValidationError

from models import db
from models.schema import Tasks
from utils.task_schema import TaskSchema


class Task(Resource):

    def get(self, task_id):
        if not task_id:
            abort(400, error='Missing task id.')

        task_lists = Tasks.query.filter_by(id=task_id).first()

        if not task_lists:
            abort(404, error=f"Task with ID {task_id} doesn't exist!")

        task = {
            'title': task_lists.title,
            'status': task_lists.status,
            'priority': task_lists.priority,
            'category': task_lists.category
        }

        return jsonify(task)

    def patch(self, task_id):
        if not task_id:
            abort(400, error='Missing task id.')

        task = Tasks.query.filter_by(id=task_id).first()
        if not task:
            abort(404, error=f"Task with ID {task_id} doesn't exist!")

        data = request.get_json()
        task_schema = TaskSchema()

        try:
            validated_data = task_schema.load(data, partial=True)
        except ValidationError as e:
            abort(400, error="Validation failed", messages=e.messages)

        for field, value in validated_data.items():
            setattr(task, field, value)

        db.session.commit()

        return jsonify(
            {'message': f"Task with ID {task_id} was updated successfully."}
        )

    def delete(self, task_id):
        if not task_id:
            abort(400, error='Missing task id.')

        task = Tasks.query.filter_by(id=task_id).first()

        if not task:
            abort(404, error=f"Task with ID {task_id} doesn't exist!")

        db.session.delete(task)
        db.session.commit()

        return jsonify({'message': 'Task deleted.'})


class TasksLists(Resource):

    def get(self):
        rows = Tasks.query.all()

        tasks = [
            {
                'id': row.id,
                'title': row.title,
                'status': row.status,
                'priority': row.priority,
                'category': row.category
            }
            for row in rows
        ]

        return jsonify(tasks)

    def post(self):
        data = request.get_json()

        task_schema = TaskSchema()

        try:
            validated_data = task_schema.load(data)
        except ValidationError as e:
            abort(400, error="Validation failed", messages=e.messages)

        new_task = Tasks(
            title=validated_data['title'],
            status=validated_data['status'],
            priority=validated_data['priority'],
            category=validated_data['category']
        )

        db.session.add(new_task)
        db.session.commit()

        return jsonify({'message': 'Task added successfully.'})

from models import db
from models.schema import Tasks

tasks = [
    {
        'title': 'Set server environment',
        'status': 'Done',
        'priority': 'High',
        'category': 'Personal',
    },
    {
        'title': 'Set client environment',
        'status': 'Done',
        'priority': 'High',
        'category': 'Personal',
    },
    {
        'title': 'Setup database',
        'status': 'Done',
        'priority': 'High',
        'category': 'Personal',
    }
]


def add_tasks_to_db(tasks):
    for task in tasks:

        new_task = Tasks(
            title=task['title'],
            status=task['status'],
            priority=task['priority'],
            category=task['category']
        )

        db.session.add(new_task)

    db.session.commit()
    print('Tasks added successfully.')


if __name__ == "__main__":
    from app import app

    with app.app_context():
        add_tasks_to_db(tasks)

from sqlalchemy import func
from models import db


class Tasks(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True, unique=True)
    title = db.Column(db.String(128), nullable=False)
    status = db.Column(db.String(16), nullable=False)
    priority = db.Column(db.String(8), nullable=False)
    category = db.Column(db.String(8), nullable=False)
    created_at = db.Column(db.DateTime(), server_default=func.now())

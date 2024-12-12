from marshmallow import fields, validate
from utils import ma


class TaskSchema(ma.Schema):
    def validate_non_empty(s):
        return s.strip() != ""

    title = fields.String(
        required=True,
        validate=validate_non_empty,
        error_messages={
            'validator_failed': 'Title is a required field.'
        }
    )
    status = fields.String(
        required=True,
        validate=[
            validate.OneOf(
                ['Todo', 'In Progress', 'Done'],
                error="Status must be one of: Todo, In Progress, or Done."
            ),
            validate_non_empty
        ],
        error_messages={
            'validator_failed': 'Status is a required field.',
        }
    )
    priority = fields.String(
        required=True,
        validate=[
            validate.OneOf(
                ["Low", "Medium", "High"],
                error="Priority must be one of: Low, Medium, or High."
            ),
            validate_non_empty
        ],
        error_messages={
            'validator_failed': "Priority is a required field.",
        }
    )
    category = fields.String(
        required=True,
        validate=[
            validate.OneOf(
                ['Work', 'Personal'],
                error="Category must be either 'Work' or 'Personal' only."
            ),
            validate_non_empty
        ],
        error_messages={
            'validator_failed': 'Category is a required field.'
        }
    )

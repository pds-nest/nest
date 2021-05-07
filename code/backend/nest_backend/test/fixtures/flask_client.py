import pytest
import uuid
from nest_backend.app import app
from nest_backend.gestione import gen_password
from nest_backend.database import ext
from nest_backend.database.tables import User


@pytest.fixture(scope="package", autouse=True)
def flask_client():
    # Enter testing mode
    app.config["TESTING"] = True

    # Get environment variables
    app.config.from_envvar("FLASK_CONFIG")

    # Initialize database
    with app.app_context():
        # Use unique db schemas for each test session
        uniq_schema = f"test_{uuid.uuid4()}"
        ext.engine.execute(f"""CREATE SCHEMA "{uniq_schema}";""")
        for table in ext.Model.metadata.tables.values():
            table.schema = uniq_schema

        ext.create_all(app=app)
        if not User.query.filter_by(isAdmin=True).all():
            ext.session.add(
                User(email="admin@admin.com", password=gen_password("password"), username="admin", isAdmin=True))
            ext.session.commit()

    # Prepare test client
    with app.test_client(use_cookies=False) as client:
        yield client

    # Teardown schema
    with app.app_context():
        ext.engine.execute(f"""DROP SCHEMA "{uniq_schema}" CASCADE;""")
